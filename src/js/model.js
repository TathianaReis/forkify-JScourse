import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

//IN MODEL.JS WE WILL PUT EVERYTHING THAT HAS TO DO WITH THE DATA

// Put here what is concerning about getting the

//This state object will contain the recipe and into which the controller will then grab and take the recipe out of there
//This will work because there is a live connection between the exports and the imports. When this state object here is going to get updated by loadRecipe
// then that state is also updated in the controller which imports the state. 

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [], //Empty bookmarks array to start but adding a bookmark will simply means to push the recipe here into this array. 
};

//This function will be responsable for fetching the recipe data from our Forkify API
//This funtion is not going to return anything, all it will do is to change our state object
// This loadRecipe is not a pure function as the state value has been manipulated / modified so it has the SIDE EFECT of manipulating a variable (state) that is outside of it

const createRecipeObject  = function(data){
    const {recipe} = data.data; //(The first .data is our variable data.recipe is what we see in the console coming from the api)
    //we are creating a new recipe object here //OBS: NOTE: BEFORE EVERYTHING THAT WAS IN GETJSON WAS HERE

    return {
        id:recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,     
        ...(recipe.key && {key: recipe.key}), // we can not simply use key: recipe.key because we only want to add the key if there exist one. 
        // THe && operator short-circuits: If recipe.key is a false value (do not exist), nothing happpens. The distructuring do nothing
        // If there is a value, the second part is executed and returned! So we can spread that object and put the values in the spread. In this case it would be: 'key: recipe.key'
        // THE ABOVE IS A REALLY NICE TRICK TO CONDITIONALLY ADD PROPERTIES TO AN OBJECT
    };
};

export const loadRecipe = async function(id){
    try{

        //const data = await getJSON(`${API_URL}${id}`);
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
        state.recipe = createRecipeObject(data);
       
        //************************* THIS IS NOW AT createRecipeObject ***************************/
        // const {recipe} = data.data; //(The first .data is our variable data.recipe is what we see in the console coming from the api)
        // //we are creating a new recipe object here //OBS: NOTE: BEFORE EVERYTHING THAT WAS IN GETJSON WAS HERE

        // state.recipe = {
        // id:recipe.id,
        // title: recipe.title,
        // publisher: recipe.publisher,
        // sourceUrl: recipe.source_url,
        // image: recipe.image_url,
        // servings: recipe.servings,
        // cookingTime: recipe.cooking_time,
        // ingredients: recipe.ingredients,   
        
        // }; ******************************************************************

        // We will store in the state so we can check if there is already a recipe with the same ID the bookmarks state. If it is then we will mark in the current recipe that we just loaded from the API as bookmarked set to true. 
        // We will use the some Method to return true or false. Great for a if check like this
        if(state.bookmarks.some(b => b.id === id)) //Check if any - This Method will loop over an array and return true if any of them acutally has to for the condition that we specify here
            state.recipe.bookmarked = true;
        else 
            state.recipe.bookmarked = false;

        console.log(state.recipe);
    }catch(err){
        // Temp error handling. THE ERROR IS coming from getJSON()
        console.error(`Erro dentro do LoadRecipe: ${err}`);
        throw err;
    }
}

/////////// THIS IS WHERE WE CREATED THE DATA THAT WILL THEN BE PUT IN THE STATE! //////////////////////
export const loadSearchResults = async function(query){
    //https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
    try{
        state.search.query = query;
        //const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`)
        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`)
        console.log(data);
        console.log(data.data);
        console.log(data.data.recipes); //this is the array of all objects and now we want to create a new array which contains the new objects where the property names are different

        state.search.results = data.data.recipes.map(rec => { //state.search.results will become the objects below
            return {
                id:rec.id,
                title: rec.title,
                publisher: rec.publisher,                
                image: rec.image_url,
                ...(rec.key && { key: rec.key }), //this will add the litle owner recipe icon for each owned recipe in the search menu on the left hand side. 
            };
        });

        //console.log(state.search.results);
        state.search.page = 1; //Zerando a paginacao. 
    }catch(err){
        console.log(`Erro vindo de loadSearchResults ${err}`);
        throw err;
    }
};

export const getSearchResultsPage = function(page = state.search.page){ 
    
    //const start = (page - 1) * 10; //0 -> If we request page 1 => 1-1=0 * 10 the result is 0
    //const end = page * 10; //9

    //return state.search.results.slice(0, 9) 
    //The .results is the results array from the state object. We will use .slice because we want to return only part of if. In this case 10 recipes. 
    // Remember the .slice Method does not include the last value so it will be ok to pass 0-9 then 10-20...

    state.search.page = page; 
    const start = (page - 1) * state.search.resultsPerPage; //0
    const end = page * state.search.resultsPerPage; //9

    return state.search.results.slice(start, end) 
}

export const updateServings = function(newServings){ //THis function reach into the state, in particular into the recipe ingredients then change the quantity in each ingredient  
    state.recipe.ingredients.forEach(ing => { //We decided we are not going to create a new array. Instead we will use side effect as we are going to mofificate
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
        //new quantity = oldQuantity * newServings / oldServings // 2 * 8 / 4 = 4
    });

    //updating the servigns
    state.recipe.servings = newServings;
}

//Chapter 305 - Storing Bookmarks with Local Storage - Whenever we delete or add a bookmark we need to persist that data
//We dont need to export the function below because we will call it from addBookmark & deleteBookmark functions
//We can see that by going to the browser console Storage -> Local Storage
const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
  };
  


export const addBookmark = function(recipe){

    //Add bookmark
    state.bookmarks.push(recipe);

    //Mark current recipe as bookmarked. Current recipe is state.recipe.id
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true; //here we are setting a new properti to state recipe above.
    
    persistBookmarks();
};

export const deleteBookmark = function(id){ //This is the 
    //Delete bookmark
    const index = state.bookmarks.findIndex(el => el.id === id) //where current bookmark is equal to the id we are passing - The one that is true we will take below and delete from the array
    state.bookmarks.splice(index, 1) //to delete something - Here we are using the element where is actually located. And how many items we want to delete

    //Mark current recipe as NOT bookmarked. Current recipe is state.recipe.id
    if(id === state.recipe.id) state.recipe.bookmarked = false; //here we are setting a new property to state recipe above.
    
    persistBookmarks();
}


const init = function(){ //Se ja existir bookmarks no local storage no pageLoad o state recebera o que ja tem la
    const storage = localStorage.getItem('bookmarks'); //.getItem method from the localStorage
    if(storage) state.bookmarks = JSON.parse(storage); //.parse = convert the string back to an object
};

init();

const clearBookmarks = function(){
    localStorage.clear('bookmarks');
}

export const uploadRecipe = async function (newRecipe) {
    try {
      
      //THe first task of this function will be to take the raw input data and transform it into the same format as the data that we also get our of the API  
      const ingredients = Object.entries(newRecipe) //newRecipe is an object and Object.entries() will convert the object into an array
        .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '') //.filter will only filter the properties that are called 1, 2, 3, until 6. In this array each element is an entry. And the second element should not be an empty string
        .map(ing => {
          const ingArr = ing[1].split(',').map(el => el.trim()); //Here we are splitting the string into multiple parts, wich will then return an array and then we will loop over that array and trim each of the elements 
          // const ingArr = ing[1].replaceAll(' ', '').split(','); //The replace all in this case was wrong pq estava removendo todos os espacos e juntando as palavras
          if (ingArr.length !== 3)
            throw new Error(
              'Wrong ingredient fromat! Please use the correct format :)'
            );
  
          const [quantity, unit, description] = ingArr; //Destructuring an array
  
          return { quantity: quantity ? +quantity : null, unit, description };
        });
  
      //This will be the object that we wanted to upload  
      const recipe = {
        title: newRecipe.title,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        publisher: newRecipe.publisher,
        cooking_time: +newRecipe.cookingTime,
        servings: +newRecipe.servings,
        ingredients, //This is the ingredients array above
      };
      
      console.log(recipe);
      //sendJSON(`${API_URL}`);

      const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
      state.recipe = createRecipeObject(data);
      addBookmark(state.recipe);
    } catch (err) {
      throw err;
    }
  };

console.log(state.bookmarks);
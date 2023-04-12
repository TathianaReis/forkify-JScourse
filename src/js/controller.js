
console.log('SASS is a beeer way of writting CSS which has some nice additional features which makes writing CSS in a large scale application a lot easier. Browsers dont understand Sass so it has to be converted to CSS. Parcel will gonna do it for us')
console.log("Start:index.html is our entry point/ We added a build script which the command that we are going to run in the end once we're already building the application. The entry point can also be a JS file, also could be in a different folder and we can specify all that in the parcel command ")
console.log('First we have to INITIALIZE a new project with Parcel: Terminal -> npm init')
console.log("In order to run Parcel we need to INSTALLED it. Terminal npm i parcel -D (dev dependency). This command simply instal the latest version that is available on npm for parcel")
console.log("To be able to install a better version - like the next version - we can use Terminal: npm i parcel@next -D")
console.log("RUN a Parcel: Terminal: npm run start ")
console.log("To install Saas. Terminal: npm install sass@1.26.10")
console.log("Everything we develop is in the src folder. Only what we see in the browser is comiing from the dist folder (distribuition). That is the whole logic of having a module bundler: It takes our raw source code and compiles it into a nice package (in the dist) that is ready to ship to browsers.")
console.log("To add Polyfills for ES6 features to our codebase, to add this special packages:  npm i core-js regenerator-runtime. Now we import them at the top with: import 'core-js/stable' . This will make sure old browsers are still supported by our application ")
console.log("This is for polyfilling ascync/await: regenerator-runtime/runtime. We could cherry pick but here we are importing everything")
console.log("OBS: We can use npm to calculate Fraction. We can use GOOGLE to search npm packages for example npm fractional. You can see on npmjs.com. You can installed on terminal: npm install fractional. Then we need to import (we will import inside recipeView - import fractional from 'fractional') ")

import * as model from './model.js';
import{MODAL_CLOSE_SEC} from './config.js';
import recipeView from './views/recipeView.js'; //Importing the object from RecipeVIew class
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; //polyfilling everything else
import 'regenerator-runtime/runtime'; //polyfilling async / await
import { async } from 'regenerator-runtime';

//This is coming from Parcel. 
if(module.hot){
    module.hot.accept();
}
 
//const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// to initialize a new project with Parcel: Terminal -> npm init

// Get recipe
//https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

const controlRecipes = async function(){
  try{

    //resultsView.renderSpinner();

    const id = window.location.hash.slice(1); //.location significa the entire URL - The .slice is to remove the # character
    //console.log(id);

    if(!id) return; //Guard clouse caso faca o loading da pagina assim: http://localhost:1234/

    recipeView.renderSpinner(); //This will automatically render the spinner on the recipeView

    //0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    //debugger;
    bookmarksView.update(model.state.bookmarks);
    
    // 2) Loading Recipe
    await model.loadRecipe(id); //As this loadRecipe is a async function it will return a Promise so here we have to await that promise in order to move on in the next step here 
    //const {recipe} = model.state;
    //console.log(model.state);
    //console.log(model.state.recipe);
        
    // 3) Rendering Recipe
    recipeView.render(model.state.recipe); //model.state.recipe is coming from loadRecipe()
    //If we had exported the whole class we would have to do something like:
    // const recipeView = new RecipeView(model.state.recipe)

 
  }catch(err){    
    recipeView.renderError(`${err} erro dentro do Control Recipes`);
    console.error(err); //Para ver no console qual o erro
  }
};

//controlRecipes();

//Isto aqui e' qndo clicamos no link da recipe a esquerda
//window.addEventListener('hashchange', controlRecipes);
//Isto aqui e' para qndo loading the page caso copiem o link direto no browser http://localhost:1234/#5ed6604691c37cdc054bd0c0
//window.addEventListener('load', controlRecipes);





//Search for recipes: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>

//////////////////////////////////////////////////////////////////////////////////////
console.log('////////////////////////// CHAPTER 294 - Event Handlers in MVC: Publisher-Subcriber Pattern //////////////////////////////////  ')
const str2 = `Lets now learn how we can listen for events and also handle events in our MVC Architecture by using something called Publisher-Subscriber pattern.
we are listening for the events  hashchange and load here in the controller.js. BUT EVERYTHING that is related to DOM Manipulation Should be inside the View which is the USER INTERFACE
The problem here is that the dandler function that we used "controlRecipes()" is inside the controller.js
The solution is to use the Publisher Subscriber Pattern which is standard solutions to certain kinds of problems.
In the PSP we have a publisher which is some code that knows when to react! In this case is going to be the addHandlerRender() function - PUBLISHER - because it will contain the addEventListener method and therefore will know when to react to the event.
Now in the other hand we have a SUBSCRIBER which is code that actually wants to react. So, controlRecibes() - SUBSCRIBER - that should be executed when the event happens.   
Remember that the PUBLISHER doesnt know yet the SUBSCRIBER even exists because the SUBSCRIBER is in the controller that the view CAN NOT access 
SOLUTION: We can Subscribe to the Publisher by passing into subscriber function as an argument. In Practice means: as soon as the Program Loads, the init function is called which in turn immediately calls the addHandlerRender() from the view. That is possible because the Controller.js import Both the View.js and the Model.js
As we call addHanddlerRender we pass in our controlRecipes() as an argument. Essencially we SUBSCRIBE controlRecipes to addHandlerRender. Connecting the functions like that. 
This will allow to keep the handler in the controller and the listener in the view. 

OBS: REMEMBER IN THE CONSOLE.LOG IN THE BROWSER WHEN THE COLOUR OF WHAT IS WRITTEN IS BLUE MEANS ITS A NUMBER AND BLACK STRING
` 
console.log(str2)

///////////////////////////////////////////////////////////
const controlSearchResults = async function(){
  try{

    resultsView.renderSpinner();
    console.log(resultsView);
    
    //1) Get Search Query
    const query = searchView.getQuery();
    if(!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3) Render Results
    console.log(model.state.search.results);
   // resultsView.render(model.state.search.results); //Here we are passing whatever we wanted to be rendered
   resultsView.render(model.getSearchResultsPage(1)); 

   //4) Render initial pagination buttons
   paginationView.render(model.state.search);


  }catch(err){
    console.log(err);
  }
};

// THis is the controller that will be executed whenever a click on the pagination happens
const controlPagination = function(goToPage){
   //1) Render NEW Results  
   resultsView.render(model.getSearchResultsPage(goToPage)); //It will change the value of page from the model.js getSearchResultsPage

   //2) Render NEW pagination buttons
   paginationView.render(model.state.search);

  

}
///////////////////////////////////////////////////////////////

//////////////// INCREASE OR DECREASE - + THE SERVINS BUTTONS ON THE WEBSITE
const controlServings = function(newServings){
    //Update the recipe servings (in state) has to do with the model. So in the model we would like to have some Method which does that for us. 
    // We dont want to manipulate data directly here in the controller. Instead we delegate to the Model which is all about the data
    model.updateServings(newServings)

    //Update the recipe view -- The difference entre update e render is that update Method will only update text and attributes in the DOM without rerender the entire view 
    //recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
}

/////////////////////////////////////////////////////////

const controlAddBookmark = function(){ //OBS: Is possible that we read the bookmarked property right at the beginning because we add that to all the recipes  that are ever loaded right at the beginning in the model.js(line 52 loadRecipe())
 
  //1) Add/Remove bookmark 
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe); //adding a bookmark with the current recipe
  else model.deleteBookmark(model.state.recipe.id); //Delete bookmark

  //2) Update Recipe View
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  //3) Render bookmarks
  bookmarksView.render(model.state.bookmarks)
  // In the state we didn't only store the IDs of the bookmarks, but we stored the entire data about the bookmarks
  // So we can nicely display them in this list -- The result list on the left side
}

//Ao inves de chamar varios codigos de handler como acima, faremos um ARRAY de event handler
//['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

//instead we will use

//Esta funcao aqui e' para quando ja existem bookmarks que estao armazenados no storage.
//Entao no load da pagina vamos chama-la e se quem esta' chamando isto e' la no bookmarksView.js
//Teve um bug antes de criar isto pq o app tava chamando o update bookmark e com isso o app nao tera nada para update
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {// This function will recive the new recipe data coming from addRecipeView. Usually our recipe data is always an object and not an array of entries like this. 
  try {
    console.log(newRecipe);

    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message to be displayed before closing the window
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks) //This will make it render the new recipe in the bookmarks menu

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`) //This will allow us to change the URL of the browser with the new recipe ID that we have just created WITHOUT reloading the page. 
    // .pushState takes 3 arguments 1st is the state, 2nd title, 3rd the URL
    // the history API also allow us to use back and forward like the buttons in the browser: window.history.back()

    // Close form window
    setTimeout(function(){
      addRecipeView.toggleWindow(); //Para fechar a janela do formulario
    }, MODAL_CLOSE_SEC * 1000);

  } catch (err) { //We needed to use the try catch here in case something goes wrong with uploadRecipe method
    console.error('Erro vindo do controlAddRecipe', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function(){ 
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
 console.log('blabla')
}

init();
/////////////////////////////////////////////////////////
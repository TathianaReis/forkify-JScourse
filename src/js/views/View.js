
// The View class will be a parent class for all the other view classes (Recipe, Result, Search views...)
// Because Search and Results for example will share the same Methods - We will be able to reuse the Methods in all the views we will.
// Basically on all the objects that are created through all the view classess 

//This time we are exporting the class itself because we are not going to create any instance of this view we are only use as a parent class of these child views

import icons from 'url:../../img/icons.svg' // Parcel 2 //Este path e' relativo ao controler.js location

export default class View{

    _data;

/**
     * Render the received object to the DOM  --> THis is the description of the function
     * @param {Object | Object[]} data The data to be rendered. (e.g recipe) --> The bar means OR simble. Dentro do {} estamos informando que estamos esperando um Objct Ou um Array of Object. 'data' is the name of the parameter. E por ultimo short description of the parameter
     * @param {boolean} [render = true] If false, create markup string instead of rendering to the DOM --> here the type is a boolean. O resto e' a descricao. 
     * @returns {undefined | string} A markup string is returned if render=false --> What the function returns (if returns anything) OR it might also be a string
     * @this {Objct} View instance --> We can also define this keyword. Here the this keyword points to the View object itself 
     * @author Tathiana Reis
     * @todo Finish implementation
   */

    render(data, render = true){
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); //This check here is not enough because we do get data. But it is an empty array. This works for Underfined or Null

        this._data = data; //From the controler object we passed the ajax recipe data recipeView.render(model.state.recipe);
        const markup = this._generateMarkup();

        if(!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data){

        //We are removing this here because when we were loading the url with a recipe id the array was empty and the error was showing on the left hand side
        //if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); //This check here is not enough because we do get data. But it is an empty array. This works for Underfined or Null

        this._data = data; //From the controler object we passed the ajax recipe data recipeView.render(model.state.recipe);
        const newMarkup = this._generateMarkup(); //Here we will create a new markup but not render it. Instead we will generate this markup and then compare with that new HTML to the current HTML then only change text and attributes that actually have changed

        const newDOM = document.createRange().createContextualFragment(newMarkup); //the create contextual fragment is converting the string into a real DOM Node objects 
        // The newDOM will become like a big object, which is like a virtual DOM  which lives in our memory not on a html page
        const newElements = Array.from(newDOM.querySelectorAll('*')); //Array.from transform to a Array
        console.log(newElements);

        //Now, getting all the current elements that are in our page
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
       // console.log(curElements);
        //console.log(newElements);

        newElements.forEach((newEl, i) =>{ //We need to loop the 2 arrays at the same time and for that we need the index 
            const curEl = curElements[i];
            
            //Updates changed TEXT
            if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') { //newEl.firstCHild vai pegar somente a text que e' a child do elemento. Por exemplo <p>5</p> o numero 5 e' o first child to p
                curEl.textContent = newEl.textContent;
                console.log(curEl, newEl.isEqualNode(curEl));
            }

            //Updates changed ATTRIBUTES of the html
            if(!newEl.isEqualNode(curEl)){ //We are replacing all the attributes in the current element by the attributes that are coming from the new Element
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
            }

        });
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    renderSpinner(){ //This is a Public method so that the controller can then call this method
        const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> 
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage){
        const markup = `
        <div class="error">
             <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
             </div>
            <p>${message}</p>
         </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._successMessage){
        const markup = `
        <div class="message">
             <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
             </div>
            <p>${message}</p>
         </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


}



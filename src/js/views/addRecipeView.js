import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');  
  _successMessage = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  //This conscructor Method is being created as will need to run both functions as soon as the objects are created
  constructor() {
    super(); //super() is here because we are on a child class and only after that we can use the 'this.' keyword
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden'); //Toggle will add to class if its not there and remove the class when it is already there
    this._window.classList.toggle('hidden');
  }

  //    *********************       IMPORTANTE   ************************ ///
  //In order to show and hide this window the controller.js wont interfere at all. 
  //But we still need to import the addRecipeView because otherwise our main script sort of controller will never execute this file

  _addHandlerShowWindow() { //Listening for the events / We are also calling addHandlerSomething to be consistent
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)); //Here we are selecting the button
    
    //this._btnOpen.addEventListener('click', function(){ //What we want to do when we click the button: We want to take the overlay into window and remove the hidden class
      //  this._overlay.classList.toggle('hidden');
    //});
}

  _addHandlerHideWindow() { //Listening for the events
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  //Form Submition
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      // Here we are spreading FormData(this) object into an array. Otherwise we are not able to use this object. 
      // Now this array will containg all the fields with all the values of the form. 
      const dataArr = [...new FormData(this)]; //FormData is a MODERN browser API that we can now make use of. Inside de FormData() constructor we have to pass in an element that is a form. In this case is the this keyword
      const data = Object.fromEntries(dataArr); //Converting the data into an Object -- See controller.js -- THis fromEntries Method takes an array of entries and convert it to an object. This  is the opposite of the entries method that is available on Arrays
      handler(data);

      //EXPLANATION: What we will do with this data? This data is what we want to use upload to the API.
      // and that acion of uploading the data is going to be just another API call. The API calls happen on model.js.
      // Therefore we need a way of getting this data to the model. We will need to create a controller function which will then be the handler of this event. 
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();

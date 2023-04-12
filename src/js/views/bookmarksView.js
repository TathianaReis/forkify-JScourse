import View from './View.js';
import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg' // Parcel 2 //Este path e' relativo ao controler.js location

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it';
    _message = '';

    //Este method aqui esta sendo criado para quando iniciarmos a pagina que ja tiver recipe no storage para que possamos handle
    addHandlerRender(handler){
        window.addEventListener('load', handler);
    }

    _generateMarkup(){ //All the child Views should have this method because in the View the render Method relies on that!
        console.log(this._data);
         //return this._data.map(this._generateMarkupPreview).join('');
         return this._data.map(bookmark => previewView.render(bookmark, false)).join(''); 
    }

    ////////////////// ************ THIS WAS HERE BEFORE CREATING previewView.js ************************ //////////////////
    // We will now use the previewView kind of as a child view of the BookmarksView and of the resultsView

    // _generateMarkupPreview(result){ //All the child Views should have this method because in the View the render Method relies on that!
      
    //     const id = window.location.hash.slice(1); //We want to take everything except the first element
    //     console.log(`TEST: ${id}`)
        
    //     return `
    //             <li class="preview">
    //                 <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href=#${result.id}>
    //                     <figure class="preview__fig">
    //                         <img src="${result.img}" alt="${result.title}" />
    //                     </figure>
    //                     <div class="preview__data">
    //                         <h4 class="preview__title">${result.title}</h4>
    //                         <p class="preview__publisher">${result.publisher}</p>
    //                     </div>
    //                 </a>
    //              </li>    
    //     `;
    // }

}

export default new BookmarksView();
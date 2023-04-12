import View from './View.js';
import icons from 'url:../../img/icons.svg' // Parcel 2 //Este path e' relativo ao controler.js location

//This View only generates one preview element like the <li class="preview"> below
//THis PreviewView will only generate a markup for one of these preview elements

class PreviewView extends View {
    _parentElement = '';  

    _generateMarkup(){ //All the child Views should have this method because in the View the render Method relies on that!
      
        const id = window.location.hash.slice(1); //We want to take everything except the first element
        console.log(`TEST: ${id}`)
        
        return `
            <li class="preview">
                <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
                    <figure class="preview__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
                            <svg>
                             <use href="${icons}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        `;
    }

}

export default new PreviewView();


/////// EXPLICACAO ////////////////////
// PreviewView vai ser o parent de resultsView e bookmarksView

// PreviewView e' o lado esquerdo da pagina com os links de cada receita do search



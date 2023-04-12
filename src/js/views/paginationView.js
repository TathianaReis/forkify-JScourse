import View from './View.js';
import icons from 'url:../../img/icons.svg' // Parcel 2 //Este path e' relativo ao controler.js location

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    // We need to use the publisher subscriber pattern like in the recipeView. 
    // That works by creating a publisher, which is basically a function which is the one listening for the event which receives a handler function 
    // Which in our case is going to be a controller that lives in the Controller.js.So we will be able to listen for the event here in the paginationView while at the same time
    // we will be able to handle that event from the COntroller. 
    // Here we are going to use the event delegation because there are going to be two buttons and we are going to add the eventListener to the common parent element

    addHandlerClick(handdler){
        this._parentElement.addEventListener('click', function(e){ //Here we have a function because we cant immediately call the handler because first we need to figure out which button was actually clicked based on the event 
            const btn = e.target.closest('.btn--inline') ;// .target is the clicked element and closest which is similar to queryselector but instead for searching UP in the tree - lOOKING FOR PARENTS
            if(!btn) return;

            const goToPage = +btn.dataset.goto; //From the html below data-goto. The + is converting the btn.dataset.goto from string to number!
           
            handdler(goToPage);
        })
    }

    _generateMarkup(){ //The _data in the View.js is now the entire search results object coming from the controller.js => line code:  paginationView.render(model.state.search);
       
        //OBS: In order to know if we are on page one and there are other pages, we need to know how many pages there are. 
       // How do we know the number of pages? We need the number of results dived by the number of results per page 
       // The number of results comes from this._data.results
       
       //Math.ceil to round the number
       const curPage = this._data.page;
       const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
       console.log(numPages);

        // Page 1, and there are other pages
        if(curPage === 1 && numPages > 1){
            return `
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `
        }
        
        // Last Page - Means the current page is the same as the number of pages
        if(curPage === numPages && numPages > 1) {
            return `
                    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                        </svg>
                        <span>${curPage - 1}</span>
                    </button>
            ` //Go to previous Page: Current Page - 1
        }       

        // Other page
        if(curPage < numPages){
            return `
                    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                        </svg>
                        <span>${curPage - 1}</span>
                    </button>
                    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                        <span>${curPage + 1}</span>
                        <svg class="search__icon">
                            <use href="${icons}#icon-arrow-right"></use>
                        </svg>
                    </button>
            `; 
        }

        // Page1, and there are NOT other pages
        return '';

    }
}

//Exporting this View so we can import it into the controller

export default new PaginationView();

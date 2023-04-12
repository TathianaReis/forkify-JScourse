class SearchView{
    #parentEl = document.querySelector('.search');

    //All we want from this class is to get the query and eventually also listen for the click event on the button

    getQuery(){
        const query = this.#parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput(){
        return this.#parentEl.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handdler){ //This search Method here is going to be the Publisher and the control searchResults function is going to be the Subscriber
        this.#parentEl.addEventListener('submit', function(e){
            e.preventDefault();
            handdler();
        }); //We are taking the parent element of the button (the entire form) because there we can listen for the submit event. No matter if the user clicks in the submit button or hits Enter while typing the query
        //we cant call the handler immediately because when we submit a form we need to first prevent the default action because otherwise the page is going to reload
    }
}

export default new SearchView(); // Not exporting the class BUT exporting an Object that was created by this class.


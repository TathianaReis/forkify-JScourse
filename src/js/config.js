// In the config.js we should put all the variables that should be constants and should be reused across the project.
// The Goal of having this file with all these variables is that will allow us to easily configure our project by somply changing some of the data that is this configuration file
// THE ONLY VARIABLES WE WANT HERE ARE THE ONES THAT ARE RESPONSABLE OF DEFINING SOME IMPORTANT DATA ABT THE APPLICATION ITSELF
// For example the API URL we will be resused in multiple places accross our project. I.e: Getting search data and also for uploading a recipe to the server

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/'; //We used uppercase because this is a constant that will never change. This is a common practice, specially in a config file like this
export const TIMEOUT_SEC = 30;
export const RES_PER_PAGE = 10;
export const KEY = '073bd98e-9d02-4609-9203-77869f840c83';
export const MODAL_CLOSE_SEC = 2.5 //Time in seconds


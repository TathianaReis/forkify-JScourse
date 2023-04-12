import {async} from 'regenerator-runtime';
import {TIMEOUT_SEC} from './config.js';

// The goal of this file is to contain a couple of functions that we reuse over and over in our project

// For example create a function which will get JSON. A function which encapsulates all the json await async  and also some of the error handling.

//What this function does is that will return a new promise which will reject after a certain number of seconds 
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url){
    try{
        //using the fetch function here will return a promise. Since we are in a async function we can await that promise! Async function runs in the background and dont block our main thread of execution here
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]); //The TIMEOUT_SEC is configured in the config.js file

        //Explanation of the timeout and Promise.race above:
        //We used the timeout function, So after that time has passed, the new Promise is rejected with the newly created error message. 
        // So as soon as any of the Promises in the Promise.race rejects or fulfills,  then that promise will become the winner
        // the winner in this case is our Rejected timeout(), which will then trigger the catch block below. Which will get thrown to loadRecipe() 

        //Once we have the result we need to convert that to JSON. So as always we create a data variable and await the response .JSON
        const data = await res.json(); //The json method is available on all the response objects! And a response object is what the fetch function above returns. We can call JSON on that response which returns another promise which we then have to await again! In the end we will get our data stored to the data variable

        if(!res.ok) throw new Error (`${data.message} (${res.status})`)
        //console.log(res, data);

        return data; //this data here is going to be the resolved value of the Promise that the getJSON  Function returns! OBS: when was everything inside model.js loadRecipe the return data line of code didnt exist. 
    } catch(err){
        //Here we are going to rethrow the error so when loadRecipe() call getJSON the error goes to there so we can handle it at loadRecipe()!
        throw err; //So now with this, the promise that is being returned from getJSON will acutally Reject the PROMISE
    }
   
}

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, { //here beside the url we will pass an object with some options like below. 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //with this we tell the API that the data we are going to send is going to be in JSON format
      },
      body: JSON.stringify(uploadData), // the data we want to send. The body should be in JSON
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

//here we are combining the two functions above the send and get JSON
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
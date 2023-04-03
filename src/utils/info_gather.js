//use info from the data folder to get the data from the google spreadsheet
const tournaments = require('../data/tournaments.json');
const fetch = require('node-fetch');

//console.log(tournaments);

//this file contains the functions that gather information to be put into the data folder
//get the url foreacch tournament that is still in the registration stage
const getRegURL = (data) => {
    const regURL = [];
    data.forEach((tour) => {
        if (tour.status === "Registration") {
            regURL.push(tour.registration_url);
        }
    });
    return regURL;
}
//function to get all the data from a google pages spreadsheet eg:https://docs.google.com/spreadsheets/d/1S-K6slgqIPrvtJ5Y5Hv1vXceNXrcpnt912WGeVLoE5M/edit?usp=sharing
//this function is used to get the data from the google spreadsheet
//first convert the url to one that gets the data
//the data is then returned as a json object
const getGoogleSheetData = async (url) => {
    //convert the url to one that gets the data
    const dataURL = url.replace("/edit?usp=sharing", "/export?format=csv");
    //get the data
    const response = await fetch(dataURL);
    const data = await response.text();
    //convert the data to a json object
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    const json = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(",");
        const obj = {};
        for (let j = 0; j < row.length; j++) {
            obj[headers[j]] = row[j];
        }
        json.push(obj);
    }
    //loop over all keys and values and remove the \r
    for (let i = 0; i < json.length; i++) {
        for (let key in json[i]) {
            json[i][key] = json[i][key].replace("\r", "");
        }
    }

    //remove the \r from the keys as well
    for (let i = 0; i < headers.length; i++) {
        headers[i] = headers[i].replace("\r", "");
    }
    //console.log(json);
    return json;
}

const getRegData = async (url) => {
    const regData = await getGoogleSheetData(url);
    return regData;
}

//console.log(getRegData(getRegURL(tournaments)[0]))
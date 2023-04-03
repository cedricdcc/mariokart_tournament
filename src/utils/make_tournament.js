//this file will create a tournament object and append it to the tournaments array of ../data/tournaments.json
//this file will also create the corresponding match objects and append them to the matches array of ../data/matches.json

const fs = require("fs");
const path = require("path");
const tournaments_data = require("../data/tournaments.json");
const matches_data = require("../data/matches.json");
const { getRegData, getGoogleSheetsData } = require("./info_gather");

for(tournament of tournaments_data){
    if(tournament.status === "Registration"){
      console.log(tournament.name);
      //use getRegData to get the data from the google spreadsheet
      getRegData(tournament.registration_url).then((data) => {
        console.log(data);
      });
    }
}
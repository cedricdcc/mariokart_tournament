//this file will create a tournament object and append it to the tournaments array of ../data/tournaments.json
//this file will also create the corresponding match objects and append them to the matches array of ../data/matches.json

const fs = require("fs");
const path = require("path");
const tournaments_data = require("../data/tournaments.json");
const matches_data = require("../data/matches.json");
const { getRegData, getGoogleSheetsData } = require("./info_gather");

//loop over the tournaments array and check the status of each tournament
//if the status is registration then check if the date is passed already
//if the date is passed then change the status to "In progress" and gather all the data from the google spreadsheet

const checkRegStatus = async(data) => {
  const tournaments = data.tournaments;
  const matches = data.matches;
  const date = new Date();
  tournaments.forEach((tour) => {
    if (tour.status === "Registration") {
      console.log(tour);
      //check if the date is passed
      //the date is stored in the format "2021-07-31"
      //so split the string at the "-" and convert the string to a number
      const tourDate = tour.date.split("-");
      const tourYear = Number(tourDate[0]);
      const tourMonth = Number(tourDate[1]);
      const tourDay = Number(tourDate[2]);
      //get current date in YYYY-MM-DD format
      const currentDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      //split the string at the "-" and convert the string to a number
      const currentDateSplit = currentDate.split("-");
      const currentYear = Number(currentDateSplit[0]);
      const currentMonth = Number(currentDateSplit[1]);
      const currentDay = Number(currentDateSplit[2]);
      //check if the date is passed
      if (tourYear == currentYear) {
        if (tourMonth == currentMonth) {
          if (tourDay > currentDay) {
            //change the status to "In progress"
            tour.status = "In progress";
            //get the data from the google spreadsheet
            getGoogleSheetsData(tour.registration_url).then((data) => {
              console.log(data);
              //create the matches
              createMatches(data, tour.id);
            });
          }
        } else if (tourMonth > currentMonth) {
          //change the status to "In progress"
          console.log("Changing status to in progress");
          tour.status = "In progress";
          //get the data from the google spreadsheet
          getGoogleSheetsData(tour.registration_url).then((data) => {
            console.log(data);
            //create the matches
            createMatches(data, tour.id);
          });
        }
      } else if (tourYear > currentYear) {
        //change the status to "In progress"
        tour.status = "In progress";
        //get the data from the google spreadsheet
        getGoogleSheetsData(tour.registration_url).then((data) => {
          //create the matches
          console.log(data);
          createMatches(data, tour.id);
        });
      }
    }
  });
};

//create the matches
const createMatches = (data, tour_id) => {
    console.log("Creating matches");
    let new_matches = [];
    let players = [];
    //loop over the data and push data["name \r"] into the players array
    data.forEach((player) => {
        players.push(player["name \r"]);
    });
    console.log(players);
    //first check how many people are in the tournament
    //per 4 people there will be 1 match
    //so if there are 8 people then there will be 2 matches
    //the tournament will be in group stages first followed by the knockout stages with double elimination
    //so the first matches will be in the group stages
    
    const ngroups = Math.ceil(data.length / 4);
    //the knockout matches will be formed by taking the first seed against the last seed, the second seed against the second last seed etc

    //create the group stage matches
    for(let i = 0; i < ngroups; i++){
        const match = {
            "id": randomUUID() ,
            "tournamentID": tour_id,
            "currentStage": "Group Stage",
            "status": "TBP",
            "date": "TBP",
            "rankings": [
                {
                    "player": data[i * 4],
                    "points": "TBP"
                },
                {
                    "player": data[i * 4 + 1],
                    "points": "TBP"
                },
                {
                    "player": data[i * 4 + 2],
                    "points": "TBP"
                },
                {
                    "player": data[i * 4 + 3],
                    "points": "TBP"
                }
            ],
            tournamentName: "Random"
        }
        new_matches.push(match);
    }
    console.log(new_matches);
    }

    const randomUUID = () => {
        return Math.floor(Math.random() * 100000000000);
    }

//run the function
checkRegStatus({ tournaments: tournaments_data, matches: matches_data });


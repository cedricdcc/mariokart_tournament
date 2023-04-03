//this file will contain all the util functions that handle a tournament object
import fs from "fs";
import tourdata from "../data/tournaments.json";

//function here that will check if the given tournament object is ready to be started
//if it is ready to be started then it will change the status to "In Progress"
//and it will change the date to the start date
//and it will change the currentStage to the first stage
export const checkIfTournamentReady = (tournament) => {
    //if the tournament is in registration and the current date is the same as the start date
    //then change the status to "In Progress"
    //and change the date to the start date
    //and change the currentStage to the first stage
    if (tournament.status === "Registration" && tournament.date === tournament.start_date) {
        tournament.status = "In Progress";
        tournament.date = tournament.start_date;
        tournament.currentStage = tournament.stages[0];

        //open the tournaments.json file and change the tournament object
        //then save the file
        fs.readFile("./data/tournaments.json", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let tournaments = JSON.parse(data);
                for (let i = 0; i < tournaments.length; i++) {
                    if (tournaments[i].id === tournament.id) {
                        tournaments[i] = tournament;
                        break;
                    }
                }
                fs.writeFile("./data/tournaments.json", JSON.stringify(tournaments), "utf8", (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
}
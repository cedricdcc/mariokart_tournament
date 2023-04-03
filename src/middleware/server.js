//this file will be the express api that will enable a admin user to manage the tournaments and matches
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const tournaments_data = require("../data/tournaments.json");
const matches_data = require("../data/matches.json");

const app = express();
app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.use(express.json());
app.use("/", router);

//enable cors to allow requests from other domains
const cors = require("cors");
app.use(cors());


//this function will return the tournament object with the given id
//if no tournament object is found then it will return null
const getTournamentById = (id) => {
    for (let i = 0; i < tournaments_data.length; i++) {
        let tournament = tournaments_data[i];
        if (tournament.id === id) {
            return tournament;
        }
    }
    return null;
};

//app get path with tournament id in the url will return the tournament object with the given id
//if no tournament object is found then it will return null
router.get("/tournament/:id", (req, res) => {
    for (let i = 0; i < tournaments_data.length; i++) {
        let tournament = tournaments_data[i];
        checkTournamentRegistrationClose(tournament);
    }
    let tournament = getTournamentById(req.params.id);
    res.send(tournament);
});

//this function will return the tournament object with the given id
//if no tournament object is found then it will return null
const checkTournamentRegistrationClose = (tournament) => {
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
                        return null
                    }
                });
            }
        });
    }
    return null;
}

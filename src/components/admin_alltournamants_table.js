//component that will just show a table of all tournaments
import AdminTournamentSummary from "./admin_tournament_summary";
import { useState, useEffect } from "react";
import axios from "axios";

//for the last item in the tournament summary add a class of last-item
const AdminAlltournamentstable = (props) => {

  console.log(props);

  useEffect(() => {
    for (let tournament of props.data) {
      if (tournament.status === "Registration") {
        //do an axios request to localhost:3001/api/tournaments/:id
        axios.get(`http://localhost:3001/api/tournaments/${tournament.id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            }
        );
      }
    }
    }, []);


  return (
    <div class="gaming-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4><em>All</em> Tournaments</h4>
        </div>
        {
          props.data.map((tournament, index) => {
            if (index === props.data.length - 1) {
              return (
                <AdminTournamentSummary data={tournament} class="item last-item" />
              )
            } else {
              return (
                <AdminTournamentSummary data={tournament} class="item"/>
              )
            }
          })
        }
      </div>
    </div>
  )
};

export default AdminAlltournamentstable
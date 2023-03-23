//summary for a tournament

const TournamentSummary = (props) => {

  console.log(props);

  const tournament_phases = [
    "Group Stage",
    "Round of 16",
    "Quarter Finals",
    "Semi Finals",
    "Finals"
  ]

  const status = [
    "Registration",
    "In Progress",
    "Finished"
  ]

  const fakeData = {
    name: "tournament name",
    date: "fake date",
    currentStage: tournament_phases[Math.floor(Math.random() * 5)],
    status: status[Math.floor(Math.random() * 3)],
    id: Math.floor(Math.random() * 1000)
  }

  //change "Date added" depending on the status of the tournament
  //if the tournament is in registration, then the date added => "end registration date"
  //if the tournament is in progress, then the date added => "start date"
  //if the tournament is finished, then the date added => "end date"

  return (
    <div class={props.class}>
      <ul>
        <li>
          <img src="assets/images/game-01.jpg" alt="" class="templatemo-item" />
        </li>
        <li>
          <h4>{props.data.name}</h4>
          <span>{props.data.game}</span>
        </li>
        <li>
          {
            props.data.status === "Registration" ? (
              <h4>End Registration</h4>
            ) : props.data.status === "In Progress" ? (
              <h4>Start Date</h4>
            ) : (
              <h4>End Date</h4>
            )
          }
          <span>{props.data.date}</span>
        </li>
        <li>
          <h4>Stage</h4>
          <span>{props.data.currentStage}</span>
        </li>
        <li>
          <h4>Status</h4>
          <span>{props.data.status}</span>
        </li>
        {
          props.data.status === "Registration" ? (
            <li>
              <div class="main-border-button">
                <a href={props.data.registration_url}>Register</a>
              </div>
            </li>
          ) : props.data.status === "In Progress" ? (
            <li>
              <div class="main-border-button">
                <a href={"#/tournament/" + props.data.id}>Check out</a>
              </div>
            </li>
          ) : (
            <li>
              <div class="main-border-button border-no-active">
                <a href="#">Finished</a>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default TournamentSummary;

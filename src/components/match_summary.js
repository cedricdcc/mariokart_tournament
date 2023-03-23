//component to render a match summary

const MatchSummary = (props) => {

  console.log(props);

    const tournament_phases = [
        "Group Stage",
        "Round of 16",
        "Quarter Finals",
        "Semi Finals",
        "Finals"
      ]
    
    const status = [
        "TBP",
        "Finished"
    ]

    //create fake data like dd/mm/yyyy
    function randomDate() {
        let start = new Date(2023, 0, 1);
        let end = new Date(2024, 0, 1);
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toString().split(" ")[2] + "/" + date.toString().split(" ")[1] + "/" + date.toString().split(" ")[3];
    }

  const fakeData = {
    name: "random tournament name",
    date: randomDate(),
    currentStage: tournament_phases[Math.floor(Math.random() * 5)],
    status: status[Math.floor(Math.random() * 2)],
    id: Math.floor(Math.random() * 1000)
  }

    return(
        <>
        <div class="item">
      <ul>
        <li>
          <img src="assets/images/game-01.jpg" alt="" class="templatemo-item" />
        </li>
        <li>
          <h4>Tournament name</h4>
          <span>{props.data.tournament.name}</span>
        </li>
        <li>
          <h4>Date Match</h4>
          <span>{props.data.match.date}</span>
        </li>
        <li>
          <h4>Stage</h4>
          <span>{props.data.match.currentStage}</span>
        </li>
        <li>
          <h4>Status</h4>
          <span>{props.data.match.status}</span>
        </li>
        {
            props.data.match.status === "TBP" ? (
                <li>
                    <div class="main-border-button border-no-active">
                        <a href={"#/matches/"+props.data.match.id}>TBP</a>
                    </div>
                </li>
            ) : props.data.match.status === "In Progress" ? (
                <li>
                    <div class="main-border-button">
                        <a href={"#/matches/"+props.data.match.id}>Check out</a>
                    </div>
                </li>
            ) : (
                <li>
                    <div class="main-border-button">
                        <a href={"#/matches/"+props.data.match.id}>Check out</a>
                    </div>
                </li>
            )
        }
      </ul>
    </div>
        </>
    );
};

export default MatchSummary;
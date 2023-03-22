//summary for a tournament

const TournamentSummary = (props) => {

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

  return (
    <div class="item">
      <ul>
        <li>
          <img src="assets/images/game-01.jpg" alt="" class="templatemo-item" />
        </li>
        <li>
          <h4>{fakeData.name}</h4>
          <span>Sandbox</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{fakeData.date}</span>
        </li>
        <li>
          <h4>Stage</h4>
          <span>{fakeData.currentStage}</span>
        </li>
        <li>
          <h4>Status</h4>
          <span>{fakeData.status}</span>
        </li>
        {
            fakeData.status === "Registration" ? (
                <li>
                    <div class="main-border-button">
                        <a href={"/tournament/"+fakeData.id}>Register</a>
                    </div>
                </li>
            ) : fakeData.status === "In Progress" ? (
                <li>
                    <div class="main-border-button">
                        <a href={"/tournament/"+fakeData.id}>Check out</a>
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

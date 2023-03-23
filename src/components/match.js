//one match in upcoming matches

const Match = (props) => {
  
  const tournament_phases = [
    "Group Stage",
    "Round of 16",
    "Quarter Finals",
    "Semi Finals",
    "Finals"
  ]

  const tousedata = {
    "img": "assets/images/mariokart_0" + Math.floor(Math.random() * 8 + 1) + ".png",
    "tournament_name": "tournament name",
    "phase": tournament_phases[Math.floor(Math.random() * 5)],
    "id": Math.floor(Math.random() * 1000)
  }

  const redirect = (id) => {
    console.log(`redirecting to match page with id ${id}`);
    window.location.href = `#/matches/${id}`;
    }

  return (
    <div class="col-lg-3 col-sm-6" onClick={() => redirect(tousedata.id)}>
      <div class="item">
        <img src={tousedata.img} alt="" />
        <h4>
          {tousedata.tournament_name}
          <br />
          <span>{tousedata.phase}</span>
        </h4>
      </div>
    </div>
  );
};

export default Match;

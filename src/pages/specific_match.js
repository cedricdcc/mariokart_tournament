import Header from "../components/header";
import Footer from "../components/footer";
import logo1 from "../assets/images/mariokart_01.png";
import logo2 from "../assets/images/mariokart_02.png";
import logo3 from "../assets/images/mariokart_03.png";
import logo4 from "../assets/images/mariokart_04.png";
import logo5 from "../assets/images/mariokart_05.png";
import logo6 from "../assets/images/mariokart_06.png";
import logo7 from "../assets/images/mariokart_07.png";
import logo8 from "../assets/images/mariokart_08.png";

const SpecificMatch = (props) => {
  //get the id from the url
  const array_url = window.location.href.split("/matches/");
  const id = array_url[array_url.length - 1];
  console.log(id);

  const tournament_phases = [
    "Group Stage",
    "Round of 16",
    "Quarter Finals",
    "Semi Finals",
    "Finals"
  ]

    const tournament_icons = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8
    ]

  const mockData = {
    tournamentID: 1,
    currentStage: tournament_phases[Math.floor(Math.random() * 5)],
    rankings: [
        {player:"nameplayer1", points: 60},
        {player:"nameplayer2", points: 50},
        {player:"nameplayer3", points: 45},
        {player:"nameplayer4", points: 33}
    ],
    races: [
        "name_track_one",
        "name_track_two",
        "name_track_three",
        "name_track_four"
    ]
  }

  const MockTournamentData = {
    tournamentID: 1,
    tournamentName: "tournament name",
    tournamentIcon: tournament_icons[Math.floor(Math.random() * 8)]
  }

  return (
    <>
      <Header />
      <div className="col-lg-12">
        <div className="page-content">
          <h1>Specific Match Page {id}</h1>
          <div class="specific-match">
            <div className="row">
              <div className="col-lg-3">
                <img src={MockTournamentData.tournamentIcon} className="tourneylogo" alt="" />
              </div>
              <div className="col-lg-9">
                <div className="item">
                  <h3>{MockTournamentData.tournamentName} - <em>{mockData.currentStage}</em></h3>
                  <div className="row">
                    {
                        mockData.rankings.map((player, index) => {
                            //if it is the first player, he is the winner of the match
                            //if it is the second player, he is the second place of the match
                            //the third and fourth player are the losers of the match
                            if(index === 0){
                                return (
                                    <div className="col-lg-3">
                                        <div className="item">
                                            <h4>Winner</h4>
                                            <h5>{player.player}</h5>
                                            <h6>{player.points} points</h6>
                                        </div>
                                    </div>
                                )
                            }else if(index === 1){
                                return (
                                    <div className="col-lg-3">
                                        <div className="item">
                                            <h4>Second Place</h4>
                                            <h5>{player.player}</h5>
                                            <h6>{player.points} points</h6>
                                        </div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="col-lg-3">
                                        <div className="item">
                                            <h4>Eliminated</h4>
                                            <h5>{player.player}</h5>
                                            <h6>{player.points} points</h6>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="most-popular">
            <div className="row">
              <div class="col-lg-12">
                <div class="row">
                  <div className="col-lg-3">
                    <div className="item">race info here</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">race info here</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">race info here</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">race info here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificMatch;

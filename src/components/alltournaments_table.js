//component that will just show a table of all tournaments
import TournamentSummary from "./tournament_summary";


//for the last item in the tournament summary add a class of last-item
const Alltournamentstable = (props) => {

  console.log(props);

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
                <TournamentSummary data={tournament} class="item last-item" />
              )
            } else {
              return (
                <TournamentSummary data={tournament} class="item"/>
              )
            }
          })
        }
      </div>
    </div>
  )
};

export default Alltournamentstable
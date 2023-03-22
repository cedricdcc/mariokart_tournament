//component that will just show a table of all tournaments
import TournamentSummary from "./tournament_summary";


//for the last item in the tournament summary add a class of last-item
const Alltournamentstable = () => {
    return (
        <div class="gaming-library">
        <div class="col-lg-12">
          <div class="heading-section">
            <h4><em>All</em> Tournaments</h4>
          </div>
          <TournamentSummary/>
          <TournamentSummary/>
          <TournamentSummary/>
        </div>
      </div>
    )
};

export default Alltournamentstable
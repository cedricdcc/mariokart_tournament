//all matches component here
import MatchSummary from "./match_summary";

const AllMatches = (props) => {

  console.log(props);

  return (
    <div class="gaming-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4>
            <em>All</em> Matches
          </h4>
        </div>
        {
          props.data.MatchData.map((match) => {
            const matchdata = {
              "match": match,
              "tournament": props.data.TournamentData.find((tour) => tour.id === match.tournamentID)
            }
            return <MatchSummary data={matchdata} />
          })
        }
      </div>
    </div>
  );
};

export default AllMatches;

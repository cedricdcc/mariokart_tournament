//all matches component here
import MatchSummary from "./match_summary";

const AllMatches = () => {
  return (
    <div class="gaming-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4>
            <em>All</em> Matches
          </h4>
        </div>
        <MatchSummary />
        <MatchSummary />
        <MatchSummary />
        <MatchSummary />
      </div>
    </div>
  );
};

export default AllMatches;

//upcoming matches component
import Match from "./match";

const UpcomingMatches = () => {
    return (
        <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Upcoming</em> Matches</h4>
                </div>
                <div class="row">
                  <Match />
                  <Match />
                  <Match />
                  <Match />
                  <Match />
                  <Match />
                  <Match />
                  <Match />
                  <div class="col-lg-12">
                    <div class="main-button">
                      <a href="/TODO-link_to_latest_match_played">Latest Match</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
};

export default UpcomingMatches
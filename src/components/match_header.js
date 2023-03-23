//component that contains match header

const MatchHeader = (props) => {
    console.log(props);
    const mockData = props.data ;

    return (
        <div class="specific-match">
            <div className="row">
                <div className="col-lg-3">
                    <img src={mockData.tournamentIcon} className="tourneylogo" style={{borderRadius:"20px",marginBottom:"2rem",height:"15vw",width:"15vw",marginLeft:"2rem"}} alt="" />
                </div>
                <div className="col-lg-9">
                    <div className="item">
                        <h3>{mockData.tournamentName} - <em>{mockData.currentStage}</em></h3>
                        <div className="row">
                            {
                                mockData.rankings.map((player, index) => {
                                    //if it is the first player, he is the winner of the match
                                    //if it is the second player, he is the second place of the match
                                    //the third and fourth player are the losers of the match
                                    if (index === 0) {
                                        return (
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <h4>Winner</h4>
                                                    <h5>{player.player}</h5>
                                                    <h6>{player.points} points</h6>
                                                </div>
                                            </div>
                                        )
                                    } else if (index === 1) {
                                        return (
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <h4>Second Place</h4>
                                                    <h5>{player.player}</h5>
                                                    <h6>{player.points} points</h6>
                                                </div>
                                            </div>
                                        )
                                    } else {
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
    );
};

export default MatchHeader
//component that renders the match maps

const MatchMaps = (props) => {

    console.log(props);

    return (
        <div class="most-popular">
            <div className="row">
                <div class="col-lg-12">
                    <div class="row">
                        {
                            props.data.new_races.map((map, index) => {
                                return (
                                    <div className="col-lg-3" key={index + "race"}>
                                        <div className="item">
                                            <img src={map} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchMaps;
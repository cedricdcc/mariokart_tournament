//specific tournament page

import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

const SpecificTournament = (props) => {
  //get the id from the hash
  const { TourID } = useParams();
  console.log(TourID);
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <h1>Specific Tournament Page {TourID}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificTournament;

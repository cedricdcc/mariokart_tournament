//specific tournament page

import Header from "../components/header";
import Footer from "../components/footer";

const SpecificTournament = (props) => {
  //get the id from the url 
  const array_url = window.location.href.split("/tournament/");
  const id = array_url[array_url.length - 1];
  console.log(id);
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <h1>Specific Tournament Page {id}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificTournament;

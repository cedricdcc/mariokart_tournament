//page component that will render a specific tournament
import Header from "../components/header";
import Footer from "../components/footer";
import Alltournamentstable from "../components/alltournaments_table";

const Tournament = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <Alltournamentstable data={props.data.TournamentData}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tournament;

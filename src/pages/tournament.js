//page component that will render a specific tournament
import Header from "../components/header";
import Footer from "../components/footer";
import Alltournamentstable from "../components/alltournaments_table";

const Tournament = (props) => {
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <Alltournamentstable/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tournament;

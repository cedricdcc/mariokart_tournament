//page that render all matches

import Header from "../components/header";
import Footer from "../components/footer";
import AllMatchesTable from "../components/allmatches_table";

const Matches = () => {
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <AllMatchesTable />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Matches;

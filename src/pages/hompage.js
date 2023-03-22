import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import UpcomingMatches from "../components/upcoming_matches";

function HomePage() {

  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <Banner />
          <UpcomingMatches />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

//404 page
import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <div class="row">
            <div class="col-lg-12">
              <div class="error-page">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
                <a href="/">Go to Homepage</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;

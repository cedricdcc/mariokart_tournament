//Admin dashboard page
import Header from "../components/header";
import Footer from "../components/footer";
import AdminAlltournamentstable from "../components/admin_alltournamants_table";

const AdminPage = (props) => {
    console.log(props);
  return (
    <>
      <Header />
      <div class="col-lg-12">
        <div class="page-content">
          <div class="row">
            <div class="col-lg-12">
              <p>
                Admin shizzle here
              </p>
              <AdminAlltournamentstable data={props.data.TournamentData} />
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
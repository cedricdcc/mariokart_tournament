import $ from "jquery";
import logo from "../assets/images/Mario_Kart_8_logo.svg";
import shyguy from "../assets/images/blue_shy_guy.png";

function Header() {

  //function here to give the menu trigger an active class when the menu is open
  const menuTriggerActive = () => {
    $(".menu-trigger").addClass("active");
    $(".header-area .nav").slideToggle(200);
  };


  // Menu elevator animation
  //TODO add animation for menu dropdown and add animation for menu dropdown

  return (
    <>
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a href="#/" class="logo">
                  <img
                    src={logo}
                    alt=""
                    className="logo_header"
                  ></img>
                </a>
                <ul class="nav">
                  <li>
                    <a href="#/" class="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#/tournament">Tournaments</a>
                  </li>
                  <li>
                    <a href="#/matches">Matches</a>
                  </li>
                  <li>
                    <a href="#/about">
                      About{" "}
                      <img src={shyguy} alt=""></img>
                    </a>
                  </li>
                </ul>
                <a class="menu-trigger" onClick={()=> menuTriggerActive()}>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

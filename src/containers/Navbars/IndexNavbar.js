import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import History from '../../routes/History'

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const dispatcher = useDispatch();

  const is_authorized = useSelector(state => state.Auth.is_authorized);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('is_auth')
    dispatcher({type: "SET_AUTHERIZATION", payload: false})
    return History.push('/')
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
            title="Coded by Creative Tim"
          >
            Bebejo App
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/offers"
              > 
                Offers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/profile"
              > 
                My profile
              </NavLink>
            </NavItem>
              { !is_authorized &&
                <>
                  <NavItem>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="/register"
                    >
                      Sign Up
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="/login"
                    >
                      Login
                    </Button>
                  </NavItem>
                </> }
              { is_authorized &&
                <>
                  <NavItem>
                    <Button
                      className="btn-round"
                      color="danger"
                      // href="/"
                      onClick={() => logout()}
                    >
                      Logout
                    </Button>
                  </NavItem>
                </> }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

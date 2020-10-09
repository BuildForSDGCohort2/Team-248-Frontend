import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Footer.scss";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <FavoriteIcon style={{ fill: '#e44463' }}/> by Bebejo
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

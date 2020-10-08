/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Bebejo</h1>
              
            </div>
            <h4 className="presentation-subtitle text-center">
              Find trusted caregivers for your every need!
            </h4>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;

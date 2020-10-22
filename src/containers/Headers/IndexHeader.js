
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

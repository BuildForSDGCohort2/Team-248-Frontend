import React from "react";
import Card from "react-bootstrap/Card";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SecondSection() {
  return (
    <Container className="tim-container">
      <div id="images">
        <Container className="cards-container">
          <Row>
            <Col md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-1.jpg")}
                />
                <Card.Body>
                  <Card.Title>Search</Card.Title>
                  <Card.Text>
                    Read reviews and detailed profiles. Look for occasional,
                    last minute, part-time or full-time help or jobs. Create
                    offer, get what you need.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mr-auto ml-auto" md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-2.jpeg")}
                />
                <Card.Body>
                  <Card.Title>Connect</Card.Title>
                  <Card.Text>
                    Screen, interview and make your choice. Parents don't pay us
                    until they contact a babysitter. You can contact Babysitters for
                    free anytime.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mr-auto" md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-3.jpg")}
                />
                <Card.Body>
                  <Card.Title>Request & pay bookings</Card.Title>
                  <Card.Text>
                    Parents simply plan and pay bookings through Babysits and
                    the babysitter receives the money after the babysitting
                    appointment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="cards-container">
            <Col md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-4.jpg")}
                />
                <Card.Body>
                  <Card.Title>On-Demand In-Home Care</Card.Title>
                  <Card.Text>
                    We even help with last minute. I mean what is smarter than
                    having safety in your back pocket when needed.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mr-auto ml-auto" md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-5.jpg")}
                />
                <Card.Body>
                  <Card.Title>Elderly Care & Home Sitting</Card.Title>
                  <Card.Text>
                    Requests are made securely and conveniently online. Your
                    care professional will provide live updates while away.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mr-auto" md="4" sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/img/card-6.jpg")}
                />
                <Card.Body>
                  <Card.Title>Group Services</Card.Title>
                  <Card.Text>
                    Bebejo handles all the work so that you can focus on your
                    important event. No matter what time and period, we will
                    always be there.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default SecondSection;

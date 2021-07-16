import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Icons
import facebookIcon from "./assets/facebook.svg";
import youtubeIcon from "./assets/youtube.svg";
import instagramIcon from "./assets/instagram.svg";

// CSS
import "./App.css";

// Data that will be shown on the table
import { dummyData } from "./dummyData";

function App() {
  const list = dummyData.map((item, i) => (
    <ListGroup.Item key={`invoice-${i}`} className="p-3 d-flex row">
      <div className="INumber col-md-5 col-3">{item["Invoice Number"]}</div>
      <div className="col-3 col-md-2">{item["Date"]}</div>
      <div className="col-3 col-md-2">{item["Amount"]}</div>
      <div
        className={`col-3 col-md-2 ${
          item["Status"] === "Paid" && "statusPaid"
        }`}
      >
        {item["Status"]}
      </div>
    </ListGroup.Item>
  ));

  return (
    <Container fluid className="App d-flex flex-column align-items-center p-0">
      <Row className="nav m-0 p-0">
        <Navbar
          className="d-flex justify-content-between shadow-sm navbar"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="navItem" href="#home">
                Contact Us
              </Nav.Link>
              <Nav.Link className="navItem" href="#features">
                Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="navTitle m-0">
            Riderly
          </Navbar.Brand>
          <Nav>
            <NavDropdown title="Welcome, John" className="user navItem">
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Row>

      <Row className="d-flex flex-column align-items-center listRow">
        <div className="col-11 col-md-10 mt-5 cardCont pt-3 px-3 pb-2 pt-md-5 px-md-5 pb-md-4">
          <div className="cardText d-flex justify-content-between align-bottom mb-4">
            <h1>Recent Invoices</h1>
            <a href="https://www.google.com/" className="align-self-end mb-2">
              Go to Invoices List
            </a>
          </div>
          <Card className="list">
            <Card.Header className="d-flex listTitle bg-white row">
              <div className="col-3 col-md-5 align-self-center">
                Invoice Number
              </div>
              <div className="col-3 col-md-2 align-self-center">Date</div>
              <div className="col-3 col-md-2 align-self-center">Amount</div>
              <div className="col-3 col-md-2 align-self-center">Status</div>
            </Card.Header>
            <ListGroup variant="flush">{list}</ListGroup>
          </Card>
        </div>
      </Row>

      <Row className="d-flex flex-column align-items-center listRow pb-5">
        <div className="col-11 col-md-10 mt-5 cardCont p-4 p-md-5">
          <div className="cardText d-flex justify-content-between align-bottom mb-4">
            <h1>Settings</h1>
            <Button variant="primary" className="rounded-pill">
              View all settings
            </Button>
          </div>
          <div className="d-flex justify-content-between flex-wrap px-3 px-md-0">
            <div>
              <p className="cardTitle mb-0">Profile</p>
              <Card className="col-3 cardSettings">
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="mb-0">John Test</Card.Text>
                  <Card.Text className="">john@test.com</Card.Text>
                  <a href="https://www.google.com/">Edit</a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <p className="cardTitle mb-0">Shipping</p>
              <Card className="col-3 cardSettings">
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="">
                    We have no default address on file for this account.
                  </Card.Text>
                  <a href="https://www.google.com/">Create New Address</a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <p className="cardTitle mb-0">Payment</p>
              <Card className="col-3 cardSettings">
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="">
                    We have no default credit on file for this account.
                  </Card.Text>
                  <a href="https://www.google.com/">Add a Credit Card</a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Row>

      <Row className="d-flex align-items-center listRow footer pt-2 flex-wrap">
        <div className="col-12 col-md-6 brandFooter ps-3">
          <h1 className="brandTitle">Riderly</h1>
          <p className="sloganFooter">
            Offering quality products and supplies for bike dealers and teams
          </p>
        </div>
        <div className="d-flex col-md-6 col-12">
          <div className="col-4">
            <p className="titleFooter">Company</p>
            <li className="footerItem">Privacy Policy</li>
            <li className="footerItem">About Us</li>
            <li className="footerItem">FAQ</li>
          </div>
          <div className="col-4">
            <p className="titleFooter">Policies</p>
            <li className="footerItem">Terms & Conditions</li>
            <li className="footerItem">Shopping Policy</li>
            <li className="footerItem">Privacy Terms</li>
          </div>
          <div className="col-4">
            <p className="titleFooter">Quick Contact</p>
            <li className="footerItem">Phone: (+598) 99 123 456</li>
            <li className="footerItem">Email: myaccount@riderly.com</li>
            <li className="footerItem">Hours: Mon-Fri 8am – 7pm</li>
          </div>
        </div>
        <div className="socialMedia d-flex col-12 mt-auto align-items-center">
          <div className="me-4">
            <img src={facebookIcon} alt="Facebook icon" />
          </div>
          <div className="me-4">
            <img src={youtubeIcon} alt="Youtube icon" />
          </div>
          <div className="me-4">
            <img src={instagramIcon} alt="Instagram icon" />
          </div>
          <p className="ms-auto mb-0">2020 Riderly Inc.</p>
        </div>
      </Row>
    </Container>
  );
}

export default App;

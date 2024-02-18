import "./App.css";
import Home from "./components/Home";
import Resturantlist from "./components/Resturantlist";
import Resturantdetails from "./components/Resturantdetails";
import Resturantsearch from "./components/Resturantsearch";
import Resturantcreate from "./components/Resturantcreate";
import Resturantupdate from "./components/Resturantupdate";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <Link to={"/"}> Home</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Link to={"/list"}> list</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Link to={"/create"}> create</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Link to={"/search"}> search</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Link to={"/update"}> update</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/list" element={<Resturantlist />}></Route>
          <Route path="/details" element={<Resturantdetails />}></Route>
          <Route path="/create" element={<Resturantcreate />}></Route>
          <Route path="/search" element={<Resturantsearch />}></Route>
          <Route
            path="/update/:id"
            render={(props) => (
              // Inside this arrow function, you can pass props to the Resturantupdate component.
              // The props object is spread (using the {...props} syntax) to make all its properties available as props to Resturantupdate.
              <Resturantupdate {...props} />
            )}
          ></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

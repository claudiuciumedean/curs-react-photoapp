import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Photo App</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/">
            Home
          </NavLink>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;

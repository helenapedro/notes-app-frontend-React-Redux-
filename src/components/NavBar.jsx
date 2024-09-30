import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignIn, 
  faSignOutAlt, 
  faInfoCircle, 
  faUserPlus,
  faStickyNote, 
  faUser,
  faBook,
  faPenNib
} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/userSlice'; 
import styles from '../styles/NavBar.module.css';

const MINKANDA = "Minkanda";
const LOGIN = "Login";
const LOGOUT = "Logout";
const REGISTER = "Register";
const PROFILE = "Profile";
const NOTES = "My Notes";
const PUBLIC_NOTES = "Public Notes";
const ABOUT = "About";

const NavBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated); 

  return (
    <Navbar expand="lg" className={`${styles.navbar} fixed-top`}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles['navbar-brand']}>
          {MINKANDA} <FontAwesomeIcon icon={faPenNib} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={styles['navbar-toggler']} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`${styles['navbar-nav']} me-auto my-2 my-lg-0`} style={{ maxHeight: '100px' }}>
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/about" className={styles['nav-link']}>
                  <FontAwesomeIcon icon={faInfoCircle} /> {ABOUT}
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className={styles['nav-link']}> 
                  <FontAwesomeIcon icon={faSignIn} /> {LOGIN}
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className={styles['nav-link']}>
                  <FontAwesomeIcon icon={faUserPlus} /> {REGISTER}
                </Nav.Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/notes" className={styles['nav-link']}>
                  <FontAwesomeIcon icon={faStickyNote} /> {NOTES}
                </Nav.Link>
                <Nav.Link as={Link} to="/notes/public" className={styles['nav-link']}>
                  <FontAwesomeIcon icon={faBook} /> {PUBLIC_NOTES}
                </Nav.Link>
                <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="navbarScrollingDropdown" className={styles['nav-dropdown']}>
                  <NavDropdown.Item as={Link} to="/profile">
                    <FontAwesomeIcon icon={faUser} /> {PROFILE}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logout">
                    <FontAwesomeIcon icon={faSignOutAlt} /> {LOGOUT}
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

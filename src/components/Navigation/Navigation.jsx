import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "./Navigation.module.css";
import { ImgLogo } from "./ItemsNav";
import { Link } from "react-router-dom";

export const Navigation = ({ selectedGenre, onGenreSelect }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState("");

  const handleGenreSelect = (eventKey) => {
    if (eventKey === "top_rated") {
      setSelectedNavItem(eventKey);
    } else if (eventKey === "upcoming") {
      setSelectedNavItem(eventKey);
    } else {
      navigate(`/genres/${eventKey}`);
      onGenreSelect(eventKey);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const runSpinner = async () => {
      setIsLoading(false);
    };
    runSpinner();
  }, [selectedGenre]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
      <Navbar expand="md" autoFocus fixed="top">
        <Container className="d-flex gap-4 m-auto align-items-center">
          <div>
            <NavbarBrand>
              <Link to={"/"}>
                <ImgLogo />
              </Link>
            </NavbarBrand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav onSelect={handleGenreSelect}>
              <Nav.Link
                  className={`${styles.btn} text-light`}
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={`${styles.btn} text-light`}
                  href="/movie/upcoming"
                  eventKey="upcoming"
                  active={selectedNavItem === "upcoming"}
                >
                  Upcoming
                </Nav.Link>
                <Nav.Link
                  className={`${styles.btn} text-light`}
                  href="/movie/top_rated"
                  eventKey="top_rated"
                  active={selectedNavItem === "top_rated"}
                >
                  TopRated
                </Nav.Link>
                <NavDropdown
                  menuVariant="dark"
                  className={`${styles.dropbtn}`}
                  title={<span className="text-light">Genres</span>}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={28}
                    active={selectedGenre === 28}
                  >
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={12}
                    active={selectedGenre === 12}
                  >
                    Adventure
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={16}
                    active={selectedGenre === 16}
                  >
                    Animation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={35}
                    active={selectedGenre === 35}
                  >
                    Comedy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={80}
                    active={selectedGenre === 80}
                  >
                    Crime
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={99}
                    active={selectedGenre === 99}
                  >
                    Documentary
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={18}
                    active={selectedGenre === 18}
                  >
                    Drama
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={10751}
                    active={selectedGenre === 10751}
                  >
                    Family
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={14}
                    active={selectedGenre === 14}
                  >
                    Fantasy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={36}
                    active={selectedGenre === 36}
                  >
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={27}
                    active={selectedGenre === 27}
                  >
                    Horror
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={36}
                    active={selectedGenre === 36}
                  >
                    Musik
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={10402}
                    active={selectedGenre === 10402}
                  >
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={9648}
                    active={selectedGenre === 9648}
                  >
                    Mystery
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={10749}
                    active={selectedGenre === 10749}
                  >
                    Romance
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={878}
                    active={selectedGenre === 878}
                  >
                    Science Fiction
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={10770}
                    active={selectedGenre === 10770}
                  >
                    TV-Film
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={53}
                    active={selectedGenre === 53}
                  >
                    Thriller
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={10752}
                    active={selectedGenre === 10752}
                  >
                    War Movie
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={`${styles.btnItem}`}
                    eventKey={37}
                    active={selectedGenre === 37}
                  >
                    Western
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
  );
};

/**
  {genres.map((genre) => {
    return <ListGenre key={genre} genre={genre} sitio={get(`/movie/genre_ids?=${encodeURIComponent(genre)}`)}/>
  })}
 */

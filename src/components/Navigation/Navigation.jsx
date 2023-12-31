import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
    } else if (eventKey === "series") {
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
  }, [selectedGenre, isLoading]);

  return (
    <Navbar expand="md" autoFocus fixed="top" data-bs-theme="dark">
      <Container className="d-flex gap-4 align-items-center">
        <NavbarBrand>
          <Link to={"/"} style={{ textDecorationLine: "none" }}>
            <h1 className={`${styles.titleNav} text-light m-0 `}>
              PelisPlus <ImgLogo />
            </h1>
          </Link>
        </NavbarBrand>
        <div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navToggle} onSelect={handleGenreSelect}>
              <Link
                className={`${styles.btn} text-light p-2`}
                to="/"
                style={{ textDecorationLine: "none" }}
              >
                Home
              </Link>
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
              <Nav.Link
                className={`${styles.btn} text-light`}
                href="/series"
                eventKey="series"
                active={selectedNavItem === "series"}
              > 
                TV Series
              </Nav.Link>
              <NavDropdown
                className={`${styles.dropbtn}`}
                title={<span className="text-light">Genres</span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item eventKey={28} active={selectedGenre === 28}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={12} active={selectedGenre === 12}>
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={16} active={selectedGenre === 16}>
                  Animation
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={35} active={selectedGenre === 35}>
                  Comedy
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={80} active={selectedGenre === 80}>
                  Crime
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={99} active={selectedGenre === 99}>
                  Documentary
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={18} active={selectedGenre === 18}>
                  Drama
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={10751}
                  active={selectedGenre === 10751}
                >
                  Family
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={14} active={selectedGenre === 14}>
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={36} active={selectedGenre === 36}>
                  History
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={27} active={selectedGenre === 27}>
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={36} active={selectedGenre === 36}>
                  Musik
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={10402}
                  active={selectedGenre === 10402}
                >
                  History
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={9648}
                  active={selectedGenre === 9648}
                >
                  Mystery
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={10749}
                  active={selectedGenre === 10749}
                >
                  Romance
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={878} active={selectedGenre === 878}>
                  Science Fiction
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={10770}
                  active={selectedGenre === 10770}
                >
                  TV-Film
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={53} active={selectedGenre === 53}>
                  Thriller
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={10752}
                  active={selectedGenre === 10752}
                >
                  War Movie
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={37} active={selectedGenre === 37}>
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

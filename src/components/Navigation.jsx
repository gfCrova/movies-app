import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import styles from "./Navigation.module.css";

export const Navigation = ({ selectedGenre, onGenreSelect }) => {
  console.log(selectedGenre);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const handleGenreSelect = (eventKey) => {
    navigate(`/genres/${eventKey}`);
    onGenreSelect(eventKey);
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
    <>
      <Navbar expand="lg" className={styles.nav}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav onSelect={handleGenreSelect}>
            <Nav.Link className={styles.btn} href="#home">Premieres</Nav.Link>
            <Nav.Link className={styles.btn} href="#features">More Views</Nav.Link>
            <NavDropdown
              className={styles.dropbtn}
              title="Genres"
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
              <NavDropdown.Item eventKey={9648} active={selectedGenre === 9648}>
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
            <Nav.Link className={styles.btn} href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

/**
  {genres.map((genre) => {
    return <ListGenre key={genre} genre={genre} sitio={get(`/movie/genre_ids?=${encodeURIComponent(genre)}`)}/>
  })}
 */

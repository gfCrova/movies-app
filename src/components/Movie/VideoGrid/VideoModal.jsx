import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaBackwardStep } from "react-icons/fa6";
import { Badge } from "react-bootstrap";
import styles from "./VideoModal.module.css";

export const VideoModal = ({ movie, type }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <div className="mt-3">
      <Button variant="danger" className="rounded-5" onClick={handleShow}>
        <AiOutlineYoutube size={25} /> {type}
      </Button>

      <Modal size="xl" fullscreen={fullscreen} show={show} onHide={handleClose}>
        <div className="bg-dark bg-gradient">
          <Modal.Header className="text-light bg-dark">
            <Modal.Title>{type}</Modal.Title>
            <Button
              className="me-4 position-absolute end-0"
              variant="danger"
              onClick={handleClose}
            >
              <p className="m-auto">
                <FaBackwardStep /> Back
              </p>
            </Button>
          </Modal.Header>
          <Modal.Body className="p-0 mt-3">
            <Container fluid>
              <div className="d-flex flex-wrap gap-4">
                {movie &&
                  movie.results?.map((video) => {
                    if (video.type === type) {
                      return (
                        <div
                          className={`${styles.divCardVideo} bg-black rounded-2 bg-gradient m-auto p-2`}
                        >
                          <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${video.key}`}
                            width="100%"
                            height={500}
                            controls
                          />
                          <p className="position-absolute end-25 m-2">
                            {video.official === true ? (
                              <Badge
                                className="p-1 mt-3"
                                text="dark"
                                bg="warning"
                              >
                                Official
                              </Badge>
                            ) : null}
                          </p>
                          <ul className="d-flex flex-column align-items-center text-light mt-3 pt-2 mb-0">
                            <h3>{video.name}</h3>
                            <p>
                              {video.site} - {video.size}p
                            </p>
                            <h6 className="text-light">{video.published_at}</h6>
                          </ul>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
              </div>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

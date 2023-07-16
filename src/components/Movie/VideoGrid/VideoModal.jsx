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
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <div className="mt-3">
      <Button variant="danger" className="rounded-5" onClick={handleShow}>
        <AiOutlineYoutube size={25} /> {type}
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <div>
          <Modal.Header className="text-light bg-dark">
            <Modal.Title>{type}</Modal.Title>
            <Button
              className="me-5 position-absolute end-0"
              variant="danger"
              onClick={handleClose}
            >
              <p className="m-auto">
                <FaBackwardStep /> Back
              </p>
            </Button>
          </Modal.Header>
          <Modal.Body className={`${styles.modalBody}`}>
            <Container fluid>
              <div className="d-flex flex-wrap gap-3">
                {movie &&
                  // eslint-disable-next-line array-callback-return
                  movie.results?.map((video) => {
                    if (video.type === type) {
                      return (
                        <div
                          className={`${styles.divCardVideo} bg-black bg-gradient mb-4`}
                        >
                          <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${video.key}`}
                            width="100%"
                            height={500}
                            controls
                          />
                          <p className="position-absolute end-25 m-2">
                            {video.official === true ? (
                              <Badge text="dark" bg="warning">
                                Official
                              </Badge>
                            ) : null}
                          </p>
                          <ul className="d-flex flex-column align-items-center text-light mt-2 pt-1 mb-0">
                            <h3>{video.name}</h3>
                            <p>
                              {video.site} - {video.size}p
                            </p>
                            <h6 className="text-light">{video.published_at}</h6>
                          </ul>
                        </div>
                      );
                    } else if(video.type === null || video.type === "" || video.type === undefined) {
                        return (
                          <h1 className="text-light text-center">Not Found!</h1>
                        );
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

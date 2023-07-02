import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactPlayer from "react-player";
import { Badge } from "react-bootstrap";
import { AiOutlineYoutube } from "react-icons/ai";
import styles from "./VideoModal.module.css";
import {Empty} from '../../Empty/Empty'

export const VideoModal = ({ movie, type }) => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <div className="mt-3">
      <Button variant="none" onClick={handleShow}>
        <Badge className="px-1 py-0" bg="danger"><AiOutlineYoutube size={25} /></Badge> {type}
      </Button>

      <Modal size="xl" fullscreen={fullscreen} show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-black text-light">
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Container fluid>
            <div id="idVideoModal" className="d-flex gap-2 flex-wrap">
              {movie &&
                movie.results.map((video) => {
                  if (video.type === type) {
                    return (
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                        width={600}
                        height={300}
                        controls
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

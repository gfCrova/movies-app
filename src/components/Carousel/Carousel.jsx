import Carousel from "react-bootstrap/Carousel";
import imgIndianaJones from "../../assets/img/indiana-jones2.png";
import imgHiddenStrike from "../../assets/img/hidden-strike2.png";
import imgTransformers from "../../assets/img/transformers2.png";
import { Badge } from "react-bootstrap";
import styles from './Carousel.module.css'

export const CarouselHome = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.imgCarousel}>
        <img src={imgIndianaJones} alt="First slide" className={`w-100 opacity-50`} />
        <Carousel.Caption className={`${styles.caption} w-75`}>
          <h1 className={`${styles.captionTitle} text-start text-light fw-bold pb-2`}>Indiana Jones y el dial del destino (2023)<Badge className="ms-2 p-1 bg-warning text-dark">Movie</Badge></h1>
          <p className="text-start">
            El arqueólogo Indiana Jones deberá emprender otra aventura contra el
            tiempo para intentar recuperar un dial legendario que puede cambiar
            el curso de la historia. Acompañado por su ahijada, Jones pronto se
            encuentra enfrentándose a Jürgen Voller, un ex nazi que trabaja para
            la NASA.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.imgCarousel}>
        <img src={imgHiddenStrike} alt="Second slide" className={`w-100 opacity-50`} />
        <Carousel.Caption className={`${styles.caption} w-75`}>
        <h1 className={`${styles.captionTitle} text-start text-light fw-bold pb-2`}>Indiana Jones y el dial del destino (2023)<Badge className="ms-2 p-1 bg-warning text-dark">Movie</Badge></h1>
          <p className="text-start">
            El arqueólogo Indiana Jones deberá emprender otra aventura contra el
            tiempo para intentar recuperar un dial legendario que puede cambiar
            el curso de la historia. Acompañado por su ahijada, Jones pronto se
            encuentra enfrentándose a Jürgen Voller, un ex nazi que trabaja para
            la NASA.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.imgCarousel}>
        <img src={imgTransformers} alt="Third slide" className={`w-100 opacity-50`} />
        <Carousel.Caption className={`${styles.caption} w-75`}>
        <h1 className={`${styles.captionTitle} text-start text-light fw-bold pb-2`}>Indiana Jones y el dial del destino (2023)<Badge className="ms-2 p-1 bg-warning text-dark">Movie</Badge></h1>
          <p className="text-start">
            El arqueólogo Indiana Jones deberá emprender otra aventura contra el
            tiempo para intentar recuperar un dial legendario que puede cambiar
            el curso de la historia. Acompañado por su ahijada, Jones pronto se
            encuentra enfrentándose a Jürgen Voller, un ex nazi que trabaja para
            la NASA.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

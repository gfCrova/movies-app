import Carousel from 'react-bootstrap/Carousel';
import imgIndianaJones from '../assets/img/indiana-jones.jpg'
import imgHiddenStrike from '../assets/img/hidden-strike.jpg'
import imgTransformers from '../assets/img/transformers.jpg'

export const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className=""
          src={imgIndianaJones}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50"
          src={imgHiddenStrike}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50"
          src={imgTransformers}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
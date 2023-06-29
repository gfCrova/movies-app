import Carousel from 'react-bootstrap/Carousel';
import imgIndianaJones from '../assets/img/indiana-jones2.png'
import imgHiddenStrike from '../assets/img/hidden-strike2.png'
import imgTransformers from '../assets/img/transformers2.png'

export const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={imgIndianaJones}
          alt="First slide"
          className='w-100'
        />
        <Carousel.Caption className='bg-black rounded-4 opacity-75 w-50 m-auto'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imgHiddenStrike}
          alt="Second slide"
          className='w-100'
        />

        <Carousel.Caption className='bg-black rounded-4 opacity-75 w-50 m-auto'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imgTransformers}
          alt="Third slide"
          className='w-100'
        />

        <Carousel.Caption className='bg-black rounded-4 opacity-75 w-50 m-auto'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
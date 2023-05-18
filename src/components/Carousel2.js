import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className=" w-100"
          src="https://files.thesirona.com/site-images/original/simpl-desk-april_1.png"
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className=" w-100"
          src="https://files.thesirona.com/site-images/original/Mobikwik-3360x279.png"
          alt="Second slide"
        />
              </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousel2;
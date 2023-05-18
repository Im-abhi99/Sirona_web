import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/Web-banner-1920x527-old.gif"
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/2Web-banner-1920x527.gif"
          alt="Second slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/mini-store-hd_1.gif"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/desktop-banner-1920x527.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/period-track-hd.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/donekart-banner2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/survey-desk.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/B2_2.png"
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}> 
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/B1_4.png"
          alt="Third slide"
        />

      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carousel1;
import { Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';




function Spot()
{
 return(
        <>
        <div className="container">
       
        <div className="text-center mb-lg-3 mt-lg-5">
            <span className="name  ">
            IN THE SPOTLIGHT
            </span>
            </div>
      
<Carousel  variant="dark">
<Carousel.Item >
<div className="d-flex">

<Card className="w-50  m-lg-3">
 <Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/toilet-spray-vanilla-1.jpg" />
<Card.Body>
<Card.Title>Pee Buddy Odour & Germs Eliminating Before</Card.Title>
<Card.Text className="text-secondary">Odour and Germs Eliminating Toilet Spray | Before...</Card.Text>

 <div className='cardrate text-center'>Rs 259 <strike className="text-secondary">RS 189</strike> </div> 
</Card.Body>
</Card>

<Card className="w-50  m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" />
 <Card.Body>
<Card.Title>Depigmenting Intimate Serum(50ml) </Card.Title>
<Card.Text className="text-secondary">Evens Skin Tone, Moisturiese Skin & Restores PH L..</Card.Text>
<div className='cardrate text-center'>Rs 479 <strike className="text-secondary">RS 599</strike> </div> 
</Card.Body>
</Card>

<Card className="w-50  m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Flowtime-Duo-Pack-Medium.jpg" />
  <Card.Body>
<Card.Title>Flowtime Duo Pack</Card.Title>
<Card.Text className="text-secondary">100% Medical Grade Silicone | No leakage | Protect
</Card.Text>
<div className='cardrate text-center'>Rs 359 <strike className="text-secondary">RS 590</strike> </div> 
 </Card.Body>
 </Card>


 <Card className="w-50 m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/microwave-sterilizerr-2.jpg" />
 <Card.Body>
<Card.Title >Mentrual Cup Sterilizing Contianer(micro)..</Card.Title>
<Card.Text className="text-secondary"> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardrate text-center'>Rs 259 <strike className="text-secondary">RS 189</strike> </div> 
</Card.Body>
</Card>

</div>
</Carousel.Item >

<Carousel.Item >

<div className="  d-flex">

<Card className="col m-lg-3">
 <Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" />
<Card.Body>
<Card.Title>Mini Travell Carridge Razor</Card.Title>
<Card.Text className="text-secondary"> Replacable Carridge | pocket sized | Travel friendly...</Card.Text>
<div className='cardrate text-center'>Rs 413<strike className="text-secondary">RS 499</strike> </div> 

</Card.Body>
</Card>


<Card className="  col m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" />
 <Card.Body>
<Card.Title>Depigmenting Intimate Serum(50ml) </Card.Title>
<Card.Text className="text-secondary">Evens Skin Tone, Moisturiese Skin & Restores PH L..</Card.Text>
<div className='cardrate text-center'>Rs 479 <strike className="text-secondary">RS 599</strike> </div> 
</Card.Body>
</Card>

<Card className="  col m-lg-3 m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Flowtime-Duo-Pack-Medium.jpg" />
  <Card.Body>
<Card.Title>Flowtime Duo Pack</Card.Title>
<Card.Text className="text-secondary">100% Medical Grade Silicone | No leakage | Protect
</Card.Text>
<div className='cardrate text-center'>Rs 359 <strike className="text-secondary">RS 590</strike> </div> 
 </Card.Body>
 </Card>


 <Card className=" col m-lg-3 m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/microwave-sterilizerr-2.jpg" />
 <Card.Body>
<Card.Title >Mentrual Cup Sterilizing Contianer(micro)..</Card.Title>
<Card.Text className="text-secondary"> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardrate text-center'>Rs 259 <strike className="text-secondary">RS 189</strike> </div> 
</Card.Body>
</Card>


</div>
</Carousel.Item >
</Carousel>
</div>


        </>
    )
}

export default Spot;
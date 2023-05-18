import CollapsibleExample from "./Components/Navbar";
import Carousal1 from "./Components/carousal"
import Category from './Components/Cate';
import Carousel2 from './Components/Carousel2';
import Sol from './Components/solution';
import Car from './Components/Card';
import Spot from './Components/Spotlight';
import About from './Components/About';
import Contact from './Components/Contacts';

 function App() {
  return (
    <>    <div>
      < CollapsibleExample/>
      <Carousal1/>
      <div className="container-fluid text-center">
        <img className=" w-100 p-lg-5" src="https://files.thesirona.com/site-images/original/About-us-2.png" alt="" />
      </div>
      <Category/>
   
    </div>
    <Car />
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/3360x279.png" alt=""  />
    <img className='img-fluid p-lg-5 w-100' src="https://files.thesirona.com/site-images/original/hb.gif" alt=""  />
    <Carousel2 />
    <Sol />
    <Spot/> 
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Safety-Standard-Banner_3.png" alt=""  />
    
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Review_3.png" alt=""  />

    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Media-Coverage-Banner_3.png" alt=""  />

    <About />
    <br />
    <Contact />
   
   
    </>

  );
}
export default App;

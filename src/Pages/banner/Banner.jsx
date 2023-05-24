
import img1 from "../../assets/discount.png"
import img2 from "../../assets/order.png"
import img3 from "../../assets/delivery fast.png"
import img4 from "../../assets/Check your health from now on.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Banner = () => {
   
    return (
      <>
        <Carousel className=' text-center'>
             
             <div>
             <img className='rounded-xl bannerImg' src={img1} />
               
             
                 
             </div>
             <div>
             <img className='rounded-xl bannerImg' src={img2} />
           
             </div>
             <div>
             <img className=' rounded-xl bannerImg' src={img3} />
          
             </div>
             <div>
             <img className=' rounded-xl bannerImg' src={img4} />
           
             </div>
          
         </Carousel></>

    )
}
  

export default Banner;
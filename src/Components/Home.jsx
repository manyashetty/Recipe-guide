import './Home.css'
import { Carousel } from 'react-bootstrap';
import Food7 from "../Images/Food7.jpg";
import Food9 from "../Images/Food9.jpg";
import Food10 from "../Images/Food10.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
    return (
        // <div className='container-fluid'>
        //     <div id="carouselExampleFade" className="carousel slide carousel-fade">
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img src={require('../Images/Food9.jpg')} className="d-block w-100 img-fluid" alt="..." />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={require('../Images/Food7.jpg')} className="d-block w-100 img-fluid" alt="..." />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={require('../Images/Food10.jpg')} className="d-block w-100 img-fluid" alt="..." />
        //             </div>
        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>
        < >
        
         <div id="price">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src={Food7}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"People who love to eat are always the best people." - Julia Child</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={Food9}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"First we eat, then we do everything else." - M.F.K. Fisher</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={Food10}
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Food is symbolic of love when words are inadequate." - Alan D. Wolfelt</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
        );
}

export default Home;
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Food7 from "../Images/Food7.jpg";
import Food9 from "../Images/Food9.jpg";
import Food10 from "../Images/Food10.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
    return (
        < >
        
         <div id="price">
          <section>
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
    </section>
    {/* JUst Text as intro for website */}
   <section id="introText">
        <div class="container">
            <div class="text-center">
            <h1>Recipies for the foodiessss</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium. Cras posuere dolor risus. Pellentesque elementum ultricies quam, sit amet rhoncus nisl viverra in. Cras imperdiet nisi a euismod molestie. Ut a metus arcu. Pellentesque feugiat dictum erat. Nulla vehicula condimentum purus, quis imperdiet nisl ultricies eleifend. Nulla quis rhoncus risus. Ut vel vehicula urna.</p>
            </div>
        </div>

    </section>
    {/* <!--About--> */}
    <section id="aboutUs" class="secPad">
        <div class="container">
            <div class="heading text-center">
                {/* <!-- Heading --> */}
                <h2>get started with minimal ingride=ientt recipies </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="row">
                {/* <!-- item --> */}
                <div class="col-md-4 text-center tileBox">
                   <div class="txtHead"> <i class="fa fa-desktop"></i>
                    <h3>plainDesign</h3></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
                </div>
                {/* <!-- end: --> */}

                {/* <!-- item --> */}
                <div class="col-md-4 text-center tileBox">
                    <div class="txtHead"><i class="fa fa-css3"></i>
                    <h3>HTML5/CSS3 Dev</h3></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
                </div>
                {/* <!-- end: --> */}

                {/* <!-- item --> */}
                <div class="col-md-4 text-center tileBox">
                    <div class="txtHead"><i class="fa fa-lightbulb-o"></i>
                    <h3>JavaScript jQuery</h3></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
                </div>
                {/* <!-- end: --> */}
            </div>
        </div>
    </section>
    {/* <!--Quote--> */}
    <section id="quote" class="bg-parlex">
        <div class="parlex-back">
            <div class="container secPad text-center">
				<h2>If I asked people what they wanted, they would have said ‘Faster Horses’.</h2><h3>-Henry Ford</h3>
            </div>
            {/* <!--/.container--> */}
        </div>
    </section>
    </div>
    {/* <!-- Footer --> */}
			<footer id="footer">

				{/* <!-- Icons --> */}
					<ul class="actions">
						<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon fa-google-plus"><span class="label">Google+</span></a></li>
						<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
						<li><a href="#" class="icon fa-pinterest"><span class="label">Pinterest</span></a></li>
						<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
					</ul>

				{/* <!-- Menu --> */}
					<ul class="menu">
						<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

			</footer>
    </>
        );
}

export default Home;
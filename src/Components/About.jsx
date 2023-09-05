import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const About = () => {
    return (
        <div>
            <h1 className='team'>The TasteHealth Team</h1>
            <div className="mem">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div class="card">
                                <img src={require('../Images/per1.jpg')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Person 1</h5>
                                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, eligendi. Voluptate at odio, accusamus repellendus aliquam nihil eveniet repudiandae suscipit.</p>
                                        <a href="#" class="btn btn-primary">More</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card">
                                <img src={require('../Images/per3.jpg')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Person 2</h5>
                                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, eligendi. Voluptate at odio, accusamus repellendus aliquam nihil eveniet repudiandae suscipit.</p>
                                        <a href="#" class="btn btn-primary">More</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card">
                                <img src={require('../Images/per4.jpg')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Person 3</h5>
                                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, eligendi. Voluptate at odio, accusamus repellendus aliquam nihil eveniet repudiandae suscipit.</p>
                                        <a href="#" class="btn btn-primary">More</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card">
                                <img src={require('../Images/per5.jpg')} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Person 4</h5>
                                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, eligendi. Voluptate at odio, accusamus repellendus aliquam nihil eveniet repudiandae suscipit.</p>
                                        <a href="#" class="btn btn-primary">More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
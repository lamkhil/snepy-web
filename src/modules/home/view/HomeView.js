import React from 'react';
import playstore from './playstore.png';
import appstore from './appstore.png';
import phone from './phone.png';
import './HomeView.css'

function HomeView(props) {
    return (
        <div>
            <div className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center text-light">
                        <div className="col-12 text-end">
                            <h1 className="fw-bold">Increase your work<br />productivity with SNEPY!</h1>
                            <p className="lead">It's all about your convenience</p>
                            <a className='px-4 text-decoration-none text-light'>
                                Learn More
                            </a>
                            <button className="bg-light text-primary fw-bold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mastsolution">
                <div className="container h-100">
                    <div className="row h-100 align-items-center text-center">
                        <div className="col-12">
                            <h1 className="fw-bold text-primary">This is the solution you need!</h1>
                            <p className="lead">Smart neck pillow with thermal therapy and<br />ergonomic design</p>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div class="col rectanglesolution-primary text-light">
                                <br />
                                <img src="assets/solution1.png"></img>
                                <br />
                                <br />
                                <div className="fw-bold fs-6">
                                    Releasing Pain
                                </div>
                                <br />
                                <p className='fw-light'>
                                    Relaxes sore and stiff muscles that<br />arise due to non-ergonomic<br />position
                                </p>
                            </div>
                            <div class="col rectanglesolution">
                                <br />
                                <img src="assets/solution2.png"></img>
                                <br />
                                <br />
                                <div className="fw-bold fs-6">
                                    Increasing Concentration
                                </div>
                                <br />
                                <p className='fw-light'>
                                    Improving blood flow to the brain<br />that carries nutrients so that<br />concentration increases
                                </p>
                            </div>
                            <div class="col rectanglesolution">
                                <br />
                                <img src="assets/solution3.png"></img>
                                <br />
                                <br />
                                <div className="fw-bold fs-6">
                                    Maintaining Wellness
                                </div>
                                <br />
                                <p className='fw-light'>
                                    Prevent tension neck syndrome that<br />requires regular treatment to<br />physiotherapy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mastapp">
                <div className="container h-100">
                    <div className="row h-100 align-items-center text-light">
                        <div className="col-8 text-start">
                            <h1 className="fw-bold">Creating convenience suitable your needs</h1>
                            <br />
                            <p className="lead">Everyone has a different sensitivity to thermal therapy.<br />
                                You can set the heat level and duration according to<br /> your needs with the app.</p>
                            <div className="row">
                                <div className="col-md-2 py-4">
                                    <img src={playstore} height={40} width={120} alt={'phone'} />
                                </div>
                                <div className="col-md-2 py-4">
                                    <img src={appstore} height={40} width={120}  alt={'phone'} />
                                </div>
                            </div>

                        </div>
                        <div className="col-2 text-end">
                            <img src={phone} height={600} alt={'phone'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeView;
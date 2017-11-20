/**
 * Created by Naveen Kumawat on 26-10-2017.
 */

import React, {Component} from 'react'
import Slider from 'react-slick/dist/react-slick'


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,                
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    dots: false
};

const  images = [
    require("../assets/images/clients/clients-logo1.png"),
    require("../assets/images/clients/clients-logo2.png"),
    require("../assets/images/clients/clients-logo3.png"),
    require("../assets/images/clients/clients-logo4.png"),                         	                                                                                               
];

class Client extends Component {

    render() {
        return (                                                                         
            <div className="clientContainer" id="clients">

                <h2 style={{textAlign:'center'}}>Our Clients</h2>
                <p style={{textAlign:'center', width: '500px',left: 0,right: 0,margin: 'auto',marginBottom:'30px',fontSize:'medium'}}> Our client philosophy is anchored around the following core principles: Always serve with honesty, integrity and transparency. Always, first understand your business needs and objectives. Always think innovatively, deliver effectively!</p>
            <div className="clientBg">
                <div className="clientSlider">                                                                                                                                                                                                                                                                                                              
                <Slider {...settings}>                                                                                                              
				    
                    {          
					      
                            images.map((image, index) => {
                            return <div key={index} style={{width: "222px important", height: 'auto'}} > <img  src={image}/></div>
                        })
					              
                    }
				
                </Slider>               
                </div>

            </div>
            </div>
        )
    }
}    
export default Client;
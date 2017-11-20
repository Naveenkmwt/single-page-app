/**
 * Created by Naveen Kumawat on 22-09-2017.
 */
import React ,  {Component} from 'react'
import {Button} from 'semantic-ui-react'

class About extends Component{

    render(){
        return(
            <div className="aboutContainer" id="about">
            <div className="aboutStyle">
                <h3 className="aboutTitle">
                    Dynamic and <span style={{color: '#B7E907'}}>Stable Solution</span>
                    <hr/>                                                                         
                </h3>               
        <p className="aboutDescription_content" >     
            Combining proven expertise in technology, and an understanding of emerging business trends, Evozone delivers a wide assortment of services including website development and designs, E-commerce online solutions, web applications, web based enterprise solutions, e-business solutions, enterprise applications, professional web site design and development, CMS Softwares, Payment Gateway solutions. We study, design, develop, enhance, customize, implement, maintain and support various aspects of information technology.
        </p>
                <Button className='readMore' inverted size="large" color='grey'>Read More....</Button>
                           
            </div>
            </div>         
                      
        )     
    }                    
}
       
export default About;                  
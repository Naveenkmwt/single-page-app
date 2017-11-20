/**
 * Created by Naveen Kumawat on 21-09-2017.
 */
import  React,{Component} from 'react';
import { Grid,Image,Segment,Header,Icon } from 'semantic-ui-react'


class Service extends Component{

    render(){
        return(
       <div className="serviceContainer" id="service">
           <Header as='h4' icon className='iconHeading'>
               <Icon name='settings' />
               Services
               <Header.Subheader>
                 <hr/>
               </Header.Subheader>
           </Header>


            <Grid divided='vertically' stackable={true}>
                <Grid.Row>
                    <Grid.Column width={8} verticalAlign='middle'>
                        <Segment basic className='serviceImage' >
                            <Image src={require("../assets/images/service/bigdata.jpg")}/>
                        </Segment>

                            <Segment basic className='serviceContent' >
                                <h3>Big Data is a term that is gaining in interest</h3><br/>
                                Business in Modern world is shaping up with Big Data. In this posthaste evolving Digital Economy, all leading organizations have started serving Big Data for making daily decisions. We have all the tools required for nabbing large Data and serving it in Efficient & Profitable way.
                            </Segment>

                    </Grid.Column>
                    <Grid.Column width={8}>

                        <Segment basic className='serviceImage' >
                            <Image src={require("../assets/images/service/cloud.jpg")}/>
                        </Segment>

                        <Segment basic className='serviceContent' >
                            <h3>Cloud Computing</h3><br/>
                            Fed up of physical storage devices and expensive internal servers? Intorducing you Cloud Computing which is restructuring the method of accessing and sharing data. If you have voluminous Data and looking for efficient technology to match modern needs, your answer is Cloud Computing.
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment basic className='serviceImage' >
                            <Image src={require("../assets/images/service/mobileApp.jpg")}/>
                        </Segment>

                        <Segment basic className='serviceContent' >
                            <h3>Mobile Application Design & Development</h3><br/>
                            Are you looking to get a mobile app designed? Hire the right professionals to do the job for you painlessly, smoothly and quickly. With millions of apps now available at the App Store, iPhone and iPad application development on the iOS platform has never been this popular
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment basic className='serviceImage' >
                            <Image src={require("../assets/images/service/customsoftware.jpg")}/>
                        </Segment>

                        <Segment basic className='serviceContent' >
                            <h3>Custom Software Development</h3><br/>
                            We at Evozone are your one stop Destination to do anything with PHP, E-Commerce, APIs, Custom Web Development Services. Allow us to take you to new altitude all-togther with our highly professional and skilled Team. Come to us with any requirement you think and we will give you a concrete Solution
                        </Segment>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

           <div>

           </div>
       </div>
        )
    }
}
export default Service;
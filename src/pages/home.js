/**
 * Created by Naveen Kumawat on 18-09-2017.
 */
import React, {Component} from 'react';
import {Header, Segment, Grid, Tab, Icon, Menu, Image, Button} from 'semantic-ui-react'
import { Link  } from 'react-router'
import logo from   '../assets/images/line.png';
import sliderImage from '../assets/images/office-work.jpg';
import FakeImages from "../util/fakeImages/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick/dist/react-slick'                                                                                                   
import UpperHeader from "../components/header/upper-header";
import Service from './service';
import About from './about';                                                                                                  
import ContactUs from './contactUs';
import Client from './clients';
import Scrollspy from 'react-scrollspy'
import Sticky from 'react-sticky-el';
import Footer from './footer'

const settings = {
    dots: false,                                     
    autoPlaySpeed: 2000,                                  
    autoplay: true,
    speed: 500,
    arrows: false,
    prevArrow: <Button size="huge" inverted circular icon='settings'/>,
    nextArrow: <Button size="huge" circular icon='settings'/>                                                                
};

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {      
            panes: [
                {menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>},
                {menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>},
                {menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>},
            ]                                
        }               

    }

    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name});


    getDeviceInfo() {
        const height = screen.height;
        const width = screen.width;
        if (width < 600) {
            return "mobile";
        }
        return "computer";
    }

    render() {
        const {activeItem} = this.state


        return (
            <div id="home">
               <div className="headerContainer">
                <div className="app-header">

                    {
                        <UpperHeader device={this.getDeviceInfo()}/>
                    }
                    <Sticky>
                    <Segment className='lowerHeader'  style={{marginBottom: 0}}>

                        <Grid>                     
                            <Grid.Column mobile={16} computer={8}>
                                <Grid>
                                    <Grid.Column width={3}>
                                        <Image src={logo} size='tiny'/>
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        <h3 className="companyName">SinglePage Technology</h3>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Scrollspy
                                    items={ ['home', 'about','service', 'contact', 'clients'] }
                                    currentClassName="is-current"
                                    isSticky="true"
                                    className="c-side-nav__list nav-list"
                                    style={ {fontWeight: 300} }
                                    offset={ -20 }
                                    onUpdate={
                                        (el) => {
                                            console.log(el)
                                        }
                                    }
                                >
                                                                                                                                            
                                    <Menu className='menuItem' secondary pointing size='large' stackable>
                                        <Menu.Item  link name='Home' as={Link} href='#home' active={activeItem === 'Home'}
                                                   onClick={this.handleItemClick}/>
                                        <Menu.Item link name='Services' as={Link} href='#service'
                                                   active={activeItem === 'Services'}
                                                   onClick={this.handleItemClick}/>
                                        <Menu.Item name='About' as={Link} href='#about' link={true}
                                                   active={activeItem === 'About'}
                                                   onClick={this.handleItemClick}/>
                                        <Menu.Item name='Contact US' as={Link} href='#contact' link={true}
                                                   active={activeItem === 'Contact US'}
                                                   onClick={this.handleItemClick}/>
                                        <Menu.Item name='Our Clients' as={Link} href='#clients' link={true}
                                                   active={activeItem === 'Our Clients'}
                                                   onClick={this.handleItemClick}/>
                                    </Menu>


                                </Scrollspy>


                            </Grid.Column>

                        </Grid>
                    </Segment>
                    </Sticky>
                                                        
                </div>
               </div>

                <div className='sliderContainer'>
                    <Slider {...settings}>
                        {
                            FakeImages.map((image, index) => {
                                return <img key={index} style={{width: "100%", height: "500px"}} src={image}/>

                            })
                        }
                    </Slider>
                </div>
                <div className="bodyContainer">

                <Segment basic>
                    <Service/>
                </Segment>              

                <About/>
                <Client/>
            <ContactUs/>
                    {/*<Footer/>*/}
               </div>
            </div>          


        );
    }
}
export default Home;

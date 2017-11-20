/**
 * Created by Naveen Kumawat on 20-09-2017.
 */
import  React, {Component} from "react";
import {Header, Segment, Grid, Tab, Icon, Menu, Link, Image, Button} from 'semantic-ui-react'


class UpperHeader extends Component {


    render() {
        return (
            <Segment className='uppderHeader'>
                {

                        <Grid>
                            {/*-------------------phone number----------------------------------*/}
                            <Grid.Column width={1} textAlign="right" style={{paddingRight:1}}>
                                <Icon size='large' name='volume control phone'/>
                            </Grid.Column>
                            <Grid.Column width={3} only="computer" style={{paddingLeft:1}}>+91-141 1234589</Grid.Column>

                            {/*----------------------Skype----------------------------------*/}

                            <Grid.Column width={2} textAlign="right" style={{paddingRight:1}}></Grid.Column>

                            <Grid.Column width={1} textAlign="right" style={{paddingRight:1}}>
                                <Icon size='large' name='skype'/>
                            </Grid.Column>
                            <Grid.Column width={1} only="computer" style={{paddingLeft:1}}>
                                <a href="skype:webrefineindia"> naveenkumawat</a></Grid.Column>
                            {/*----------------------Email--------------------------------------*/}

                            <Grid.Column width={1} textAlign="right" style={{paddingRight:1}}>
                                <Icon size='large' name='mail outline'/>
                            </Grid.Column>
                            <Grid.Column width={3} only="computer" style={{paddingLeft:1}}>
                                <a href="mailto:naveenkumawat@gmail.com"> naveenkumawat@gmail.com</a>
                            </Grid.Column>

                            {/*<Grid.Column computer={12} textAlign="right">

                                <Icon size='large' name='skype'/>
                                naveenkumawat &nbsp;&nbsp;*/}
                        <Grid.Column width={4} >
                               {/* <Icon size='large' name='mail outline'/>
                                naveenkumawat@gmail.com     &nbsp;&nbsp;*/}

                                <Icon className='facebook' size='large' name='facebook'/>

                                <Icon link={true} className='square' size='large' name='google plus square'/>
                            </Grid.Column>
                        </Grid>
                }
            </Segment>
        );
    }
}
export  default UpperHeader;

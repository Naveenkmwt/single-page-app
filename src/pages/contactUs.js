/**
 * Created by Naveen Kumawat on 23-09-2017.
 */

import  React, {Component} from 'react';
import {Grid,Icon,Header,Form,Checkbox,Button,Input} from 'semantic-ui-react'


class ContactUs extends Component {

    render() {
        return (
            <div id="contact">


                <div className="contactUsContainer">
                    <div className="contactHeader">
                    <Grid>
                        <Grid.Row style={{marginRight:'280px'}}>
                            <Grid.Column width={3}/>

                            <Grid.Column textAlign="right" width={3}>
                                <div style={{color: '#232323',lineHeight: '25px'}}><Icon style={{marginRight:'50px'}} size='big' name="marker"/>
                                <h4>VISIT OUR OFFICE</h4>
                                    <p style={{color:'#6f6f6f', textAlign:'center'}}>C-29 jhotwara,jaipur,<br/>rajasthan</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}/>
                            <Grid.Column textAlign="right" width={3}>
                                <div style={{color: '#232323',lineHeight: '25px'}}><Icon style={{marginRight:'23px'}} size='big' name="wechat"/>
                                    <h4>LETS TALK</h4>
                                    <p style={{color:'#6f6f6f', textAlign:'right'}}>+91-1234567784<br/>+91-01411245725</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}/>
                            <Grid.Column textAlign='left' width={2}>
                                <div style={{color: '#232323',lineHeight: '25px'}}><Icon style={{marginLeft:'18px'}}  size='big' name="mail outline"/>
                                    <h4>E-MAIL US</h4>
                                    <p style={{color:'#6f6f6f', textAlign:'left'}}>info@singlePage.com<br/>
                                    hr@singlePage.com</p>
                                </div>
                            </Grid.Column>
                         {/*   <Grid.Column>
                                <div><Icon size='big' name="facebook f"/></div>
                            </Grid.Column>*/}
                        </Grid.Row>

                    </Grid>
                    </div>
                    <div className="contactUsFormContainer">
                    <Grid className='contactUsFormGrid'>
                        <Grid.Column  width={8} style={{padding:'0px'}}>
                            <div className="contactUsFormImage"></div>
                        </Grid.Column>

                        <Grid.Column width={8} style={{background:'#333'}}>
                            <div className="contactUsFormHeading">FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</div>
                           <div style={{marginTop: '40px',width: '400px',marginLeft: '100px'}}>
                            <Form className="transparent-form">
                                {/*<label style={{color:'6f6f6f'}}>First Name</label>*/}

                                <Form.Field >
                                    <Input  placeholder='First Name' />
                                </Form.Field>
                                {/*<label style={{color:'6f6f6f'}}>Contact No.</label>*/}

                                <Form.Field>
                                    <Input   placeholder='Contact No.' />
                                </Form.Field>
                                {/*<label style={{color:'6f6f6f'}}>Email</label>*/}

                                <Form.Field>
                                    <Input  placeholder='Email' />
                                </Form.Field>
                                {/*<label style={{color:'6f6f6f'}}>Message</label>*/}
                                <Form.Field>
                                    <Form.TextArea style={{background:'transparent',border:'none',borderBottom:'1px solid #737272'}}  placeholder='Write your message here ...' />
                                </Form.Field>


                                <Button primary>Submit</Button>

                            </Form>
                           </div>

                        </Grid.Column>
                    </Grid>
                    </div>

                </div>
            </div> )
    }
}

export default ContactUs;
        /* <div className="contact-us-background-image-container"></div>
                <Grid className="contactAddress" columns={2}>
                       
                    <Grid.Row className="contactRow">      
                        <Grid.Column >
                            <Grid.Column><Icon  circular size='large' name='marker'/>c-29 shakar nagar jhotwara jaipur,302012</Grid.Column>

                               
							                                                               
                            <Icon  circular size='large' name='mail outline'/>
                            <a  style={{color:'ghostwhite'}} href="mailto:naveenkumawat@gmail.com"> naveenkumawat@gmail.com</a><br/>
                            <Icon  className='contactIcon' circular size='large' name='skype'/>
                            <a style={{color:'ghostwhite'}} href="skype:webrefineindia"> naveenkumawat</a><br/>
                            <Icon className='contactIcon' circular size='large' name='mobile'/> 1231456221
                                  
                             
                        </Grid.Column>
                        <Grid.Column>
                            <Form  className='transparent-form'>
                                <label style={{color:'ghostwhite'}}>First Name</label>

                                <Form.Field >
                                    <Input  placeholder='First Name' />
                                </Form.Field>
                                <label style={{color:'ghostwhite'}}>Contact No.</label>

                                <Form.Field>
                                    <Input   placeholder='Contact No.' />
                                </Form.Field>
                                <label style={{color:'ghostwhite'}}>Email</label>

                                <Form.Field>
                                    <Input  placeholder='Email' />
                                </Form.Field>
                                <label style={{color:'ghostwhite'}}>Message</label>
                    
                                <Form.Field>
								<Form.TextArea label='Message' placeholder='write your message here ...' />
                                </Form.Field>

      
                                <Button inverted  type='submit'>Submit</Button>
                            </Form>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
`
            </div>*/


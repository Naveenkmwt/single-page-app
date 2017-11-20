/*
/!**
 * Created by Naveen Kumawat on 25-09-2017.
 *!/
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react';
import React,{Component} from 'react';



export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>        
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBZo2JQ2q0uxYezOiceScpLXBkAYEHpBbM')
})(MapContainer)*/

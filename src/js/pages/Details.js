import React from "react";

import Restaurant from "../components/Restaurant";

const urlForRestaurants = '../../json/restaurants.json'

export default class Archives extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      restaurant: {
  	    "name": null,
  	    "backgroundImageURL": null,
  	    "category" : null,
        "contact": {
          "formattedPhone": null,
          "twitter": null
        },
        "location": {
          "formattedAddress": []
        }
    	}
    }
  }

  componentDidMount() {
    const that = this;

    fetch(urlForRestaurants)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(that.props.params.restaurant);
        const currentRestaurant = data.restaurants[that.props.params.restaurant];
        if (currentRestaurant.contact === null ) {
          currentRestaurant.contact = {
            "formattedPhone": null,
            "twitter": null
          }
        }
        that.setState({restaurant: data.restaurants[that.props.params.restaurant]});
        console.log({center: {lat: that.state.restaurant.location.lat, lng: that.state.restaurant.location.lng}})
        const myLatLng = {lat: that.state.restaurant.location.lat, lng: that.state.restaurant.location.lng};

        const map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 15
        });
        const marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: that.state.restaurant.name
        });
      });
  }

  render() {
    const divStyle = {
      display: 'block',
    };
    return (
      <div class="detail-items" style={divStyle}>
        <div id="map">
        </div>
        <div class="company-info">
          <div class="company-title">{this.state.restaurant.name}</div>
          <div class="category-type">{this.state.restaurant.category}</div>
        </div>
        <div class="contact">
          <div>
            {this.state.restaurant.location.formattedAddress[0]}<br />
            {this.state.restaurant.location.formattedAddress[1]} {this.state.restaurant.location.formattedAddress[2]}
          </div>
          <div>{this.state.restaurant.contact.formattedPhone}</div>
          <div>@{this.state.restaurant.contact.twitter}</div>
        </div>
      </div>
    );
  }
}

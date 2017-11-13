import React from "react";
import Restaurant from "../components/Restaurant";

const urlForRestaurants = '../../json/restaurants.json'

export default class Featured extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      restaurants: [{
  	    "name": null,
  	    "backgroundImageURL": null,
  	    "category" : null,
        "contact": null,
        "location": null
    	}]
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
        that.setState({restaurants: data.restaurants});
      });
  }
  
  render() {
    const Restaurants = this.state.restaurants.map((data, i) => <Restaurant key={i} dataIndex={i} name={data.name} category={data.category} backgroundImageURL={data.backgroundImageURL}/> );

    const divStyle = {
      display: 'block',
    };
    return (
      <div class="list-block" style={divStyle}>
        {Restaurants}
      </div>
    );
  }
}

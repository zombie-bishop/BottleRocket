import React from "react";
import { Link } from "react-router";

export default class Restaurant extends React.Component {
  render() {
    const divStyle = {
      backgroundImage:"url('" + this.props.backgroundImageURL + "')",
      backgroundSize:'cover',
      width: '100%',
    };
    const linkUri = "details/" + this.props.dataIndex;
    return (
        <div class="list-item" style={divStyle}>
          <div class="shader-back">
            <div class="company-info">
              <Link to={linkUri}>
                <div class="company-title">{this.props.name}</div>
                <div class="category-type">{this.props.category}</div>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-item'>
          <a className='footer-lunch'>
            <img src='./images/tab_lunch@2x.png' /><br/>
            Lunch
          </a>
        </div>
        <div className='footer-item'>
          <a><img src='./images/tab_internets@2x.png' /><br/>
          Internets</a>
        </div>
      </div>
    );
  }
}

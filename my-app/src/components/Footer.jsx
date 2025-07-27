import React from 'react';

const Footer = () => (
  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui three column grid">
        <div className="column">
          <h4>Explore</h4>
          <div className="ui link list">
            <a className="item">Home</a>
            <a className="item">Articles</a>
            <a className="item">Tutorials</a>
          </div>
        </div>
        <div className="column">
          <h4>Support</h4>
          <div className="ui link list">
            <a className="item">FAQs</a>
            <a className="item">Help</a>
            <a className="item">Contact Us</a>
          </div>
        </div>
        <div className="column">
          <h4>Stay connected</h4>
          <div className="ui horizontal list">
            <a className="item"><i className="facebook icon"></i></a>
            <a className="item"><i className="twitter icon"></i></a>
            <a className="item"><i className="instagram icon"></i></a>
          </div>
        </div>
      </div>
      <div className="ui center aligned">
        DEV@Deakin 2022
        <div className="ui horizontal list">
          <a className="item">Privacy Policy</a>
          <a className="item">Terms</a>
          <a className="item">Code of Conduct</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
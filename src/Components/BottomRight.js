import React from "react";
import { Link } from "react-router-dom";
class BottomRight extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="FooterRight">
        <div className="d-flex footerDesno">
          <button className="circle insta">
            <a href="https://www.instagram.com/brainsterco/" target="_blank">
              <i className="fab fa-instagram pd pad" />
            </a>
          </button>
          <button className="circle fb">
            <a href="https://www.facebook.com/brainster.co" target="_blank">
              <i className="fab fa-facebook-f pad a" />
            </a>
          </button>
          <Link to="/about/">
            <button className="circle">
              <i className="fas fa-ellipsis-h pad a" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BottomRight;

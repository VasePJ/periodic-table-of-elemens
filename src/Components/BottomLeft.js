import React from "react";

class BottomLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FooterLeft">
        <div className="d-flex justify-content footerLevo">
          <button className="circle en" onClick={this.props.language}>
            <span className="pad">{this.props.button}</span>
          </button>
          <button className="circle icon" onClick={this.props.mute}>
            {this.props.soundOff ? (
              <i className="fas fa-volume-off" />
            ) : (
              <i className="fas fa-volume-up" />
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default BottomLeft;

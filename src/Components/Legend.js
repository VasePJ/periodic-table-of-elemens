import React from "react";

const Legend = props => {
  return (
    <div className="legend text-center">
      <h6>{props.legend}</h6>

      <div className="text-left bor">
        <div className="d-flex justify-content-between">
          <span className="font">
            <span>
              <i className="fas fa-square AL" />
              {props.legendOne}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square AEM" />
              {props.legendTwo}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square" />
              {props.legendThree}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square L" />
              {props.legendFour}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square AC" />
              {props.legendFive}
            </span>
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="font">
            <span>
              <i className="fas fa-square OM" />
              {props.legendSix}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square M" />
              {props.legendSeven}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square NM" />
              {props.legendEight}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square H" />
              {props.legendNine}
            </span>
          </span>
          <span className="padding-left font">
            <span>
              <i className="fas fa-square NB" />
              {props.legendTen}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Legend;

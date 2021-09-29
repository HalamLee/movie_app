import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail-wrapper">
          <div className="detail-container">
            <img src={location.state.poster} />
            <span>{location.state.title}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;

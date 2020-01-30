import React from "react";
import img from "../android-chrome-512x512.png";

class ContainerCard extends React.Component {
  state = { time: null, date: null };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
      });
    }, 1000);
  }

  render() {
    return (
      <div className="ui container">
        <i>
          <div className="date-time">
            <p>
              Date: <b>{this.state.date}</b>
            </p>
            <img
              className="ui image"
              style={{ width: 50, height: 50, paddingBottom: 10 }}
              src={img}
              alt="Senior Tube"
            />
            <p>
              Current Time: <b>{this.state.time}</b>
            </p>
          </div>
        </i>
        <div className="">{this.props.children}</div>
      </div>
    );
  }
}

export default ContainerCard;

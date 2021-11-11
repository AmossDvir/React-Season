import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { lat: null, errMessage: "" };
//   }

// Constructor method declaration is equivalent to this line: 
state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    // Show Error message:
    if (this.state.errMessage && !this.state.lat) {
      return (
        <div className="ui content">
          There was an error: {this.state.errMessage}
        </div>
      );
    }
    // Show Latitude:
    if (!this.state.errMessage && this.state.lat) {
      return <div className="ui content">
      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
      </div>;
    }
    return <div className="ui content"><Loader message="Please Allow Location"></Loader></div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

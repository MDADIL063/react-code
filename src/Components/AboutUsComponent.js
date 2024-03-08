import React from "react";
import UserClass from "./UserClass";

class AboutUsComponent extends React.Component {
  constructor() {
    super();
    // console.log("AboutUsComponent constructor");
  }

  componentDidMount() {
    // console.log("AboutUsComponent componentDidMount");
  }

  render() {
    // console.log("AboutUsComponent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food Ordering Website</h2>
        <UserClass />
      </div>
    );
  }
}

export default AboutUsComponent;

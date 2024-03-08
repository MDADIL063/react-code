import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        login: "123",
        followers: "",
        url: "",
        id: "",
      },
    };

    // console.log("user constructor" + this.state.userInfo.login);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MDADIL063");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log("user componentDidMount" + this.state.userInfo.login);
  }
  componentDidUpdate() {
    // console.log("user componentDidUpdate" + this.state.userInfo.login);
  }

  render() {
    // console.log("user render" + this.state.userInfo.login);
    const { login, id, followers, url } = this.state.userInfo;
    return (
      <div className="about-card">
        <h3>Name: {login}</h3>
        <h5>ID: {id} </h5>
        <h5>github url: {url}</h5>
        <h5>followers: {followers}</h5>
      </div>
    );
  }
}

export default UserClass;

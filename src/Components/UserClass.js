import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name:"dfdsf",

    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/chitraTech");

    const datajson = await data.json();

    this.setState({ name: datajson });
  }

  render() {
   

    const {name}=this.state.name;
    return (
      <>

        <h2>{name}</h2>
        <h4>Designation</h4>
        <p>description</p>
      </>
    );
  }
}

export default UserClass;

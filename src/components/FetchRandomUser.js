import React from "react";

export default class RandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=4";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>There are no people</div>;
    }

    return (
      <div>
        {this.state.people.map((person) => (
          <div key={person.login.uuid}>
            <img src={person.picture.large} alt=""></img>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <div>{person.gender}</div>
          </div>
        ))}
      </div>
    );
  }
}

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    clickedOn:[],
    
  };
  shuffleFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    var friends1=this.state.clickedOn
    const friends = this.state.friends.sort(function() {
      return 0.5 - Math.random();
    });
    this.setState({ friends });
    console.log(friends1)
    if(friends1.includes(id)){
      console.log("already clicked")
      this.alreadyClicked(id)
    }else{
    friends1.push(id)
    this.setState({
      clickedOn:friends1
    })
  };
}
  alreadyClicked = id => {
    
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
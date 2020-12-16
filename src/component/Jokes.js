import React, { Component } from 'react';


class Jokes extends Component {


  state = {
    jokes: []
    
  }
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random?category=science')
    .then(res => res.json())
    .then((data) => {
      this.setState({ jokes: data })
      console.log(this.state.jokes)

    })
    .catch(console.log)
  }

   
   

    render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.jokes.map((joke) => (
          <div className="card">
            <div className="card-body">
             <h3>{joke.value}</h3>             
            </div>
          </div>
        ))}
        </div>
       </div>
   );
  }
}
export default Jokes;








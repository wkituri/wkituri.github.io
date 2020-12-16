import React, { Component } from 'react';
import Jokes from './component/Jokes';

class App extends Component {


  state = {
    categories: []
    
  }
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => res.json())
    .then((data) => {
      this.setState({ categories: data })
      console.log(this.state.categories)

    })
    .catch(console.log)
  }

   
   render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>Chuck Noriss Jokes</h1>
        <h3>Categories</h3>
        {this.state.categories.map((category) => (
          <div className="card">
            <div className="card-body">
             <h5 className="card-title">{category}</h5>            
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;
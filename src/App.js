import React, { Component } from 'react';
import fire from './fire';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dictionary: [],
      word: ''
    };
  }

  componentDidMount() {
    this.getDictionary();
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async getDictionary() {
    const snapshot = await fire.firestore().collection('baby_words').get()
    const dictionary = snapshot.docs.map(doc => doc.data());
    this.setState({
      dictionary: dictionary
    })
  }

  addWord = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.collection("baby_words").add({
      _baby: "babies/noah-phillips",
      timestamp: Date(),
      word: this.state.word
    });
    this.setState({
      word: '',
      dictionary: this.state.dictionary
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.addWord.bind(this)}>
            <input
              type="text"
              name="word"
              placeholder="Enter a word"
              onChange={this.updateInput}
              value={this.state.word}
            />
            <button type="submit">Submit</button>
          </form>
          {this.state.dictionary.map((obj) => <li key={obj.word}>{obj.word}</li>)}
        </header>
      </div>
    );
  }
}

export default App;
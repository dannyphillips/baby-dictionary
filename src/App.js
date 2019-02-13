import React, { Component } from "react";
import fire from "./fire";
import "./App.css";

import Header from './Header'
import WordCloud from './WordCloud'
import SidePane from './SidePane'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dictionary: [],
      word: ""
    };
  }

  componentDidMount() {
    this.getDictionary();
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async getDictionary() {
    const snapshot = await fire
      .firestore()
      .collection("baby_words")
      .get();
    const dictionary = snapshot.docs.map(doc => doc.data());
    this.setState({
      dictionary: dictionary
    });
  }

  addWord = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.collection("baby_words").add({
      _word: "",
      _baby: "babies/noah-phillips",
      timestamp: Date(),
      text: this.state.word
    });
    this.setState({
      word: "",
      dictionary: this.state.dictionary
    });
  };

  render() {
    return (
      <div className="App">
        <Header word={this.state.word} updateInput={this.updateInput} addWord={this.addWord}/>
        <div className="container">
          <WordCloud dictionary={this.state.dictionary}/>
          <SidePane dictionary={this.state.dictionary} selectedWord={{name: "mama", timestamp: Date()}}/>
        </div>
      </div>
    );
  }
}

export default App;

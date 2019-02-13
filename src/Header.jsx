import React from 'react'
import RangeSlider from './RangeSlider';
import "./Header.css";

const Header = ({updateInput, word, addWord}) => {
  return (
    <header className="App-header">
      <div className="left">
        <img className="logo" src="logo.png"></img>
        <h1 className="title">Baby Dictionary</h1>
      </div>
      <div className="right">
        {"Months: "}
        <RangeSlider />
        <form onSubmit={addWord}>
          <input
            className="input"
            type="text"
            name="word"
            placeholder="Enter a word"
            onChange={updateInput}
            value={word}
          />
          <button className="button" type="submit">+ Word</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
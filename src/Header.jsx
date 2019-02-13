import React from 'react'
import Slider from 'rc-slider'
import "./Header.css";

const Range = Slider.Range;

const header = ({updateInput, word, addWord}) => {
  return (
    <header className="App-header">
      <div className="left">
        <img className="logo" src="logo.png"></img>
        <h1 className="title">Baby Dictionary</h1>
      </div>
      <div className="right">
        <div className="range">
          <Range allowCross={false} defaultValue={[0, 20]} onChange={""} />
        </div>
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

export default header;
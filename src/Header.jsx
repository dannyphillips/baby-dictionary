import React from 'react'
import Switch from 'react-switch'
import RangeSlider from './RangeSlider';
import "./Header.css";

const Header = ({updateInput, handleSwitch, checked, word, addWord}) => {
  return (
    <header className="App-header">
      <div className="left">
        <img className="logo" src="logo.png"></img>
        <h1 className="title">Baby Dictionary</h1>
      </div>
      <div className="right">
        <label htmlFor="normal-switch">
          <Switch
            onChange={handleSwitch}
            checked={checked}
            id="normal-switch"
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={12}
            width={48}
            className="react-switch"
          />
        </label>
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
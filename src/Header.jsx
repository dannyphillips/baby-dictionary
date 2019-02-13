import React from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./SliderComponents";
import "./Header.css";

const sliderStyle = {  // Give the slider some width
  position: 'relative',
  marginTop: 20,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 2,
  borderRadius: 5,
  backgroundColor: '#8B9CB6',
}

const header = ({updateInput, word, addWord}) => {
  return (
    <header className="App-header">
      <div className="left">
        <img className="logo" src="logo.png"></img>
        <h1 className="title">Baby Dictionary</h1>
      </div>
      <div className="right">
        <div className="range">
          <Slider
            rootStyle={sliderStyle}
            domain={[0, 100]}
            step={1}
            mode={2}
            values={[10, 30]}
          >
            <Rail>
              {({ getRailProps }) => (
                <div style={railStyle} {...getRailProps()} />
              )}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={[]}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
            {/* <Ticks count={15}> // generate approximately 15 ticks within the domain
              {({ ticks }) => (
                <div className="slider-ticks">
                  {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                  ))}
                </div>
              )}
            </Ticks> */}
          </Slider>
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
import React from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./RangeSliderComponents";
import "./RangeSlider.css";

const RangeSlider = () => {
  return (
    <div className="range">
      <Slider
        domain={[0, 24]}
        step={1}
        mode={2}
        values={[10, 30]}
        className="slider"
      >
        <Rail>
          {({ getRailProps }) => (
            <div className="rail" {...getRailProps()} />
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
        <Ticks count={24}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
}

export default RangeSlider;
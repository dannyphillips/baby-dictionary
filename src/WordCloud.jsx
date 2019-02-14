import React from 'react'
import TagCloud from "react-tag-cloud";

import "./WordCloud.css";

const WordCloud = ({dictionary}) => {
  return (
    <div className="app-outer">
      <div className="app-inner">
        <TagCloud
          className="tag-cloud"
          style={{
            fontFamily: "sans-serif",
            fontSize: 30,
            padding: 5
          }}
        >
          {dictionary.map(obj => (
            <div className="large" key={obj.text}>{obj.text}</div>
          ))}
        </TagCloud>
      </div>
    </div>
  );
}

export default WordCloud;
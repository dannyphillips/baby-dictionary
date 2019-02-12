import React from 'react'
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";

const styles = {
  large: {
    fontSize: 60,
    fontWeight: "bold",
    color: randomColor()
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

const WordCloud = ({dictionary}) => {
  return (
    <div className="app-outer">
      <div className="app-inner">
        <TagCloud
          className="tag-cloud"
          style={{
            fontFamily: "sans-serif",
            fontSize: 30,
            color: () =>
              randomColor(),
            padding: 5
          }}
        >
          {dictionary.map(obj => (
            <div style={styles.large} key={obj.word}>{obj.word}</div>
          ))}
        </TagCloud>
      </div>
    </div>
  );
}

export default WordCloud;
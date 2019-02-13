import React from 'react'

import "./SidePane.css";

const SidePane = ({dictionary, selectedWord}) => {
  return (
    <div className="pane">
      <div className="count">{dictionary.length}</div>
      <div className="info">
        <p>
          <b>Name: </b>
          {selectedWord.name}
        </p>
        <p>
          <b>Created: </b>
          {selectedWord.timestamp}
        </p>
      </div>
    </div>
  );
}

export default SidePane;
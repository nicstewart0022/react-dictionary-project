import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="nonreferrer noopener">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

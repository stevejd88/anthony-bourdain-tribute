import React from 'react';
import Image from 'react-bootstrap/Image'

const Year = (props) => (

    <div className="year-info">
      <Image className="timeline-pic" src={ props.img } fluid />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
);

export default Year;

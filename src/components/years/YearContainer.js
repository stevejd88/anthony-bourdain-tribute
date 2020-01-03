import React from 'react';
import Year from './Year';

const YearContainer = (props) => {
  let years = props.data.map((year) => {
    return <Year desc={year.desc}
                  title={year.title}
                  img={year.img}/>
  });

  return (
    <div className="year-info">
      {years}
    </div>
  )
}

export default YearContainer;

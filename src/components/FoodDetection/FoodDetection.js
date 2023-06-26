import React from 'react';
import './FoodDetection.css';

const FoodDetection = ({ imageUrl, data }) => {
  return (
    <div className='center ma flex'>
      <div className='mt2 mr2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
      </div>
      {data.length ? <div className='mt2 mr2 ba bw2 w4 pa3' id='display'>{data.map((element) => <ul className='list pl0'><li className='f3 b'>{element}</li></ul>)}</div> : null}
    </div>
  );
}

export default FoodDetection;
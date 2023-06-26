import React from 'react';
import './ImageLink.css';

const ImageLink = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f2 lh-title b'>
        {'This App will detect food items in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLink;
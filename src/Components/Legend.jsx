import React from 'react';

const Legend = ({legendItems}) => {
  return ( 
    <div style={{
      display: 'flex',
      alignItems: 'stretch'
    }}>
      {legendItems.map((item, i) => (
        <div key={i} style={{
          backgroundColor: item.color,
          color: item.textColor,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10vh',
          fontWeight: 'bold',
          fontSize: '1em'
        }}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
 
export default Legend;
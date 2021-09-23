import React from 'react';

export const ColorContainer = ({ palette }) => {
  console.log(palette);
  return (
    <div className="colorBlock">
      {palette.map((color) => (
        <div
          key={color}
          style={{ background: color, width: '75px', height: '75px' }}
          onClick={() => {
            navigator.clipboard.writeText(color);
          }}
        />
      ))}
    </div>
  );
};

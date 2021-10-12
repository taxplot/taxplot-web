import React from 'react';

export const ColorContainer = ({ palette }) => {
  const buttonStyle = {
    border: 'none',
    padding: '5px 5px',
  };
  return (
    <div className="colorBlock">
      {palette.map((color) => (
        <button
          key={color}
          style={buttonStyle}
          onClick={() => {
            navigator.clipboard.writeText(color);
          }}
          onKeyDown={() => {
            navigator.clipboard.writeText(color);
          }}
        >
          <div
            style={{
              background: color,
              width: '75px',
              height: '75px',
              border: '3px solid #000',
            }}
          />
        </button>
      ))}
    </div>
  );
};

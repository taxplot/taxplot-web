import React from 'react';

export const MapLegend = ({
  state,
  data,
  width,
  height,
  margins,
  legendPortion,
}) => {
  let message =
    'Colored states have some form of domestication laws on the books. Hover for more detail.';
  if (state) {
    if (data) {
      message = state + ' allows redomestication of ' + data + '.';
    } else {
      message = state + ' does not have redomestication laws.';
    }
  }
  return (
    <>
      <foreignObject
        width={(width - margins.left - margins.right) * legendPortion}
        height={height / 2 + margins.top}
        x={(width - margins.left) * (1 - legendPortion)}
        y={(height - margins.top - margins.bottom) / 3}
      >
        <div xmlns="http://www.w3.org/1999/xhtml">{message}</div>
      </foreignObject>
    </>
  );
};

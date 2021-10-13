import React from 'react';
import { format } from 'd3';

export const MapLegend = ({
  state,
  data,
  width,
  height,
  margins,
  legendPortion,
  maxColor,
  minColor,
}) => {
  return (
    <>
      <foreignObject
        width={(width - margins.left - margins.right) * legendPortion}
        height={height / 2 + margins.top}
        x={(width - margins.left) * (1 - legendPortion)}
        y={(height - margins.top - margins.bottom) / 3}
      >
        <div xmlns="http://www.w3.org/1999/xhtml">
          {state && data
            ? state +
              "'s governor earns " +
              format('($,.0f')(data.GovSalary) +
              ' or ' +
              format('.2f')(data.multiple) +
              " times the state's median household income of " +
              format('($,.0f')(data.medianHHIncome) +
              '.'
            : "Darker color indicates greater inequality between the Governor's salary and the states median household income. Mouse over any state for more detail."}
        </div>
      </foreignObject>
    </>
  );
};

// <rect
//         width={width / 40}
//         height={width / 40}
//         x={(width - margins.left) * (1 - legendPortion)}
//         y={(height - margins.top - margins.bottom) / 4 + 25}
//         fill={maxColor}
//         stroke="black"
//       />
//       <text
//         x={(width - margins.left) * (1 - legendPortion)}
//         y={(height - margins.top - margins.bottom) / 4 + 25}
//       >
//         High salary relative to median household.
//       </text>
//       <rect
//         width={width / 40}
//         height={width / 40}
//         x={(width - margins.left) * (1 - legendPortion)}
//         y={(height - margins.top - margins.bottom) / 4 - width / 25 + 100}
//         fill={minColor}
//         stroke="black"
//       />

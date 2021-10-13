import {
  geoPath,
  geoAlbersUsa,
  scaleSequential,
  interpolateYlOrBr,
  extent,
  max,
  min,
} from 'd3';
import React, { useState, useEffect } from 'react';
import { MapLegend } from './MapLegend';

export const Marks = ({
  mapData: { states },
  data,
  width,
  height,
  margins,
  legendPortion,
}) => {
  const [activeState, setActiveState] = useState(null);
  const [activeData, setActiveData] = useState(null);

  const projection = geoAlbersUsa().fitWidth(
    (width - margins.left - margins.right) * (1 - legendPortion),
    states
  );
  const path = geoPath(projection);

  //populate data for use in legend
  useEffect(() => {
    const stateRow = data.find((row) => row.State === activeState);

    if (activeState && stateRow) {
      setActiveData(stateRow);
    } else {
      setActiveData(null);
    }
  }, [data, activeState]);

  const colorScale = scaleSequential(interpolateYlOrBr).domain(
    extent(data, (d) => d.multiple)
  );

  const maxColor = colorScale(max(data, (d) => d.multiple));
  const minColor = colorScale(min(data, (d) => d.multiple));

  const stateStyle = (state) => {
    const row = data.find((entry) => entry.State === state);
    if (row) {
      return { fill: colorScale(row.multiple), stroke: '#892918' };
    } else {
      return {
        fill: 'URL(#diagonal-stripe-2)',
        opacity: 0.3,
        stroke: '#892918',
      };
    }
  };

  return (
    <>
      <defs>
        <pattern
          id="diagonal-stripe-2"
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
        >
          {' '}
          <image
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzInLz4KPC9zdmc+"
            x="0"
            y="0"
            width="10"
            height="10"
          >
            {' '}
          </image>{' '}
        </pattern>
      </defs>

      <g
        className="marks"
        transform={`translate(${margins.left}, ${margins.top})`}
        onMouseLeave={(e) => setActiveState(null)}
      >
        {states.features.map((feature) => (
          <path
            key={feature.id}
            style={stateStyle(feature.properties.name)}
            d={path(feature)}
            onMouseOver={(e) => setActiveState(feature.properties.name)}
          ></path>
        ))}
      </g>

      <MapLegend
        state={activeState}
        data={activeData}
        width={width}
        height={height}
        margins={margins}
        legendPortion={legendPortion}
        maxColor={maxColor}
        minColor={minColor}
      />
    </>
  );
};

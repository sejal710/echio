import React, { useState } from 'react';
import range from '../css/RangeSlider.module.css';

const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState([0, 100]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRangeValue((prevRangeValue) => {
      if (name === 'min') {
        return [parseInt(value), prevRangeValue[1]];
      } else {
        return [prevRangeValue[0], parseInt(value)];
      }
    });
  };

  return (
    <div className={range.rangeSlider}>
      <input
        type="range"
        name="min"
        min="0"
        max="100"
        value={rangeValue[0]}
        className={range.slider}
        onChange={handleChange}
      />
      <input
        type="range"
        name="max"
        min="0"
        max="100"
        value={rangeValue[1]}
        className={range.slider}
        onChange={handleChange}
      />
      <div className={range.rangeValues}>
        <span>{rangeValue[0]}</span>
        <span>{rangeValue[1]}</span>
      </div>
    </div>
  );
};

export default RangeSlider;



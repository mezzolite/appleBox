import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './style.scss';

function valuetext(value: number) {
  if (value === 0.2) {
    return '$';
  }
  if (value === 0.4) {
    return '$$';
  }
  if (value === 0.6) {
    return '$$$';
  }
  if (value === 0.8) {
    return '$$$$';
  }
  if (value === 1) {
    return '$$$$$';
  }
  return 'Free';
}
console.log('value text', valuetext(0.4));

export default function TaskPriceSlider({
  setPrice,
}: {
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleChange = (
    event: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => {
    setPrice(value as number);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Price"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={handleChange}
        step={0.2}
        marks
        min={0}
        max={1}
        style={{ color: 'green' }}
      />
    </Box>
  );
}

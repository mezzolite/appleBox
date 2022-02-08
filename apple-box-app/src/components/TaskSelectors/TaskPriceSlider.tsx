import * as React from 'react';
import Slider from '@mui/material/Slider';
import './style.scss';
import { FormControl, FormHelperText } from '@mui/material';

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
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <FormHelperText>Please select price</FormHelperText>
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
        style={{ color: '#ef626c' }}
      />
    </FormControl>
  );
}

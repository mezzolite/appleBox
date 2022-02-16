import * as React from 'react';
import Slider from '@mui/material/Slider';
import './style.scss';
import { FormControl, FormHelperText } from '@mui/material';

const marks = [
  {
    value: 0,
    label: 'Free',
  },
  {
    value: 0.2,
    label: '$',
  },
  {
    value: 0.4,
    label: '$$',
  },
  {
    value: 0.6,
    label: '$$$',
  },
  {
    value: 0.8,
    label: '$$$$',
  },
  {
    value: 1,
    label: '$$$$$',
  },
];

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
        onChange={handleChange}
        step={0.2}
        marks={marks}
        min={0}
        max={1}
        style={{ color: '#ef626c' }}
      />
    </FormControl>
  );
}

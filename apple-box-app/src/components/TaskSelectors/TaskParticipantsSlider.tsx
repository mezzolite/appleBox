import * as React from 'react';
import Slider from '@mui/material/Slider';
import { FormControl, FormHelperText } from '@mui/material';

function valuetext(value: number) {
  return `${value}`;
}

export default function TaskParticipantsSlider({
  setParticipants,
}: {
  setParticipants: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleChange = (
    event: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => {
    setParticipants(value as number);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <FormHelperText>Please select number of participants</FormHelperText>
      <Slider
        aria-label="Number of Participants"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={handleChange}
        step={1}
        marks
        min={1}
        max={5}
        style={{ color: '#ef626c' }}
      />
    </FormControl>
  );
}

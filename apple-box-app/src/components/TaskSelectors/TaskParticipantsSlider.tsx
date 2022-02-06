import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
    <Box sx={{ width: 300 }}>
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
      />
    </Box>
  );
}

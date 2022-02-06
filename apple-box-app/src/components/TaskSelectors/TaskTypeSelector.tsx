import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type TaskTypeSelectorProps = {
  taskType: string;
  setTaskType: React.Dispatch<React.SetStateAction<string>>;
};

export default function TaskTypeSelector({
  taskType,
  setTaskType,
}: TaskTypeSelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setTaskType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 50 }}>
        <InputLabel id="task-type-label">Type of Task</InputLabel>
        <Select
          labelId="task-type-label"
          id="task-type-helper"
          value={taskType}
          label="Type of Task"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="education">Education</MenuItem>
          <MenuItem value="recreational">Recreational</MenuItem>
          <MenuItem value="social">Social</MenuItem>
          <MenuItem value="diy">DIY</MenuItem>
          <MenuItem value="charity">Charity</MenuItem>
          <MenuItem value="cooking">Cooking</MenuItem>
          <MenuItem value="relaxation">Relaxation</MenuItem>
          <MenuItem value="music">Music</MenuItem>
          <MenuItem value="busywork">Busywork</MenuItem>
        </Select>
        <FormHelperText>
          Please select what type of task you'd like to do
        </FormHelperText>
      </FormControl>
    </div>
  );
}

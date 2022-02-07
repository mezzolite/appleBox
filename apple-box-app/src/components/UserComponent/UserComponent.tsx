import React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './style.scss';

type UserComponentProps = {
  setShowTaskSearch: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function UserComponent({
  setShowTaskSearch,
}: UserComponentProps) {
  const [username, setUsername] = React.useState<string>('');
  const [zipcode, setZipcode] = React.useState<string>();

  const handleSubmit = () => {
    //ToDo: add user info to state on submit
    setShowTaskSearch(true);
  };
  console.log('submit userinfo', username, zipcode);

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="UserComponentBox"
      >
        <TextField
          required
          id="username-input"
          label="Username"
          size="small"
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
          color="success"
        />
        <TextField
          required
          id="zipcode-input"
          label="Zipcode"
          size="small"
          value={zipcode}
          onChange={event => {
            setZipcode(event.target.value);
          }}
          color="success"
        />
      </Box>
      <Button
        variant="contained"
        className="UserContainerButton"
        onClick={handleSubmit}
      >
        Submit User Info
      </Button>
    </div>
  );
}

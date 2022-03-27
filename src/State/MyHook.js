import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const useLogger = (value) => {
  useEffect(() => {
    console.log("value changed", value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

const MyHook = () => {
  const input = useInput("");
  const lastName = useInput("");

  useLogger(input.value);

  return (
    <div>
      <Typography variant="h3" component="p" sx={{ mr: 1 }}>
        {input.value}
      </Typography>
      <Typography variant="h5" component="p">
        {" "}
        {lastName.value}
      </Typography>

      <TextField
        id="filled-basic"
        variant="filled"
        sx={{ mr: 2, mt: 2 }}
        {...input.bind}
      />

      <TextField
        id="filled-basic"
        variant="filled"
        sx={{ mr: 2, mt: 2 }}
        {...lastName.bind}
      />
      <Button
        variant="contained"
        onClick={() => input.clear()}
        sx={{ mr: 1, mt: 2 }}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        onClick={() => lastName.clear()}
        sx={{ mr: 1, mt: 2 }}
      >
        Clear
      </Button>
    </div>
  );
};

export default MyHook;

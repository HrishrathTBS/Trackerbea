import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const YesterdayData = [
  { label: "Hair" },
  { label: "Study" },
  { label: "Dry Cleaning" },
  { label: " Clean" },
  { label: " Block" },
  { label: " Email" },
];

const YesterdayData1 = [
  { label: "TickTick for embedded calendars and timers." },
  { label: "Things for elegant design." },
  {
    label:
      "Microsoft To Do for Microsoft power users (and Wunderlist refugees)",
  },
  {
    label: "Google Tasks for Google power users",
  },
  {
    label: "OmniFocus for specific organizational systems",
  },
];
const Yesterday = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "300px",
          transform: "rotate(-10deg)",
          boxShadow: "2px 2px 5px black",
          margin: "50px 50px",
        }}
      >
        <Typography
          sx={{
            color: "red",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Bad To-Do List
        </Typography>
        <Box>
          {YesterdayData.map((obj, i) => (
            <FormControl sx={{ marginLeft: "30px" }} key={i}>
              <FormControlLabel
                value={obj.label}
                control={<Checkbox sx={{ color: "red" }} />}
                label={obj.label}
                sx={{ paddingTop: "18px" }}
              />
            </FormControl>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "500px",
          height: "400px",
          boxShadow: "2px 2px 5px black",
          margin: "50px 50px",
        }}
      >
        <Typography
          sx={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Good To-Do List
        </Typography>
        <Box>
          {YesterdayData1.map((obj, i) => (
            <FormControl sx={{ marginLeft: "30px" }} key={i}>
              <FormControlLabel
                value={obj.label}
                control={<Checkbox sx={{ color: "green" }} />}
                label={obj.label}
                sx={{ paddingTop: "18px" }}
              />
            </FormControl>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Yesterday;

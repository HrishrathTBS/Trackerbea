import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import Divider from "@mui/material/Divider";

const TodayData = [
  { label: "Finish editing Q2 Report for Friday's Standup", Work: "Work" },
  { label: "Meet up with sam P for Coffee at Block 1919 Cafe", Work: "Social" },
  { label: "30 Minutes on the elliptical", Work: "Fitness" },
  { label: "Book  a meeting with a financial advisor", Work: "Personal" },
  { label: "Finish off Season 3 of Billions", Work: "Entertainment" },
  { label: "Start Planning Budapest trip", Work: "Travel" },
  { label: "Start brainstromming Conoeist partnerships", Work: "Work" },
];

const Today = () => {
  return (
    <div>
      <Box
        sx={{
          width: "500px",
          height: "100%",
          bgcolor: "#fff",
          boxShadow: "0px 0px 2px 0.5px black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 10px",
          }}
        >
          <Typography
            sx={{ color: "orange", fontSize: "25px", fontWeight: "bold" }}
          >
            Today
          </Typography>
          <ConstructionIcon />
        </Box>
        <Box>
          {TodayData.map((obj, i) => (
            <FormControl sx={{ marginLeft: "10px" }} key={i}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  value={obj.label}
                  control={<Checkbox sx={{ color: "green" }} />}
                  label={obj.label}
                  sx={{ paddingTop: "18px" }}
                />
                <Typography sx={{ color: "#a3a3a3" }}>{obj.Work}</Typography>
              </Box>
              <Divider sx={{ width: "480px", bgcolor: "orangered" }} />
            </FormControl>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Today;

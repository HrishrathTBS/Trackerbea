import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LabelData = [
  {
    HeaderText: "01",
    TitleText: "01Text",
    NotesText: "01 I am a SlideTeam support",
  },
  {
    HeaderText: "02",
    TitleText: "02Text",
    NotesText: "02 I am a SlideTeam support",
  },
  {
    HeaderText: "03",
    TitleText: "03Text",
    NotesText: "03 I am a SlideTeam support",
  },
  {
    HeaderText: "04",
    TitleText: "04Text",
    NotesText: "04 I am a SlideTeam support",
  },
];

const Label1 = ({
  head = { BgColor: "#3377fe", textColor: "black" },
  labelColor = "#f2f2f2",
  textColor,
}) => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {LabelData.map((obj, i) => (
          <Box
            key={i}
            sx={{
              width: "210px",
              height: "280px",
              backgroundColor: "#f2f2f2",
              marginTop: "10px",
              marginRight: "50px",
              borderRadius: "5px",
            }}
          >
            <Typography
              id="one"
              sx={{
                borderBottomLeftRadius: "55px",
                backgroundColor: head.BgColor,
                color: head.textColor,
                textAlign: "right",
                padding: "10px",
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              {obj.HeaderText}
            </Typography>
            <Box sx={{ paddingTop: "40px", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {obj.TitleText}
              </Typography>
              <Typography sx={{ padding: "10px 5px" }}>
                {obj.NotesText}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Label1;

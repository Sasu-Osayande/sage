import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.css";

const card = (
  <React.Fragment className="Outlinedcard">
    <CardContent className="outlinedcard">
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        noun
      </Typography>
      <Typography variant="h5" component="div">
        sage
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        /sāj/
      </Typography>
      <Typography variant="body2">
        having, showing, or indicating profound wisdom.
        <br />
        {'"the sayings of the numerous venerable sages"'}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <div className="definition-card">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

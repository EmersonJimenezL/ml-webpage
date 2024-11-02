import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const actions = [
  { icon: <WhatsAppIcon />, name: "WhatsApp" },
  { icon: <InstagramIcon />, name: "Instagram" },
];

export default function Redes() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial fixed example"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        ".MuiFab-primary": {
          backgroundColor: "#b9a197",
          "&:hover": {
            backgroundColor: "#8b7b70",
          },
        },
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          sx={{ background: "#b9a197" }}
        />
      ))}
    </SpeedDial>
  );
}

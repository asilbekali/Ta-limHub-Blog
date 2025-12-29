"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="dashboard-popup">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="text"
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1rem",
              px: 2,
              "&:hover": {
                color: "white",
                backgroundColor: "rgba(255,255,255,0.12)",
                borderRadius: "8px",
              },
            }}
            {...bindTrigger(popupState)}
          >
            Contact
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <a
                href="https://www.talim-hub.uz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                Website
              </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a
                href="https://www.instagram.com/talimhub_uz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                Instagram
              </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a
                href="https://www.linkedin.com/in/ta-lim-hub/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                Linkedin
              </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a
                href="https://t.me/talimhub_global"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                Telegram
              </a>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

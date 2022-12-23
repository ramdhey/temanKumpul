import React from "react";
import logo from "../../Image/logo.png"

import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Dialog,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setMode } from "../../State";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../Components/FlexBetween";

const NavBar = () => {
  const [isMobileMenuToggle, setIsMobileMenuToggle] = useState(false);
 const [openAbout, setOpenAbout] = useState(false);
 const hideDialog = () => {
   setOpenAbout(!openAbout);
 };
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  

  const theme = useTheme();

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;
  // const fullName = 'Rama'

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <Typography
          marginLeft="-1rem"
          fontWeight="bold"
          fontSize="clamp(1rem,2rem,2.25rem)"
          color="#35C8F6"
          onClick={() => navigate("/home")}
          sx={{ "&:hover": { color: primaryLight, cursor: "pointer" } }}
        >
          temanKumpul
        </Typography>

        {/* {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )} */}
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween
          gap="3rem"
          marginLeft="17rem"
          justifyContent="space-between"
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <Message  sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} /> */}

          <IconButton
            onClick={() => setOpenAbout(!openAbout)}
            sx={{ fontSize: "25px" }}
          >
            <Help sx={{ fontSize: "25px" }} />
          </IconButton>

          <Dialog
            open={openAbout}
            onClose={hideDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              <IconButton onClick={hideDialog} sx={{ alignSelf: "flex-end" }} >
                <Close />
              </IconButton>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                id="alert-dialog-title"
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", fontWeight: "bold" }}
                id="alert-dialog-description"
              >
                temanKumpul adalah aplikasi social media simple yang di buat
                oleh Rama Dhea Yudhistira
              </Typography>
            </Box>
          </Dialog>

          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "200px",
                borderRadius: "0.25rem",

                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "&.MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography onClick={() => navigate("/home")}>
                  {fullName}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggle(!isMobileMenuToggle)}>
          <Menu />
        </IconButton>
      )}

      {/* MobileNav */}
      {!isNonMobileScreens && isMobileMenuToggle && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggle(!isMobileMenuToggle)}
            >
              <Close />
            </IconButton>
          </Box>
          <FlexBetween
            gap="3rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            {/* <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} /> */}

            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "&.MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Logout
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default NavBar;

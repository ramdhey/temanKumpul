import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form"
import FlexBetween from "../../Components/FlexBetween";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px">
          temanKumpul
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <FlexBetween padding="1rem 6%">
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            alignItems="center"
            justifyContent="center"
          >
            Selamat datang di temanKumpul
          </Typography>
        </FlexBetween>

        <FlexBetween padding="0rem 6%">
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            alignItems="center"
            justifyContent="center"
          >
            Tempat Kumpul Seru untuk Mencari temanKumpul yang Kamu Mau.
          </Typography>
        </FlexBetween>

       

        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

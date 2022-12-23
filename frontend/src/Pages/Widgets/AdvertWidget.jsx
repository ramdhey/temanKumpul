import { Typography,useTheme } from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import WidgetWrapper from "../../Components/WidgetWrapper";


const AdvertWidget = () => {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
      <WidgetWrapper>
        <FlexBetween>
          <Typography color={dark} fontWeight="500" variant="h5">
            Iklan
          </Typography>

          <Typography marginLeft="1rem" color={medium}>
            Create Ad
          </Typography>
        </FlexBetween>

        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:4044/assets/coffe.jpeg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          <Typography color={main}>Ngopi</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>iklandisini.com</Typography>
        </FlexBetween>

        <Typography color={medium} m="0.5rem 0">
          Kopi segar teman semangat kamu untuk awali hari,yuk mampir atau delivery ke Ngopi, dan rasakan bahagianya.
        </Typography>
      </WidgetWrapper>
    );
}



export default AdvertWidget
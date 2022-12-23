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
                    Sponsor

                </Typography>

                <Typography color={medium}>
                    Create Ad

                </Typography>
            </FlexBetween>

            <img width="100%" height="auto" alt="advert" src="http://localhost:4044/assets/info4.jpeg" style={{borderRadius:"0.75rem",margin:"0.75rem 0"}} />
            <FlexBetween>
                <Typography color={main} >
                    Iklan

                </Typography>
                <Typography color={medium}>iklam.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.

            </Typography>
        </WidgetWrapper>
        
    )
}



export default AdvertWidget
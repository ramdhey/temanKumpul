import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  InputBase,
  IconButton,
} from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../../Components/UserImage";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../State/index";


const ProfilPost = ({ picturePath,userId }) => {
  const dispatch = useDispatch();
    const [user, setUser] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch("https://tkserver.onrender.com/posts", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  const getUser = async () => {
    const response = await fetch(
      `https://tkserver.onrender.com/users/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const { firstName, lastName, location, occupation, friends } = user;
  

  return (
    <WidgetWrapper>
      <FlexBetween gap="2rem" >
        <UserImage image={picturePath} />
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
           
            padding: "1rem 2rem",
            
          }}
        >
          {firstName} {lastName}
        </Typography>
        
      </FlexBetween>
      
      
    </WidgetWrapper>
  );
};

export default ProfilPost;

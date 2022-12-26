import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../State";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);


    const getPosts = async () => {
        const response = await fetch(`https://tkserver.onrender.com/posts`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setPost({ posts:data }));
    }


    const getUserPosts = async () => {
      const response = await fetch(
        `https://tkserver.onrender.com/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPost({ posts:data }));
    };

    useEffect(() => {
        if(isProfile){
            getUserPosts()
        }else{
            getPosts()
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        {posts.map(
        ({
            _id,
            userId,
            firstName,
            lastName,
            picturePath,
            location,
            description,
            userPicturePath,
            likes,
            comments,
        }) => (
            <PostWidget 
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            picturePath={picturePath}
            location={location}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            >

            </PostWidget>
            
        ))}
        </>
    )
};

export default PostsWidget;

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    let favImgs = localStorage.getItem("favImgs")
      ? JSON.parse(localStorage.getItem("favImgs"))
      : [];

    if (favImgs.includes(post.id)) {
      setIsLiked(true);
    }
  }, []);

  const onLike = () => {
    let favImgs = localStorage.getItem("favImgs")
      ? JSON.parse(localStorage.getItem("favImgs"))
      : [];

    if (favImgs.includes(post.id)) {
      favImgs = favImgs.filter((x) => x !== post.id);
      setIsLiked(false);
    } else {
      favImgs.push(post.id);
      setIsLiked(true);
    }
    localStorage.setItem("favImgs", JSON.stringify(favImgs));
  };

  return (
    <StyledPost>
      <StyledPostHeader>
        <img className="avatar" src={post.avatar} />
        <p className="name">{post.username}</p>
      </StyledPostHeader>
      <StyledImg src={post.img} alt="post"></StyledImg>
      <StyledHeartWrapper>
        <FontAwesomeIcon
          onClick={onLike}
          icon={isLiked ? faHeart : faHeartOutlined}
          color={isLiked ? "red" : "black"}
        />
        <p>
          <span>{post.likes + (isLiked ? 1 : 0)}</span> Likes
        </p>
      </StyledHeartWrapper>
      <StyledPostDesc>
        <h2>{post.username}</h2>
        <span>
          <p>{post.description}</p>
          <a href="">{post.tags}</a>
        </span>
      </StyledPostDesc>
      <StyledComments>
        <p>
          View <span>{post.comments}</span> Comments
        </p>
      </StyledComments>
    </StyledPost>
  );
}

const StyledPost = styled.div`
  min-height: 475px;
  max-width: 425px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 1rem;
  border-top: 0.5px solid rgb(229, 231, 235);
  border-bottom: 0.5px solid rgb(229, 231, 235);
`;

const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  .avatar {
    width: 2em;
    border-radius: 500%;
  }

  .name {
    color: #000;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0 0.5rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 385px;
  object-fit: cover;
`;

const StyledHeartWrapper = styled.div`
  color: #000;
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  p {
    font-size: 0.8rem;
    font-weight: 600;
    display: inline;
    vertical-align: top;
    padding-left: 0.5rem;
  }
`;

const StyledPostDesc = styled.div`
  padding: 0 0.8rem;
  
  h2 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.4;
    margin-bottom: 0.2rem;
  }
`;

const StyledComments = styled.div`
  padding: 0.4rem 0.8rem;

  p {
    font-size: 0.8rem;
    color: #8e8e8e;
  }
`;

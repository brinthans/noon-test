import Head from "next/head";
import GlobalStyles from "../comps/GlobalStyles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noongram</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <StyledHeader>
        <h1>Noongram</h1>
        <div className="nav-btns">
          <StyledNavButton>
            <FontAwesomeIcon icon={faHome} size="2x" color="#000" />
          </StyledNavButton>
          <StyledNavButton>
            <FontAwesomeIcon icon={faHeart} size="2x" color="#000" />
          </StyledNavButton>
        </div>
      </StyledHeader>

      <StyledMain>
        <StyledPost>
          <StyledPostHeader>
            <img className="avatar" src="./avatar-1.svg" alt="av" />
            <p className="name">spider_man7706</p>
          </StyledPostHeader>
          <StyledImg src="./post-1.jpg" alt="post"></StyledImg>
          <StyledHeartWrapper>
            <FontAwesomeIcon icon={faHeartOutlined} />
            <p>
              <span>32</span> Likes
            </p>
          </StyledHeartWrapper>
          <StyledPostDesc>
            <h2>spider_man7706</h2>
            <span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis ullam delectus porro.{" "}
              </p>
              <a href="">#watch </a>
              <a href="">#time </a>
              <a href="">#apple </a>
              <a href="">#ticktick </a>
              <a href="">#zikzak </a>
            </span>
          </StyledPostDesc>
          <StyledComments>
            <p>View 16 Comments</p>
          </StyledComments>
        </StyledPost>
        <StyledPost>
          <StyledPostHeader>
            <img className="avatar" src="./avatar-1.svg" alt="av" />
            <p className="name">spider_man7706</p>
          </StyledPostHeader>
          <StyledImg src="./post-1.jpg" alt="post"></StyledImg>
          <StyledHeartWrapper>
            <FontAwesomeIcon icon={faHeartOutlined} />
            <p>
              <span>32</span> Likes
            </p>
          </StyledHeartWrapper>
          <StyledPostDesc>
            <h2>spider_man7706</h2>
            <span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis ullam delectus porro.{" "}
              </p>
              <a href="">#watch </a>
              <a href="">#time </a>
              <a href="">#apple </a>
              <a href="">#ticktick </a>
              <a href="">#zikzak </a>
            </span>
          </StyledPostDesc>
          <StyledComments>
            <p>View 14 Comments</p>
          </StyledComments>
        </StyledPost>
      </StyledMain>

      <StyledFooter>
        <StyledButton>
          <FontAwesomeIcon icon={faHome} size="2x" color="#000" />
        </StyledButton>
        <StyledButton>
          <FontAwesomeIcon icon={faHeart} size="2x" color="#000" />
        </StyledButton>
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: #a9a9a980 1px solid;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 1rem;
  height: 3.2rem;
  align-items: center;
  
  .nav-btns {
    visibility: hidden;
    opacity: 0;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-around;

    .nav-btns {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledPost = styled.div`
  min-height: 475px;
  max-width: 425px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 1rem;
  border-top: 0.5px solid rgb(229, 231, 235);
  border-bottom: 0.5px solid rgb(229, 231, 235);
`;

const StyledMain = styled.main`
  background-color: #e5e7eb;
  padding: 4rem 0;
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
  height: auto;
`;

const StyledHeartWrapper = styled.div`
  color: #000;
  padding: 0.5rem 0.8rem;

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

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  color: green;
  width: 100%;
  height: 60px;
  bottom: 0;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 768px) {
    visibility: hidden;
    opacity: 0;
  }
`;

const StyledNavButton = styled.button`
  padding: 0 0.4rem;
  border-radius: 5px;
  transform: scale(0.8);
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;


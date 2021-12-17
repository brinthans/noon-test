import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";

import Header from "../comps/Common/header";
import Footer from "../comps/Common/footer";
import Post from "../comps/Post";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

export default function Favorite({ posts }) {
  const [favPost, setFavPost] = useState([]);

  useEffect(() => {
    let favImgs = localStorage.getItem("favImgs")
      ? JSON.parse(localStorage.getItem("favImgs"))
      : [];

    setFavPost(posts.filter((post) => favImgs.includes(post.id)));
  }, []);

  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledMain>
        {!favPost.length == 0 ? (
          favPost.map((p) => <Post post={p} key={p.id} />)
        ) : (
          <h2 className="not-found">No Favorites Found!</h2>
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  background-color: #e5e7eb;
  padding: 4rem 0;

  h2.not-found {
    margin: 0;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

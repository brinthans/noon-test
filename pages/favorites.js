import Head from "next/head";
import styled from "styled-components";

import Header from "../comps/Common/header";
import Footer from "../comps/Common/footer";
import Post from "../comps/Post";

export default function Favorite() {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <StyledMain>
        <h2 className="not-found">No Favorites Found!</h2>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  height: 100vh;
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

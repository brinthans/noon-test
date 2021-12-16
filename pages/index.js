import Head from "next/head";
import styled from "styled-components";
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

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Noongram</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <StyledMain>
        {posts && posts.map((p) => <Post post={p} key={p.id} />)}
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  background-color: #e5e7eb;
  padding: 4rem 0;
`;

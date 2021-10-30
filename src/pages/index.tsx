import type { NextPage } from "next";
import { Content } from "../components/home/content/Content";
import { Headshot } from "../components/home/headshot/Headshot";


const Home: NextPage = () => {
  return (
    <>
      <Headshot />
      <Content />
    </>
  );
};

export default Home;

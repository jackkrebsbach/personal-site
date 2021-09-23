import type { NextPage } from "next";
import { Content } from "../components/home/content/Content";
import { Headshot } from "../components/home/headshot/Headshot";
import Layout from "../components/reusables/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Headshot/>
      <Content />
    </Layout>
  );
};

export default Home;

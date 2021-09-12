import type { NextPage } from "next";
import { Content } from "../components/home/content/Content";
import Layout from "../components/reusables/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Home;
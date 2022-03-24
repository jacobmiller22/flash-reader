import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { IndexView } from "../views";

const IndexPage: NextPage = () => {
  return (
    <div>
      <div style={{ height: "100%" }}>
        <IndexView />
      </div>
    </div>
  );
};

export default IndexPage;

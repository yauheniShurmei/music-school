import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import MainInfoPart from "../components/MainInfoPart/MainInfoPart";
import TitlePart from "../components/TitlePart/TitlePart";
import DownInfo from "../components/DownInfo/DownInfo";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Music School</title>
        <meta name="description" content="Music School" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TitlePart />
      <MainInfoPart />
      <DownInfo />
    </Fragment>
  );
}

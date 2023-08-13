import type { AppProps } from "next/app";
import "../public/css/global.css";
import TopBar from "../components/Layout/TopBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  );
}

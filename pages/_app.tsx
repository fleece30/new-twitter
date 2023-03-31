import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/pages/components/Layout";
import LoginModal from "@/pages/components/LoginModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/pages/components/Layout";
import AuthModal from "@/pages/components/AuthModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

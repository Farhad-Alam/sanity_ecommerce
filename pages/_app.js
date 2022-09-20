import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;

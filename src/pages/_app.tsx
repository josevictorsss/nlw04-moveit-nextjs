import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;

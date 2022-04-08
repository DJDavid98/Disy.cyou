import '../styles/globals.css';
import { AppComponent } from "next/dist/shared/lib/router/router";

const MyApp: AppComponent = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp

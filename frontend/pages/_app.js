import '../styles/globals.css'
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp

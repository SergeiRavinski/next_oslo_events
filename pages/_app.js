import Layout from '../components/layout/layout';
import '../styles/variables.css';
import '../styles/reset.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

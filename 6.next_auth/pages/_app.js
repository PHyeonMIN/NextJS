import { Provider } from "next-auth/client";

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      // 세션 값을 미리 정의
      <Provider session={pageProps.session}>    
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  );
}

export default MyApp;

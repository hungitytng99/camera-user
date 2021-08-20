import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/globals.sass'
import { Provider } from 'react-redux';
import store from 'data-stores/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
  )
};
export default MyApp

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/globals.sass'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

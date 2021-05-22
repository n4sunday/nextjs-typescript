import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'antd/dist/antd.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App

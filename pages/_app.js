import '../styles/globals.css'
import '../styles/reset.css';
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '../styles/Home.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
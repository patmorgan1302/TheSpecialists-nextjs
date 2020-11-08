import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
// renderMethod(
//   <BrowserRouter>
//     <RoutersController data={data} routes={routes} />
//   </BrowserRouter>,
//   document.getElementById('root')

// );

function MyApp({ Component, pageProps }) {

    return <Component {...pageProps} />
  };

export default MyApp

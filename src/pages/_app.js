import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/index";
import { RootStoreProvider } from '@/context/root-store'

function App({ Component, pageProps, initialData }) {

  return (
    <RootStoreProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RootStoreProvider>
  );
}

// App.getInitialProps = async (appContext) => {
//   // On server-side, this runs once and creates new stores
//     // On client-side, this always reuses existing stores
//     const mobxStores = getStores();

//     // Make stores available to page's `getInitialProps`
//     appContext.ctx.mobxStores = mobxStores;

//     // Call "super" to run page's `getInitialProps`
//     const appProps = await App.getInitialProps(appContext);

//     // // Gather serialization-friendly data from stores
//     // const initialData = {
//     //   ...mobxStores.postStore
//     // };

//     // Send it to `render`
//     return {
//       ...appProps,
//       // initialData,
//     };
// }
export default App
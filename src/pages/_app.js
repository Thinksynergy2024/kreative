import "@/styles/globals.css";
import "@/styles/devextreme.css";
import { AuthProvider } from "@/components/use-context";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </Provider>
  );
}

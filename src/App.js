import { Provider } from "react-redux";
import store from './store';
import QuoteBox from "./QuoteBox";


function App() {
  return (
      <Provider store={store}>
        <QuoteBox />
      </Provider>
  );
}

export default App;

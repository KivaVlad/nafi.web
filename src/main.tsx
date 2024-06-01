import ReactDOM from 'react-dom/client';
import App from './app';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from "./store";
import "./styles/reset.scss";
import "./styles/normalize.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

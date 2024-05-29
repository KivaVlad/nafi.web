import ReactDOM from 'react-dom/client';
import App from './app';
import {HashRouter} from 'react-router-dom';
import "./styles/reset.scss";
import "./styles/normalize.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)

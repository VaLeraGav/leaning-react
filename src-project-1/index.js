import App from './components/App'
import * as ReactDOMClient from 'react-dom/client';
import './index.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<App />);

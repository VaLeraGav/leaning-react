import App from './components/App'
import * as ReactDOMClient from 'react-dom/client';
import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<App />);

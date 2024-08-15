import './App.css';
import {useEffect} from "react";
import './html_elements/button/button.jsx'
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
    }, []);(() => {
        tg.ready();
    }, []);
    const onClose = () => {
        tg.close();
    }
  return (
    <div className="App">
      it is working well
        <button onClick = {onClose}>Close</button>
    </div>
  );
}

export default App;

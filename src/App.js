import './App.css';
import Body from './Components/Body';
import appStore from './utils/appStore';
import {Provider} from "react-redux";

function App() {
  return (
    <div className="text-3xl font-bold text-color-green">
        <Provider store={appStore}>
          <Body/>
        </Provider>
    </div>
  );
}

export default App;

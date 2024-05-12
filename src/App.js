import { useAuthState } from "../node_modules/react-firebase-hooks/auth";
import './App.css';
import Line from "./components/Line";
import SignIn from './components/SignIn';
import { auth } from "./firebase.js";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user? <Line /> : <SignIn />}
    </div>
  );
}

export default App;

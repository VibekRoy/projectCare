import "./App.css";
import History from "./Components/History";
import List from "./Components/List";
import Nav from "./Components/Nav";
import Patients from "./Components/Patients";
import Profile from "./Components/Profile";
import Results from "./Components/Results";
import { ContextProvider } from "./Data/DataContext";
function App() {
  return (
    <div className="main-body">
      <div className="upper-contents">
        <Nav />
      </div>
      <div className="lower-contents">
        <ContextProvider>
          <div className="left-section">
            <Patients />
          </div>

          <div className="middle-section">
            <History />
            <List />
          </div>
          <div className="right-section">
            <Profile />
            <Results />
          </div>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;

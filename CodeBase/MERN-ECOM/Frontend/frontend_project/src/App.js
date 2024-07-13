import "./App.css";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductDescriptionScreen from "./Screens/ProductDescriptionScreen";
// import { store } from "./Redux/store";
import {store} from './toolkit/store'
import { Provider } from "react-redux";
import SignupScreen from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import Profile from "./Screens/Profile";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signup" element={<SignupScreen/>} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route
              path="/products/:id"
              element={<ProductDescriptionScreen />}
            />
               <Route
              path="/profile"
              element={<Profile/>}
            />

          </Routes>
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

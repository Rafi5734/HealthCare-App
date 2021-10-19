import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/OurServices/OurServices";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Details from "./Components/Details/Details";
import NotFounded from "./Components/NotFounded/NotFounded";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>

                        <Route path="/service">
                            <Services></Services>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/signin">
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <PrivateRoute path="/details/:detailsId">
                            <Details></Details>
                        </PrivateRoute>

                        <Route path="*">
                            <NotFounded></NotFounded>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;

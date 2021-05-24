import { Route, Link, Switch } from "react-router-dom";
import "./lib/custom.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// exact는 "/"와 완전히 일치할때 나옴

function App() {
  return (
    <>
      {/* Error페이지 만들때 사용  */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profile} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;

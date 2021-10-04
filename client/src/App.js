import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MenuBar from "./components/header/MenuBar";
import AdminRender from "./customRouters/admin/AdminRender";
import AdminRoute from "./customRouters/admin/AdminRoute";
import Home from "./pages/user/home";
import Login from "./pages/user/login";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <AdminRoute path="/admin/:page" component={AdminRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;

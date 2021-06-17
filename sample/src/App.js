import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <main className="py-5">

      <Container>
        <Route path='/home' component={HomeScreen} exact/>
      </Container>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;

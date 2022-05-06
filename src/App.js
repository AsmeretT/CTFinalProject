import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Post from "./components/Post";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path="/post/:id" element={<Post/>} />
          <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Posts />
                </div>
                <div className="col-md-4">
                  <AddPost />
                </div>
              </div>
            }
          />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

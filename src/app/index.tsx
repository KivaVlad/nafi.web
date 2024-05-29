import {Routes, Route} from "react-router-dom";
import Layout from "../components/layout";
import Login from "./login";
import Profile from "./profile";
import Events from "./events";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Profile/>}/>
        <Route path="/events" element={<Events/>}/>
      </Route>
    </Routes>
  )
}

export default App

import {Routes, Route} from "react-router-dom";
import Layout from "../containers/layout";
import Login from "./login";
import Profile from "./profile";
import Events from "./events";
import CreateEvent from "./create-event";
import Templates from "./templates";
import Tarifs from "./tarifs";
import Advice from "./advice";
import Support from "./support";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Profile/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:create-event" element={<CreateEvent/>}/>
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/tarifs" element={<Tarifs/>}/>
        <Route path="/advice" element={<Advice/>}/>
        <Route path="/support" element={<Support/>}/>
      </Route>
    </Routes>
  )
}

export default App

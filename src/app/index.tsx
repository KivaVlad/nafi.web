import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useAppDispatch} from "../hooks/use-dispatch";
import {remind} from "../store/reducers/session";
import Layout from "../containers/layout";
import Protected from "../containers/protected";
import Login from "./login";
import Profile from "./profile";
import Events from "./events";
import CreateEvent from "./create-event";
import Templates from "./templates";
import Tarifs from "./tarifs";
import Advice from "./advice";
import Support from "./support";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(remind())
  })

  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Protected redirect="/login"><Layout/></Protected>}>
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

import {Routes, Route} from "react-router-dom";
import {ROUTES} from "../config";
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
import EditEvent from "./edit-event";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.PROFILE} element={<Protected redirect={ROUTES.LOGIN}><Layout/></Protected>}>
        <Route index element={<Profile/>}/>
        <Route path={ROUTES.EVENTS} element={<Events/>}/>
        <Route path={ROUTES.CREATE_EVENT} element={<CreateEvent/>}/>
        <Route path={ROUTES.EDIT_EVENT} element={<EditEvent/>}/>
        <Route path={ROUTES.TEMPLATES} element={<Templates/>}/>
        <Route path={ROUTES.TARIFS} element={<Tarifs/>}/>
        <Route path={ROUTES.ADVICE} element={<Advice/>}/>
        <Route path={ROUTES.SUPPORT} element={<Support/>}/>
      </Route>
    </Routes>
  )
}

export default App

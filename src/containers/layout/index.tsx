import {memo, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {signOut} from "../../store/reducers/session";
import {Outlet} from "react-router-dom";
import LayoutWrapper from "../../components/layout-wrapper";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user);

  const callbacks = {
    onLogout: useCallback(() => dispatch(signOut()), []),
  }

  return (
    <>
      <Header username={data.username}/>
      <LayoutWrapper navbar={<Navbar onLogout={callbacks.onLogout}/>} main={<Outlet/>}/>
    </>
  )
}

export default memo(Layout);
import {memo} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {Outlet} from "react-router-dom";
import LayoutWrapper from "../../components/layout-wrapper";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const Layout: React.FC = () => {
  const {data} = useAppSelector(state => state.user);

  return (
    <>
      <Header username={data.username}/>
      <LayoutWrapper 
        navbar={<Navbar/>} 
        main={<Outlet/>}/>
    </>
  )
}

export default memo(Layout);
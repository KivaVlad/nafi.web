import {memo, useEffect, useCallback} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/use-selector";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {signOut, remind} from "../../store/reducers/session";
import {loadDetails} from "../../store/reducers/details";
import {loadSlides} from "../../store/reducers/events";
import Loader from "../../components/loader";
import Header from "../../components/header";
import SmallLayout from "../../components/small-layout";
import SmallNavbar from "../../components/small-navbar";
import SlidesEditor from "../../components/slides-editor";

const Editor: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {data} = useAppSelector(state => state.user);
  const {slides, waiting} = useAppSelector(state => state.events);
  const {result} = useAppSelector(state => state.details);

  useEffect(() => {
    remind()
    .then(() => {
      if (id) {
        dispatch(loadDetails(id));
        dispatch(loadSlides(id));
      };
    })
  }, [id])

  const callbacks = {
    onLogout: useCallback(() => dispatch(signOut()), []),
    onNav: useCallback(() => navigate(-1), []),
  }

  return (
    <Loader active={waiting}>
      <Header username={data.name}/>
      <SmallLayout
        navbar={<SmallNavbar onLogout={callbacks.onLogout}/>}
        main={<SlidesEditor title={result.title} slides={slides} onNav={callbacks.onNav}/>}
      />
    </Loader>
  )
}

export default memo(Editor);
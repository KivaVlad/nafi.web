import {memo, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {remind} from "../../store/reducers/session";
import {loadDetails} from "../../store/reducers/details";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";
import EditEventForm from "../../containers/edit-event-form";

const EditEvent: React.FC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {result} = useAppSelector(state => state.details);

  useEffect(() => {
    remind()
    .then(() => {
      if(id) dispatch(loadDetails(id));
    })
  }, [id])

  return (
    <PageLayout>
      <PageHead title="Событие"/>
      <EditEventForm event={result}/>
    </PageLayout>
  )
}

export default memo(EditEvent);
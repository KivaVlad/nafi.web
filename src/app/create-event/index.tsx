import {memo, useEffect} from "react";
import {remind} from "../../store/reducers/session";
import {useAppSelector} from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";
import CreateEventForm from "../../containers/create-event-form";
import Loader from "../../components/loader";

const CreateEvent: React.FC = () => {
  const {waiting} = useAppSelector(state => state.events);

  useEffect(() => {
    remind()
  }, [])

  return (
    <PageLayout>
      <PageHead title="Событие"/>
      {waiting
        ? <Loader/>
        : <CreateEventForm/>
      }
    </PageLayout>
  )
}

export default memo(CreateEvent);
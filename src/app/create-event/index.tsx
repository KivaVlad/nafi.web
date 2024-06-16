import {memo, useState, useEffect, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {create} from "../../store/reducers/events";
import {remind} from "../../store/reducers/session";
import PageLayout from "../../components/page-layout";
import CreateEventForm from "../../components/create-event-form";

const CreateEvent: React.FC = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user);

  const [eventName, setEventName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString());
  const [participants, setParticipants] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  useEffect(() => {
    remind()
  }, [])

  const callbacks = {
    // Создание события
    onCreate: useCallback(() => {
      dispatch(create({
        title: eventName,
        start_date: eventDate,
        user: data.id
      }))
    }, [eventName, eventDate])
  }

  return (
    <PageLayout title="Событие">
      <CreateEventForm eventName={eventName} eventType={eventType} eventDate={eventDate} 
        participants={participants} tag={tag} setEventName={setEventName} setEventType={setEventType}
        setEventDate={setEventDate} setParticipants={setParticipants} setTag={setTag} onClick={callbacks.onCreate}
      />
    </PageLayout>
  )
}

export default memo(CreateEvent);
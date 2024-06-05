import {memo, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import PurpleButton from "../../components/purple-button";
import EventsList from "../../components/events-list";
import EventCard from "../../components/event-card";
import type {IEvent} from "../../types/i-event";

const Events: React.FC = () => {
  const navigate = useNavigate();
  const {list} = useAppSelector(state => state.events);

  const callbacks = {
    onNavigate: () => navigate("/events/:create-event"),
  }

  const renders = {
    item: useCallback((item: IEvent) => {
      return <EventCard item={item}/>
    }, [])
  }
  
  return (
    <PageLayout 
      title="Создайте новое событие" 
      button={<PurpleButton title="Создать" onClick={callbacks.onNavigate}/>}
    >
      <EventsList list={list} renderItem={renders.item}/>
    </PageLayout>
  )
}

export default memo(Events);
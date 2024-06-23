import {memo, useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/use-selector";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {remind} from "../../store/reducers/session";
import {load} from "../../store/reducers/events";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";
import Button from "../../components/button";
import EventsList from "../../components/events-list";
import EventCard from "../../components/event-card";
import {plusIcon} from "../../assets/icons";
import type {IEvent} from "../../types/i-event";

const Events: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {list} = useAppSelector(state => state.events);

  useEffect(() => {
    remind()
    .then(() => dispatch(load()))
  }, [])
  
  const callbacks = {
    onNavigate: () => navigate("/events/:create-event"),
  }

  const renders = {
    item: useCallback((item: IEvent) => {
      return <EventCard item={item}/>
    }, [])
  }
  
  return (
    <PageLayout>
      <PageHead title="Создайте новое событие" 
          nav={<Button icon={plusIcon} title="Создать" onClick={callbacks.onNavigate}/>}/>
      <EventsList list={list} renderItem={renders.item}/>
    </PageLayout>
  )
}

export default memo(Events);
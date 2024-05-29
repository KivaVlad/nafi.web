import {memo, useCallback} from "react";
import PageLayout from "../../components/page-layout";
import EventsList from "../../components/events-list";
import EventCard from "../../components/event-card";
import type {IEventCard} from "../../types/i-event-card";

const Events: React.FC = () => {
  
  const list: IEventCard[] = [
    {id: 1, date: '2024-05-03T01:14:53+03:00', title: 'Курс английского'},
    {id: 2, date: '2024-05-03T01:14:53+03:00', title: 'Курс английского'},
    {id: 3, date: '2024-05-03T01:14:53+03:00', title: 'Курс английского'},
    {id: 4, date: '2024-05-03T01:14:53+03:00', title: 'Курс английского'},
    {id: 5, date: '2024-05-03T01:14:53+03:00', title: 'Курс английского'},
  ]

  const renders = {
    item: useCallback((item: IEventCard) => {
      return <EventCard item={item}/>
    }, [])
  }
  

  return (
    <PageLayout title="Создайте новое событие ">
      <EventsList list={list} renderItem={renders.item}/>
    </PageLayout>
  )
}

export default memo(Events);
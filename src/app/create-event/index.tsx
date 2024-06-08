import {memo} from "react";
import PageLayout from "../../components/page-layout";
import CreateEventForm from "../../components/create-event-form";

const CreateEvent: React.FC = () => {
  return (
    <PageLayout title="Событие">
      <CreateEventForm/>
    </PageLayout>
  )
}

export default memo(CreateEvent);
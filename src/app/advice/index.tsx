import {memo} from "react";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";

const Advice: React.FC = () => {
  return (
    <PageLayout>
      <PageHead title="Советы"/>
    </PageLayout>
  )
}

export default memo(Advice);
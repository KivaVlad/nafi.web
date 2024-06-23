import {memo} from "react";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";

const Templates: React.FC = () => {
  return (
    <PageLayout>
      <PageHead title="Выберите свой сценарий"/> 
    </PageLayout>
  )
}

export default memo(Templates);
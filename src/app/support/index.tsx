import {memo} from "react";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";

const Support: React.FC = () => {
  return (
    <PageLayout>
      <PageHead title='Поддержка'/>
    </PageLayout>
  )
}

export default memo(Support);
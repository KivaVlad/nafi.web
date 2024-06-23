import {memo} from "react";
import PageLayout from "../../components/page-layout";
import PageHead from "../../components/page-head";

const Tarifs: React.FC = () => {
  return (
    <PageLayout>
      <PageHead title='Тарифы'/>
    </PageLayout>
  )
}

export default memo(Tarifs);
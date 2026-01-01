'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { digital_design_and_marketing } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Digital Design and Marketing"
    overview={digital_design_and_marketing.overview}
    description={digital_design_and_marketing.description}
    curriculum={digital_design_and_marketing.curriculum}
  />
);

export default Page;

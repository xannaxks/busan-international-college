'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { global_business } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Global Business"
    overview={global_business.overview}
    description={global_business.description}
    curriculum={global_business.curriculum}
  />
);

export default Page;

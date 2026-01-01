'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { global_korean_studies } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Global Korean Studies"
    overview={global_korean_studies.overview}
    description={global_korean_studies.description}
    curriculum={global_korean_studies.curriculum}
  />
);

export default Page;

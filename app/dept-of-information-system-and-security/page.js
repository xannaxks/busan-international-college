'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { information_system_and_security } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Information System & Security"
    overview={information_system_and_security.overview}
    description={information_system_and_security.description}
    curriculum={information_system_and_security.curriculum}
  />
);

export default Page;

'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { tech_management_and_innovation } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Tech Management & Innovation"
    overview={tech_management_and_innovation.overview}
    description={tech_management_and_innovation.description}
    curriculum={tech_management_and_innovation.curriculum}
  />
);

export default Page;

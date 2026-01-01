'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { mechanical_and_automotive_engineering } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="Mechanical and Autmative Engineering"
    overview={mechanical_and_automotive_engineering.overview}
    description={mechanical_and_automotive_engineering.description}
    curriculum={mechanical_and_automotive_engineering.curriculum}
  />
);

export default Page;

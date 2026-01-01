'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { ai_and_computer_engineering } from '../../constants';

const Page = () => (
  <DepartmentBlock
    department_name="AI & Computer Engineering"
    overview={ai_and_computer_engineering.overview}
    description={ai_and_computer_engineering.description}
    curriculum={ai_and_computer_engineering.curriculum}
  />
);

export default Page;

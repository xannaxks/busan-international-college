'use client';

import DepartmentBlock from '../../components/DepartmentBlock';
// eslint-disable-next-line camelcase
import { ai_and_computer_engineering, professors } from '../../constants';
import ExpandableCard from '../../components/Card';

const Page = () => (
  <div className="flex flex-col justify-center items-center">
    <DepartmentBlock
      department_name="AI & Computer Engineering"
      overview={ai_and_computer_engineering.overview}
      description={ai_and_computer_engineering.description}
      curriculum={ai_and_computer_engineering.curriculum}
    />
    <div className="flex justify-center gap-10 flex-wrap sm:w-[99%] md:w-[90%] lg:w-[80%]">
      {professors.map((item, i) => (
        <ExpandableCard
          {...item}
        />
      ))}
        {professors.map((item, i) => (
            <ExpandableCard
                {...item}
            />
        ))}
        {professors.map((item, i) => (
            <ExpandableCard
                {...item}
            />
        ))}
    </div>
  </div>
);

export default Page;

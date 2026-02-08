const ScholarshipsTable = () => (
  <table className="min-w-full border-collapse border border-black text-left text-gray-200 relative z-[150]">
    <caption className="text-lg font-semibold mb-4 text-gray-100">
      Consist of scholarship type, selection criteria, and scholarship rate
    </caption>

    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/2" />
      <col className="w-1/6" />
    </colgroup>

    <thead className="bg-[#fff4e6]">
    <tr>
      <th
        scope="col"
        className="border border-black px-4 py-2 text-gray-600"
      >
        Scholarship
      </th>
      <th
        scope="col"
        className="border border-black px-4 py-2 text-gray-600"
      >
        Selection criteria
      </th>
      <th
        scope="col"
        className="border border-black px-4 py-2 text-gray-600"
      >
        Scholarship rate<br />(tuition reduction)
      </th>
    </tr>
    </thead>

    <tbody className="divide-y divide-gray-600">
    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        International Students Scholarship A
      </th>
      <td className="border border-black px-4 py-2">
        <ul className="list-disc pl-5">
          <li>TOPIK level 6</li>
          <li>TOEFL 620, iBT 105, IELTS 8.0, TEPS 800 or above</li>
        </ul>
      </td>
      <td className="border border-black px-4 py-2">
        50% reduction
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        International Students Scholarship B
      </th>
      <td className="border border-black px-4 py-2">
        <ul className="list-disc pl-5">
          <li>TOPIK level 5</li>
          <li>TOEFL 580, iBT 90, IELTS 7.0, TEPS 700 or above</li>
        </ul>
      </td>
      <td className="border border-black px-4 py-2">
        40% reduction
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        International Students Scholarship C
      </th>
      <td className="border border-black px-4 py-2">
        <ul className="list-disc pl-5">
          <li>TOPIK level 4</li>
          <li>TOEFL 560, iBT 85, IELTS 6.0, TEPS 650 or above</li>
        </ul>
      </td>
      <td className="border border-black px-4 py-2">
        30% reduction
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        International Students Scholarship D
      </th>
      <td className="border border-black px-4 py-2">
        <ul className="list-disc pl-5">
          <li>TOPIK level 3</li>
          <li>TOEFL 550, iBT 80, IELTS 5.5, TEPS 600 or above</li>
        </ul>
      </td>
      <td className="border border-black px-4 py-2">
        20% reduction
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        Joint Degree Scholarship A
      </th>
      <td className="border border-black px-4 py-2">
        Students who are selected as the most superior among the separated
        joint program class students
      </td>
      <td className="border border-black px-4 py-2">
        Exempt from tuition
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        Joint Degree Scholarship B
      </th>
      <td className="border border-black px-4 py-2">
        Students who are selected as the superior among the separated
        joint program class students
      </td>
      <td className="border border-black px-4 py-2">
        50% reduction
      </td>
    </tr>

    <tr>
      <th
        scope="row"
        className="border border-black px-4 py-2 font-medium text-gray-100"
      >
        2+2 Korean Track Scholarship
      </th>
      <td className="border border-black px-4 py-2">
        Students who enter the 2+2 Korean track special program and do not get
        the International Students Scholarship (only in the 1st semester)
      </td>
      <td className="border border-black px-4 py-2">
        20% reduction
      </td>
    </tr>
    </tbody>
  </table>
);

export default ScholarshipsTable;

const QualificationsTable = () => {
    return (
        <table className="min-w-full border-collapse border border-gray-600 text-left text-gray-200">
            <caption className="text-lg font-semibold mb-4 text-gray-100">
                Consist of nationality, academic background,
                language ability
            </caption>

            <colgroup>
                <col className="w-1/4"/>
                <col className="w-1/4"/>
                <col className="w-1/2"/>
            </colgroup>

            <thead className="bg-[#fff4e6]">
            <tr>
                <th scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Section</th>
                <th scope="col" colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-600">Qualification
                    Standard
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-600">
            <tr>
                <th scope="row" className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Nationality</th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    Applicants and their parents must be foreign nationals without Korean citizenship.<br/>
                    <span className="text-red-400 font-semibold">Dual citizenship (involving both Korean and foreign national citizenship) is not permissible.</span>
                </td>
            </tr>

            <tr>
                <th rowSpan="3" scope="row"
                    className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Eligibility Criteria
                </th>
                <td className="border border-gray-600 px-4 py-2 font-medium text-gray-200">Freshman</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">Graduation from a high school equivalent
                    to the Korean education system's high school
                </td>
            </tr>

            <tr>
                <td className="border border-gray-600 px-4 py-2 font-medium text-gray-200">Transfer to 3rd year</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                    <ul className="list-disc pl-5">
                        <li>Completion of at least 2 years (or 4 semesters excluding summer school) at an accredited
                            Korean or foreign university
                        </li>
                        <li>Graduation (or expected graduation by the month before the beginning of the semester) from
                            an accredited Korean or foreign college with an associate degree (In China, completion of a
                            3-year program is required.)
                        </li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td className="border border-gray-600 px-4 py-2 font-medium text-gray-200">Transfer to 4th year</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                    Completion of a 3-year program at an accredited Korean or foreign college with an associate degree,
                    with graduation (or expected graduation by the month before the beginning of the semester), and
                    applying to the exact same major as the associated degree course
                </td>
            </tr>

            <tr>
                <th rowSpan="2" scope="row"
                    className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Language Ability Requirement
                </th>
                <td className="border border-gray-600 px-4 py-2 font-medium text-gray-200">Korean Track</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                    TOPIK 3 or higher (Test results must be valid until after the semester opening date.)
                    <ul className="list-inside list-decimal mt-2">
                        <li>
                            Applicants unable to meet the above criteria must complete the Korean Language Course before
                            graduating.
                            <ul className="list-disc pl-5 mt-1">
                                <li>2 hours per day (17:00~19:00): totaling 10 hours per week over 20 weeks per
                                    semester
                                </li>
                                <li>Course Fee: 1,200,000 KRW per semester</li>
                            </ul>
                        </li>
                        <li>Applicants who have not achieved a TOPIK 3 score cannot apply for transfer as a 4th-year
                            student.
                        </li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td className="border border-gray-600 px-4 py-2 font-medium text-gray-200">English Track</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                    TOEFL 530, CBT 197, IBT 71, IELTS 5.5, TEPS 600 or higher (Test results must be valid until after
                    the semester starting date).
                </td>
            </tr>
            </tbody>
        </table>


    )
};

export default QualificationsTable;
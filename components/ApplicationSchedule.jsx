const ApplicationSchedule = () => {

    return (
        <table className="min-w-full border-collapse border border-gray-600 text-left text-gray-200">
            <caption className="text-lg font-semibold mb-4 text-gray-100">
                Consist of Application submission, Screening, Admission result notification, Registration for admitted
                students, Semester starts
            </caption>

            <colgroup>
                <col className="w-1/5"/>
                <col className="w-1/8"/>
                <col className="w-1/8"/>
                <col className="w-1/8"/>
                <col className="w-1/8"/>
            </colgroup>

            <thead className="bg-[#fff4e6]">
            <tr>
                <th rowSpan="2" className="border border-gray-600 px-4 py-2 text-gray-600">Progress</th>
                <th colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-600">Spring semester (March)</th>
                <th colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-600">Fall semester (September)
                </th>
            </tr>
            <tr>
                <th className="border border-gray-600 px-4 py-2 text-gray-600">1st</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-600">2nd</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-600">1st</th>
                <th className="border border-gray-600 px-4 py-2 text-gray-600">2nd</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-600">
            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Application submission</th>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2023.11.01.-12.07.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.01.02.-01.12.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.05.01.-06.07.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.07.02.-07.12.</td>
            </tr>

            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Screening</th>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2023.12.11.-12.22.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.01.15.-01.19.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.06.11.-06.21.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.07.15.-07.19.</td>
            </tr>

            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Admission result
                    notification
                </th>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2023.12.29.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.01.23.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.06.28.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.07.23.</td>
            </tr>

            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Registration for admitted
                    students
                </th>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2023.12.29.-01.10.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.01.23.-01.31.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.06.28.-07.10.</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">2024.07.23.-07.31.</td>
            </tr>

            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">Semester starts</th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-200">2024.03.04.</td>
                <td colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-200">2024.09.02.</td>
            </tr>
            </tbody>
        </table>

    )
};

export default ApplicationSchedule;
const   AdmissionsCriteria = () => {
    return (
        <table className="min-w-full border-collapse border border-gray-600 text-left text-gray-200">
            <caption className="text-lg font-semibold mb-4 text-gray-100">Consist of Criteria, Rate, Details</caption>

            <colgroup>
                <col className="w-1/4"/>
                <col className="w-1/6"/>
                <col className="w-7/12"/>
            </colgroup>

            <thead className="bg-[#fff4e6]">
            <tr>
                <th scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Criteria</th>
                <th scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Rate</th>
                <th scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Details</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-600">
            <tr>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">Document screening</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">100%</td>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">
                    Evaluation of Language Proficiency, School Records, and other relevant documents<br/>
                    <span className="text-red-400 font-semibold">If necessary, the Interview will be proceed on-line or off-line</span>
                </td>
            </tr>
            </tbody>
        </table>

    )
};

export default AdmissionsCriteria;
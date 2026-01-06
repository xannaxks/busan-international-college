const ApplicationDocuments = () => {
    return (
        <table className="min-w-full border-collapse border border-gray-600 text-left text-gray-200">
            <caption className="text-lg font-semibold mb-4 text-gray-100">
                Consist of Essential, Nationality, Language, Educational Background, Financial
            </caption>

            <colgroup>
                <col className="w-1/5"/>
                <col className="w-2/5"/>
                <col className="w-2/5"/>
            </colgroup>

            <thead className="bg-[#fff4e6]">
            <tr>
                <th scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Section</th>
                <th colSpan="2" scope="col" className="border border-gray-600 px-4 py-2 text-gray-600">Documents</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-600">
            <tr>
                <th rowSpan="4" className="border border-gray-600 px-4 py-2 font-medium text-gray-100">1. Essential</th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[1-1]</span>
                    <div>Application form (including personal statement)</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[1-2]</span>
                    <div>Copy of passport</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[1-3]</span>
                    <div>3 copies of color photographs (passport photo: 3.5cmx4.5cm/white background)</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[1-4]</span>
                    <div>Copy of ROK Alien Registration Card (for registered domestic residents)</div>
                </td>
            </tr>

            <tr>
                <th rowSpan="2" className="border border-gray-600 px-4 py-2 font-medium text-gray-100">2. Nationality
                </th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[2-1]</span>
                    <div>Copy of Parents' ID cards (or passports) (notarized in English if not in English)</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[2-2]</span>
                    <div>Family Relations Certificate with parents (notarized in English if not in English)</div>
                </td>
            </tr>

            <tr>
                <th className="border border-gray-600 px-4 py-2 font-medium text-gray-100">3. Language</th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[3-1]</span>
                    <div>
                        Language test results (TOPIK, IELTS, TOEFL, TEPS)<br/>
                        <span className="text-red-400 font-semibold">Test results must remain valid until after the semester starting date.</span>
                    </div>
                </td>
            </tr>

            <tr>
                <th rowSpan="5" className="border border-gray-600 px-4 py-2 font-medium text-gray-100">4. Educational
                    Background
                </th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[4-1]</span>
                    <div>High school Transcript (notarized in English if not in English)</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[4-2]</span>
                    <div>Certificate of High school Graduation (notarized for Academic Certification*)</div>
                </td>
            </tr>
            <tr>
                <td className="border border-gray-600 px-4 py-2 text-gray-200">Additional Documents needed for Transfer
                    Applicants
                </td>
                <td className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[4-3]</span>
                    <div>Certificate of Graduation from College or Completion from University<br/>(notarized for
                        Academic Certification*)
                    </div>
                </td>
            </tr>
            <tr>
                <td className="border border-gray-600 px-4 py-2"></td>
                <td className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[4-4]</span>
                    <div>Transcript of College or University Transcript (notarized in English if not in English)</div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2 text-gray-200">
                    * Academic certification documents must be notarized according to one of the following options (Only
                    acceptable for schools in China)
                    <ol className="list-decimal pl-5">
                        <li>Documents with Apostille notarization</li>
                        <li>Documents confirmed by the Korean Consul in the country where the school is located</li>
                        <li>Documents notarized by the Consul in Korea from the country where the school is located</li>
                    </ol>
                    For schools in China, the following documents are acceptable:
                    <ul className="list-disc pl-5">
                        <li>Verification Report of Education Qualification Certificate issued by the China Higher
                            Education Student Information and Career Center of the Ministry of Education of China
                        </li>
                        <li>For vocational high schools unable to issue the Verification Report above:
                            <ul className="list-disc pl-5">
                                <li>Certificate of Graduation issued by the Department of Education of the Province,
                                    confirmed by the Korean Consul in China
                                </li>
                                <li>Certificate of Graduation issued by the vocational school, notarized by the
                                    Department of Education of the province (or city) and confirmed by the Korean Consul
                                    in China
                                </li>
                                <li>If the vocational school is affiliated with the Ministry of Human Resource and
                                    Social Security (MOHRSS) of China, the Certificate of Graduation issued by the
                                    school must be notarized by the MOHRSS and confirmed by the Korean Consul in China.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </td>
            </tr>

            <tr>
                <th rowSpan="3" className="border border-gray-600 px-4 py-2 font-medium text-gray-100">5. Financial</th>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    <span className="font-semibold">[5-1]</span>
                    <div>
                        Certificate of Bank Balance Copy<br/>(Submitted separately; submission schedule will be notified
                        individually)
                        <ol className="list-decimal pl-5">
                            <li>For Overseas Residents:
                                <ul className="list-disc pl-5">
                                    <li>Certificate copy of the applicant or financial guarantor**</li>
                                    <li>Balance amount: USD 12,000 or more, which must be maintained until the semester
                                        opening date
                                    </li>
                                    <li>Issued within 30 days of the visa application date (If there's an expiration
                                        date, it is recognized up to 6 months)
                                    </li>
                                </ul>
                            </li>
                            <li>For Domestic Residents:
                                <ul className="list-disc pl-5">
                                    <li>Original certificate in the applicant's name from an official bank in Korea</li>
                                    <li>Balance amount: KRW 16,000,000 or more</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    Additional documents for overseas residents<br/>
                    <span className="font-semibold">[5-2]</span>
                    <div>Proof of Employment or Certificate of Career of Applicant or Financial Guarantor**<br/>(Company
                        name, tenure, and position must be included)
                    </div>
                    <span className="font-semibold">[5-3]</span>
                    <div>Proof of Income of Career of Applicant or Financial Guarantor*<br/>(Annual or monthly salary
                        must be included)<br/>(Notarized in English if not in English)
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2" className="border border-gray-600 px-4 py-2">
                    **Financial guarantor: Only parents of applicants are acceptable.
                </td>
            </tr>
            </tbody>
        </table>

    )
};

export default ApplicationDocuments;
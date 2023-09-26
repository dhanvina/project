import { useEffect, useState } from "react";
import Panel from "../Panel";
function IssuesList() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://localhost:8000/api/EquipmentIssues/");
                response = await response.json();
                setDepartments(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <Panel>
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Issues List</h1>
                <table className="doing" className="w-full max-w-6xl mx-auto text-center bg-gray-100">
                    <thead>
                        <tr>
                            <th>Experminet Name</th>
                            <th>Lab</th>
                            <th>Number of Equipments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index} className="hover:text-white">
                                <td>{data.experiment}</td>
                                <td>{data.lab}</td>
                                <td>{data.number_of_equipments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Panel>
        </>
    );
}

export default IssuesList;

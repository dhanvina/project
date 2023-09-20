import { useEffect, useState } from "react";
function Lablist() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://localhost:8000/api/Labs/");
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
            <div>
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Labs list</h1>
                <table className="doing" className="bg-gray-100 w-full max-w-6xl mx-auto text-center">
                    <thead>
                        <tr>
                            <th>Lab number</th>
                            <th>Department</th>
                            <th>Location</th>
                            <th>Lab incharge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index} className="hover:text-white">
                                <td>{data.lab_number}</td>
                                <td>{data.department}</td>
                                <td>{data.location}</td>
                                <td>{data.lab_incharge}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Lablist;

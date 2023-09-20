import { useEffect, useState } from "react";
function EquipmentList() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://localhost:8000/api/Equipments/");
                response = await response.json();
                response.map((data) => {
                    if (data.status === true) {
                        data.status = "true";
                    } else {
                        data.status = "false";
                    }
                });
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
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Equipment List</h1>
                <table className="bg-gray-100 w-full max-w-6xl mx-auto text-center">
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Serial number</th>
                            <th>Purchase Order</th>
                            <th>Purchase Date</th>
                            <th>Equipment Value</th>
                            <th>Lab</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index} className="hover:text-white">
                                <td>{index}</td>
                                <td>{data.equipment_serial_number}</td>
                                <td>{data.purchase_order}</td>
                                <td>{data.purchase_date}</td>
                                <td>{data.equipment_value}</td>
                                <td>{data.lab}</td>
                                <td>{data.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EquipmentList;

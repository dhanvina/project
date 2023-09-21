import { useEffect, useState } from "react";

function PurchaseList() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://127.0.0.1:8000/api/PurchaseOrders/");
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
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Purchase List</h1>
                <table className="doing" className="w-full max-w-6xl mx-auto text-center bg-gray-100">
                    <thead>
                        <tr>
                            <th>Purchase order number</th>
                            <th>Purchase date</th>
                            <th>Supplier</th>
                            <th>Total value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index} className="hover:text-white">
                                <td>{data.purchase_order_number}</td>
                                <td>{data.purchase_date}</td>
                                <td>{data.supplier}</td>
                                <td>{data.total_value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PurchaseList;

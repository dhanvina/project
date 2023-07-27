import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Recieved() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        experiment: "",
        lab: "",
        number_of_equipments: "",
        details: "",
    });

    const { experiment, lab, number_of_equipments, details } = data;
    function onChange(e) {
        e.preventDefault();
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/EquipmentIssues/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            toast.success("Details Recorded");
            navigate("/");
        } catch (error) {
            toast.error("Details were not recorded");
            console.log(error);
        }
    }

    return (
        <div className="px-3 py-3">
            <h1 className="font-bold text-center text-3xl py-8">Equipment Recieved</h1>
            <div className="h-full max-w-lg mx-auto w-full flex flex-col px-3 items-center justify-center">
                <form className="max-w-[45rem] m-auto flex flex-col  w-full justify-center items-center ">
                    <input type="text" required placeholder="Equipment" className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" />
                    <input type="text" required placeholder="Quantity" className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" />
                    <input type="date" required className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" />
                    <input type="text" required placeholder="Lab Incharge" className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" />
                    <input type="text" placeholder="Not working Equipment Quantity" className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" />
                    <textarea minLength="50" rows="2" className="border border-gray-300 w-full rounded transition ease-in-out py-3 mb-4 px-2" placeholder="Remarks"></textarea>
                    <button className="bg-blue-600 py-2 my-2  text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition ease-in-out w-full">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Recieved;

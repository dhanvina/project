import { useState } from "react";
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
            toast.success("Details Recorded");
            navigate("/");
        } catch (error) {
            toast.error("Details were not recorded");
            console.log(error);
        }
    }

    return (
        <div className="px-3 py-3">
            <h1 className="py-8 text-3xl font-bold text-center">Equipment Recieved</h1>
            <div className="flex flex-col items-center justify-center w-full h-full max-w-lg px-3 mx-auto">
                <form className="max-w-[45rem] m-auto flex flex-col  w-full justify-center items-center ">
                    <input type="text" required placeholder="Equipment" className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" />
                    <input type="text" required placeholder="Quantity" className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" />
                    <input type="date" required className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" />
                    <input type="text" required placeholder="Lab Incharge" className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" />
                    <input type="text" placeholder="Not working Equipment Quantity" className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" />
                    <textarea minLength="50" rows="2" className="w-full px-2 py-3 mb-4 border border-gray-300 rounded transition ease-in-out" placeholder="Remarks"></textarea>
                    <button className="w-full py-2 my-2 font-semibold text-white bg-blue-600 shadow hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition ease-in-out">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Recieved;

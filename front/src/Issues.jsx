import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Issue() {
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
        <div className="h-screen  bg-blue-100 w-full flex px-3 flex-col  items-center justify-center">
            <h1 className="font-bold text-3xl pt-28">Equipment Issues</h1>
            <form className="max-w-2xl m-auto flex flex-col  w-full justify-center items-center " onSubmit={onSubmit}>
                <input type="text" placeholder="Experiment" value={experiment} className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" id="experiment" onChange={onChange} />
                <input type="text" onChange={onChange} value={lab} id="lab" placeholder="lab" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" />
                <input type="text" id="number_of_equipments" placeholder="Number of Equipments" onChange={onChange} value={number_of_equipments} className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" />
                <textarea minLength="10" rows="2" onChange={onChange} value={details} id="details" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" placeholder="Details"></textarea>
                <button className="bg-blue-600 py-2 w-[50%] text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition ease-in-out mt-2">Submit</button>
            </form>
        </div>
    );
}

export default Issue;

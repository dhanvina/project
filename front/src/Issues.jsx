import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Components/Button";
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
            toast.dismiss();
            toast.error("Enter the Correct Details");
        }
    }

    return (
        <div className="my-3 px-4 ">
            <h1 className="font-bold text-center  text-3xl py-10">Equipment Issues</h1>
            <form className="max-w-lg mx-auto flex flex-col  w-full justify-center items-center " onSubmit={onSubmit}>
                <input type="text" placeholder="Experiment Name" value={experiment} className=" border border-gray-300 w-full rounded-md transition ease-in-out py-3 mb-4 px-2" id="experiment" onChange={onChange} />
                <input type="text" onChange={onChange} value={lab} id="lab" placeholder="Lab Name" className="border border-gray-300 w-full rounded-md transition ease-in-out py-3 mb-4 px-2" />
                <input type="text" id="number_of_equipments" placeholder="Number of Equipments" onChange={onChange} value={number_of_equipments} className="border border-gray-300 w-full rounded-md transition ease-in-out py-3 mb-4 px-2" />
                <textarea minLength="10" rows="2" onChange={onChange} value={details} id="details" className="border border-gray-300 w-full rounded-md transition ease-in-out py-3 mb-4 px-2" placeholder="Details"></textarea>
                <Button />
            </form>
        </div>
    );
}

export default Issue;

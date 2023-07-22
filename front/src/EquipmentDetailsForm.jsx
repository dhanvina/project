import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Components/Button";
function EquipmentsDetails() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        equipment_serial_number: "",
        purchase_order: "",
        purchase_date: "",
        equipment_value: "",
        description: "",
        invoice: "",
        lab: "",
        status: "",
    });

    const { purchase_date, purchase_order, equipment_value, equipment_serial_number, description, invoice, lab, status } = data;
    function onChange(e) {
        let boolean = null;
        if (e.target.value == "true") {
            boolean = true;
        }
        if (e.target.value == "false") {
            boolean = false;
        }
        if (e.target.files) {
            setData((prev) => ({
                ...prev,
                [e.target.id]: e.target.files[0].name,
            }));
        }
        setData((prev) => ({
            ...prev,
            [e.target.id]: boolean ?? e.target.value,
        }));
    }
    async function onSubmit(e) {
        console.log(data);
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/Equipments/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);

            toast.success("Equipment Details Recorded");
            navigate("/");
        } catch (error) {
            toast.dismiss();
            toast.error("Enter the Correct Details");
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="px-4 pb-5 ">
                <p className="text-3xl font-bold text-center lg:py-20 py-14 ">Equipment Details</p>
                <main className="flex flex-col flex-wrap items-center justify-center w-full h-full max-w-6xl px-5 mx-auto mt-3 md:px-2">
                    <img src={require("./img/animatedImage.jpg")} alt="Lab" className=" rounded-xl w-[90%] md:w-[68%] lg:w-[50%] mb-10 " />
                    <div className="w-[90%] md:w-[68%]  lg:w-[50%]">
                        <input type="text" required id="equipment_serial_number" placeholder="Equipment Serial Number" value={equipment_serial_number} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="text" required id="purchase_order" placeholder="Purchase Order Number" value={purchase_order} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="date" required id="purchase_date" value={purchase_date} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="text" required placeholder="Equipment Value" id="equipment_value" value={equipment_value} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border-gray-300 rounded-md transition ease-in-out" />

                        <input type="file" accept=".jpg,.png,.jpeg" required id="invoice" onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <textarea required placeholder="Description" id="description" value={description} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border-gray-300 rounded-md transition ease-in-out">
                            {" "}
                        </textarea>

                        <input type="text" required placeholder="Lab" id="lab" value={lab} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border-gray-300 rounded-md transition ease-in-out" />
                        <div className="flex items-center justify-between w-full">
                            <label htmlFor="status" className="block mb-2 text-lg font-normal whitespace-nowrap">
                                Status
                            </label>

                            <select className="border border-gray-300 bg-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 " value={status} onChange={onChange} required id="status">
                                <option value="">Choose Status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <Button />
                    </div>
                </main>
            </form>
        </>
    );
}
export default EquipmentsDetails;

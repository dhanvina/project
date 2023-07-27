import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Components/Button";
function DepartmentForm() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        department_number: "",
        department_name: "",
        hod_name: "",
    });

    const { department_name, department_number, hod_name } = data;
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/Departments/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            toast.success("Department Details Recorded");
            navigate("/");
        } catch (error) {
            toast.error("Department Details were not recorded");
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="pb-5 px-4">
                <p className="text-center font-bold text-3xl lg:py-20  py-14 ">Department Details</p>
                <main className="w-full flex h-full justify-center lg:space-x-[10%] items-center mt-3 flex-wrap mx-auto max-w-6xl md:px-2 px-5">
                    <img src={require("./img/animatedImage.jpg")} alt="Lab" className=" rounded-xl w-[90%] md:w-[68%] lg:w-[50%] mb-6 lg:mb-0" />
                    <div className="w-[90%] md:w-[68%]  lg:w-[40%]">
                        <input required type="number" id="department_number" placeholder="Department number" value={department_number} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg rounded-md border border-gray-300 " />
                        <div className="flex items-center justify-between w-full">
                            <label htmlFor="department_name" className="block mb-2 text-lg font-normal whitespace-nowrap">
                                Choose Department :{" "}
                            </label>

                            <select required className="border border-gray-300 bg-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 " value={department_name} onChange={onChange} id="department_name">
                                <option value="">Choose</option>
                                <option value="CSE">CSE</option>
                                <option value="ISE">ISE</option>
                                <option value="ECE">ECE</option>
                                <option value="EEE">EEE</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" required placeholder="HOD Name" id="hod_name" value={hod_name} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg transition ease-in-out" />
                        </div>
                        <Button />
                    </div>
                </main>
            </form>
        </>
    );
}
export default DepartmentForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Components/Button";
function EquipmentsReview() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        equipment: "",
        quantity: "",
        date: "",
        lab_incharge: "",
        not_working_quantity: "",
        remarks: "",
    });

    const { equipment, quantity, date, lab_incharge, not_working_quantity, remarks } = data;
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
                [e.target.id]: e.target.files,
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
            let response = await fetch("http://127.0.0.1:8000/api/equipment_review/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            response = response.json();
            console.log(response);
            toast.success("Equipment Review Recorded");
            navigate("/");
        } catch (error) {
            toast.dismiss();
            toast.error("Enter the Correct Details");
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} method="POST" className="px-4 pb-5 " encType="multipart/form-data">
                <p className="text-3xl font-bold text-center lg:py-20 py-14 ">Equipment Review</p>
                <main className="flex flex-col flex-wrap items-center justify-center w-full h-full max-w-6xl px-5 mx-auto mt-3 md:px-2">
                    <img src={require("../img/animatedImage.jpg")} alt="Lab" className=" rounded-xl w-[90%] md:w-[68%] lg:w-[50%] mb-10 " />
                    <div className="w-[90%] md:w-[68%]  lg:w-[50%]">
                        <input type="text" required id="equipment" placeholder="Equipment" value={equipment} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="number" min={0} required id="quantity" placeholder="Number of Quantity" value={quantity} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="date" required id="date" value={date} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <input type="text" required placeholder="Incharge" id="lab_incharge" value={lab_incharge} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border-gray-300 rounded-md transition ease-in-out" />

                        <input type="number" min={0} required id="not_working_quantity" placeholder="Number of not working Quantity" value={not_working_quantity} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border border-gray-300 rounded-md " />
                        <textarea required placeholder="Enter Remark" id="remarks" value={remarks} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg border-gray-300 rounded-md transition ease-in-out">
                            {" "}
                        </textarea>
                        <Button />
                    </div>
                </main>
            </form>
        </>
    );
}
export default EquipmentsReview;

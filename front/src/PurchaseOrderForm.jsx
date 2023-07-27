import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Components/Button";
function PurchaseOrderForm() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        purchase_order_number: "",
        supplier: "",
        purchase_order_value: "",
        purchase_date: "",
    });

    const { purchase_date, supplier, purchase_order_value, purchase_order_number } = data;
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        console.log(data);
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/PurchaseOrders/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            toast.success("Purchase Order Details Recorded");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Enter the correct details");
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="pb-5 px-4">
                <p className="text-center font-bold text-3xl lg:py-20  py-14 ">Purchase Order Details</p>
                <main className="w-full flex h-full justify-center lg:space-x-[10%] items-center mt-3 flex-wrap mx-auto max-w-6xl md:px-2 px-5">
                    <img src={require("./img/animatedImage.jpg")} alt="Lab" className=" rounded-xl w-[90%] md:w-[68%] lg:w-[50%] mb-6 lg:mb-0" />
                    <div className="w-[90%] md:w-[68%]  lg:w-[40%]">
                        <input required type="text" id="purchase_order_number" placeholder="Purchase Order number" value={purchase_order_number} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg rounded-md border border-gray-300 " />
                        <input type="date" required id="purchase_date" value={purchase_date} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg transition ease-in-out rounded-md border-gray-300" />
                        <input type="text" required id="supplier" value={supplier} placeholder="Supplier" onChange={onChange} className="rounded-md border-gray-300 w-full py-3 pl-2 my-6 text-lg transition ease-in-out" />
                        <input required type="text" id="purchase_order_value" placeholder="Purchase Order Value" value={purchase_order_value} onChange={onChange} className="w-full py-3 pl-2 my-6 text-lg rounded-md border border-gray-300 " />

                        <Button />
                    </div>
                </main>
            </form>
        </>
    );
}
export default PurchaseOrderForm;

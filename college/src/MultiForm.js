import React, { useState } from "react";
import DepartmentForm from "./DepartmentForm";
import LabInformationForm from "./LabInformationForm";
import PurchaseOrderForm from "./PurchaseOrderForm";
import EquipmentDetailsForm from "./EquipmentDetailsForm";
import { GrLinkNext } from "react-icons/gr";
import { toast } from "react-toastify";
function MultiForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        DepartmentNumber: "",
        DepartmentName: "",
        HodName: "",
        LabNumber: "",
        DepartmentNumber: "",
        Location: "",
        LabIncharge: "",
        PurchaseOrderNumber: "",
        PurchaseOrderDate: "",
        Supplier: "",
        PurchaseorderValue: "",
        EquipmentSerialNumber: "",
        PurchaseOrderNumber: "",
        PurchaseOrderDate: "",
        EquipmentValue: "",
        Description: "",
        Invoice: "",
        Lab: "",
        Status: "",
    });

    const FormTitles = ["Department Details", "Lab Information", "Purchase Order Details", "Equipment Details"];

    const PageDisplay = () => {
        if (page === 0) {
            return <DepartmentForm formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <LabInformationForm formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <PurchaseOrderForm formData={formData} setFormData={setFormData} />;
        } else {
            return <EquipmentDetailsForm formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <>
            <div className="flex flex-wrap bg-blue-100 h-[100vh] lg:wrap w-6xl w-[100%] m-auto justify-center items-center space-x-7">
                <h1 className="lg:absolute lg:top-24  text-3xl font-bold text-center capitalize mt-4 text-4xl">{FormTitles[page]}</h1>
                <div>
                    <img src="https://cdn.dribbble.com/users/212447/screenshots/1922510/media/d3c907920b33e48ef5d57b858a23d43c.jpg?compress=1&resize=400x300&vertical=center" alt="oops" className="rounded-xl lg:w-[600px] w-[90%]" />
                </div>
                <div className="lg:w-[30%] w-[90%]">
                    {PageDisplay()}

                    <div className="flex  flex-wrap justify-evenly">
                        <button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                            className={`px-28 bg-red-600  text-white rounded-sm py-3 mt-3 text-sm font-semibold uppercase shadow hover:bg-red-700 duration-150 hover:shadow-lg active:bg-blue-800 ${page === 0 && "hidden"} `}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    toast.dismiss();
                                    toast.success("Form Submitted", { theme: "dark", position: "bottom-center" });
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                            className=" px-28 bg-blue-600 text-white rounded-sm py-3 mt-3 text-sm font-semibold uppercase shadow hover:bg-blue-700 duration-150 hover:shadow-lg active:bg-blue-800"
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MultiForm;

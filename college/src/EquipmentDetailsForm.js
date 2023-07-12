import React from "react";

const EquipmentDetailsForm = ({ formData, setFormData }) => {
    return (
        <form>
            <div className="lab-form">
                <div className="inputbox">
                    <input
                        type="number"
                        placeholder="Equipment Serial Number"
                        value={formData.EquipmentSerialNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, EquipmentSerialNumber: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div className="inputbox">
                    <input
                        type="number"
                        placeholder="Purchase order Number"
                        value={formData.PurchaseOrderNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, PurchaseOrderNumber: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div className="inputbox">
                    <input
                        type="date"
                        placeholder="Purchase Order Date"
                        value={formData.PurchaseOrderDate}
                        onChange={(e) => {
                            setFormData({ ...formData, PurchaseOrderDate: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div className="inputbox">
                    <input
                        type="number"
                        placeholder="Equipment Value"
                        value={formData.EquipmentValue}
                        onChange={(e) => {
                            setFormData({ ...formData, EquipmentValue: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div className="inputbox">
                    <input
                        type="file"
                        id="file"
                        webkitdirectory
                        multiple
                        value={formData.Invoice}
                        onChange={(e) => {
                            setFormData({ ...formData, Invoice: e.target.value });
                        }}
                    ></input>
                </div>
                <div className="inputbox">
                    <textarea
                        rows={3}
                        className="description"
                        placeholder="Description"
                        value={formData.Description}
                        onChange={(e) => {
                            setFormData({ ...formData, Description: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></textarea>
                </div>
                <div className="inputbox">
                    <input
                        type="text"
                        placeholder="Lab"
                        value={formData.Lab}
                        onChange={(e) => {
                            setFormData({ ...formData, Lab: e.target.value });
                        }}
                        className="w-full  my-2 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div className="flex items-center">
                    <label className="font-semibold pr-2">Status:</label>
                    <select
                        value={formData.Status}
                        onChange={(e) => {
                            setFormData({ ...formData, Status: e.target.value });
                        }}
                        className="border border-gray-300 bg-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                        <option selected>Choose</option>
                        <option>WorKing</option>
                        <option>Not Working</option>
                    </select>
                </div>
            </div>
        </form>
    );
};
export default EquipmentDetailsForm;

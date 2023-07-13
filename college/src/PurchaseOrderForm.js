import React from "react";

const PurchaseOrderForm = ({ formData, setFormData }) => {
    return (
        <form>
            <div>
                <div>
                    <input
                        type="number"
                        placeholder="Purchase Order Number"
                        value={formData.PurchaseOrderNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, PurchaseOrderNumber: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3  transition ease-in-out"
                    />
                </div>
                <div>
                    <input
                        type="date"
                        placeholder="Purchase Date"
                        value={formData.PurchaseDate}
                        onChange={(e) => {
                            setFormData({ ...formData, PurchaseDate: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Supplier"
                        value={formData.Supplier}
                        onChange={(e) => {
                            setFormData({ ...formData, Supplier: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Purchase Order Value"
                        value={formData.PurchaseOrderValue}
                        onChange={(e) => {
                            setFormData({ ...formData, PurchaseOrderValue: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3  transition ease-in-out"
                    ></input>
                </div>
            </div>
        </form>
    );
};
export default PurchaseOrderForm;

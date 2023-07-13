import React from "react";

const LabInformationForm = ({ formData, setFormData }) => {
    return (
        <form>
            <div>
                <div>
                    <input
                        type="number"
                        placeholder="Lab number"
                        value={formData.LabNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, LabNumber: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3 rounded-md "
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Department number"
                        value={formData.DepartmentNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, DepartmentNumber: e.target.value });
                        }}
                        className="w-full my-6 pl-2 text-xl py-3 rounded-md "
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Location"
                        value={formData.Location}
                        onChange={(e) => {
                            setFormData({ ...formData, Location: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3 rounded-md "
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Lab Incharge name"
                        value={formData.LabInchargeName}
                        onChange={(e) => {
                            setFormData({ ...formData, LabInchargeName: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3 rounded-md "
                    />
                </div>
            </div>
        </form>
    );
};
export default LabInformationForm;

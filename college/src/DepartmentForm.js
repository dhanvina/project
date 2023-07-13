import React, { useState } from "react";
import Buttons from "./Buttons";
import MultiForm from "./MultiForm";
const DepartmentForm = ({ formData, setFormData }) => {
    return (
        <>
            <form>
                <div className="">
                    <input
                        type="number"
                        placeholder="Department number"
                        value={formData.DepartmentNumber}
                        onChange={(e) => {
                            setFormData({ ...formData, DepartmentNumber: e.target.value });
                        }}
                        className="w-full  my-6 pl-2 text-xl py-3 rounded-md "
                    />
                    <div className="w-full flex justify-evenly ">
                        <label for="countries" className="block mb-2 text-lg font-medium ">
                            Choose Department :
                        </label>
                        <select
                            className="border border-gray-300 bg-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formData.DepartmentName}
                            onChange={(e) => {
                                setFormData({ ...formData, DepartmentName: e.target.value });
                            }}
                        >
                            <option selected>Choose a Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="ISE">ISE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="HOD Name"
                            value={formData.HodName}
                            onChange={(e) => {
                                setFormData({ ...formData, HodName: e.target.value });
                            }}
                            className="w-full  my-6 pl-2 text-xl py-3  transition ease-in-out"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};
export default DepartmentForm;

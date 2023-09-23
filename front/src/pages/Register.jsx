import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
function Register() {
    const [data, setData] = useState({
        password: "",
        confirm_password: "",
        email: "",
        lab_incharge: null,
        department: "",
        lab: null,
    });
    const { email, password, lab, confirm_password, department, lab_incharge } = data;
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            let response = await fetch("http://127.0.0.1:8000/api/LabInchargeRegister/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            });
            response = await response.json();

            if ((response.email = "lab incharge register with this email already exists.")) {
                toast.error(response.email);
                console.log(response);
                return;
            } else {
                toast.success("User registered");
            }
        } catch (error) {
            toast.dismiss();
            toast.error("Something went wrong");
            return;
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center top-4 ">
                    <p className="text-3xl font-semibold text-center my-9">Lab Incharge Registration</p>
                    <div className="flex flex-col w-full max-w-md gap-8 ">
                        <input onChange={onChange} required id="department" type="number" value={department} placeholder="Department Number" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="lab_incharge" type="number" value={lab_incharge} placeholder="Lab Incharge Number" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="lab" type="number" value={lab} placeholder="department_number" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="email" type="email" value={email} placeholder="email" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="password" type="password" value={password} placeholder="password" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="confirm_password" type="password" value={confirm_password} placeholder="Cofirm Password" className="px-4 py-3 rounded-md" />
                        <button className="px-8 py-2 text-white bg-blue-600 hover:bg-blue-700 transition ease-in-out rounded-md ">Register</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;

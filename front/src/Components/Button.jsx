import { LiaSaveSolid } from "react-icons/lia";

function Button() {
    return (
        <>
            <button className="box-border w-full   bg-blue-600 text-white rounded-sm py-2 mt-3 text-sm font-semibold uppercase shadow hover:bg-blue-700 duration-150 hover:shadow-lg active:bg-blue-800 ">
                {" "}
                <p className="flex justify-center items-center ">
                    Save <LiaSaveSolid className="w-8 text-xl " />
                </p>
            </button>
        </>
    );
}

export default Button;

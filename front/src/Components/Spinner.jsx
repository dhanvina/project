import { MoonLoader } from "react-spinners";
function spinner() {
    return (
        <div className="flex justify-center absolute items-center top-0 right-0 left-0 bottom-0 z-50 ">
            <MoonLoader />{" "}
        </div>
    );
}

export default spinner;

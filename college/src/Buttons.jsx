import MultiForm from "./MultiForm";
function Buttons({ page, setPage, formData, FormTitles }) {
    return (
        <>
            <div className="Submition">
                <button
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                    className="ml-1 duration-200  ease-in-out hover:text-red-700 cursor-pointer inline-block text-red-600"
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("Form Submitted!!");
                            console.log(formData);
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                    className="ml-1 duration-200  ease-in-out hover:text-red-700 cursor-pointer inline-block text-blue-600"
                >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </>
    );
}

export default Buttons;

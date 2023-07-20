function Issue() {
    return (
        <div className="h-screen  bg-blue-100 w-full flex px-3 flex-col  items-center justify-center">
            <h1 className="font-bold text-3xl pt-28">Equipment Issues</h1>
            <form className="max-w-2xl m-auto flex flex-col  w-full justify-center items-center ">
                <input type="text" placeholder="Experiment" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" />
                <input type="text" placeholder="Lab" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" />
                <input type="text" placeholder="Number of Equipments" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" />
                <textarea minLength="50" rows="2" className="border border-black w-full rounded transition ease-in-out py-3 mb-2 px-2" placeholder="Details"></textarea>
                <button className="bg-blue-600 py-2 w-[50%] text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition ease-in-out">Submit</button>
            </form>
        </div>
    );
}

export default Issue;

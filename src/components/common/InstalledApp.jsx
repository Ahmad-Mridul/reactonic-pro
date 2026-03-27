const InstalledApp = ({ app }) => {
    const { image, title, downloads, ratingAvg, size } = app;
    return (
        <div className="bg-white p-5 rounded">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={image} alt="" className="w-15"/>
                    <div className="text-left">
                        <p className="font-bold">{title}</p>
                        <div className="flex gap-5">
                            <p>{downloads}</p>
                            <p>{ratingAvg}</p>
                            <p>{size}</p>
                        </div>
                    </div>
                </div>
                <button className="btn bg-green-400 border-0 hover:bg-green-500">Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;
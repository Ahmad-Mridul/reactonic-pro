const IconBox = ({icon, info, number}) => {
    return (
        <div className="space-y-2">
            <div className={`text-xl ${info==="Downloads" && "text-green-400" ||info==="Average Ratings" && "text-yellow-400" ||info==="Total Reviews" && "text-blue-400"}`}>{icon}</div>
            <p className="font-thin">{info}</p>
            <p className="text-2xl font-bold">{number}</p>
        </div>
    );
};

export default IconBox;
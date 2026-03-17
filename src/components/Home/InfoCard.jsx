const InfoCard = ({title,number,desc}) => {
    return (
        <div className="space-y-3">
            <p className="font-thin">{title}</p>
            <p className="text-6xl font-bold">{number}</p>
            <p className="font-thin">{desc}</p>
        </div>
    );
};

export default InfoCard;
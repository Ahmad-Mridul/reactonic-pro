const AppCard = ({app}) => {
    const {image, title, downloads, ratingAvg} = app;
    return (
        <div className="p-2">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
        </div>
    );
};

export default AppCard;
import Favorite from "./Favorite"

export default function Card(props) {
   
    return (
        <div className="card">
            <div className="card__body">
                <div className="image__container">
                    <img src={`../images/${props.imageUrl}`} alt={props.title} className="card__image"></img>
                    <Favorite
                      favorite={props.isFavorite}
                      handleToggle= {props.toggle}
                    />
                </div>
                <div className="card__location__info">
                    <h3>
                        <i className="fas fa-map-marker"></i>
                        {props.location}
                    </h3>
                </div>
                    <h2 className="card__title">
                        {props.title}
                    </h2>

              
                <div className="card__details">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <p className="card__description">
                    {props.description}
                </p>
            </div>
            <a href={props.googleMapsUrl} target='_blank' className="card__link" rel="noreferrer" >View on Google Maps</a>
        </div>
    )
}
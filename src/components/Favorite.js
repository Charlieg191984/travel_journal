
export default function Favorite(props) {
    const starIcon = props.favorite ? 'fas fa-heart' : 'far fa-heart';
    return (
        <button className="favorite__btn" onClick={props.handleToggle}>
            <i className={starIcon}></i>
        </button>
    )
}
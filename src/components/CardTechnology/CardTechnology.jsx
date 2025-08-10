import "./styles.css";
const CardTechnology = ({imgTechnology, textTechnology}) => {

    
    return (
       
        <div className="card-technology">
            <img className='technology-img' src={imgTechnology}/>
            <p className="description-technology">{textTechnology}</p>
        </div>
    )
};

export default CardTechnology;

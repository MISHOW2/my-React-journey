export default function Cards(props) {
     return (
       <div className="card-grid-container">
         <div className="cardContainer">
           <img src={`/images/${props.coverImg}`} alt={props.title} />
           <p className="soldOut">{props.location}</p>
           <p>{props.country}</p>
           <p>{props.title}</p>
           <p>{props.price}</p>
         </div>
       </div>
     );
   }
   
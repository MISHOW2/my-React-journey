
import SecPicture from './assets/cc27c7a29d19484fc16a88a858818a64.jpg'
import ThirdPicture from './assets/2e14ab487375450939adb37a55c58038.jpg'
export default function Cards(props){
     return (
       
     <div className="card-grid-container">
        <div className="cardContainer">
             <img src={`../images/${props.img}`} alt="" />
             <p className='soldOut'>ONLINE</p>
             <p>{props.country}</p>
             <p>Life lesson with K zaferes</p>
             <p>From $136/person</p>
        </div>
     </div>
   );
}
import FirstPicture from './assets/image 12.png'
import SecPicture from './assets/cc27c7a29d19484fc16a88a858818a64.jpg'
import ThirdPicture from './assets/2e14ab487375450939adb37a55c58038.jpg'
export default function Cards(){
     return (
       
     <div className="card-grid-container">
        <div className="cardContainer">
             <img src={FirstPicture} alt="" />
             <p className='soldOut'>ONLINE</p>
             <p>USA</p>
             <p>Life lesson with K zaferes</p>
             <p>From $136/person</p>
        </div>
        <div className="cardContainer">
             <img src={SecPicture} alt="" />
             <p className='soldOut'>SOLD OUT</p>
             <p>USA</p>
             <p>Group Moountain Biking</p>
             <p>From $36/person</p>
        </div>
        <div className="cardContainer">
             <img src={ThirdPicture} alt="" />
             <p className='soldOut'>ONLINE</p>
             <p>USA</p>
             <p>Learn wedding photography</p>
             <p>From $126/person</p>
        </div>
     </div>
   );
}
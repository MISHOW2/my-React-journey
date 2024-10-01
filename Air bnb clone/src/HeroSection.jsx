import GridPicture from './assets/Group 77.png'

export default function Hero(){

  return (
   <>
    <div className='grid-container'>
      <img src={GridPicture} alt="" />
    </div>

    <div className='hero-message'>
      <h2>Online Experiences</h2>
      <p>Join unique interactive actavities led by one-of-a-kind hosts-all without leaving home </p>
    </div>
   </>
   
  );
}
import picture from './assets/profile.jpg'

export default function Info(){

  return(
    <>
    <div className="profile-picture">
      <img src={picture} alt="" />
    </div>
    <div className="profle-info">
    
       <ul>
        <li className='name'>Jame J</li>
        <li className='position'>Frontend Developer</li>
       </ul>
    </div>

    <div className='btnContainer'>
      <button className='emailbtn'><i class="fas fa-envelope"></i> Email</button>
      <button className='linkedIn'><i class="fas fa-envelope"></i> Linked in</button>
    </div>
    </>
    
  );
}
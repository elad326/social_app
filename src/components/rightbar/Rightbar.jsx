import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className='birthdayImg'/>
          <span className="birthdayText"><b>Pola foster</b>and <b>3 other freinds</b> had a birthday today</span>
        </div>

        <img src="assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Freinds</h4>
        <ul className="rightbarFreindsList">
          {
            Users.map((u) => (
              <Online key={u.id} user={u}/>
            ))
          }
         
        </ul>
      </div>

    </div>
  )
}

export default Rightbar
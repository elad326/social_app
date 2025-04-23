import './profile.css';
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>

            <div className="profileRight">
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    </>
  )
}

export default Profile
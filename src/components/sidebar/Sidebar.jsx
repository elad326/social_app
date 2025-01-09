import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupsIcon from '@mui/icons-material/Groups';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ChatIcon from '@mui/icons-material/Chat';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Shoe More</button>
        <hr className="sidebarHr"/>
          <ul className="sidebarFreindList">
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
            <li className="sidebarFreind">
              <img src="/assets/person/2.jpeg" className='sidebarFreindImg' alt="" />
              <span className="sidebarFreindName">Jane DOe</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar
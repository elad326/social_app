import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Elad B</span>
                    <span className="postDate">5 minutes ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='postTopIcon'/>
                </div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}

export default Post
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({post}) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);


    const changeLike = () =>{

        setLike(isLiked ? like-1 : like +1 );
        setIsLiked(!isLiked);
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='postTopIcon'/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img src={post.photo} className='postImg' alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt="" onClick={changeLike} />
                    <img className='likeIcon' src="assets/heart.png" alt=""  onClick={changeLike} />
                    <span className="postLikesCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCOmmentsText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
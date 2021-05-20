// import mainContentBg from '../../nyc-bg.jpg';
// import userImg from '../../og-cat.jpg';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message:'Hi, how are you?', likesCount: 12}, 
        {id: 2, message:'It is my first post', likesCount: 10}, 
        {id: 3, message:'Hello world!', likesCount: 100}
    ]

    let postsElements = 
        postsData.map (posts => <Post message={posts.message} likesCount={posts.likesCount}/>);

    return <div className={classes.postsBlock}>
        {/* <div>
            <img className={classes.userImg} src={userImg}></img>
        </div> */}
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;

// import mainContentBg from '../../nyc-bg.jpg';
// import userImg from '../../og-cat.jpg';
import classes from './Post.module.css';

const Post = (props) => {
    
    // let postData = [
    //     {id: 1, message:'Hi, how are you?', likesCount: 12}, 
    //     {id: 2, message:'It is my first post', likesCount: 10}, 
    //     {id: 3, message:'Hello world!', likesCount: 100}
    // ]

    return (
        <div className={classes.item}>
            <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>)
}

export default Post;
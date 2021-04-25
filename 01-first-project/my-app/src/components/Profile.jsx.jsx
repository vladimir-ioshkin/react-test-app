import mainContentBg from '../nyc-bg.jpg';
import userImg from '../og-cat.jpg';

const Profile = () => {
    return <main className='main-content'>
        <div>
            <img className="main-content-jpg" src={mainContentBg}></img>
        </div>
        <div>
            <img className="user-img" src={userImg}></img>
        </div>
        <div>My posts
      <div>New post</div>
            <div>
                Post 1
      </div>
            <div>
                Post 2
      </div>
        </div>
    </main>
}

export default Profile
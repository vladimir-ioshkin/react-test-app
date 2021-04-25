import './App.css';
import logo from './logo.png';
import mainContentBg from './nyc-bg.jpg';
import userImg from './og-cat.jpg';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img className="header-logo" src={logo}></img>
      </header>
      <nav className='navigation'>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <main className='main-content'>
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
    </div>
  );
}


export default App;

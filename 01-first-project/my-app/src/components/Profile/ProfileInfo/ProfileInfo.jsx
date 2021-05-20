import mainContentBg from '../../../nyc-bg.jpg';
import userImg from '../../../og-cat.jpg';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes['content-jpg']} src={mainContentBg}></img>
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <div>username</div>
                    <ul>
                        <li>Date</li>
                        <li>City</li>
                        <li>Eductaion</li>
                        <li>Links</li>
                    </ul>
                </div>
                <div>
                    <img className={classes.userImg} src={userImg}></img>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
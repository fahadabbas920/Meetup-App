import { Link } from 'react-router-dom';
import classes from "./MainNavigation.module.css";
import { useContext } from 'react';
// import FavouritesContext from '../../store/favourite-context';


const MainNavigation = () => {
    // const favouriteCtx = useContext(FavouritesContext);


    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    {/* a tag link can be used but it will request server for new page and refresh broswer page */}
                    {/* Link uses a click event listner and renders a desired component doesnt send request */}
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to={'/favourites'}>My Favourites
                    {/* <span className={classes.badge}>{favouriteCtx.totalFavourites}</span> */}
                    </Link></li>
                    <li><Link to={'/newMeetups'}>Add newMeetup</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default MainNavigation;
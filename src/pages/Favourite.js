// import { useContext } from "react";
// import FavouritesContext from "../store/favourite-context";
// import MeetupList from "../components/meetups/MeetupList";

const FavouritesPage = () => {
    // const favouritesCtx = useContext(FavouritesContext);
    // let content;

    // if(favouritesCtx.totalFavourites === 0){
    //     content = <p>You got no favourites yet. Start adding some?</p>
    // }else{
    //     content = <MeetupList meetups={favouritesCtx.favourites}/>
    // }
    
    return (
        <section>
            <h1>My Favourites</h1>
            {/* <MeetupList meetups={favouritesCtx.favourites}>
            </MeetupList> */}
        </section>
    );
}
 
export default FavouritesPage;
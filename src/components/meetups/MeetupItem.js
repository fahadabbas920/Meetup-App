import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
// import FavouritesContext from '../../store/favourite-context';


const MeetupItem = (props) => {

  // const favouritesCtx  = useContext(FavouritesContext);
  // console.log(favouritesCtx);

  // const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  
  // function togglerFavouriteStatusHandler(){
  //   if(itemIsFavourite){
  //     favouritesCtx.removeFavourite(props.id);
  //   }else{
  //     favouritesCtx.addFavourite({
  //       id: props.id,
  //       title: props.title,
  //       description: props.description,
  //       image: props.image,
  //       address: props.address
  //     })
  //   }
  // }


  return (
    <Card>
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        {/* <button onClick={togglerFavouriteStatusHandler}>{itemIsFavourite ? 'remove from favourites' : 'to Favourites'}</button> */}
      </div>
    </li>
    </Card>
  );
};

export default MeetupItem;

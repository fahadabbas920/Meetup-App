// import { createContext, useState } from "react";

// const FavouriteContext = createContext({ //this context object will create a react component thats why it should  be capital letter
//   favourites: [],
//   totalFavourites: 0,
//   addFavourite: (favouriteMeetup) => {},
//   removeFavourite: (meetupId) => {},
//   ItemIsFavourite: (meetupId) => {},
// }); //Context is a JS Object and built in component

// export function FavouritesContextProvider(props) {
//   const [userFavourites, setUserFavourites] = useState([]);

//   function addFavouriteHandler(favouriteMeetup) {
//     setUserFavourites((preUserFavourites) => {
//       return preUserFavourites.concat(favouriteMeetup);
//     });
//   }

//   function removeFavouriteHandler(meetupId) {
//     setUserFavourites((preUserFavourites) => {
//       return preUserFavourites.filter((meetup) => {
//         return meetup.id !== meetupId;
//       });
//     });
//   }

//   function ItemIsFavouriteHandler(meetupId) {
//     return userFavourites.some((meetup) => {
//       return meetup.id === meetupId;
//     });
//   }

//   const context = {
//     favourites: userFavourites,
//     totalFavourites: userFavourites.length,
//     addFavourite: addFavouriteHandler,
//     removeFavourite: removeFavouriteHandler,
//     ItemIsFavourite: ItemIsFavouriteHandler,
//   };
//   return (
//     <FavouriteContext.Provider value={context}>
//       {/* This provider compoonent is wrapped around all te components that are interested in interacting with this context */}

//       {props.children}
//       {/* when we wrap some components with FavouritesContextProvider and want those children components to be wrapped by provider components we accept child comps as props and then wrap them using props.children */}
//     </FavouriteContext.Provider>
//   );
// }

// export default FavouritesContextProvider;

import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetup-app-8a4fb-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json()
      })
      .then((Data) => {
        const meetups = [];
        for (const keys in Data){
          const meetup = {
            id: keys,
            ...Data[keys],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setData(meetups);
      })
      .catch((error) => {
        setIsError(error);
      });

    if (isLoading) {
      // console.log(isLoading)
      // return (
      //   <section>
      //     <p>Loading...</p>
      //   </section>
      // );
    } else if (isError) {
      console.log(isError)
    }
  }, []);
  // console.log(typeof data)
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups = {data} />
      {/* {DUMMY_DATA.map((meetup) => {
            return <li key = {meetup.id}>{meetup.title}</li>
        })} */}
    </section>
  );
};

export default AllMeetupsPage;

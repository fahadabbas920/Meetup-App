import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        //meetups is put at the end to create a folder ot table 2nd arugent of fetch is an objject which help us to change the behavoiour of fetch request
        fetch('https://meetup-app-8a4fb-default-rtdb.firebaseio.com/meetups.json',{
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
            //metaData some APi also require this
            'Content-type': 'application/json'
        }
        }).then(()=>{
            navigate('/');
        });
    }
    return (
        <section>
        <h1>Add New Meetups Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>    
        </section>
    );
}
 
export default NewMeetupPage;
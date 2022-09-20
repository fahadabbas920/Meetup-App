import { useRef } from 'react';
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    //UseRef  is used to listen to event but it doesnt send request to server
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler =(event)=>{
        //Prevents the browser default behavior for handling onSubmit 
        event.preventDefault();
        //Objects with useRef have a current property that holds the actual element and value property holds the value of element
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }
    
    return ( 
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" placeholder="My Favourite Place" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required id="image" placeholder="Insert image url here" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" placeholder="DHA Lahore, Pakistan" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" placeholder="I Love this place" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
     );
}
 
export default NewMeetupForm;
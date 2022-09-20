import classes from './Card.module.css';

const Card = (props) => {
    return ( 
        <div className = {classes.card}>
            {/* children prop recieves by every component and it is the content with is inside the opening and closing cmoponent tag of  */}
            {props.children} 
        </div>
     );
}
 
export default Card;

import React, {useState} from 'react';
import  {Card} from "./shared/card";
import SingleRating from "./SingleRating";
import FeedbackContext from "../context/FeedbackContext";
import {useContext} from "react";

export function FeedbackForm() {
    // useContext is a hook that allows you to access the context value
     // Destructure feedback from context

    //useState is a hook that allows you to add state to a functional component
    //useState takes an initial value and returns an array with the current state and a function to update it   
 const  [text, setText] = useState('');
 const  [disableButton, setDisableButton] = useState(true);
 const  [warningText, setWarningText] = useState("");
 const  [rating , setRating] = useState(10);
 const {handleAddReview} = useContext(FeedbackContext);  

    const  handleOnChangeText = (e)=>{
        if (text === ""){
         setDisableButton(true);
         setWarningText(null);

        }

       else if (text !== "" && text.trim().length <10){
           setDisableButton(true);
           setWarningText("Please enter at least 10 characters long");

        }
       else {
setWarningText(null)
       setDisableButton(false);}
        setText(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
      const newFeedback = {
          text,rating
      }
            handleAddReview(newFeedback);
            setText("")
        }
    }

    return (
        <Card>
            <form  onSubmit={handleOnSubmit}>
                <h2>
                    How would you rate your service with us ?
                </h2>
                <SingleRating  select={setRating} selected={rating} />
                <div className="input-group">
                    <input
                        type="text"
                        onChange={handleOnChangeText}
                        placeholder="Write a review"
                        value={text}

                    />
                    <button  type="submit" disabled={disableButton}> send </button>

                </div>
                {
                    warningText &&   <div className='message'>
                        {warningText}
                    </div>
                }
            </form>

        </Card>
    );
}

export default FeedbackForm;
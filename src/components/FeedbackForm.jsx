
import React, {useState} from 'react';
import  {Card} from "./shared/card";
import SingleRating from "./SingleRating";

export function FeedbackForm({handleSubmit}) {
 const  [text, setText] = useState('');
 const  [disableButton, setDisableButton] = useState(true);
 const  [warningText, setWarningText] = useState("");
 const  [rating , setRating] = useState(10);


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
            handleSubmit(newFeedback);
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
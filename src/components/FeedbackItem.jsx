import React, {useState} from 'react';



 function FeedbackItem() {
     const [rating, setRating] = useState(0);
     const [feedback, setFeedback] = useState("No feedback");

     function handleOnClick() {
         // this is one of method of changing state
         setRating(10)

         // another way
          // advantage of this it helps to access the previous values  through function

         setFeedback((prevState)=>{

         });
     }



    return (
        <div  className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {feedback}
            </div>
          <button className="btn btn-primary" onClick={handleOnClick}>
              Add Feedback
          </button>
        </div>
    );
}


export default FeedbackItem;
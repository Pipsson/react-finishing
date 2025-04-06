// import React, {useState} from 'react';
import React from "react";
import Card from "./shared/card";
import PropTypes from 'prop-types';
import {FaTimes} from "react-icons/fa";

 function FeedbackItem({item, handleDelete}) {
     // const [rating, setRating] = useState(0);
     // const [feedback, setFeedback] = useState("No feedback");
     //
     // function handleOnClick() {
     //     // this is one of method of changing state
     //     setRating(10)
     //
     //     // another way
     //      // advantage of this it helps to access the previous values  through function
     //
     //     setFeedback((prevState)=>{
     //
     //     });
     // }


    return (
        <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button className="close" onClick={()=> handleDelete(item.id)}>
                  <FaTimes />
            </button>
            <div className="text-display">
                {item.text}
            </div>

          {/*<button className="btn btn-primary" onClick={handleOnClick}>*/}
          {/*    Add Feedback*/}
          {/*</button>*/}
        </Card>
    );
}

FeedbackItem.propTypes = {
     item :PropTypes.object,
}

export default FeedbackItem;
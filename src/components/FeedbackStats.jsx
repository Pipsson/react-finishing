import React from 'react';
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

export function FeedbackStats() {
    //use of context to get the feedback data
    // useContext is a hook that allows you to access the context value
    const {feedback} = useContext(FeedbackContext); // Destructure feedback from context
    const reviews = feedback.length;
    //calculating average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / reviews;

    // to ensure we have only single decimal place
    average = average.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="feedback-stats">
            <h4>
                Number of reviews : {reviews}
            </h4>
            <h4> Average rating : {isNaN(average) ? 0 : average} </h4>
        </div>
    );
}

export default FeedbackStats;
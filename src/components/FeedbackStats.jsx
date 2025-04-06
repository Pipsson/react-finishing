import  React from 'react';


export function FeedbackStats({feedback}) {
    const reviews = feedback.length;

    //calculating average
    let average = feedback.reduce((acc, cur) => {
       return  acc + cur.rating
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
import  React from 'react';


export function FeedbackStats({feedback}) {
    const reviews = feedback.length;

    let average = feedback.reduce((acc, cur) => {
       return  acc + cur.rating
    }, 0) / reviews;
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
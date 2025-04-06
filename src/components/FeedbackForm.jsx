
import React, {useState} from 'react';
import  {Card} from "./shared/card";

export function FeedbackForm() {
 const  [review, setReview] = useState('');

    const  handleOnChangeText = (e)=>{
        setReview(e.target.value);
    }
    return (
        <Card>
            <form >
                <h2>
                    How would you rate your service with us ?
                </h2>
                <div className="input-group">
                    <input
                        type="text"
                        onChange={handleOnChangeText}
                        placeholder="Write a review"
                        value={review}

                    />
                    <button  type="submit"> send </button>

                </div>
            </form>

        </Card>
    );
}

export default FeedbackForm;
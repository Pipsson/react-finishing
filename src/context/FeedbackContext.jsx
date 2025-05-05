import {createContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";
 

const FeedbackContext = createContext();
export    const FeedbackProvider = ({ children }) =>  {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Hello Feedback! From Context 1',
            rating: 5,
            
            
        },
        {
            id: 2,
            text: 'Hello Feedback! From Context 2',
            rating: 5,
            
            
        },
        {
            id: 3, 
            text: 'Hello Feedback! From Context 3',
            rating: 5,
            
            
        }
    ])
    const handleAddReview = (newReview) => {
        newReview.id = uuidv4();
        setFeedback([newReview, ...feedback]);
    };
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
  return  <FeedbackContext.Provider value={{
      feedback,
      handleAddReview,
      deleteFeedback
  }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
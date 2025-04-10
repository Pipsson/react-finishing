
import  React from 'react';
import {motion, AnimatePresence} from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from  "prop-types"


 function FeedbackList({feedbackData, handleDelete}) {
     if (!feedbackData) {
         return <p>
             There is no  feedback.
         </p>;
     }
    return (
        <div className="feedback-list">
          <AnimatePresence>
              {
                  feedbackData.map((item) => (
                          <FeedbackItem key={item.id} item={item}  handleDelete={handleDelete} />

                  ))
              }
          </AnimatePresence>
        </div>
    );
}


FeedbackList.propTypes = {
    feedbackData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        rating: PropTypes.number
    })),
}

export default FeedbackList;
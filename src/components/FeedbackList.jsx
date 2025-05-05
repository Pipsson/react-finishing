
import  React from 'react';
import { AnimatePresence} from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

 function FeedbackList() {

    //use of context to get the feedback data
     const {feedback} = useContext(FeedbackContext);
     if (!feedback) {
         return <p>
             There is no  feedback.
         </p>;
     }
    return (
        <div className="feedback-list">
          <AnimatePresence>
              {
                  feedback.map((item) => (
                          <FeedbackItem key={item.id} item={item}   />

                  ))
              }
          </AnimatePresence>
        </div>
    );
}




export default FeedbackList;
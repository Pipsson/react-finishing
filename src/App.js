
import {useState} from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete this feedback?")) {
          setFeedbackData(feedbackData.filter((item) => item.id !== id)
          )
      }
    }

    return (
        <>
            <Header text= "Feedback UI" />
            <FeedbackList  feedbackData={feedbackData} handleDelete={deleteFeedback} />
        </>
    );
}
export default App;
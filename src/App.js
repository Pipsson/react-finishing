import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const handleAddReview = (newReview) => {
        newReview.id = uuidv4();
        setFeedbackData([newReview, ...feedbackData]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedbackData(feedbackData.filter((item) => item.id !== id));
        }
    };

    return (
        <Router>
            <Header text="Feedback UI" />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleSubmit={handleAddReview} />
                                <FeedbackStats feedback={feedbackData} />
                                <FeedbackList feedbackData={feedbackData} handleDelete={deleteFeedback} />
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <AboutLink />
        </Router>
    );
}

export default App;

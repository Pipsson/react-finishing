import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header text="Feedback UI" />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm  />
                                    <FeedbackStats  />
                                    <FeedbackList  />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutLink />
            </Router>
        </FeedbackProvider>

    );
}

export default App;

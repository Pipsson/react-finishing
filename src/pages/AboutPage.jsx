import React from 'react';
import Card from "../components/shared/card";
import {Link} from "react-router-dom";

function AboutPage() {
    return (
        <Card >
            <h1>About Page</h1>
            <p>This app is used to collect and manage user feedback.</p>
            <p>version 1.0.0</p>
            <Link to="/">
                <p>Back to Home</p>
            </Link>
        </Card>
    );
}
export default AboutPage;

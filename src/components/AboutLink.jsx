import  React from 'react';
import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom";


function AboutLink() {
    return (
        <div  className="about-link">
            <Link to="/about">
                {/*another way to add link data  using
                <Link to ={{
                // Here you can define
                pathname;
                query
                hash and etc

                }} />
                */}
                <FaQuestion   size={30} />
            </Link>
        </div>
    )
}
export default AboutLink;
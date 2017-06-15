import React from "react";
import { Link } from "react-router";

export default () => {
    return (
        <div>
            <div>
                <h1>Page Not Found</h1>
                <p>We're unable to find that page.</p>
                <Link to="/">HEAD HOME</Link>
            </div>
        </div>
    );
};
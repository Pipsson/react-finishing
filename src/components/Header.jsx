import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <header style={headerStyle}>
            <div className="container">
                <h1 className="header_title">
                    {text}
                </h1>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

Header.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
};

export default Header;

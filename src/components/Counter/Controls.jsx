import PropTypes from 'prop-types'; // ES6

function Controls({ onClick }) {
    return (
        <ul>
            <li>
                <button onClick={onClick}>Good</button>
            </li>
            <li>
                <button onClick={onClick}>Neutral</button>
            </li>
            <li>
                <button onClick={onClick}>Bad</button>
            </li>
        </ul>
    );
}

Controls.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Controls;

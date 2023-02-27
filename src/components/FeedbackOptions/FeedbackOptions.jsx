import PropTypes from 'prop-types';
import "./FeedbackOptions.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul className='FeedbackButton__list'>
            {options.map(option => {
                return (
                   <li key={option}>
                        <button className="FeedbackButton__btn" type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
                    </li>
                )
            })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired, 
}

export default FeedbackOptions;
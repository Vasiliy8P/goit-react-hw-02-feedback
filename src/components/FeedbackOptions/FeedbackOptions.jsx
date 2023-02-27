const FeedbackOptions = ({options, onLeaveFeedback}) => {
    console.log(options)
    return (
        <ul>
            {options.map(option => {
                return (
                   <li>
                        <button type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default FeedbackOptions;
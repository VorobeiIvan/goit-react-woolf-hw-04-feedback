const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feedback-list">
      {options.map(option => (
        <li key={option} className="feedback-item">
          <button
            className="feedback-button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

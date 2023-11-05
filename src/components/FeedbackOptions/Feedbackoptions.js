import { Button, BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnWrapper>
    {options.map(option => (
      <Button key={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </BtnWrapper>
);

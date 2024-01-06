import styled from 'styled-components';
type Props = { text: string; onClick(): void };
function Button({ text, onClick }: Props) {
  return (
    <ButtonWrapper>
      <button onClick={onClick}>{text}</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  & button {
    width: 100px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
  }
`;
export default Button;

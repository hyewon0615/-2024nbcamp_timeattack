import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import authApi from '../api';
import Button from '../componenets/common/Button';
import useForm from '../hooks/useForm';
import { login } from '../redux/modules/authSlice';
function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { formState, onChangeHandler, resetForm } = useForm({
    id: '',
    password: '',
    nickname: '',
    checkPassword: ''
  });
  const { id, password, nickname, checkPassword } = formState;

  const dispatch = useDispatch();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoginMode) {
      //로그인
      try {
        const { data } = await authApi.post('/login', {
          id,
          password
        });
        if (data.success) {
          dispatch(login(data.accessToken));
          alert('로그인 성공');
        }
      } catch (err: any) {
        alert(err.response.data.message);
      }
    } else {
      //회원가입
      if (password !== checkPassword) {
        alert('비밀번호와 확인비밀번호가 일치하지 않습니다.');
      } else {
        try {
          const { data } = await authApi.post('/register', {
            id,
            password,
            nickname
          });
          if (data.success) {
            setIsLoginMode(true);
            resetForm();
            alert('회원가입 성공');
          }
          console.log(data);
        } catch (err: any) {
          alert(err.response.data.message);
        }
      }
    }
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Title>{isLoginMode ? '로그인' : '회원가입'}</Title>
        <Input
          name="id"
          onChange={onChangeHandler}
          value={id}
          placeholder="이메일을 입력해주세요 "
          type="email"
        />
        <Input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={password}
          placeholder="비밀번호 (4~15글자)를 입력해주세요"
          minLength={4}
          maxLength={15}
        />
        {!isLoginMode && (
          <>
            <Input
              name="checkPassword"
              value={checkPassword}
              onChange={onChangeHandler}
              placeholder="비밀번호를 다시 입력해주세요"
              minLength={4}
              maxLength={15}
            />
            <Input
              name="nickname"
              value={nickname}
              onChange={onChangeHandler}
              placeholder="닉네임 (1~10글자)를 입력해주세요"
              minLength={1}
              maxLength={10}
            />
          </>
        )}
        <Button onClick={() => {}} text={isLoginMode ? 'login' : 'join us'} />

        <ToggleText>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>
            {isLoginMode ? '회원가입' : '로그인'}
          </span>
        </ToggleText>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  background-color: lightgray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  padding: 12px 0;
  outline: none;
`;

const ToggleText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 24px;
  & span {
    color: lightgray;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export default Login;

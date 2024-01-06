import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import authApi from '../api';
import Button from '../componenets/common/Button';
import { login } from '../redux/modules/authSlice';

function Login() {
  const schema = yup.object().shape({
    id: yup
      .string()
      .email('⚠이메일 형식이 적합하지 않습니다.')
      .required('⚠반드시 입력해야하는 필수 사항입니다.'),

    password: yup
      .string()
      .min(4, '⚠비밀번호는 최소4자리 이상입니다.')
      .max(15, '⚠비밀번호는 최대 15자리까지입니다.')
      .required('⚠비밀번호는 반드시 입력해주세요.')
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  type FormData = yup.InferType<typeof schema>;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<FieldValues> = async ({
    id,
    password
  }) => {
    //로그인

    try {
      const { data } = await authApi.post('/login', {
        id,
        password
      });
      if (data.success) {
        dispatch(login(data.accessToken));
        alert('로그인 성공');
        reset();
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title>로그인</Title>
        <Input
          placeholder="이메일을 입력해주세요 "
          {...register('id', { required: true })}
        />
        <Message>{errors.id?.message}</Message>
        <Input
          type="password"
          placeholder="비밀번호 (4~15글자)를 입력해주세요"
          {...register('password', { required: true })}
        />
        <Message>{errors.password?.message}</Message>

        <Button onClick={() => {}} text={'로그인하기'} />

        <ToggleText>
          <span
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
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
  padding: 24px;
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
const Message = styled.p`
  height: 20px;
  color: red;
`;

export default Login;

import { useDispatch } from 'react-redux';
import Button from '../componenets/common/Button';
import { logout } from '../redux/modules/authSlice';
function Home() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(logout(''))} text={'로그아웃'} />;
}

export default Home;

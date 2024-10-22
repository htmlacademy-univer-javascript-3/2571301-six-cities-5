import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuth: boolean;
  children: JSX.Element; // Убедись, что тип для children — это один элемент JSX
};

const PrivateRoute = ({ isAuth, children }: PrivateRouteProps) => {
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

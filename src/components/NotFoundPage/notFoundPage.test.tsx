import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { withHistory, withStore } from '../../utils/mockComponent.tsx';
import { AuthorizationStatus } from '../../mocks/login.ts';
import NotFoundPage from './NotFoundPage.tsx';

describe('Component: NotFoundPage', () => {

  it('should render "NotFoundPage" ', () => {
    const fakeUserEmail = datatype.string();
    const authStatus = AuthorizationStatus.Auth;
    const {withStoreComponent} = withStore(<NotFoundPage userEmail={fakeUserEmail} authStatus={authStatus}/>);
    const preparedComponent = withHistory(withStoreComponent);
    const expectedText = 'Error 404. Page not found.';

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

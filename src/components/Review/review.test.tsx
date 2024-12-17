import { render, screen } from '@testing-library/react';
import { mockCommentList } from '../../mocks/storeMock.ts';
import Review from './Review.tsx';

describe('Component: Loading page', () => {
  it('should render correctly', () => {
    const userInfoTestId = 'user-info';
    const userImageTestId = 'user-image';
    const reviewRaitingTestId = 'review-raitings';
    const reviewTimeTestId = 'review-time';

    render(<Review guestReview={mockCommentList[0]}/>);

    const userInfo = screen.getByTestId(userInfoTestId);
    const userImage = screen.queryByTestId(userImageTestId);
    const reviewRaiting = screen.queryByTestId(reviewRaitingTestId);
    const reviewTime = screen.queryByTestId(reviewTimeTestId);

    expect(userInfo).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(reviewRaiting).toBeInTheDocument();
    expect(reviewTime).toBeInTheDocument();

  });
});

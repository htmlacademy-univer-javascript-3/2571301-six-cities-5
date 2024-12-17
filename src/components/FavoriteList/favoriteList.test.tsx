import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { withHistory, withStore } from '../../utils/mockComponent.tsx';
import { mockOfferList } from '../../mocks/storeMock.ts';
import FavouriteList from './FavoriteList.tsx';

describe('Component: FavouriteList', () => {
  it('should render correctly', () => {
    const expectedTestId = 'favourite-list';
    const cityList = [datatype.string(), datatype.string()];
    const {withStoreComponent} = withStore(<FavouriteList offers = {mockOfferList} cityList={cityList} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const testId = screen.getByTestId(expectedTestId);

    expect(testId).toBeInTheDocument();
  });
});

'use client';

import FrontDoor from '@muze/components/FrontDoor/FrontDoor';
import store from '@muze/lib/redux/store';
import { Provider } from 'react-redux';

export default async function Page() {
  return (
    <Provider store={store}>
      <FrontDoor />
    </Provider>
  );
}

import { ProfileProvider } from '../context/ProfileContext';
import { Cart } from '../organisms/Cart/Cart';
import RenderTemplate from '../templates/RenderTemplate/RenderTemplate';

export const CartPage = () => {
  return (
    <>
      <ProfileProvider>
        <RenderTemplate>
          <Cart />
        </RenderTemplate>
      </ProfileProvider>
    </>
  );
};

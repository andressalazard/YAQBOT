import { ProfileProvider } from '../context/ProfileContext';
import { Orders } from '../organisms/Orders/Orders';
import RenderTemplate from '../templates/RenderTemplate/RenderTemplate';

export const OrdersPage = () => {
  return (
    <>
      <ProfileProvider>
        <RenderTemplate>
          <Orders />
        </RenderTemplate>
      </ProfileProvider>
    </>
  );
};

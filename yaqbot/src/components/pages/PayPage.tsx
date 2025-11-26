import { ProfileProvider } from '../context/ProfileContext';
import { Pay } from '../organisms/Pay/Pay';
import RenderTemplate from '../templates/RenderTemplate/RenderTemplate';

export const PayPage = () => {
  return (
    <>
      <ProfileProvider>
        <RenderTemplate>
          <Pay />
        </RenderTemplate>
      </ProfileProvider>
    </>
  );
};

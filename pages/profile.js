import Link from 'next/link';
import { withTranslation } from '../i18n';

const Profile = ({ t }) => {
  return (
    <div>
      <h1>{t('profile_title')}</h1>

      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  )
};

Profile.getInitialProps = async () => {
  console.log('Profile.getInitialProps');

  return {
    namespacesRequired: ['profile'],
  }
};

export default withTranslation('profile')(Profile);

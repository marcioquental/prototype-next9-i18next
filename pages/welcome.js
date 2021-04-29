import Link from 'next/link';
import { i18n, withTranslation } from '../i18n';

const toggleLanguage = () => {
  i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
};

const Welcome = ({ t }) => {
  return (
    <div>
      <h1>{t('welcome_title')}</h1>

      <div>
        <button type="button" onClick={toggleLanguage}>
          Toggle Language
        </button>
      </div>

      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  )
};

Welcome.getInitialProps = async () => {
  console.log('Welcome.getInitialProps');

  return {
    namespacesRequired: ['welcome'],
  }
};

export default withTranslation('welcome')(Welcome);

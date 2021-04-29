import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'

const Error = () => (
  <p>
    Error Page
  </p>
)

Error.getInitialProps = async () => {
  return {
    namespacesRequired: [],
  }
}

export default withTranslation()(Error)

/**
 *
 * CommunityPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export function CommunityPage() {
  return (
    <div>
      <Helmet>
        <title>CommunityPage</title>
        <meta name="description" content="Description of CommunityPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CommunityPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(CommunityPage);

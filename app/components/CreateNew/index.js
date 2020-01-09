import React from 'react';
import PropTypes from 'prop-types';

import Link from './styles/Link';

const CreateNew = props => {
  const { href, onClick } = props;
  return (
    <Link onClick={onClick} href={href}>
      Create new!
    </Link>
  );
};

CreateNew.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CreateNew;

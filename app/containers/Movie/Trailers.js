import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Label from 'components/Label';
import TrashSVG from 'svgs/Trash';

import Trailers from './styles/Trailers';
import UrlContaner from './styles/UrlContaner';

import UrlAction from './styles/UrlAction';
import UrlActionContainer from './styles/UrlActionContainer';
import AddTrailer from './styles/AddTrailer';
import messages from './messages';

const TRAILER_MAX = 9;

const TrailerInput = () => (
  <UrlContaner>
    <UrlActionContainer>
      <UrlAction type="button">
        <TrashSVG />
      </UrlAction>
    </UrlActionContainer>
  </UrlContaner>
);

const TrailersContainer = props => {
  const { trailers } = props;

  const allowAddTrailers = trailers.length <= TRAILER_MAX;

  return (
    <Trailers>
      <Label>
        <FormattedMessage {...messages.trailersTitle} />
      </Label>
      {trailers.map(trailer => (
        <TrailerInput trailer={trailer} key={trailer.identifier} />
      ))}
      {allowAddTrailers && <AddTrailer type="button">Add Field</AddTrailer>}
    </Trailers>
  );
};

TrailersContainer.propTypes = {
  trailers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TrailersContainer;

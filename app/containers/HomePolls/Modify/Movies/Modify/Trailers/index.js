import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Label from 'components/Label';
import TrailerCard from 'components/TrailerCard';

import messages from './messages';

import AddTrailer from './styles/AddTrailer';

const TRAILER_MAX = 9;

const TrailersContainer = props => {
  const { trailers } = props;

  const allowAddTrailers = trailers.length <= TRAILER_MAX;

  const addTrailer = () => {};

  return (
    <div>
      <Label>
        <FormattedMessage {...messages.trailersTitle} />
      </Label>
      {trailers.map(trailer => (
        <TrailerCard trailer={trailer} />
      ))}
      {allowAddTrailers && (
        <AddTrailer type="button" onClick={addTrailer}>
          Add Trailer
        </AddTrailer>
      )}
    </div>
  );
};

TrailersContainer.propTypes = {
  trailers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TrailersContainer;

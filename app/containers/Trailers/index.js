import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Label from 'components/Label';
import TrailerCard from 'components/TrailerCard';
import { generatePathHomePollMovieTrailerCreate, getMocks } from 'utils/paths';
import PlusSVG from 'svgs/Plus';
import history from 'utils/history';

import messages from './messages';

import AddTrailer from './styles/AddTrailer';

const TRAILER_MAX = 9;

const TrailersContainer = props => {
  const { trailers } = props;

  const allowAddTrailers = trailers.length <= TRAILER_MAX;

  const addTrailer = () => {
    const { poll, movie } = getMocks(props.match);
    history.push(generatePathHomePollMovieTrailerCreate(poll, movie));
  };

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
          <PlusSVG />
          <FormattedMessage {...messages.createTrailer} />
        </AddTrailer>
      )}
    </div>
  );
};

TrailersContainer.propTypes = {
  trailers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(TrailersContainer);

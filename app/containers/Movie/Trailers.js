import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Label from 'components/Label';
import TrashSVG from 'svgs/Trash';

import TextField from 'components/TextField';
import Trailers from './styles/Trailers';
import UrlContaner from './styles/UrlContaner';
import Position from './styles/Position';
import UrlAction from './styles/UrlAction';
import UrlActionContainer from './styles/UrlActionContainer';
import AddTrailer from './styles/AddTrailer';
import messages from './messages';

const TRAILER_MAX = 9;

const TrailerInput = props => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { pos, onDelete, ...rest } = props;
  return (
    <UrlContaner>
      <Position focused={isFocus || isHovering}>
        <label>#{pos}</label>
      </Position>
      <TextField
        onFocus={() => setIsFocus(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
      <UrlActionContainer>
        <UrlAction type="button" onClick={onDelete}>
          <TrashSVG />
        </UrlAction>
      </UrlActionContainer>
    </UrlContaner>
  );
};

const TrailersContainer = props => {
  const { trailers, onChange } = props;

  const handleTrailerChange = (i, e) => {
    const newTrailers = [...trailers];
    newTrailers[i] = e.target.value;
    onChange(newTrailers);
  };

  const handleTrailerDelete = i => {
    const newTrailers = [...trailers];
    newTrailers.splice(i, 1);
    onChange(newTrailers);
  };

  const addNewRow = () => {
    if (trailers.length >= TRAILER_MAX) {
      return;
    }
    onChange([...trailers, '']);
  };

  const allowAddTrailers = trailers.length <= TRAILER_MAX;

  return (
    <Trailers>
      <Label>
        <FormattedMessage {...messages.trailersTitle} />
      </Label>
      {trailers.map((trailer, i) => (
        <TrailerInput
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          value={trailer}
          pos={i + 1}
          onChange={e => handleTrailerChange(i, e)}
          onDelete={e => handleTrailerDelete(i, e)}
        />
      ))}
      {allowAddTrailers && (
        <AddTrailer type="button" onClick={addNewRow}>
          Add Field
        </AddTrailer>
      )}
    </Trailers>
  );
};

TrailersContainer.propTypes = {
  trailers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TrailersContainer;

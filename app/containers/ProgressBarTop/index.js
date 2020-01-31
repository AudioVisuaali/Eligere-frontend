/**
 *
 * ProgressBarTop
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ProgressBar from 'components/ProgressBar';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectProgressBarTopLoading,
  makeSelectProgressBarTopProgress,
} from './selectors';
import reducer from './reducer';

const PROGRESS_BAR_STEP = 2;

export function ProgressBarTop(props) {
  const [loading, setLoading] = useState(props.loading);
  const [progress, setProgress] = useState(props.progress);

  useEffect(() => {
    setProgress(props.progress);
  }, [props.progress]);

  useEffect(() => {
    setLoading(props.loading);

    if (props.loading) {
      // Show simulated "progress" to user
      const autoProgress = setInterval(() => {
        setProgress(currCount => {
          // This logic can't be done outside for some reason
          let newCount = currCount + PROGRESS_BAR_STEP;
          if (newCount > 100) {
            newCount = 100;
          }

          return newCount;
        });
      }, 500);

      return () => {
        clearInterval(autoProgress);
      };
    }

    // Finishing animation
    setProgress(100);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [props.loading]);

  if (!loading) {
    return null;
  }

  return <ProgressBar progress={progress} />;
}

ProgressBarTop.propTypes = {
  loading: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectProgressBarTopLoading(),
  progress: makeSelectProgressBarTopProgress(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  injectReducer({ key: 'progressBarTop', reducer }),
  withConnect,
)(ProgressBarTop);

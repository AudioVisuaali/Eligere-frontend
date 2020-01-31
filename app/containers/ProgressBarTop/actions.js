/*
 *
 * ProgressBarTop actions
 *
 */

import {
  PROGRESS_BAR_START,
  PROGRESS_BAR_SET_PROGRESS,
  PROGRESS_BAR_END,
} from './constants';

export function startLoading(progress = 10) {
  return {
    type: PROGRESS_BAR_START,
    progress,
  };
}

export function setLoadingProgress(progress) {
  return {
    type: PROGRESS_BAR_SET_PROGRESS,
    progress,
  };
}

export function endLoading() {
  return {
    type: PROGRESS_BAR_END,
  };
}

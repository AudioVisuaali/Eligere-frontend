/*
 *
 * ProgressBarTop reducer
 *
 */
import produce from 'immer';
import {
  PROGRESS_BAR_START,
  PROGRESS_BAR_SET_PROGRESS,
  PROGRESS_BAR_END,
} from './constants';

export const initialState = {
  loading: false,
  progress: 0,
};

/* eslint-disable default-case, no-param-reassign */
const progressBarTopReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PROGRESS_BAR_START:
        draft.loading = true;
        draft.progress = action.progress;
        break;

      case PROGRESS_BAR_SET_PROGRESS:
        draft.progress = action.progress;
        break;

      case PROGRESS_BAR_END:
        draft.loading = false;
        draft.progress = 0;
        break;
    }
  });

export default progressBarTopReducer;

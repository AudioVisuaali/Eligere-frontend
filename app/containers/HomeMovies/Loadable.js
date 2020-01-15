/**
 *
 * Asynchronously loads the component for HomeMovies
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

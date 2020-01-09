import { generatePath } from 'react-router-dom';

export const pathFrontPage = '/';
export const pathRegister = '/register';
export const pathLogin = '/login';
export const pathHome = '/home';
export const pathHomePolls = '/home/polls';
export const pathHomePollCreate = '/home/polls/create';
export const pathHomePoll = '/home/polls/:identifier/:slugTitle';
export const pathHomePollMovie = '/home/polls/:identifier/:slugTitle/movie';
export const pathHomePollMovieCreate =
  '/home/polls/:identifier/:slugTitle/movie/create';
export const pathHomePollMovieModify =
  '/home/polls/:identifier/:slugTitle/movie/:movieIdentifier/:movieSlugTitle';
export const pathHomeCommunities = '/home/communities';
export const pathHomeCommunityCreate = '/home/communities/create';
export const pathHomeCommunity = '/home/communities/:identifier/:slugTitle';
export const pathHomeProfile = '/home/profile';
export const pathPoll = '/poll/:identifier/:slugTitle';
export const pathCommunity = '/community/:identifier/:slugTitle';
export const pathNotFound = '/not-found';

function slugify(string) {
  // Replace ' ' with '-'
  // Remove duplicate '--' => '-'
  // Check for word characters [a-zA-Z0-9_]
  return string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export function generatePathPoll(poll) {
  const { identifier, title } = poll;
  const slugTitle = slugify(title);
  return generatePath(pathPoll, { identifier, slugTitle });
}

export function generatePathCommunity(community) {
  const { identifier, title } = community;
  const slugTitle = slugify(title);
  return generatePath(pathCommunity, { identifier, slugTitle });
}

export function generatePathHomeCommunity(community) {
  const { identifier, title } = community;
  const slugTitle = slugify(title);
  return generatePath(pathHomeCommunity, { identifier, slugTitle });
}

export function generatePathHomePoll(poll) {
  const { identifier, title } = poll;
  const slugTitle = slugify(title);
  return generatePath(pathHomePoll, { identifier, slugTitle });
}

export function generatePathHomePollMovieCreate(poll) {
  const { identifier, title } = poll;
  const slugTitle = slugify(title);
  return generatePath(pathHomePollMovieCreate, { identifier, slugTitle });
}

export function generatePathHomePollMovieCreateModify(poll, movie) {
  const { identifier, title } = poll;
  const { identifier: movieIdentifier, title: movieTitle } = movie;
  const slugTitle = slugify(title);
  const movieSlugTitle = slugify(movieTitle);
  return generatePath(pathHomePollMovieModify, {
    identifier,
    slugTitle,
    movieIdentifier,
    movieSlugTitle,
  });
}

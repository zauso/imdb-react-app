import { USER_VISITED_MOVIE } from '../types'

export const addVisitedMovie = (id) => {
  return {
    type: USER_VISITED_MOVIE,
    id: id
  }
}
import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('top stories reducer actins', () => {
  it('getTopStoriesSuccess should create GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = "An article";
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });
})
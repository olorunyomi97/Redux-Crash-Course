import { FETCH_POSTS, NEW_POST } from '../acitons/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
        return state;
    }
}

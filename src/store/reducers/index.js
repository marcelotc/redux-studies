import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
    course
})

/*

{
    course: { module: [], activeLesson: {}, activeModule: {} },
    user: { name: '', avatar: '' }
}

*/
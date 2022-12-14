import { configureStore } from '@reduxjs/toolkit';
import { taskListReducer } from '../features/TaskList/taskListSlice'

export default configureStore({
    reducer: {
        tasks: taskListReducer
    }
})

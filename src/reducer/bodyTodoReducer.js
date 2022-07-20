import { TYPES } from "../action/BodyTodoActions";

export const bodyTodoInitialState = 0;

export const bodyTodoReducer = (state, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_TODO: {state = state + 1}
            
        case TYPES.DELETE_CURRENT_TODO: {state = state - 1}
    }
}

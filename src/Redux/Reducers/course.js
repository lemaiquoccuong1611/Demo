let initialState = {
    courses: []
};

const CourseReducer = (state = initialState,action) =>{
    switch(action.type){
        case "GET_COURSES":
            state.courses = action.payload;
            return {...state};
        default: 
        return state;
    }
};

export default CourseReducer
import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
it("should add a course when passed CREATE_COURSE_SUCCESS", () => {
    const initialState = [
        {
            "title": "a",
        },
        { "title": "b" }];
    const course = { "title": "c" };
    const action = actions.createCourseSuccess(course);
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
        {
            "title": "a",
        },
        { "title": "b" },
        { "title": "c" }
    ]);
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    const initialState = [
        {
            "title": "a",
            id: 1
        },
        { "title": "b", id: 2 },
        { "title": "c", id: 3 }
    ]
    const course = { "title": "d", id: 2 };
    const action = actions.updateCourseSuccess(course);
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 1);
    expect(updatedCourse.title).toEqual("d");
    expect(untouchedCourse.title).toEqual("a");
    expect(newState.length).toEqual(3);
})
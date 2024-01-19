import React from "react";
import renderer from "react-test-renderer";
import CourseForm from "./CourseForm";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button lable 'Saving...' when saving is true", () => {
    const tree = renderer.create(
        <CourseForm
            course={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            onChange={jest.fn()}
            saving
        />
    );
    expect(tree).toMatchSnapshot();
});

it("sets submit button lable 'Save' when saving is false", () => {
    const tree = renderer.create(
        <CourseForm
            course={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            onChange={jest.fn()}
            saving={false}
        />
    );
    expect(tree).toMatchSnapshot();
});
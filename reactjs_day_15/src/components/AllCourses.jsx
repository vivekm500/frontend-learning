import React from 'react'
import Course from './Course'

const AllCourses = (props) => {

    // console.log(props.courseData);

  return (
    <div>
      AllCourses
      <Course courseData={props.courseData} />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
}

export default AllCourses

import React from 'react'
import { useParams } from 'react-router-dom';

const AnyCourse = () => {

    const params = useParams()
    // useParams is a hook used to get parameter

    console.log(params)

  return (
    <div>
      <h1 className="text-olive-400 capitalize whitespace-nowrap text-5xl font-bold fixed left-[50vw] -translate-x-1/2 underline">
        {params.courseId} Course Page
      </h1>
    </div>
  );
}

export default AnyCourse

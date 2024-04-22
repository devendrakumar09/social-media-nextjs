import React from 'react'
import CardUI from '../_components/dash/CardUI'

const Dashboard = () => {
  return (
    <>
      <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 p-1 mt-4 ">

        <div className="col-span-12 sm:col-span-4">
          <CardUI />
        </div>
        <div className="col-span-12 sm:col-span-4">
          <CardUI />
        </div>
        <div className="col-span-12 sm:col-span-4">
          <CardUI />
        </div>
      </div>

    </>
  )
}

export default Dashboard
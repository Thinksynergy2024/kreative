import CustomizedLayout from '@/components/layout/customized-layout'
import React from 'react'

const CompleteTests = () => {
  return (
    <div>CompleteTests</div>
  )
}


CompleteTests.getLayout = (page) => (
    <CustomizedLayout>
        {page}
    </CustomizedLayout>
)

export default CompleteTests
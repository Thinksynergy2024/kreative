import CustomizedLayout from '@/components/layout/customized-layout'
import React from 'react'

const ActiveTests = () => {
  return (
    <section className='p-4'>ActiveTests</section>
  )
}

ActiveTests.getLayout = (page) => (
    <CustomizedLayout>
        {page}
    </CustomizedLayout>
)

export default ActiveTests
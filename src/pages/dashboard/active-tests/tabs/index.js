import React from 'react'

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <section className='grid grid-cols-7 text-sm bg-white shadow-xl mb-3 rounded w-full'>
        <div onClick={() => setCurrentTab(0)} className={`${currentTab === 0 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>All</h1>
        </div>
        <div onClick={() => setCurrentTab(1)} className={`${currentTab === 1 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase One</h1>
        </div>
        <div onClick={() => setCurrentTab(2)} className={`${currentTab === 2 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase Two</h1>
        </div>
        <div onClick={() => setCurrentTab(3)} className={`${currentTab === 3 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase Three</h1>
        </div>
        <div onClick={() => setCurrentTab(4)} className={`${currentTab === 4 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase Four</h1>
        </div>
        <div onClick={() => setCurrentTab(5)} className={`${currentTab === 5 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase Five</h1>
        </div>
        <div onClick={() => setCurrentTab(6)} className={`${currentTab === 6 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer'} text-center p-2`}>
            <h1>Phase Six</h1>
        </div>
    </section>
  )
}

export default Tabs
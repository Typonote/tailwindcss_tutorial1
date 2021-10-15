import React from 'react'
import ImageOne from '../images/laptop.jpg'
import ImageTwo from '../images/spiderman.jpg'

const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src={ImageOne} className='h-full rounded mb-20 shadow'/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>AYOOOOOOOO</h2>
                <p className='mb-2'>lalalalalalalalalalal</p>
                <span>1800 WON</span>
            </div>
        </div>

        <div className='menu-card'>
            <img src={ImageTwo} className='h-full rounded mb-20 shadow'/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>AYOOOOOOOO</h2>
                <p className='mb-2'>lalalalalalalalalalal</p>
                <span>1800 WON</span>
            </div>
        </div>
        </>
    )
}

export default Content


import { useState } from 'react';
import favorites from '../../images/icons/favorites.png';
import readingNow from '../../images/icons/reading-now.png';
import toRead from '../../images/icons/to-read.png';
import haveRead from '../../images/icons/have-read.png';

const BookshelfList = () =>{
    const [activeBookshelf, setActiveBookshelf] = useState('favorites')
    console.log(activeBookshelf)

    const handleBookshelf  = (bookshelf) => {
        setActiveBookshelf(bookshelf)
    }

    return(
        <section>
            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('favorites')}>
                <div style={{backgroundImage:`url(${favorites})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Favorites</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('reading-now')}>
                <div style={{backgroundImage:`url(${readingNow})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Reading now</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('to-read')}>
                <div style={{backgroundImage:`url(${toRead})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>To read</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('have-read')}>
                <div style={{backgroundImage:`url(${haveRead})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Have read</h4>
            </div>
        </section>
    )
}

export default BookshelfList;
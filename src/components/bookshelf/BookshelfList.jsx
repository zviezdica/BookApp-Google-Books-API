
import { useState } from 'react';
import favorites_ from '../../images/icons/favorites.png';
import readingNow_ from '../../images/icons/reading-now.png';
import toRead_ from '../../images/icons/to-read.png';
import haveRead_ from '../../images/icons/have-read.png';

const BookshelfList = () =>{
    const [activeBookshelf, setActiveBookshelf] = useState('favorites')
    const [favorites, setFavorites] = useState ('');
    const [readingNow, setReadingNow] = useState('');
    const [toRead, setToRead] = useState('');
    const [haveRead, setHaveRead] = useState('')

    const handleBookshelf  = (bookshelf) => {
        setActiveBookshelf(bookshelf)
    }

    return(
        <section>
            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('favorites')}>
                <div style={{backgroundImage:`url(${favorites_})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Favorites</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('reading-now')}>
                <div style={{backgroundImage:`url(${readingNow_})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Reading now</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('to-read')}>
                <div style={{backgroundImage:`url(${toRead_})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>To read</h4>
            </div>

            <div className='flex items-center pb-20' onClick={()=>handleBookshelf('have-read')}>
                <div style={{backgroundImage:`url(${haveRead_})`}} className='h-25 w-25 bg-cover bg-center'></div>
                <h4 className='px-15'>Have read</h4>
            </div>
        </section>
    )
}

export default BookshelfList;
import logoBlue from "../../images/logo/logo-blue.png"

const SearchItemDetails = ({data}) =>{
    console.log(data)
    const {id, epub, pdf, saleInfo, volumeInfo } = data;
    console.log(volumeInfo)
    const {authors, categories, description, imageLinks, industryIdentifiers, language, pageCount, previewLink, publishedDate, publisher, subtitle, title} = volumeInfo;
    return(
        <div className="details-card flex flex-col container bg-white fixed top-150 left-1/2 -translate-x-1/2  p-10">

                    <div>
                        {imageLinks && <img className="rounded-sm w-100 sm:w-200 my-10 mx-20 float-left" src={imageLinks.thumbnail}></img>}
                        {title && <h1 className="text-21 pb-10">{title}</h1>} 
                        {subtitle && <h3 className="text-17  pb-5">{subtitle}</h3>} 
                        {authors && <h4 className="text-15  pb-5">{authors.toString().replace(',', ', ')}, {publishedDate && publishedDate.slice(0,4)}</h4>}
                        {categories && <h4 className="text-15 pb-5 float-none italic">{categories.toString().replace(',', ', ')}</h4>}
                        {description && <p className="text-14 text-justify py-20">{description}</p>}
                        {previewLink && <a className="btn my-20" href={previewLink} target='_blank'>visit on google books</a>}
                    </div>
                    <div className="flex flex-wrap children:px-10 divide-x-1 divide-greyish">
                        {industryIdentifiers && industryIdentifiers.map((iIdentifier)=>{
                            const {type, identifier} = iIdentifier;
                            return (<h4 className="text-13 uppercase">{type}: {identifier}</h4>
                            )
                        })}
                        {language && <h4 className="text-13 uppercase">language: {language}</h4>}
                        {pageCount && <h4 className="text-13 uppercase">pages: {pageCount}</h4>}
                        {publisher && <h4 className="text-13 uppercase">publisher: {publisher}</h4>}

                    </div>

        </div>
    )
}

export default SearchItemDetails;
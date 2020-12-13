import React from 'react'
import './CollectionPreview.styles.scss';
import CollectionIten from '../collectionItem/collectionIten.component'

function PreviewCollection({id, ...otherProps}) {
    const { title, items} = otherProps;
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => (
                            <CollectionIten 
                            key={item.id} 
                            {...item} 
                            item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection

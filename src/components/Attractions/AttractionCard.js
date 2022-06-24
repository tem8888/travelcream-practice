import React, {useState, useRef, useEffect} from 'react'

const AttractionCard = React.forwardRef(({attraction}, ref) => {

    const [spans, setSpans] = useState({row: '', col: ''})
    const [showDescr, setShowDescr] = useState(false);
    const imageRef = useRef()

    useEffect(() => {
      const findSpans = () => {
        const rowSpans = Math.round(imageRef.current.naturalHeight / 220)
        const colSpans = Math.round(imageRef.current.naturalWidth / 300)
        setSpans({...spans, row: rowSpans, col: colSpans})
      }

      const imageNode = imageRef.current
      imageNode.addEventListener('load', findSpans)
      return () => imageNode.removeEventListener('load', findSpans)
    }, [spans])

    return (
        <div 
          ref={ref}
          className='item' 
          style={{ 
            gridRowEnd: `span ${spans.row}`, 
            gridColumnEnd: `span ${spans.col}` 
          }}
          onMouseOver={() => setShowDescr(true)}
          onMouseLeave={() => setShowDescr(false)}
        >
          <img 
            ref={imageRef} 
            src={attraction.image} 
            alt={attraction.title}
            className="item__img"
          />
          <span className="item__title">{attraction.title}</span>
          <span className={`item__description ${!showDescr ?  'item__description--hide' : ''}`}>Welcome!</span>
        </div>
      )
})

export default AttractionCard
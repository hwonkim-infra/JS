import React from 'react'
import ExampleListItem from './ExampleListItem'
import Helpers from './Helpers';

const ExampleList = ({items, filter, onTagClick}) => {
  let filtered = items.filter(item => Helpers.contains(item.tags, filter));

  let renderedItems = filtered.map(({title, description, tags}, index) => {
    return (
  <ExampleListItem 
    title={title}
    description={description}
    tags={tags}
    key={index}
    onClick={onTagClick}
  />

    )
  })

  return (
    <div>
      <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '0px', gridGap: '10px'}}>{renderedItems} </ul>
    </div>
  )
}

export default ExampleList
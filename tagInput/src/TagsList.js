
import React from 'react'
import Tag from './Tag';

const TagsList = ({tags, onTagDelete, hashtag}) => {
  let list = tags.map((tag, index) => (
    <Tag 
      name={tag} 
      onDelete={onTagDelete} 
      index={index} 
      hashtag={hashtag} />
  ));
  return (
    <ul name="tagsList" className="tagsList">
      {list}
    </ul>
  )
}

export default TagsList
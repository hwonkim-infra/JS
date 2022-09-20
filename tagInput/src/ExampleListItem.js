import React from 'react'

const ExampleListItem = ({title, description, tags, key, onClick}) => {
    const renderedTags = tags.map((tag, index) => (
        <li className="tag clickable" onClick={(e) => onClick(tag, e)}>{tags} </li>
    ))
  return (
    <li style={{padding: 10, listStyle: 'none', background: '#efefef', borderRadius: '10pxx', boxShadow: '1px 1px 5px #aaa'}}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="tagsList" style={{padding: 0}}>{renderedTags}</ul>
    </li>
  )
}

export default ExampleListItem
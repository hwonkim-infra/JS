import React from 'react'
import Helpers from './Helpers';
import TagsList from './TagsList'

class TagInput extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      inputValue: '',
      tags: this.props.tags || []
    }
    
    this.handleNewTag = this.handleNewTag.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.notDuplicate = this.notDuplicate.bind(this);
    this.updateControlledTags = this.updateControlledTags.bind(this);
  }
  
  handleNewTag(tags) {
    if (this.props.onNewTag) this.props.onNewTag(tags);
    if (this.props.onTagChange) this.props.onTagChange(tags);
  }

  handleInputChange({target: { value: inputValue }}) {
    inputValue = inputValue == ',' ? '' : inputValue;
    this.setState({inputValue});
  }
  
  handleKeyDown(e) {
    let { key, target: {value} } = e;
    let { tags } = this.state;
    switch (key) {
      case 'Tab':
        if (value) e.preventDefault();
      case 'Enter':
      case ',':
        value = value.trim();
        if (value && this.notDuplicate(tags, value)) {
          this.addTag(value);
        } else {
          this.setState({inputValue: ''})
        }
        break;
      case 'Backspace':
        if (!value) {
          this.handleTagDelete(tags.length - 1);
        }
        break;
    }
  }
  
  handleTagDelete(index, e) {
    this.deleteTag(index, () => {
      this.props.onTagChange(this.state.tags);
    });
  }
  
  deleteTag(index, callback) {
    let tags = this.state.tags.slice();
    
    tags.splice(index, 1);
    this.setState({ tags }, () => {
      if (callback) callback();
    });
  }
  
  notDuplicate(tags, newTag) {
    return (!tags.includes(newTag) || this.props.allowDuplicates);
  }
  
  addTag(tag) {
    if (this.notDuplicate(this.state.tags, tag)) {
      this.setState({tags: [...this.state.tags, tag], inputValue: ''}, () => {
        this.handleNewTag(this.state.tags);
      });
    }
  }
  
  updateControlledTags(tags) {
    if (tags && !Helpers.hasDuplicates(tags)) {
      this.setState({ tags }, () => {
        // this.props.onTagChange(tags);
      });
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.updateControlledTags(nextProps.tags);
  }
  
  render() {
    return (
      <span className="tagInputWrapper">
        <TagsList 
          tags={this.state.tags} 
          onTagDelete={this.handleTagDelete} 
          hashtag={this.props.hashtag}
        />
        <input 
          name="tagInput" 
          className="tagInput" 
          placeholder="enter a tag..." 
          value={this.state.inputValue} 
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
      </span>
    );
  }
}

export default TagInput
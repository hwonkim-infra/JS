import logo from './logo.svg';
import './App.css';
import React from 'react';
import TagInput from './TagInput'
import ExampleList from './ExampleList';

const projects = [
  {
    title: 'Example 0',
    description: 'This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.',
    tags: ['react', 'javascript', 'game', 'back-end']
  },
  {
    title: 'Game of Life',
    description: 'React implementation of the game of life.',
    tags: ['react', 'javascript', 'game', 'web', 'front-end']
  },
  {
    title: 'Calculator',
    description: 'Calculator written in Javascript',
    tags: ['javascript', 'utility', 'web']
  },
  {
    title: 'Tic Tac Toe',
    description: 'A command-line Tic Tac Toe game written in Ruby',
    tags: ['ruby', 'game', 'cli']
  },
  {
    title: 'TodoList',
    description: 'Full stack todo-list written in fullstack Javascript',
    tags: ['react', 'javascript', 'node', 'fullstack', 'front-end', 'back-end', 'web', 'mvc']
  },
  {
    title: 'Weather',
    description: 'A Weather App with React Native ',
    tags: ['react', 'javascript', 'react-native', 'front-end', 'mobile', 'android', 'ios']
  },
  {
    title: 'Markdown Editor',
    description: 'Markdown Editor powered by Monaco and React',
    tags: ['react', 'javascript', 'monaco', 'front-end' ]
  },
  {
    title: 'Bloggie',
    description: 'Rails-powered blog with a React front-end',
    tags: ['react', 'javascript', 'ruby', 'front-end', 'back-end', 'fullstack', 'ruby-on-rails', 'mvc']
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tags: ['game']
    }
    
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleListTagClick = this.handleListTagClick.bind(this);
  }
  
  handleTagChange(tags) {
    this.setState({tags});
  }
  
  handleListTagClick(tag) {
    this.setState({tags: [...this.state.tags, tag]});
  }
  
  render() {
    return (
      <div>
        <TagInput onTagChange={this.handleTagChange} tags={this.state.tags} />
        <ExampleList 
          items={projects} 
          filter={this.state.tags} 
          onTagClick={this.handleListTagClick} 
        />
      </div>
    );
  }
}

export default App;

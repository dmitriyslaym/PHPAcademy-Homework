var React = require('react');
var Main = require('./main');

var options = {
  menu: ['Awesome link 1', 'Awesome link 2', 'Awesome link 3', 'Awesome link 4'],
  thumbnailData:  [{
    title: 'Show Courses',
    number: 120,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }],
  contacts: {
    adress: 'Los Angeles',
    tel: '063-214-57-69'
  }
};


var element = React.createElement(Main, options);
React.render(element, document.querySelector('.container'));

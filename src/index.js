import * as $ from 'jquery'
import Post from './Post'
import './styles/styles.css'
import './styles/scss.scss'
import './babel.js'
import Cat from './img/cat.jpg'

const post = new Post('webpack post title', Cat)
console.log(Cat)

$('pre').html("pre pre")

console.log('Post to String', post.toString())

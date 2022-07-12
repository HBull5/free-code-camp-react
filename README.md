# free-code-camp-react

* The video I'm following along with can be found <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">here</a>. The following are notes, helpful additions I learned along the way, and some confusing spots or just points for more clarity. Each subheading will correspond to a section from the video. Any code written along with the video can be found in a folder of the same name. 

## First React

* In the video it mentions to use `ReactDom.render(<p>lorem ipsum.</p>, document.querySelector('#root'));` React has since deprecated this and replaced it with the following: 
```javascript react 
const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<p>lorem ipsum.</p>)
```
import React from 'react';
// import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos: [{title : "fatima" ,edit : false}, {title: "zainab" ,edit : false}],
      value: ''
    }
  }
  add_todo = () => {
    let obj = {title : this.state.value}
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }
  delete_todo = (index) => {
this.state.todos.splice(index,1)
this.setState({
  todos: this.state.todos
})
  }
  edit_todo = (index,val) => {
this.state.todos[index].edit = true;
this.setState({
     todos: this.state.todos
  })
  }
  handlechange = (e,index) => {
    this.state.todos[index].title = e.target.value
    this.setState({
      todos: this.state.todos
    })
      }
    
      update = (index) =>{
        this.state.todos[index].edit = false
    this.setState({
      todos: this.state.todos
    })
      }
  render(){
    let {todos, value} = this.state;
    return(
      <div>
        <h1>Todo Applicatiuon</h1>
     <ul>
      <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Enter value"/>
        <button onClick={this.add_todo}>Add Item</button>
          {
          todos.map((v,i)=>{
            return <li key={i}>
              {v.edit ? <input value={v.title} type="text" onChange={(e)=>this.handlechange(e,i)} />: v.title}
              <br/>
              {v.edit ?   <button onClick={() => this.update(i)}>Update</button> : 
                <button onClick={() => this.edit_todo(i,v.title)}>Edit</button> }
              <button onClick={() => this.delete_todo(i)}>Delete </button>
              <br/>
              </li>
            }
            )}
        {/* {todos.map((v,i) => {
          return <li key={i}>
            {v.edit ? <input value="v.title" type="text"/> : v.title}
            {v.edit ?
          <button>Update</button>
          :
          <button onClick={ () => this.edit_todo(i,v.title)}>Edit</button>
            }
          <button onClick={ () => this.delete_todo(i)}>Delete</button>
          </li>
        })} */}
      </ul>
      </div>
    )
  }
}
export default App;

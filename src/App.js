import React from 'react';
import Cardlist from './Cardlist'
import robots from './robots'
import Search from './Search'
import './App.css'
import 'tachyons'
import Scroll from './Scroll'
import {Provider , connect } from 'react-redux'
import {setSearchField, requestRobots} from './Actions'

const mapStateToProps = state=>{
  return{
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      onSearchChange : (event)=> dispatch(setSearchField(event.target.value)),
      onRequestRobots : ()=>{dispatch(requestRobots())}
    }
}
 
class App extends React.Component {

  // constructor(){

  //   super();
  //   this.state ={
  //     robots : [],
  //     // searchField : ''
  //   }
  // }

//Not required while using redux
  // onSearchChange =(event)=>{
  //   this.setState({searchField: event.target.value})
  // }



  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
    //   return response.json();
    // })
    // .then(users =>{
    //       this.setState({robots : users})
    //     })

    this.props.onRequestRobots();
  }
  render() {
      const {searchField, onSearchChange,robots,isPending} = this.props;


     const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
      }
      );

    if(isPending){
      return <h1 className="tc">Loading...</h1>
    }

    else{
      return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <Search searchChange={onSearchChange}/>
            <Scroll>
              <Cardlist robots={filteredRobots}/>
            </Scroll>
            </div>
           );
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
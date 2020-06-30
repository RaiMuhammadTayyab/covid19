import React from 'react';
import {Cards, Charts,Countrypicker} from './Components'
import styles from './App.module.css'
import {fetchdata} from './Api'


class App extends React.Component{
    state={
        data:{},
    }
   async componentDidMount(){
        const fetcheddata = await fetchdata();
       console.log(fetchdata)
        this.setState ({data:fetcheddata})
         } 
    

render(){
  //const{data}=this.state
 return (
<div className={styles.contianer}>
<Cards data={this.state.data}/>
<Countrypicker/>
<Charts/> </div>

 ) 
 }};

export default App;

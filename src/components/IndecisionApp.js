import React from 'react';

import AddOption from "./AddOption"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component {
  
  
      state = {
        options: this.props.options,
        picked: '',
      };
      handleClearPopup =() =>{
        this.setState((st)=>({
          picked: '',
        }))
      }

      handleDeleteOption =(option) =>{
        this.setState((st)=>({
          options: st.options.filter((g)=>{ return g!==option })
        }))
      }
      handlePick=() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState({
          picked: option,
        })
      }


      handleAddOption=(option) => {
        if (!option) {
          return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
          return 'This option already exists';
        }
    
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
      }



      
    componentDidMount() {
  
    }
    componentWillMount() {
      try {
        const options = JSON.parse(localStorage.getItem('main'));
        if(options){
          this.setState(()=>({
            options
          }))
      
        }
      } catch (e) {
        
      }
    }
    componentDidUpdate(prevProps,prevState) {
      if(prevState.options.length !== this.state.options.length){
        localStorage.setItem('main',JSON.stringify(this.state.options));
      }
    }
  
    handleDeleteOptions =  ()=>{
      this.setState(()=>({
        options: []
      }))
    }
  
   
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header  subtitle={subtitle} />
          <div className='container'>
            
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
          <Options
          
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
  
            del={this.handleDeleteOptions}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          </div></div>

          <OptionModal handleClearPopup={this.handleClearPopup} selectedOption={this.state.picked}></OptionModal>
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options:[]
  }
  export default IndecisionApp;
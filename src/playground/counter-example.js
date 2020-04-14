class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  componentDidUpdate(prevPr,prevSt){
    if(prevSt.count !== this.state.count){
      localStorage.setItem('much',this.state.count);

    }
  }
  componentDidMount(){
    try {
    let count = localStorage.getItem('much');
    if(!isNaN(count)){
count = parseInt(count,10);
      this.setState((e)=>({
        count
      }));
    }
    
    } catch (e) {
      
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}


ReactDOM.render(<Counter />, document.getElementById('app'));

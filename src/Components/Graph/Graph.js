import React    from "react";
import template from "./Graph.jsx";
import {connect} from 'react-redux'

class Graph extends React.Component {
  componentDidMount() {
    this.setState({
      data:this.props.data
    })
  }
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default connect(function(store){
  return {
     data:store.Reducer.Data
  }
})(Graph)

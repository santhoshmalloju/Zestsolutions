import React    from "react";
import template from "./Getdata.jsx";
import Axios from 'axios'
import {connect} from 'react-redux'

class Getdata extends React.Component {
  componentDidMount() {
    Axios.get("http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true")
    .then((res)=>{
      alert("res")
      console.log(res.data.data)
      this.props.dispatch({
        type:'GETDATA',
        payload:res.data.data
      })
    this.setState({
      dataInfo:res.data.data
    })
    
    console.log(this.state.dataInfo)

    })
  }
  constructor(props) {
    super(props)
  
    this.state = {
       dataInfo:[]
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default connect(null,function(dispatch) {
  return {
    dispatch
  }
})(Getdata)

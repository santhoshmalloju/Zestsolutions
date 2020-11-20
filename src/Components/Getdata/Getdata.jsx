import "./Getdata.css";
import React from "react";
// import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import {Link,BrowserRouter as Router} from 'react-router-dom'

function template() {
  return (
    <div className="getdata">
      
     <div className="container">
       <div className="row">
         <div className="col-md-10">
         <table className="table mt-5   table-hover table-stripe">
     <thead>
       <tr>
      {/* <h4 className="font-weight-bold ml-0"> Analysis of fundamental change</h4> */}
      {/* <FontAwesomeIcon icon="coffee" /> */}
       </tr>
     </thead>
     <tbody>
     {
       this.state.dataInfo.map(function(d,i) {
         return <tr>
        <td> {d.feature}</td>
       <td>{d.description}</td>
   <td> <Link to="/graph"  > <i class="fas fa-chevron-down"></i></Link></td>
  
         </tr>
       })
     }
     </tbody>
   </table>
         </div>
       </div>
     </div>
  
    </div>
  );
};

export default template;

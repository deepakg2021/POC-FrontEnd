import React from 'react';
import { injectModels } from '../../../redux/injectModels';




function Counter(props) {
  console.log("props",props);
   

  return (
    <div>
        <button className="btn btn-success btn-block btn-flat"  onClick={(e)=>{
                e.preventDefault();
                props.counter.increment() }}  >+</button>

        <button className="btn btn-danger btn-block btn-flat" onClick={(e)=>{
                e.preventDefault();
                props.counter.decrement() }} >-</button>

        <div className="small-box bg-aqua">
            <div className="inner">
             <h5>Count is {props.counter.count}</h5>
            </div>
            <div className="icon">
           </div>
        </div>
           
    </div>
  );
};
export default injectModels(['counter']) (Counter);
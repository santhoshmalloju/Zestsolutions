/* eslint-disable default-case */
import Initialdata from '../InitialData/InitialData'


const Reducer = (currValue=Initialdata,action) =>{
   

    switch(action.type) {
        case 'GETDATA':
           currValue = {
               ...currValue,
               Data:action.payload
           }
            break;

          

    }
    return currValue

}

export default Reducer
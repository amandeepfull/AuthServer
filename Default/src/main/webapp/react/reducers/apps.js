import {ACTIVE_APP} from '../actions/types';
import { isNull } from 'util';

let activeApp = {}
const initialState ={
  activeApp
};


function updateActiveApp(payload){
  activeApp = payload;
  return activeApp;
}

export default function AppsReducer(state=initialState,action){

  switch (action.type) {
    case ACTIVE_APP:
      return{
        ...state,
        activeApp : updateActiveApp(action.payload)
      }
    default:
      return state;
  }
}

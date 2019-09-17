import {FETCH_ALL_USER_APPS} from '../actions/types';
import { isNull } from 'util';

let allUserApps = [];
const initialState ={
    allUserApps
};


function getAllUserApps(payload){
    allUsersApps = payload;
  return allUserApps;
}

export default function AppsReducer(state=initialState,action){

  switch (action.type) {
    case FETCH_ALL_USER_APPS:
      return{
        ...state,
        allUserApps : getAllUserApps(action.payload)
      }
    default:
      return state;
  }
}

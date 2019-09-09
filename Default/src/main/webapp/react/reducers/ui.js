import {SIDE_VIEW_NAV_BAR_CLICK} from '../actions/types';
import { isNull } from 'util';

let sideViewNavBarClick ={};
let leftSideMenuClick = {}
const initialState ={
  sideViewNavBarClick : {
    activeView : "app_info" 
  }
};


function sideViewNavBarIconClick(payload){
    sideViewNavBarClick = payload;
  return sideViewNavBarClick;
}


export default function UIReducer(state=initialState,action){

  switch (action.type) {
    case SIDE_VIEW_NAV_BAR_CLICK:
    debugger;
      return{
        ...state,
        sideViewNavBarClick : sideViewNavBarIconClick(action.payload)
      }

    default:
      return state;
  }
}

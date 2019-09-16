import {SIDE_VIEW_NAV_BAR_CLICK, LEFT_SIDE_VIEW_ICON_CLICK} from '../actions/types';
import { isNull } from 'util';

let sideViewNavBarClick = "app_info";
let leftSideMenuClick = "apps";
const initialState ={
  sideViewNavBarClick,
  leftSideMenuClick
};


function sideViewNavBarIconClick(payload){
    sideViewNavBarClick = payload;
  return sideViewNavBarClick;
}

function leftSideViewIconClick(payload){
  leftSideMenuClick = payload;
return leftSideMenuClick;
}


export default function UIReducer(state=initialState,action){

  switch (action.type) {
    case SIDE_VIEW_NAV_BAR_CLICK:
      return{
        ...state,
        sideViewNavBarClick : sideViewNavBarIconClick(action.payload)
      }

      case LEFT_SIDE_VIEW_ICON_CLICK:
      return{
        ...state,
        leftSideMenuClick : leftSideViewIconClick(action.payload)
      }
    default:
      return state;
  }
}

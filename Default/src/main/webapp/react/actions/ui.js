

import {SIDE_VIEW_NAV_BAR_CLICK, LEFT_SIDE_VIEW_ICON_CLICK} from './types'

export class UIActionCreater{

  SideViewNavBarClick = (payload) => {
    return { type: SIDE_VIEW_NAV_BAR_CLICK, payload : payload };
  }

  LeftSideViewIconClick = (payload) =>{
    return {type: LEFT_SIDE_VIEW_ICON_CLICK, payload : payload}
  }
}



export default UIActionCreater;



import {SIDE_VIEW_NAV_BAR_CLICK} from './types'

export class UIActionCreater{

  SideViewNavBarClick = (payload) => {
    return { type: SIDE_VIEW_NAV_BAR_CLICK, payload : payload };
  }
}

export default UIActionCreater;



import {ACTIVE_APP} from './types'

export class AppsCreater{

  updateActiveApp = (payload) => {
return { type: ACTIVE_APP, payload : payload };
  }

}



export default AppsCreater;

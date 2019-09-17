

import {FETCH_ALL_USER_APPS} from './types'

export class AppsCreater{

  fetchAllUserApps = (payload) => {
return { type: FETCH_ALL_USER_APPS, payload : payload };
  }

}



export default AppsCreater;

import Ajax from '../services/Ajax'
import CommConstants from '../CommonContansts';
class AppService {
    constructor() {
        this.ajax = new Ajax();
    }

    getAllUserApps(userId) {
        return new Promise((resolve, reject) => {
            if (!userId || typeof userId != "string")
                reject("Invalid userId");

            this.ajax.makeRequest("GET", CommConstants.getApiUrl("api/v1/app/user/"+ userId) , "").then((resp) => {

                if (!resp.ok)
                    reject(resp.ok);

                if (resp.ok)
                    resolve(resp.data.apps);
            });
        })
    }
}

export default AppService;
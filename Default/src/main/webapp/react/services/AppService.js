import Ajax from '../services/Ajax'
import CommConstants from '../CommonContansts';
class AppService {
    constructor() {
        this.ajax = new Ajax();
    }

    getAllUserApps(userId) {
        return new Promise((resolve, reject) => {
            if (!userId || typeof userId != "string"){
                reject("Invalid userId for fetching all apps for user");
            }

            this.ajax.makeRequest("GET", CommConstants.getApiUrl("api/v1/app/user/"+userId), "").then((data) => {
                resolve(data.apps);
            }).catch((err) => {
                console.error("Exception AppService:getAllUserApps : ",err);
            }
            );
        })
    }
}

export default AppService;
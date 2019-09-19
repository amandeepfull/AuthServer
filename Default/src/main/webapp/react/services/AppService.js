import Ajax from '../services/Ajax'
import CommConstants from '../CommonContansts';
class AppService {

     getAllUserApps(userId) {
        return new Promise((resolve, reject) => {
            if (!userId || typeof userId != "string"){
                reject("Invalid userId for fetching all apps for user");
            }

            Ajax.fetch(CommConstants.getApiUrl("api/v1/app/user/"), {
                        method : "GET",
                        headers:{
                            "Content-Type" : "application/json"
                        }
            }).then((data) => {
                resolve(data.apps);
            }).catch((err) => {
                console.error("Exception AppService:getAllUserApps : ",err);
            }
            );
        })

    }
}

export default AppService;
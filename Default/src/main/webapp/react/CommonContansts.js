class CommonConstant{

static getApiUrl(path){
        return "https://api-dot-authserver-236711.appspot.com/"+path;
    }

    static getDefaultUrl(path){
        return "http://localhost:8890/"+path;
    }
}



export default CommonConstant;
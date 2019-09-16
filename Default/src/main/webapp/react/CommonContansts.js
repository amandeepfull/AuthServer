class CommonConstant{

static getApiUrl(path){
        return "https://api-dot-authserver-236711.appspot.com/"+path;
    }

    static getDefaultUrl(path){
        return host+"/"+path;
    }
}



export default CommonConstant;
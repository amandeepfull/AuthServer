
export default class Ajax {
  constructor() {
    this.xhttp = null;
  }
  static fetch(url, request) {
    this.xhttp = new XMLHttpRequest();
    return new Promise((resolve, reject) => {

      AjaxValidater.validateAjaxRequest(url, request);
      AjaxUtil.openStateAndSend(url, request.payload, request.headers, request.method, this.xhttp);

      this.xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          const apiResponse = JSON.parse(this.responseText);
          if (!AjaxUtil.isSuccessFull(this.status)) {
            let errorCode = apiResponse.errors ? apiResponse.errors[0].code : "";
            let errorMsg = errorCode ? apiResponse.errors[0].message : "";
            reject(new ApiRejectResponse(this.status, errorCode, errorMsg).json());
          }
          resolve(apiResponse.data);
        }
      };
    });
  }

  static stream(url, request){
    this.xhttp = new XMLHttpRequest();
    return new Promise((resolve, reject) =>{
     
      AjaxValidater.validateAjaxRequest(url, request);
      AjaxUtil.openStateAndSend(url, request.payload, request.headers, request.method, this.xhttp);

      this.xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          const apiResponse = JSON.parse(this.responseText);
          if (!AjaxUtil.isSuccessFull(this.status)) {
            let errorCode = apiResponse.errors ? apiResponse.errors[0].code : "";
            let errorMsg = errorCode ? apiResponse.errors[0].message : "";
            reject(new ApiRejectResponse(this.status, errorCode , errorMsg).json());
          }
          resolve(this);
        }
      };
    })
  }

}

class AjaxUtil {

  static openStateAndSend = (url, payload, headers, method, xhttp) => {
    xhttp.open(method, url, true);
    if (method)
      AjaxUtil.addHeaders(headers, xhttp);
    if (payload) {
      xhttp.send(JSON.stringify(payload));
    } else {
      xhttp.send();
    }
  }

  static addHeaders = (headers, xhttp) => {
    if (!headers)
      return;
    Object.keys(headers).map((headerKey) => {
      xhttp.setRequestHeader(headerKey, headers[headerKey]);
    })
  }

  static isSuccessFull(status) {
    return (status >= 200 && status < 300) ? true : false;
  }
}

class AjaxValidater{

  static validateAjaxRequest(url, request){

    if (!url || !request || !request.method) {
      throw new Error("Invalid Parameters : url : {" + url + "} and request : {" + JSON.stringify(request) + "}");
    }

    if (request.method != "GET" && !request.payload) {
      throw new Error("Payload required with method : " + request.method);
    }

    if(request.method != "GET" && (!request.headers || request.headers["Content-Type"])){
      throw new Error("Header : Content-Type cannot be empty with "+request.method+" request");
    }
 
  }
}

export class ApiRejectResponse {
  constructor(status, code, msg) {
    this.status = status || 0;
    this.msg = msg || "api failed to respond";
    this.code = code;
  }

  json() {
    var resp = {
      status: this.status,
      code: this.code,
      msg: this.msg,
    }
    return resp;
  }
}


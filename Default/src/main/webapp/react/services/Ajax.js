
export default class Ajax {
  constructor() {
    this.xhttp = null;
  }
  static fetch(url, request) {
    this.xhttp = new XMLHttpRequest();
    return new Promise((resolve, reject) => {

      const method = request.method;
      const payload = request.payload;

      if (!url || !request || !method) {
        reject("Invalid Parameters : url : {" + url + "} and request : {" + JSON.stringify(request) + "}");
      }

      if (method != "GET" && !payload) {
        reject("Payload required with method : " + method);
      }

      console.log("Api call : url : " + url);
      AjaxUtil.openStateAndSend(url, payload, request.headers, method, this.xhttp);

      this.xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          const apiResponse = JSON.parse(this.responseText);
          if (!AjaxUtil.isSuccessFull(this.status)) {
            reject(new ApiRejectResponse(this.status, apiResponse.errors[0].code, apiResponse.errors[0].message).json());
          }
          resolve(apiResponse.data);
        }
      };
    });
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


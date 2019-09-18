
export default class Ajax {
  constructor() {
    this.xhttp = new XMLHttpRequest();
  }
  makeRequest(method, url, data) {

    return new Promise((resolve, reject) => {
      this.xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          const apiResponse = JSON.parse(this.responseText);
          if (!Ajax.isSuccessFull(this.status)) {
            reject(new ApiRejectResponse(this.status, apiResponse.errors[0].code, apiResponse.errors[0].message).json());
          }
          resolve(apiResponse.data);
        }
      };

      console.log("url : " + url);
      this.xhttp.open(method, url, true);
      if (data) {
        this.xhttp.setRequestHeader("Content-type", "application/json");
        this.xhttp.send(JSON.stringify(data));
      } else {
        this.xhttp.send();
      }
    });
  }

  static isSuccessFull(status) {
    return (status >= 200 && status < 300) ? true : false;
  }
}

class ApiRejectResponse {
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

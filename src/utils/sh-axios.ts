import axios from "axios";

interface Ioptions {
  isShow?: boolean; //是否展示遮罩层
  url?: string; // 方法类型
  method?:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;
  timeout?: number;
  params?: object;
  data?: object;
}

export default class Axios {
  static getAxios(options: Ioptions) {
    if (options && options.isShow) {
      let loading = document.getElementById("ajaxLoading") as HTMLElement;
      loading.style.display = " block";
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method,
        timeout: options.timeout,
        params: options.params,
        data: options.data,
      }).then((res) => {
        if (options && options.isShow) {
          let loading = document.getElementById("ajaxLoading") as HTMLElement;
          loading.style.display = "none";
        }
        if (res.status === 200) {
          resolve(res.data.data.projects);
        } else {
          reject(res.data);
        }
      });
    });
  }
}

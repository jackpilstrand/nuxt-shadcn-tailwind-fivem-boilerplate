import { defineStore } from 'pinia';
import router from '../router';

export const useAppStore = defineStore('store', {
  state: () => ({
    windowShow: false,
    Title: '',
  }),

  actions: {

    jackui(data) {
        this.windowShow = true
        this.Title = data.Title
    },

    close() {
      this.post('exit')
      this.windowShow = false
    },

    post(event, data, cb) {
      var request = new XMLHttpRequest();
      request.open("POST", `https://${GetParentResourceName()}/${event}`, true);
      request.setRequestHeader(
        "Content-Type",
        "application/json; charset=UTF-8"
      );
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            if (typeof cb === "function") {
              cb(request.responseText);
            }
          } else {
            if (typeof cb === "function") {
              cb(new Error(`Error: ${request.status}`), null);
            }
          }
        }
      };
      request.send(JSON.stringify(data));
    },
  }
})


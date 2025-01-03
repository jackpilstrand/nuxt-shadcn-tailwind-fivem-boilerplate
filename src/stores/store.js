import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    windowShow: false,
    Title: '',
  }),

  actions: {
    /**
     * Opens the UI and sets the title.
     * @param {Object} data - Data containing the title for the UI.
     */
    jackui(data) {
      this.windowShow = true
      this.Title = data.Title
    },

    /**
     * Closes the UI and sends an exit event to the Lua backend.
     */
    close() {
      this.post('exit')
      this.windowShow = false
    },

    /**
     * Sends a POST request to the Lua backend.
     * @param {string} event - The event name to post to.
     * @param {Object} data - The data to send with the request.
     * @param {Function} [cb] - Optional callback for handling the response.
     */
    post(event, data, cb) {
      const request = new XMLHttpRequest()
      request.open('POST', `https://${GetParentResourceName()}/${event}`, true)
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            if (typeof cb === 'function') {
              cb(request.responseText)
            }
          } else {
            if (typeof cb === 'function') {
              cb(new Error(`Error: ${request.status}`), null)
            }
          }
        }
      }

      request.send(JSON.stringify(data))
    },
  },
})

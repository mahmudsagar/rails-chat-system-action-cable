import consumer from "./consumer"

consumer.subscriptions.create("ActivityChannel", {
  connected() {
    this.perform("appear")

    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // console.log(data)
    let elements = document.getElementsByClassName(`user-$(data.user_id)-status`)
    window.elements = elements
    console.log(elements.length)
    for (let i = 0; i < elements.length; i++){
      if (data.status == 'online') {
        elements[i].classList.add('online')
      } else {
        elements[i].classList.remove('online')
      }
    }
  }
});

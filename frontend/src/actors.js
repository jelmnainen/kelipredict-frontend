
import { browserHistory } from 'react-router'
import R from 'ramda'

const bind = (eventbus) => {
  eventbus.subscribe((event) => {
    switch (event.type) {
      case "CREATE_SERVER_FULFILLED":
        browserHistory.push(event.payload.data.name)
        return;
    }
  })
}

export default bind

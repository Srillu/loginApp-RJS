// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    let authButton

    if (isLoggedIn === true) {
      authButton = <Logout logout={this.onClickButton} />
    } else {
      authButton = <Login login={this.onClickButton} />
    }

    return (
      <div className="bg-container">
        <div className="log-container">
          <Message isLoggedIn={isLoggedIn} />
          {authButton}
        </div>
      </div>
    )
  }
}

export default Home

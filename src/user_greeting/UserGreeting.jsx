import propTypes from 'prop-types'

function UserGreeting(porps) {
  if (porps.isLoggedIn) {
    return (
      <h4 className="welcome-user">
        Welcome, {porps.username.toUpperCase()}. Log in success.
      </h4>
    );
  } else {
    return (
      <h4 className="login-prompt">Hi {porps.username}, please log in.</h4>
    );
  }
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;

// containers/UserDashboardContainer.js

import { connect } from 'react-redux'; // Import connect from react-redux if you're using Redux
import UserDashboard from '../components/user/UserDashboard'; // Import the presentational component

// Map state and dispatch to props if needed
const mapStateToProps = (state) => {
  // Add your mapStateToProps logic here if needed
  return {
    // Define props to pass to the presentational component
  };
};

const mapDispatchToProps = (dispatch) => {
  // Add your mapDispatchToProps logic here if needed
  return {
    // Define functions to dispatch actions if needed
  };
};

// Connect the container component to the Redux store
const UserDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

export default UserDashboardContainer;

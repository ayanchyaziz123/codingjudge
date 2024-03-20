// containers/AdminDashboardContainer.js

import { connect } from 'react-redux'; // Import connect from react-redux if you're using Redux
import AdminDashboard from '../components/admin/AdminDashboard'; // Import the presentational component

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
const AdminDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

export default AdminDashboardContainer;

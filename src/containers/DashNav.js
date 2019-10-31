// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DashNav from 'src/components/DashNav';

const mapStateToProps = (state) => ({
  projectName: state.userReducer.name,
});


const mapDispatchToProps = {};

// Container
const DashNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashNav);

// == Export
export default DashNavContainer;
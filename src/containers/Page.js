// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
  projectName: state.userReducer.projectName,
});


const mapDispatchToProps = {};

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;
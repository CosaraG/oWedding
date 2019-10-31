// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import HomePage from 'src/components/HomePage';

const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});


const mapDispatchToProps = {};

// Container
const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

// == Export
export default HomePageContainer;
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ActionButton from 'src/components/TablePlan/ActionButton';

// Action Creators
import { addList } from 'src/store/reducers/listReducer';


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  addList: () => {
    dispatch(addList());
  },

});

// Container
const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActionButton);

// == Export
export default AuthContainer;

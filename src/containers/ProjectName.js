// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProjectName from 'src/components/ProjectName';

// Action Creators
import { changeValue, createProject } from 'src/store/reducers/userReducer';

const mapStateToProps = (state) => ({
  name: state.userReducer.name,
  date: state.userReducer.date,
  department: state.userReducer.department,
  forecast_budget: state.userReducer.forecast_budget,
});


const mapDispatchToProps = (dispatch) => ({
  changeInput: (value, name) => {
    dispatch(changeValue(value, name));
  },
  createProject: () => {
    dispatch(createProject());
  },
  
});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectName);

// == Export
export default ExampleContainer;
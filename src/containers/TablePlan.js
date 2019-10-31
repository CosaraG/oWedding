// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import TablePlan from 'src/components/TablePlan';

// Action Creators
import { deleteGuest, putGuestId } from 'src/store/reducers/userReducer';
import { sort } from 'src/store/reducers/listReducer';

const mapStateToProps = (state) => ({  
  lists: state.listReducer,
});


const mapDispatchToProps = (dispatch) => ({
  sort: (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  ) => {
  dispatch(sort(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  ));
  },
 
  deleteGuest: (id) => {
    dispatch(putGuestId(id));
    dispatch(deleteGuest());
  },
});

// Container
const TablePlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TablePlan);

// == Export
export default TablePlanContainer;
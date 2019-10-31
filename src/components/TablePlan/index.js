import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

import './tableplan.scss';
import ActionButton from 'src/containers/ActionButton';
import DashNav from 'src/containers/DashNav';
import List from 'src/components/TablePlan/List';

const TablePlan = ({ lists, sort }) => {
  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div id="tableplan">
        <div className="nav">
          <DashNav />
        </div>
        <div className="guestsBoard">
          {lists.map((list) => (
            <List
              listClass={list.id}
              title={list.title}
              listID={list.id}
              key={list.id}
              dataGuests={list.guests}
            />
          ))}
          <ActionButton />
        </div>
      </div>
    </DragDropContext>
  );
};

TablePlan.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sort: PropTypes.func.isRequired,
};


export default TablePlan;

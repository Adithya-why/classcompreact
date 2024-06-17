import React from "react";

const Overview = (props) => {

  const { tasks } = props;
  let del = props.handler;

  return (
    <ul>
      {tasks.map((task) => {
        return (
        <>
        <li key={task.id} className={task.tno}>{task.tno}){task.text}</li>
        <span className={"fa-solid fa-delete-left del " + task.tno} key={task.id}></span>
        </>
        );
      })}
    </ul>
  );
};

export default Overview;
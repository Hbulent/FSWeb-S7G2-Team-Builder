import React from "react";
const Team = (props) => {
  const { team } = props;
  return (
    <div>
      {team.map((member) => (
        <p>
          {member.name},{member.email},{member.role}
        </p>
      ))}
    </div>
  );
};

export default Team;

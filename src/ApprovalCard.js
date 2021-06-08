import React from 'react';

const ApprovalCard = (props) => {
    const style={
        marginTop: '20px'
    }
  return (
    <div className="ui card" style={style}>
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
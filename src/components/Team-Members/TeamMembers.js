import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import SelectedMembers from '../SelectedMembers/SelectedMembers';

const TeamMembers = () => {
	// set members in state
	const [members, setMembers] = useState([]);
	// selected members set in state
	const [selectedMembers, setSelectedMembers] = useState([]);

	// load data
	useEffect(() => {
		fetch("http://localhost:4000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMembers(data.x);
		setSelectedMembers(data.y)
      });
	}, []);

	// update selected members

	const handleMembersDetails = (member) => {
		// console.log(member);
		// const newMember = [...selectedMembers, member]
		// setSelectedMembers(newMember);
		// useEffect(() => {
			fetch('http://localhost:4000/addData',{
			method:'POST',
			headers:{
				'content-type': 'application/json'
			},
			body:JSON.stringify(member)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setSelectedMembers(data)
		})
		// },[member])
		console.log('button is clicked',member)
	};
	
	console.log('ddddddddddddd',selectedMembers);
	
	return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {/* {
								members.map(member => <Member key={member.id} handleMembersDetails={handleMembersDetails}
									member={member}></Member>)
							} */}

              {members.map((m) => (
                <button onClick={()=>handleMembersDetails(m)}>{m.name}</button>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="selected_members">
              {/* <SelectedMembers selectedMembers={selectedMembers}></SelectedMembers> */}
			  {  
			  selectedMembers.map(m=> <p>{m.name}</p>)
			  
			  
			  }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectedMembers.css';

const SelectedMembers = () => {
   // const { selectedMembers } = props;
   const [added, setAdded] = useState([]);
   console.log(added);
   useEffect(() => {
      fetch('http://localhost:4000/addedMember')
         .then(res => res.json())
         .then(data => {
            setAdded(data);
            console.log(data);
         })
   }, []);
   // update total price
   const total = added.reduce((previous, currentBalance) => previous + parseInt(currentBalance.balance), 0);

   // handle delete
   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure want to delete this')
      if (proceed) {
         const url = `http://localhost:4000/addedMember/${id}`;
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0) {
                  alert('deleted successfully');
                  const remaining = added.filter(member => member._id !== id);
                  setAdded(remaining)
               }
               // console.log(data);
            })
      }
   };

   // handleName
   const handleName = (e) => {
      console.log(e.target.value);
   }
   return (
      <>
         <h2 className="selected_title mb-5 text-center">Members Added: <span>{added.length}</span></h2>
         {
            // display name and cost
            added.map(selectedMember => {
               return (
                  <>
                     <div key={selectedMember.id} className="select_box d-flex justify-content-between align-items-center mb-2">
                        <div><h4 onChange={handleName} className="name">{selectedMember.name}</h4></div>
                        <div><h5 className="price">{selectedMember.balance}</h5></div>
                        <div>
                           <button onClick={() => handleDelete(selectedMember._id)}
                              className="btn btn-danger mx-2"><FontAwesomeIcon icon={faTrash} /></button>
                           <Link to={`/update/${selectedMember._id}`}>
                              <button className="btn btn-success"><FontAwesomeIcon icon={faPen} /></button>
                           </Link>
                        </div>
                     </div>
                  </>
               )
            })
         }
         {/* display total price */}
         <div className="totalPrice d-flex justify-content-between mt-2 pt-2">
            <h4>Total Price</h4>
            <h5>{total}</h5>
         </div>
      </>
   );
};

export default SelectedMembers;
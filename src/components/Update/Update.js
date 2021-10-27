import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Update.css';

const Update = () => {
    const { id } = useParams();
    const [updateMember, setUpdateMember] = useState({});
    useEffect(() => {
        const url = `http://localhost:4000/addedMember/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateMember(data);
            })
    }, []);
    // handleName;
    const handleName = (e) => {
       const updatedName = {name:e.target.value,balance:updateMember.balance} 
       setUpdateMember(updatedName)
    };
    // handlePrice
    const handlePrice = (e) =>{
      // setPrice(e.target.value)
      const updatePrice = {name:updateMember.name,balance:e.target.value};
      setUpdateMember(updatePrice)
    }
   //  handleUpdate
   const handleUpdate = (e) => {
      e.preventDefault();
      const url = `http://localhost:4000/addedMember/${id}`;
      fetch(url,{
         method:'PUT',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(updateMember)
      })
      .then(res => res.json())
      .then(data => {
         if(data.modifiedCount > 0){
            alert('Update successfully');
            setUpdateMember({})
         }
         console.log(data);
      })
   }
    return (
        <>
            <div className="update_wrapper">
                <div className="container">
                    <div className="update_values">
                        <form onSubmit={handleUpdate}>
                            <input type="text" onChange={handleName} value={updateMember.name || ''} />
                            <input type="number" onChange={handlePrice} value={updateMember.balance || ''} />
                            <input type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;
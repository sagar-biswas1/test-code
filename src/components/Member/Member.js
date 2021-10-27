import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Member.css';

const Member = (props) => {
    // destructuring in member info
    const { name, picture, role, balance, age, email } = props.member;
    return (
        <>
            <div className="col-lg-4 mb-4">
                <div className="card h-100" style={{ width: "19.5rem" }}>
                    <div className="card_img text-center my-3">
                        <img src={picture} alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="social_icons text-center mb-3">
                            <a href="/"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                            <a href="/"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                        </div>
                        <ul>
                            <li className="mb-3">Name: <span>{name}</span></li>
                            <li className="mb-3">Role: <span>{role}</span></li>
                            <li className="mb-3">Age: <span>{age}</span></li>
                            <li className="mb-3">Salary: <span>{balance}</span></li>
                            <li className="mb-4">Email: <span>{email}</span></li>
                        </ul>
                        <button onClick={() => props.handleMembersDetails(props.member)} className="btn regular_btn"> <FontAwesomeIcon className="cart_icon" icon={faShoppingCart} /> Add Member</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Member;
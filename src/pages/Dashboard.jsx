import React from 'react';
import { MdManageAccounts } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Users</h3>
            <MdManageAccounts className='card_icon'/>
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Tickets</h3>
            <IoTicketOutline className='card_icon'/>
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Subscription</h3>
            <MdOutlineSubscriptions className='card_icon'/>
          </div>
          <h1>33</h1>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

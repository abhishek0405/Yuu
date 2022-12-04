import React from 'react';
import {useState, useEffect} from 'react'
import * as PushAPI from "@pushprotocol/restapi";
import Notifications from './Notifications';
import axios from 'axios';
import chart from '../components/chart.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
function PublisherAdBids () {
    const [notifications,setNotifications] = useState([])
    const [walletAddress,setWalletAddress] = useState([])
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

    var COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042"];
    useEffect(() => {
        //console.log(window.location.pathname)
        const fetchNotifs = async() => {
          console.log("fetching")
          const notifications = await PushAPI.user.getFeeds({
              user: `eip155:5:${walletAddress}`, // user address in CAIP
              env: 'staging'
          });
          setNotifications(notifications)
          console.log('Notifications: \n\n', notifications);
          
      }
      async function connect(){
        if(window.ethereum) {
          console.log('detected');
      
          try {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setWalletAddress(accounts[0]);
          } catch (error) {
            console.log(error)
            console.log('Error connecting...');
          }
      
        } else {
          alert('Meta Mask not detected');
        }
      }

     
      connect();
      fetchNotifs();
      
      
    }, [walletAddress]);

    return (
      <div className="row">
        <div className="column">
            {notifications && (
                <Notifications notifications = {notifications}></Notifications>
            )}
        </div>
        <div className='column'>

        <PieChart width={700} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        
       </div>
    )
}



export default PublisherAdBids;
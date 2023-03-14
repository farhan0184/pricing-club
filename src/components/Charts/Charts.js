import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Charts = () => {
    const data = [
        {
          id:1,
          name: "Supliers A",
          Salers: 4000,
          Prices: 2400,
          amt: 2400
        },
        {
          id:2,
          name: "Supliers B",
          Salers: 3000,
          Prices: 1398,
          amt: 2210
        },
        {
          id:3,
          name: "Supliers C",
          Salers: 2000,
          Prices: 9800,
          amt: 2290
        },
        {
          id:4,
          name: "Supliers D",
          Salers: 2780,
          Prices: 3908,
          amt: 2000
        },
        {
          id:5,
          name: "Supliers E",
          Salers: 1890,
          Prices: 4800,
          amt: 2181
        },
        {
          id:6,
          name: "Supliers F",
          Salers: 2390,
          Prices: 3800,
          amt: 2500
        },
        {
          id:7,
          name: "Supliers G",
          Salers: 3490,
          Prices: 4300,
          amt: 2100
        }
      ];
    const [phones,setPhones] = useState([])
    useEffect(()=>{     // fetch data with axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
           const loadedData = data.data.data;
           const phoneData = loadedData.map(phone =>{
             const parts = phone.slug.split('-');
             const ph ={
                name: parts[0],
                value: parts[1]
             }
            return ph;
           })
           setPhones(phoneData)
        })
    },[])
    return (
        <div className='w-1/2'>
          <ResponsiveContainer width="100%" height={200} > 
            <LineChart className='ml-10' width={700} height={400} data={data} >
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Line type={'monotone'} dataKey={'Prices'} stroke="#8884d8"></Line>
                  <Line type={'monotone'} dataKey={'Salers'} stroke="#8884d8"></Line>
                  <Tooltip />
                  <XAxis dataKey="name" />
                  <YAxis />
              </LineChart>
          </ResponsiveContainer>
            
            <p className='text-xl italic text-gray-700 text-center'>Chart 1: LineChart</p>
            <ResponsiveContainer width="100%" height={200} >
              <BarChart className='ml-10' width={700} height={423} data={data}>
                  <CartesianGrid  strokeDasharray="3 3" />
                  <XAxis dataKey='name'/>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='Prices'  fill="#8884d8"/>
                  <Bar dataKey='Salers'  fill="#82ca9d"/>
              </BarChart>
            </ResponsiveContainer>
            
            <p className='text-xl italic text-gray-700 text-center'>Chart 2: BarChart</p>
            <ResponsiveContainer width="100%" height={200} >
              <BarChart className='ml-10' width={1000} height={400} data={phones}>
                  <Bar dataKey="value" fill="#8884d8" /> 
                  <XAxis dataKey='name'/>
                  <YAxis />
                  <Tooltip />
              </BarChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default Charts;
import React, { useReducer, useState } from 'react';

export function CallbackHell() {
 

  // function fetchUserData(callback) {
  //   setTimeout(() => {
  //     console.log("Fetched user data");
  //     callback("User Data");
  //   }, 1000);
  // }
  
  // function fetchOrderDetails(userData, callback) {
  //   setTimeout(() => {
  //     console.log("Fetched order details for", userData);
  //     callback("Order Details");
  //   }, 1000);
  // }
  
  // function updateStatus(orderDetails, callback) {
  //   setTimeout(() => {
  //     console.log("Status updated for", orderDetails);
  //     callback("Status Updated");
  //   }, 1000);
  // }
  
  // // Nested callbacks, or "callback hell"
  // fetchUserData((userData) => {
  //   fetchOrderDetails(userData, (orderDetails) => {
  //     updateStatus(orderDetails, (status) => {
  //       console.log("Final result:", status);
  //     });
  //   });
  // });
  // function fetchUserData() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("Fetched user data");
  //       resolve("User Data");
  //     }, 3000);
  //   });
  // }
  
  // function fetchOrderDetails(userData) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("Fetched order details for", userData);
  //       resolve("Order Details");
  //     }, 2000);
  //   });
  // }
  
  // function updateStatus(orderDetails) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("Status updated for", orderDetails);
  //       resolve("Status Updated");
  //     }, 1000);
  //   });
  // }
  
  // // Using promises to avoid callback hell
  // fetchUserData()
  //   .then((userData) => fetchOrderDetails(userData))
  //   .then((orderDetails) => updateStatus(orderDetails))
  //   .then((status) => {
  //     console.log("Final result:", status);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Calling the function
  console.log(fibonacci(10)); // Calculates without memoization


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
     <h1>Call Back Hell</h1>
    </div>
  );
}



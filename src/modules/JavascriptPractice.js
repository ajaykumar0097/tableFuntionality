import React from 'react'

const JavascriptPractice = () => {

// const p1= new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("P1 Success"),3000)
// })
// const p2= new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("P2 fail"),1000)
// })
// const p3= new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("P3 Success"),2000)
// })

// Promise.all([p1,p2,p3]).then(res=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.log(err)
// })



// Promise.allSettled([p1,p2,p3]).then(res=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.log(err)
// })

// Promise.race([p1,p2,p3]).then(res=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.error(err)
// })

// Promise.any([p1,p2,p3]).then(res=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.log(err.errors)
// })

//async await

//async function always return a promise

const p1= new Promise((resolve,reject)=>{
resolve("success")
})
// const p2= new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("P2 fail"),1000)
// })
// const p3= new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("P3 Success"),2000)
// })

async function getData(){
  return p1

}

const dataPromise=getData()

dataPromise.then((res)=> console.log(res)
)


return (
    <div>
      Hwll
    </div>
  )
}

export default JavascriptPractice

/** @format */
let index=0;
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  let arr1=[];
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    console.log(arr[index]["name"])
    index+=1
    arr.map(PrintStudentswithMap)
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    console.log(arr[index]["name"])
    index+=1;
    arr.forEach(PrintStudentsbyForEach,index)
    
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45})
    console.log(arr[arr.length-1])
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]["marks"]>=50)
        {
            arr1.push(arr[i])
        }
    }
    console.log(arr1)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 4, surname: "x", section: "cse", percentage: 80 },
        { id: 5, surname: "y", section: "ece", percentage: 85 },
        { id: 6, surname: "z", section: "mech", percentage: 35 },
      ];
  }
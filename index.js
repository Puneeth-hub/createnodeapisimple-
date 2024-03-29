const express = require('express') 
const bodyParser = require('body-parser')


const app = express(); 

const PORT = 3000;  

app.use(bodyParser.json()); 


let data = {
    message: "Hello, World!"
};  

app.get('/api/data', (req, res)=>{
    res.json(data);   
})

app.put('/api/dataone', (req,res)=>{
    const newData = req.body; 
    data.message=newData.message ; 
    res.status(200).json({ message: "Data updated successfully",newData })
})  

app.post('/api/data', (req, res) => {
    const newData = req.body;
    data.message = newData.message;
    res.json({ message: "Data added successfully", newData }); 
});

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT} successfully`)
}) 



//post call fetching 

const newData = {
    message: "New data added"
  };
  
  fetch('http://localhost:3000/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('POST request succeeded with JSON response:', data);
  })
  .catch(error => {
    console.error('There was a problem with the POST request:', error);
  });

  

  //put call fetching 


  const newData = {
    message: "New message"
  };
  
  fetch('http://localhost:3000/api/data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('PUT request succeeded with JSON response:', data);
  })
  .catch(error => {
    console.error('There was a problem with the PUT request:', error);
  });
  
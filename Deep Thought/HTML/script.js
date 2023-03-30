fetch("index.json").then((response)=>{
    
    return response.json();
})
.then((data) =>{
 
   document.getElementById('task_title').innerHTML = data.tasks[0].task_title;
   document.getElementById('task_description').innerHTML = data.tasks[0].task_description;
// Card 1

   document.getElementById('asset_title').innerHTML = data.tasks[0].assets[0].asset_title;
   document.getElementById('asset_description').innerHTML = data.tasks[0].assets[0].asset_description;

// Card 2
 
   document.getElementById('asset_title_2').innerHTML = data.tasks[0].assets[1].asset_title;
   document.getElementById('asset_description_2').innerHTML = data.tasks[0].assets[1].asset_description;

// Card 3

   document.getElementById('asset_title_3').innerHTML = data.tasks[0].assets[2].asset_title;
   document.getElementById('asset_description_3').innerHTML = data.tasks[0].assets[2].asset_description;

// Card 4

   document.getElementById('asset_title_4').innerHTML = data.tasks[0].assets[3].asset_title;
   document.getElementById('asset_description_4').innerHTML = data.tasks[0].assets[3].asset_description;
   

}).catch((error) =>{
    console.log(error);
});
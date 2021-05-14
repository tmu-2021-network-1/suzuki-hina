const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  
  studios.forEach(studio => {
   const studioDiv = document.createElement('div');
   studioDiv.className ='studio-div';

   const  studioImage = document.createElement('img');
   studioImage.id =studio['name-ja'];
   studioImage.className = 'studio-image';
   studioImage.src = studio['photo1'];
   studioImage.alt = 'スタジオの画像です。';

   const studioDivTwo = document.createElement('div');
   studioDivTwo.className ='studio-div2';

   const studioDivThree = document.createElement('div');
   studioDivThree.className ='studio-div3';

   const studioTitle = document.createElement("span");
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];

   const kindOfCore = document.createElement("span");
   kindOfCore.className = 'kind-of-core';
   kindOfCore.textContent = studio['core-ja'];

   

   studioDivTwo.appendChild(studioTitle);
   studioDivTwo.appendChild(kindOfCore);

   studioDivThree.appendChild(studioDivTwo);

   studioDiv.appendChild(studioImage);
   studioDiv.appendChild(studioDivThree);
  
   document.getElementById('studios').appendChild(studioDiv);

 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();


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

   const ContentsDiv = document.createElement('div');
   ContentsDiv.className ='contents';


   const ContentsItem1Div = document.createElement('div');
   ContentsItem1Div.className ='contents_item1';

   const  studioImage = document.createElement('img');
   /*studioImage.id =studio['name-ja'];*/
   studioImage.className = 'studio-image';
   studioImage.src = studio['photo1'];
   studioImage.alt = 'スタジオの画像です。';



   const ContentsItem2Div = document.createElement('div');
   ContentsItem2Div.className ='contents_item2';

   const StudioTitleJa = document.createElement("span");
   StudioTitleJa.className = 'studio-title-ja';
   StudioTitleJa.textContent = studio['name-ja'];

   const StudioTitleEn = document.createElement("span");
   StudioTitleEn.className = 'studio-title-en';
   StudioTitleEn.textContent = studio['name-en'];

   const StudioCoreJa = document.createElement("span");
   StudioCoreJa.className = 'studio-core-ja';
   StudioCoreJa.textContent = studio['core-ja'];

   const StudioCoreEn = document.createElement("span");
   StudioCoreEn.className = 'studio-core-en';
   StudioCoreEn.textContent = studio['core-en'];



   const ContentsItem3Div = document.createElement('div');
   ContentsItem3Div.className ='contents_item3';

   const StudioDesJa = document.createElement("span");
   StudioDesJa.className = 'studio-description-ja';
   StudioDesJa.textContent = studio['description-ja'];


   ContentsItem1Div.appendChild(studioImage);

   ContentsItem2Div.appendChild(StudioTitleJa);
   ContentsItem2Div.appendChild(StudioTitleEn);
   ContentsItem2Div.appendChild(StudioCoreJa);
   ContentsItem2Div.appendChild(StudioCoreEn);

   ContentsItem3Div.appendChild(StudioDesJa);

   ContentsDiv.appendChild(ContentsItem1Div);
   ContentsDiv.appendChild(ContentsItem2Div);
   ContentsDiv.appendChild(ContentsItem3Div);

   studioDiv.appendChild(ContentsDiv);
  
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


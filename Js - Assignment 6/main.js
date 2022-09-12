
// onclick hamburger menu

const menu = document.querySelector('.menu')
const output = document.querySelector('.menu-output')
console.log(menu)


fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
.then(function(res) {
    let data = res.json()
    console.log(data)
    return data
})
.then((obj)=>{
    console.log('this is obj',obj[0])
    // Clothing obj Header
const homePageSection = document.querySelector('#home-page-section')
  const clothHeader = document.createElement('h2');
  clothHeader.className = 'cards-header';
  clothHeader.innerHTML = 'Clothing for Men and Women';


  // Accessory obj Header
  const accHeader = document.createElement('h2');
  accHeader.className ='cards-header';
  accHeader.innerHTML = 'Accessories for Men and Women';

  
  // Appending both headers in body
  homePageSection.appendChild(clothHeader);

  

  //container 1 =>  creating
  const container1 = document.createElement('div');
  container1.className = 'containerOfCard';
  container1.id = 'clothContainer';

  // container 2 =>  creating
  const container2 = document.createElement('div');
  container2.className = 'containerOfCard';
  container2.id = 'accContainer'
    // ===========================  For  Loop starts ==================================== // 
  /* creating a loop for card making  */ 

  for( i = 0; i < obj.length; i++){


    //condition = this container only containes non-accessory products
    if(obj[i].isAccessory === false){
     
        
        //container1 => card 
        const card = document.createElement('div');
        card.className = 'cards';
        card.id = 'card'+obj[i].id        
        //container1 => card  => img
        const productImage = document.createElement('img');
        productImage.className = 'productImage';
        productImage.src = obj[i].preview;

        //container1 => card => description
        const cardContent = document.createElement('div');
        cardContent.className = 'cardContent';

        //container1 => card => description => heading3
        const heading3 = document.createElement('h3');
        heading3.tagName = 'h3';
        heading3.className = 'heading3'
        heading3.innerHTML = obj[i].name;

        //container1 => card => description => heading4
        const heading4 = document.createElement('h4');
        heading4.tagName = 'h4';
        heading4.className = 'heading4'
        heading4.innerHTML = obj[i].brand;
        
        //container1 => card => description => heading5
        const heading5 = document.createElement('h5');
        heading5.tagName = 'h5';
        heading5.className = 'heading5'
        heading5.innerHTML = "Rs  " + obj[i].price;
           
        // appending clilds
        cardContent.append(heading3,heading4,heading5);
        card.append(productImage,cardContent);
        container1.append(card);
        homePageSection.append(container1);        
    };

   
  }


  homePageSection.appendChild(accHeader);



  for (i = 0; i<obj.length ; i++) {

     //condition = this container only containes the accessory products
     if(obj[i].isAccessory === true){
              

      //container2 => card 
      const card = document.createElement('div');
      card.className = 'cards';
      card.id = 'card'+obj[i].id;
      
      //container2 => card  => img
      const productImage = document.createElement('img');
      productImage.className = 'productImage';
      productImage.src = obj[i].preview;

      //container2 => card => description
      const cardContent = document.createElement('div');
      cardContent.className = 'cardContent';

      //container2 => card => description => heading3


      const heading3 = document.createElement('h3');
      heading3.tagName = 'h3';
      heading3.className = 'heading3'
      heading3.innerHTML = obj[i].name;

      //container2 => card => description => heading4
      const heading4 = document.createElement('h4');
      heading4.tagName = 'h4';
      heading4.className = 'heading4'
      heading4.innerHTML = obj[i].brand;
      
      //container2 => card => description => heading5
      const heading5 = document.createElement('h5');
      heading5.tagName = 'h5';
      heading5.className = 'heading5'
      heading5.innerHTML = "Rs  " + obj[i].price;
         
      // appending clilds
      cardContent.append(heading3,heading4,heading5);
      card.append(productImage,cardContent);
      container2.append(card);
      homePageSection.append(container2);   
  }

  }


  // =============================== For Loop ends ================================== //


})


// =============================== For Loop ends ================================== //



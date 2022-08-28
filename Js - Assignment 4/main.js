var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

// product list end

// body element creation =>

const section = document.createElement("section");
const banner = document.createElement("div");
banner.className = "banner";

const preview = document.createElement("div");
preview.className = "preview";

const previewImage = document.createElement("img");
previewImage.className = "previewImage";

const details = document.createElement("div");
details.className = "details";

const productName = document.createElement("h1");
productName.className = "productName";

const brandName = document.createElement("h3");
brandName.className = "brandName";

const price = document.createElement("h3");
price.className = "price";

const amount = document.createElement("span");
amount.className = "amount";

const descriptionHeader = document.createElement("h3");
descriptionHeader.className = "descriptionHeader";

const description = document.createElement("p");
description.className = "description";

const previewHeader = document.createElement("h3");
previewHeader.className = "previewHeader";

const productImages = document.createElement("div");
productImages.id = "productImages";

const addToCart = document.createElement("button");
addToCart.id = "addToCart";
addToCart.innerHTML = "Add to Cart";

//  appending child elements into body

document.body.append(section);
section.append(banner);
banner.append(preview, details);
preview.append(previewImage);
details.append(
  productName,
  brandName,
  price,
  descriptionHeader,
  description,
  previewHeader,
  productImages,
  addToCart
);

// loading the data to the elements

previewImage.src = productData.preview;
productName.innerHTML = productData.name;
brandName.innerHTML = productData.brand;
price.innerHTML = "Price: Rs ";
price.append(amount);
amount.innerHTML = productData.price;
descriptionHeader.innerHTML = "Description";
description.innerHTML = productData.description;
previewHeader.innerHTML = "Product Preview";
/* to add images of products as per array*/
// for (value of productData.photos) {
//   let image = document.createElement("img");
//   image.className = "listImages";
//   image.id = value;
//   image.src = value;
//   image.setAttribute("onclick", "changeIt()");
//   productImages.append(image);
// }

for(let i = 0; i < productData.photos.length; i++){
    let image = document.createElement("img");
  image.className = "listImages";
  image.id = 'i'+i;
  image.setAttribute('onclick','changeIt'+(i+1)+'()')
  image.src = productData.photos[i];
  productImages.append(image);

}

// onclick preview changing

function changeIt1() {
  var a = document.getElementById('i0').src;
  previewImage.src = a; 
  document.getElementById('i0').style.border = '2px solid #009688'
  document.getElementById('i1').style.border = 'none'
  document.getElementById('i2').style.border = 'none'
  document.getElementById('i3').style.border = 'none'
  document.getElementById('i4').style.border = 'none'
} //
function changeIt2() {
    var a = document.getElementById('i1').src; 
    previewImage.src = a; 
    document.getElementById('i1').style.border = '2px solid #009688'
    document.getElementById('i0').style.border = 'none'
    document.getElementById('i2').style.border = 'none'
    document.getElementById('i3').style.border = 'none'
    document.getElementById('i4').style.border = 'none'
  } //
  function changeIt3() {
    var a = document.getElementById('i2').src;
    previewImage.src = a; 
    document.getElementById('i2').style.border = '2px solid #009688'
    document.getElementById('i1').style.border = 'none'
    document.getElementById('i0').style.border = 'none'
    document.getElementById('i3').style.border = 'none'
    document.getElementById('i4').style.border = 'none'
  } //
  function changeIt4() {
    var a = document.getElementById('i3').src;
    previewImage.src = a; 
    document.getElementById('i3').style.border = '2px solid #009688'
    document.getElementById('i1').style.border = 'none'
    document.getElementById('i2').style.border = 'none'
    document.getElementById('i0').style.border = 'none'
    document.getElementById('i4').style.border = 'none'
  } //
  function changeIt5() {
    var a = document.getElementById('i4').src; 
    previewImage.src = a; 
    document.getElementById('i4').style.border = '2px solid #009688'
    document.getElementById('i1').style.border = 'none'
    document.getElementById('i2').style.border = 'none'
    document.getElementById('i3').style.border = 'none'
    document.getElementById('i0').style.border = 'none'
  } //


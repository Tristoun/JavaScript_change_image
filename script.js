
let canvas = document.getElementById ('canvas');
let ctx = canvas.getContext('2d');
ctx.textalign = "center";
let image = new Image();
image.src = "ile.jpg";
image.onload = function(){ ctx.drawImage (image, 10, 10); }

function img(p) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let im_choose = parseInt(p);
  switch (im_choose) {
    case 1 :
    image.src = "ile.jpg";
    break;
    case 2 :
    image.src = "yoda.webp"
    break;
    case 3 :
    image.src = "paysage.jpg"
    break;
    case 4 :
    image.src = "https://blog.vacancesweb.be/wp-content/uploads/2021/09/chan_copy1.jpg"
    break;
     }
}

function inversion(){
  im = ctx.getImageData (10,10, image.width, image.height)

  for (let i = 0; i < im.data.length; i +=4) {
    im.data[i] = 255-im.data[i]
    im.data[i+1] = 255-im.data[i+1]
    im.data[i+2] = 255-im.data[i+2]
  }
  ctx.putImageData(im , image.width + 20, 10)
}

function nivgris(){
  im = ctx.getImageData (10, 10, image.width, image.height)
  for (let i = 0; i < im.data.length; i +=4) {
    let moyenne = (im.data[i] + im.data[i+1] + im.data[i+2])/3;
    im.data[i] = im.data[i+1] = im.data[i+2] = moyenne
    }
  ctx.putImageData(im,image.width + 20, 10 )
}

function supcanal(rvb){
  im = ctx.getImageData (10,10, image.width, image.height)
  for (let i = 0; i < im.data.length; i +=4) {
    im.data[i+rvb] = 0
  }
  ctx.putImageData(im,image.width + 20, 10 )
}

function consrouge (){
  im = ctx.getImageData (10,10, image.width, image.height)
  for (let i = 0; i < im.data.length; i +=4) {
    im.data[i+1] = 0
    im.data [i+2] = 0
  }
  ctx.putImageData(im,image.width + 20, 10 )
}

function consvert (){
  im = ctx.getImageData (10,10, image.width, image.height)
  for (let i = 0; i < im.data.length; i +=4) {
    im.data[i] = 0
    im.data [i+2] = 0
  }
  ctx.putImageData(im,image.width + 20, 10 )
}

function consbleu (){
  im = ctx.getImageData (10,10, image.width, image.height)
  for (let i = 0; i < im.data.length; i +=4) {
    im.data[i] = 0
    im.data [i+1] = 0
  }
  ctx.putImageData(im,image.width + 20, 10 )
}

function fsepia(){
  im = ctx.getImageData (10, 10, image.width, image.height)
   for (let i = 0; i < im.data.length; i +=4) {
    let moyenne1 = (0.393*im.data[i] + 0.769*im.data[i+1] + 0.189*im.data[i+2]);
    let moyenne2 = (0.349*im.data[i] + 0.686*im.data[i+1] + 0.168*im.data[i+2]);
    let moyenne3 = (0.272*im.data[i] + 0.534*im.data[i+1] + 0.131*im.data[i+2]);
    // site utiliser pour les calculs : http://leware.net/photo/blogSepia.html
    im.data[i] = moyenne1
    im.data[i+1] = moyenne2
    im.data[i+2] = moyenne3
    }
  ctx.putImageData(im,image.width + 20, 10 )
}

function seuillage(){
  im = ctx.getImageData (10, 10, image.width, image.height)
  nivgris();
  let val_seuillage = document.getElementById("seuil").value;
  for (let i = 0; i < im.data.length; i +=4) {
    if (im.data[i] >= val_seuillage) {
      im.data[i] = 255;
    } else {
      im.data[i] = 0;
    }
    if (im.data[i+1] >= val_seuillage) {
      im.data[i+1] = 255;      
    } else {
      im.data[i+1] = 0;
    }
    if (im.data[i+2] >= val_seuillage) {
      im.data[i+2] = 255;   
    } else {
      im.data[i+2] = 0;
    }
    }
  ctx.putImageData(im,image.width + 20, 10 )
}

function Noise() {
  im = ctx.getImageData(10, 10, image.width, image.height);
  for (let i = 0; i < im.data.length;  i += 4) {
    let randColor1 = Math.random() ;
    let randColor2 = Math.random() ;
    let randColor3 = Math.random() ;
    im.data[i] = im.data[i]*randColor1;
    im.data[i+1] = im.data[i+1]*randColor2;
    im.data[i+2] = im.data[i+2]*randColor3; 
    }
	  ctx.putImageData(im, image.width + 20, 10 );
	}

function lumino() {
  im = ctx.getImageData(10, 10, image.width, image.height);
  val_aug = document.getElementById("lumos").value;
  for (let i = 0; i < im.data.length;  i += 4) {
  im.data[i] = im.data[i] + val_aug/2;
  im.data[i+1] = im.data[i+1] + val_aug/2;
  im.data[i+2] = im.data[i+2] + val_aug/2;

  }
  ctx.putImageData(im, image.width + 20, 10 );

}
function baissado() {
  im = ctx.getImageData(10, 10, image.width, image.height);
  val_aug = document.getElementById("baissos").value;
  for (let i = 0; i < im.data.length;  i += 4) {
  im.data[i] = im.data[i] - val_aug/2;
  im.data[i+1] = im.data[i+1] - val_aug/2;
  im.data[i+2] = im.data[i+2] - val_aug/2;
  }
  ctx.putImageData(im, image.width + 20, 10 );
}

function contrasta() {
  im = ctx.getImageData(10, 10, image.width, image.height);
  const_val = 60
  for (let i = 0; i < im.data.length;  i += 4) {
    if (im.data[i] >= 190) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i] <= 80) { 
      im.data[i] = im.data[i] - const_val;
    }
    if (im.data[i+1] >= 190) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i+1] <= 80) { 
      im.data[i] = im.data[i] - const_val;
    }
    if (im.data[i+2] >= 190) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i+2] <= 80) { 
      im.data[i] = im.data[i] - const_val;
    }
    }
  ctx.putImageData(im, image.width + 20, 10 );

}

function contrastb() {
  im = ctx.getImageData(10, 10, image.width, image.height);
  const_val = 60
  for (let i = 0; i < im.data.length;  i += 4) {
    if (im.data[i] >= 80) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i] <= 190) { 
      im.data[i] = im.data[i] - const_val;
    }
    if (im.data[i+1] >= 80) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i+1] <= 190) { 
      im.data[i] = im.data[i] - const_val;
    }
    if (im.data[i+2] >= 80) {
      im.data[i] = im.data[i] + const_val;
    }
    if (im.data[i+2] <= 190) { 
      im.data[i] = im.data[i] - const_val;
    }
    }
  ctx.putImageData(im, image.width + 20, 10 );
}

function zoom() {
  
  w = image.width
  h = image.height
  z = document.getElementById ("zooom").value / 10 + 1
  ctx.drawImage(image, 10 + w/2 -(w/(2*z)) , 10 + h/2-(h/(z*2)), w/z, h/z , w + 20, 10, w , h);

}

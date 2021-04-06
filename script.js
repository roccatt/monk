let count = 0;
let pic = ["https://s3-projectsassets.whjr.online/Monkey_02.png",
           "https://s3-projectsassets.whjr.online/Monkey_03.png",
           "https://s3-projectsassets.whjr.online/Monkey_04.png",
           "https://s3-projectsassets.whjr.online/Monkey_05.png",
           "https://s3-projectsassets.whjr.online/Monkey_06.png",
           "https://s3-projectsassets.whjr.online/Monkey_07.png",
           "https://s3-projectsassets.whjr.online/Monkey_08.png",
           "https://s3-projectsassets.whjr.online/Monkey_09.png",
           "https://s3-projectsassets.whjr.online/Monkey_10.png"];

function clicked(){
  console.log("clicked");
  
  document.getElementById('img1').src = pic[count];
  count++;
  if(count >= 9){
count = 0;
 }
}

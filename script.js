const videoElement=document.getElementById('video');
const  button1=document.getElementById('button1');
const  button2=document.getElementById('button2');

//*Promp to select media stream, pass to video element, then play
const selectMediaStream=async function(){
    try{
       const  mediaStream=await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject=mediaStream;
       videoElement.onloadedmetadata=()=>{
           videoElement.play();
       }
    }
    catch(err)
    {
    alert("An Unexpected error has occured");
    }
}

button1.addEventListener('click',async () =>{
// *Disable button
button1.disabled=true;
//* Start picture in picture
await videoElement.requestPictureInPicture();

//* Reset button
button1.disabled=false;
});
button2.addEventListener('click',selectMediaStream);
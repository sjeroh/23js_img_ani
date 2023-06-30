window.addEventListener('mousemove',(e)=>{
  document.querySelector('#slidephoto').style.top = `${e.clientY}px`
  document.querySelector('#slidephoto').style.left = `${e.clientX}px`
  // console.log(e.clientY,e.clientX)
  document.querySelector('#slidephoto').style.transform=`translate(${-e.clientX * 0.0095}vw, ${-e.clientY * 0.01}vh)`
})
// window.addEventListener('mousemove',(e)=>{
//   document.querySelector('#slidephoto').style.top = `${e.clientY}px`
//   document.querySelector('#slidephoto').style.left = `${e.clientX}px`
//   // console.log(e.clientY,e.clientX)
//   document.querySelector('#slidephoto').style.transform=`translate(${-e.clientX * 0.2}px, ${-e.clientY * 0.2}px)`
// })

document.querySelector("#chainn").addEventListener('mousemove',()=>{
  document.querySelector("#slidephotos").style.marginTop = "0%"
  document.querySelector("#chainn").style.color="rgba(177,177,177)"
});
document.querySelector("#chainn").addEventListener('mouseleave',()=>{
  document.querySelector("#chainn").style.color="initial"
});

document.querySelector("#aty").addEventListener('mousemove',()=>{
  document.querySelector("#slidephotos").style.marginTop = "-120%"
  document.querySelector("#aty").style.color="rgba(177,177,177)"
});
document.querySelector("#aty").addEventListener('mouseleave',()=>{
  document.querySelector("#aty").style.color="initial"
});

document.querySelector("#mic").addEventListener('mousemove',()=>{
  document.querySelector("#slidephotos").style.marginTop = "-240%"
  document.querySelector("#mic").style.color="rgba(177,177,177)"
});
document.querySelector("#mic").addEventListener('mouseleave',()=>{
  document.querySelector("#mic").style.color="initial"
});

document.querySelector("#tapso").addEventListener('mousemove',()=>{
  document.querySelector("#slidephotos").style.marginTop = "-360%"
  document.querySelector("#tapso").style.color="rgba(177,177,177)"
});
document.querySelector("#tapso").addEventListener('mouseleave',()=>{
  document.querySelector("#tapso").style.color="initial"
});

document.querySelector("#eff").addEventListener('mousemove',()=>{
  document.querySelector("#slidephoto").style.display = "initial"
  document.querySelector("#slidephoto").style.opacity="1"
});
document.querySelector("#eff").addEventListener('mouseleave',()=>{
  document.querySelector("#slidephoto").style.display = "none"
  document.querySelector("#slidephoto").style.opacity="0"
});

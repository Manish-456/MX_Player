// let musicTop=document.getElementById('Music_top')

let title = document.getElementById('title');
let back = document.getElementById('back');
 
const play1  = document.getElementById('play')
const forwards = document.getElementById('forward');

let music= document.getElementById('music');
let img=document.getElementById('image')

let img1=document.querySelector('img')

let track= document.getElementById('track');
let songs= [
 {
   name:"flying jatt",
   Artist:'Sachin Jigar, Mansheel',
   image:'Musical',
 },
 {
    name : 'Main ki karaan',
Artist:'Sonu Nigam',
image:'mike',
 
 
 },
 {
  name:"beat pe booti",
  Artist:'Sachin, jigar, vayu & kanika k',
  image:'audio',
 },
]

let isPlaying=false;

let playMusic= ()=>{
 isPlaying=true;
 music.play();
 document.getElementById('play').classList.replace('fa-play-circle', 'fa-pause');
document.getElementById('image').classList.add("anime");



 
 
};
let pauseMusic=()=>{
 isPlaying=false;
 music.pause();
 document.getElementById('play').classList.replace('fa-pause', 'fa-play-circle');
document.getElementById('image').classList.remove("anime");



 
 
};
play1.addEventListener('click', ()=>{
 isPlaying?  pauseMusic() : playMusic();
})


const addSongs = (songs)=>{
title.innerText= songs.name;
track.innerText= songs.Artist;
music.src="media/"+ songs.name +".mp3";
img1.src= 'media/'+ songs.image + '.jpg';

}
 nextSongs=0;
forwards.addEventListener('click', () =>{
 nextSongs=(nextSongs + 1)% songs.length
addSongs(songs[nextSongs]);
playMusic();
});


back.addEventListener('click', () =>{
 nextSongs=(nextSongs + 1)% songs.length
addSongs(songs[nextSongs]);
playMusic();
});





 


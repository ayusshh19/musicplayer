console.log("ayush ji");

let obj = [
    {
        id: 1,
        song: "Ranjha",
        songby: "Song by Sunidhi Chauhan",
        img: "download2.jpeg",
        mp3: "Ranjha Shershaah Original Motion Picturetrack 2021 320.mp3",
    },
    {
        id: 2,
        song: "Mann mera",
        songby: "Song by Sunidhi Chauhan",
        img: "download3.jpeg",
        mp3: "Mann Mera Table No 21 2013 128.mp3",
    },
    
    {
        id: 4,
        song: "halka halka",
        songby: "Song by Sunidhi Chauhan",
        img: "download5.jpeg",
        mp3: "Halka Halka Fanney Khan 2018 128.mp3",
    },
    {
        id: 5,
        song: "Kaise hua",
        songby: "Song by Sunidhi Chauhan",
        img: "download6.jpeg",
        mp3: "Kaise Hua Kabir Singh 2019 128.mp3",
    },
    {
        id: 6,
        song: "Tu aake dekhle",
        songby: "Song by Sunidhi Chauhan",
        img: "download7.jpeg",
        mp3: "Tu Aake Dekhle The Carnival 2020 128.mp3",
    },
    {
        id: 7,
        song: "Tera Ban Jaunga",
        songby: "Song by Sunidhi Chauhan",
        img: "download8.jpeg",
        mp3: "Tera Ban Jaunga Kabir Singh 2019 128.mp3",
    },
    {
        id: 8,
        song: "Mere Sohneya Kabir Singh ",
        songby: "Song by Sunidhi Chauhan",
        img: "download9.jpeg",
        mp3: "Mere Sohneya Kabir Singh 2019 128.mp3",
    },
    {
        id: 9,
        song: "Tujhe Kitna Chahne Lage Kabir Singh",
        songby: "Song by Sunidhi Chauhan",
        img: "download10.jpeg",
        mp3: "Tujhe Kitna Chahne Lage Kabir Singh 2019 128.mp3",
    },
    {
        id: 10,
        song: "Kabira",
        songby: "Song by Sunidhi Chauhan",
        img: "download11.jpg",
        mp3: "Kabira Yeh Jawaani Hai Deewani 2013 128.mp3",
    },
    {
        id: 11,
        song: "kuh faya",
        songby: "Song by Sunidhi Chauhan",
        img: "download12.jpg",
        mp3: "Kun Faaya Kun Rockstar 2012 128.mp3",
    },
    {
        id: 12,
        song: "Humsafar",
        songby: "Song by Janhavi chaudhari",
        img: "download12.jpeg",
        mp3: "WhatsApp Audio 2022-07-07 at 9.02.02 PM.mpeg",
    }
];
for (const item of obj) {
    let newele = document.createElement("div");
    newele.innerHTML = `<img src="styles/images/${item.img}" class="col-4 songlogo" alt="" srcset="">
        <div class="col-6">
            <h5 >${item.song}</h5>
        <h6>${item.songby}
        </h6>
        </div>
        <img src="styles/images/play.png" class="col-2 play" alt="" srcset="">`;
    newele.classList.add("row");
    newele.classList.add("songs");
    let existadd = document.querySelector(".musicsongs");
    existadd.append(newele);
}
let item1;
let allbu = document.querySelectorAll(".play");
allbu.forEach((button) => {
    button.addEventListener("click", (e) => {
        let ele = document.querySelector(".image");
        let title = document.querySelector(".title");
        title.innerHTML = e.target.parentNode.children[1].outerText;
        var myAudio = new Audio();
        for (item of obj) {
            let len = item.song.length;
            if (
                item.song == e.target.parentNode.children[1].outerText.slice(0, len)
            ) {
                var myAudio = new Audio(`styles/mp3/${item.mp3}`);
                myAudio.onloadeddata = () => {
                    let end = document.querySelector(".endingtime");
                    let time = Math.floor(myAudio.duration);
                    end.innerHTML = Math.floor(time / 60) + ":" + (time % 60);
                    console.log(myAudio.duration);
                    myAudio.play();

                    let current = document.querySelector('.current')
                    let range = document.querySelector("#range");
                    range.addEventListener('change', (e) => {
                        console.log(e)
                    })
                    range.value = 0
                    let time1 = myAudio.duration / 100
                    let id1 = setInterval(() => {

                        range.value = +range.value + 1;
                        console.log(range.value)
                    }, time1 * 1000);
                    let id2 = setInterval(() => {
                        let time2 = Math.floor(myAudio.currentTime)
                        current.innerHTML = Math.floor(time2 / 60) + ":" + (time2 % 60)
                    }, 1000)


                    function procheck() {
                        let pause = document.querySelector(".pause");
                        pause.addEventListener("click", () => {
                            myAudio.pause();
                            pause.innerHTML = `<img src="styles/images/play.png" alt="" srcset="">`
                            pause.classList.add('play')
                            pause.classList.remove('pause')
                            clearInterval(id1)
                            clearInterval(id2)
                        });
                        return new Promise((resolve, reject) => {
                            if (true) {
                                resolve()
                            }
                            else {
                                reject()
                            }
                        })
                    }
                    procheck().then(() => {
                        console.log('ayyush')
                        let playsong = document.querySelector(".play");
                        playsong.addEventListener("click", () => {
                            myAudio.play();
                            console.log('ayush')
                            playsong.innerHTML = `<img src="styles/images/pause.png" alt="" srcset="">`
                            pause.classList.remove('play')
                            pause.classList.add('pause')
                        })

                    });
                };
            }
        }
        document.querySelector(".mainplayer .row").style.display = "flex";
        ele.setAttribute(
            "src",
            e.target.parentNode.children[0].getAttribute("src")
        );
    });
});

// console.log(item1)
// function play() {
//     return new Promise((resolve,reject)=>{
//         if(item){
//             resolve('got it!')
//         }
//         else{
//             reject('not yet')
//         }
//     })
// }
// play().then(()=>{

// }).catch((value)=>{
//     throw new Error(value)
// })





let night=document.querySelector('.nightmode')
let night1=document.querySelector('.mainul')
let night2=document.querySelector('.playlist')
let night3=document.querySelector('.mainplayer')
let night4=document.querySelector('.pause')
let night5=document.querySelector('.play')
let s=document.querySelector('.songs')

function dark() {
    night.addEventListener('click',()=>{
        night.setAttribute('src','styles/images/moon.png')
        night1.style.backgroundColor='rgb(0,0,0,0.4)'
        night2.style.backgroundColor='rgb(0,0,0,0.4)'
        night3.style.backgroundColor='rgb(0,0,0,0.4)'
        night4.style.backgroundColor='rgb(0,0,0,0.4)'
        night5.style.backgroundColor='rgb(0,0,0,0.4)'
        s.style.backgroundColor='rgb(0,0,0,0.4)'
        night.classList.add('day')
        night.classList.remove('nightmode')
        Promise.resolve().then(()=>{
            light()
          
        })})
}
    
function light(){
    let day=document.querySelector('.day')
        day.addEventListener('click',()=>{
            night.setAttribute('src','styles/images/night.png')
            night1.style.backgroundColor='rgb(255,255,255,0.4)'
            night2.style.backgroundColor='rgb(255,255,255,0.4)'
            night3.style.backgroundColor='rgb(255,255,255,0.4)'
            night4.style.backgroundColor='rgb(255,255,255,0.4)'
            night5.style.backgroundColor='rgb(255,255,255,0.4)'
            s.style.backgroundColor='rgb(255,255,255,0.4)'
            night.classList.add('nightmode')
            night.classList.remove('day')
            dark()
        })
}
dark()

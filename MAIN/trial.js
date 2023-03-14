let happy = ["songs\\happy\\ban ja rani.mp3", "songs\\happy\\Garmi.mp3", "songs\\happy\\ik vari aa.mp3", "songs\\happy\\Jeda Nasha.mp3", "songs\\happy\\Muqabla.mp3", "songs\\happy\\o sathi.mp3", "songs\\happy\\rabta.mp3", "songs\\happy\\suit suit.mp3"]

let sad = ["songs\\Banduk meri laila.mp3", "songs\\mercy.mp3", "songs\\musafir.mp3"]

let angry = ["songs\\angry\\Bulleya.mp3", "songs\\angry\\Dua Karo.mp3"]

let allSongs = [...angry, ...happy, ...sad]

let curr_song = [];


let New;
let icon = document.getElementById('icon');

function random_play() {
    if (curr_song[0] != null) {
        curr_song[0].pause();
        document.getElementById('musicgif').style.display='none';
        curr_song.pop();
        New = new Audio(allSongs[Math.ceil(Math.random() * (allSongs.length))])
        New.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
        curr_song.push(New);
        document.getElementById('musicgif').style.display='block';

    }
    else {
        New = new Audio(allSongs[Math.ceil(Math.random() * (allSongs.length))])
        New.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
        curr_song.push(New);
        document.getElementById('musicgif').style.display='block';

    }
}

function playstop() {
    let first_ele = curr_song[0];
    if (icon.classList.contains('fa-pause')) {
        first_ele.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        document.getElementById('musicgif').style.display='none';
    }
    else {
        first_ele.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
        document.getElementById('musicgif').style.display='block';
    }

}



function emotionplay() {
    alert("Stay still against the camera!!")
    let mood = getmood().then(function (e) {
        console.log(e);
        document.getElementsByClassName('mood')[0].innerHTML = "You look " + e + " !";
        if (e == "happy") {
            if (curr_song[0] != null) {
                curr_song[0].pause();
                document.getElementById('musicgif').style.display='none';
                curr_song.pop();
                const New = new Audio(happy[Math.ceil(Math.random() * 8)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                curr_song.push(New);
                document.getElementById('musicgif').style.display='block';
            }
            else{
                const New = new Audio(happy[Math.ceil(Math.random() * 8)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                curr_song.push(New);
                document.getElementById('musicgif').style.display='block';

            }
        }
        else if (e == "sad") {
            if (curr_song[0] != null) {
                curr_song[0].pause();
                curr_song.pop();
                document.getElementById('musicgif').style.display='none';
                const New = new Audio(sad[Math.ceil(Math.random() * 3)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                curr_song.push(New);
                document.getElementById('musicgif').style.display='block';

            }
            else{
                const New = new Audio(sad[Math.ceil(Math.random() * 3)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                document.getElementById('musicgif').style.display='block';

                curr_song.push(New);
            }
        }
        else if (e == "angry") {
            if (curr_song[0] != null) {
                curr_song[0].pause();
                curr_song.pop();
                document.getElementById('musicgif').style.display='none';
                const New = new Audio(angry[Math.ceil(Math.random() * 2)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                curr_song.push(New);
                document.getElementById('musicgif').style.display='block';
            }
            else{
                const New = new Audio(angry[Math.ceil(Math.random() * 2)])
                New.play();
                icon.classList.add("fa-pause");
                icon.classList.remove("fa-play");
                curr_song.push(New);
                document.getElementById('musicgif').style.display='block';

            }
            
        }
    }
    );
}

async function getmood() {
    let mood = await eel.getEmotion()();
    return mood;
}
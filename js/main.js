console.log("oh shit, here we go again")

const   gameBoard = document.querySelector('.icon_board'),
        puzzlePieces = document.querySelectorAll('.icon img'),
        dropZones = document.querySelectorAll('.drop_zone'),
         //audioSample = document.querySelector('.audio_samples'),
        zonePieces = document.querySelector('.icon');
       
let audioSample = document.createElement("audio");



// should play the audio, it remains to be seen if I can actually get it to work D:

const   audioArray = ["Bell2.mp3", "Cinematic1.mp3", "Harp1.mp3", "Morse.mp3", "Percussion01.wav", "Percussion02.wav", "Sample_Synth_03.mp3", "Tech01.wav"];
let     audioPlaying = 0

//function playAudio (ref)
  //  {
    //    audioSample.src = "./tracks/" +  audioArray[ref];
    //    audioSample.load();
    //    audioSample.play();
    //}
// -----------------------------------------------------------
// -----------------------------------------------------------


// allows icons to be dragged around

function allowDrag(event)
    {
        console.log('started dragging - ', event.target.id);
        event.dataTransfer.setData("draggedImg", this.id);
    }
// -----------------------------------------------------------
// -----------------------------------------------------------



// allows dropzone to activate when dragged over

function allowDragOver(event)
    {
        event.preventDefault();
        console.log('dragging over me');
    }
// -----------------------------------------------------------
// -----------------------------------------------------------


// allows icons to be dropped in the dropzone

function allowDrop(event)
    {
        if (this.children.length >= 1)
        {
            return;
        }

        console.log('dropped an image');
        let droppedImage = event.dataTransfer.getData("draggedImg");
        event.target.appendChild(document.querySelector(`#${droppedImage}`));
        let n = droppedImage.slice(-1);
        console.log(n);
        --n;
        console.log(n);
        console.log(audioArray[n]);

        let audioSample = document.createElement("audio");
        if (event.target.querySelector(`#${droppedImage}`).children.length < 1) {
            event.target.querySelector(`#${droppedImage}`).appendChild(audioSample);
            audioSample.src = `tracks/${audioArray[n]}`;

            audioSample.play();
            audioSample.loop = true;
        }
    }
// -----------------------------------------------------------
// -----------------------------------------------------------


puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone =>
    {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
       // zone.addEventListener('drop', playAudio);
    });
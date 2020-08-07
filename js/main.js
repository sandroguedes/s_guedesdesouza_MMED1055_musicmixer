console.log("oh shit, here we go again")

const   gameBoard = document.querySelector('.icon_board'),
        puzzlePieces = document.querySelectorAll('.icon img'),
        dropZones = document.querySelectorAll('.drop_zone'),
        zonePieces = document.querySelector('.icon')

function allowDrag(event)
    {
        console.log('started dragging - ', event.target.id);
        event.dataTransfer.setData("draggedImg", this.id);
    }

function allowDragOver(event)
    {
        event.preventDefault();
        console.log('dragging over me');
    }

function allowDrop(event)
    {
        if (this.children.length >= 1)
        {
            return;
        }

        console.log('dropped an image');
        let droppedImage = event.dataTransfer.getData("draggedImg");
        event.target.appendChild(document.querySelector(`#${droppedImage}`));
    }

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone =>
    {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    });


const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping();
    console.log(response); // prints out 'pong'
}

func()

document.getElementById('drag1').ondragstart = (event) => {
    event.preventDefault()
    window.electron.startDrag('drag-and-drop-1.md')
}
  
document.getElementById('drag2').ondragstart = (event) => {
    event.preventDefault()
    window.electron.startDrag('drag-and-drop-2.md')
}
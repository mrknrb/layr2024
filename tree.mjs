import madge from 'madge'

madge('../my-app/src/LayrUIMain.jsx').then((res) => {
    console.log(res.obj())
})

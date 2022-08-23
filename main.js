const { app, BrowserWindow } = require('electron')
// const PubSub = require('pubsub-js');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 705,
    minHeight: 400,
    minWidth: 640,
    titleBarStyle: 'customButtonsOnHover' ,
    title: "Electron Paint",
    // frame: false
    
  }) 
   
  // win.PubSub = PubSub;

  // win.on('resize', (e) => {
  //   PubSub.publish('MY TOPIC', e);
  // });

  win.loadFile('index.html'); 

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => { 
    if (BrowserWindow.getAllWindows().length === 0) 
      createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


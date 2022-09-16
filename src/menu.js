const { app, shell, BrowserWindow } = require("electron")

exports.menuItemsTemplate = [
  {
    "label": "Window",
    submenu: [
      { 
        role: "minimize"
      },
      { 
        type: "separator" 
      },
      { 
        role: "close",
        // click: () => app.quit()        
      }
    ]
  },
  {
    "label": "About",
    submenu: [
      {
        "label": "Learn More",
        click: async () => {
          await shell.openExternal('https://www.electronjs.org/docs/latest')          
        } 
      },
    ]
  },
  {
    "label": "Open",
    submenu: [
      {
        "label": "New Window",
        click: async () => {
          const window2 = new BrowserWindow({
            autoHideMenuBar: true,
            width: 500,
            height: 200,
            backgroundColor: "#0757d9",
          })
          window2.loadFile('secondWindow.html') 

          window2.once("ready-to-show", () => window2.show())
        }
      },
      {
        "label": "Camera",
        click: async () => {
          const window3 = new BrowserWindow({
            autoHideMenuBar: true,
            width: 500,
            height: 400,
          })
          // window3.webContents.openDevTools()
          window3.loadFile('camera.html') 
          window3.once("ready-to-show", () => window3.show())
        }
      }
    ]
  }
]

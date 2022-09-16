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
    "label": "File",
    submenu: [
      {
        "label": "New Window",
        click: async () => {
          const win = new BrowserWindow({
            width: 500,
            height: 200
          })
          win.loadFile('secondWindow.html') 
        }
      }
    ]
  }
]

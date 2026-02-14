# Video Picture-in-Picture Pro 📺

A professional Chrome extension that enables Picture-in-Picture mode for any video on the web, allowing you to watch videos while working.

**Created by:** hicham Dev  
**Contact:** hichamboudouch434@gmail.com  
**Repository:** https://github.com/Hicham-in-tech/youtube-extontion-watch-work

## 🌟 Features

- **One-Click PiP**: Activate Picture-in-Picture mode instantly
- **Keyboard Shortcut**: Press `Alt + P` to toggle PiP on any page
- **Smart Video Detection**: Automatically finds and selects the best video on the page
- **Beautiful UI**: Modern, gradient design with smooth animations
- **Works Everywhere**: Compatible with YouTube, Netflix, Vimeo, and any website with video content

## 📦 Installation

### Method 1: Load Unpacked Extension (for testing)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the extension folder
5. The extension icon should appear in your toolbar

### Method 2: Create Icons

You need to create icon images for the extension. Here's how:

1. Create an `icons` folder in the extension directory
2. Create PNG images with these sizes:
   - icon16.png (16x16 pixels)
   - icon32.png (32x32 pixels)
   - icon48.png (48x48 pixels)
   - icon128.png (128x128 pixels)

**Icon Design Suggestion**: Use a simple icon showing a rectangle with a smaller rectangle in the corner (representing Picture-in-Picture mode).

You can use free tools like:
- [Canva](https://www.canva.com/)
- [Figma](https://www.figma.com/)
- [GIMP](https://www.gimp.org/)

Or use the provided SVG in the popup as reference.

## 🎯 How to Use

### Using the Extension Popup:
1. Navigate to any webpage with a video
2. Click the extension icon in your toolbar
3. Click the "Enable PiP" button
4. The video will pop out into a floating window

### Using Keyboard Shortcut:
1. Navigate to any webpage with a video
2. Press `Alt + P` on your keyboard
3. The video will instantly enter Picture-in-Picture mode

### Exiting PiP:
- Press `Alt + P` again
- Or click the X button on the floating video window
- Or click the PiP button in the original video player

## 🎨 Customization

You can customize the extension by editing:
- **styles.css**: Change colors, fonts, and layout
- **popup.html**: Modify the UI structure
- **manifest.json**: Update extension name, description, or permissions

## 🛠️ Technical Details

- **Manifest Version**: 3
- **Permissions**: activeTab, scripting
- **Compatible With**: All Chromium-based browsers (Chrome, Edge, Brave, etc.)

## 📱 Supported Websites

- ✅ YouTube
- ✅ Netflix
- ✅ Vimeo
- ✅ Twitch
- ✅ Any website with HTML5 video

## 🐛 Troubleshooting

**Problem**: Extension icon doesn't appear
- Solution: Make sure Developer Mode is enabled and the extension is loaded

**Problem**: PiP doesn't work on a specific site
- Solution: Some DRM-protected content may not support PiP

**Problem**: No video found message
- Solution: Ensure the video is loaded and playing on the page

## 📄 License

Free to use and modify for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

Suggestions for improvements:
- Add support for multiple simultaneous PiP windows
- Create settings page for customization
- Add video controls in the popup
- Implement automatic PiP when switching tabs

## 👨‍💻 Author

**hicham Dev**
- Email: hichamboudouch434@gmail.com
- GitHub: [@Hicham-in-tech](https://github.com/Hicham-in-tech)

---

**Enjoy watching videos while being productive! 🚀**

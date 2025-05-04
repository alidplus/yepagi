import './App.css';
import '@lynx-js/web-core/index.css';
import '@lynx-js/web-elements/index.css';
import '@lynx-js/web-core';
import '@lynx-js/web-elements/all';


const App = () => {
  return (
    <lynx-view
      style={fullscreenStyle}
      url="/main.web.bundle"
    />
  );
};

const fullscreenStyle = { height: '100vh', width: '100vw' }

export default App;
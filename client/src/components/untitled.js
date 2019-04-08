    // switch(display) {
    //   case 'MS' :
    //     return (
    //       <div>MS<div/>
    //       )
    //   case 'YS' :
    //     return (
    //       <div>YS<div/>
    //       )
    //   case 'LM' :
    //     return (
    //       <div>LM<div/>
    //       )
    //   case 'WM' :
    //     return (
    //       <div>WM<div/>
    //       )
    //   default :
    //     return (
    //       <div>Default<div/>
    //       )
    // }

        <div className="junk">
          <p>Welcome to Google Finance!</p>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-2" alt="logo2" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-2" alt="logo2" />
          <AudioPlayer autoPlay src={song} onPlay={e => console.log("onPlay")}  />
      </div>

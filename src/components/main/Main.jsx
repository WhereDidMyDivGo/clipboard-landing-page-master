import "./main.css";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="text-field-1">
          <h1 className="e">Keep track of your snippets</h1>
          <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>

        <div className="field-1">
          <img src="src/assets/images/image-computer.png" />
          <div className="div1">
            <h1>Quick Search</h1>
            <p>Easily search your snippets by content, category, web address, application, and more.</p>
          </div>
          <div className="div2">
            <h1>iCloud Sync</h1>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className="div3">
            <h1>Complete History</h1>
            <p>Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

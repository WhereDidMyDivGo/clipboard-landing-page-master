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
          <div className="text-field-2">
            <div>
              <h1>Quick Search</h1>
              <p>Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            <div>
              <h1>iCloud Sync</h1>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <h1>Complete History</h1>
              <p>Retrieve any snippets from the first moment you started using the app.</p>
            </div>
          </div>
        </div>

        <div className="text-field-3">
          <h1>Access Clipboard anywhere</h1>
          <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        </div>

        <img src="src/assets/images/image-devices.png" className="devices-img" />

        <div className="text-field-4">
          <h1>Supercharge your workflow</h1>
          <p>We’ve got the tools to boost your productivity.</p>
        </div>

        <div className="field-2">
          <div>
            <img src="src/assets/images/icon-preview.svg" />
            <div>
              <h1>Create blacklists</h1>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
          </div>

          <div>
            <img src="src/assets/images/icon-text.svg" />

            <div>
              <h1>Plain text snippets</h1>
              <p>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
          </div>

          <div>
            <img src="src/assets/images/icon-blacklist.svg" />
            <div>
              <h1>Sneak preview</h1>
              <p>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </div>

        <div className="companies-field">
          <img src="src/assets/images/logo-google.png" />
          <img src="src/assets/images/logo-ibm.png" />
          <img src="src/assets/images/logo-microsoft.png" />
          <img src="src/assets/images/logo-hp.png" />
          <img src="src/assets/images/logo-vector-graphics.png" />
        </div>

        <div className="text-field-5">
          <h1>Clipboard for iOS and Mac OS</h1>
          <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
        </div>
      </div>
    </>
  );
}

export default Main;

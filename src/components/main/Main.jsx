import "./main.css";

//////////////// images ////////////////
import imageComputer from "../../assets/images/image-computer.png";
import imageDevices from "../../assets/images/image-devices.png";
import iconPreview from "../../assets/images/icon-preview.svg";
import iconText from "../../assets/images/icon-text.svg";
import iconBlacklist from "../../assets/images/icon-blacklist.svg";
import logoGoogle from "../../assets/images/logo-google.png";
import logoIbm from "../../assets/images/logo-ibm.png";
import logoMicrosoft from "../../assets/images/logo-microsoft.png";
import logoHp from "../../assets/images/logo-hp.png";
import logoVectorGraphics from "../../assets/images/logo-vector-graphics.png";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="text-field-1">
          <h1 className="e">Keep track of your snippets</h1>
          <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>

        <div className="field-1">
          <img src={imageComputer} />
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

        <img src={imageDevices} className="devices-img" />

        <div className="text-field-4">
          <h1>Supercharge your workflow</h1>
          <p>We’ve got the tools to boost your productivity.</p>
        </div>

        <div className="field-2">
          <div>
            <img src={iconPreview} />
            <div>
              <h1>Create blacklists</h1>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
          </div>

          <div>
            <img src={iconText} />

            <div>
              <h1>Plain text snippets</h1>
              <p>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
          </div>

          <div>
            <img src={iconBlacklist} />
            <div>
              <h1>Sneak preview</h1>
              <p>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </div>

        <div className="companies-field">
          <img src={logoGoogle} />
          <img src={logoIbm} />
          <img src={logoMicrosoft} />
          <img src={logoHp} />
          <img src={logoVectorGraphics} />
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

import crdLogo from './crdLogo.png';
import ramLogo from './ramLogo.png';
import seaLogo from './seaLogo.png';
import sfoLogo from './sfoLogo.png';


function sfoButton() {
  window.location.replace("/sfo");
}
function crdButton() {
  window.location.replace("/crd");
}
function ramButton() {
  window.location.replace("/ram");
}
function seaButton() {
  window.location.replace("/sea");
}

function NFCWest() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>WEST</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={sfoButton}>
              <img className="logos" src={sfoLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={crdButton}>
              <img className="logos" src={crdLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={ramButton}>
              <img className="logos" src={ramLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={seaButton}>
              <img className="logos" src={seaLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default NFCWest;

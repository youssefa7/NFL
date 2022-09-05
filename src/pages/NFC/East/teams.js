import dalLogo from './dalLogo.png';
import nygLogo from './nygLogo.png';
import phiLogo from './phiLogo.png';
import wasLogo from './wasLogo.png';


function dalButton() {
  window.location.replace("/dal");
}
function nygButton() {
  window.location.replace("/nyg");
}
function phiButton() {
  window.location.replace("/phi");
}
function wasButton() {
  window.location.replace("/was");
}

function NFCEast() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>EAST</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={dalButton}>
              <img className="logos" src={dalLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={nygButton}>
              <img className="logos" src={nygLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={phiButton}>
              <img className="logos" src={phiLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={wasButton}>
              <img className="logos" src={wasLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default NFCEast;

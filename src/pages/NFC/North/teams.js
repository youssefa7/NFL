import chiLogo from './chiLogo.png';
import detLogo from './detLogo.png';
import gnbLogo from './gnbLogo.png';
import minLogo from './minLogo.png';

function chiButton() {
  window.location.replace("/chi");
}
function gnbButton() {
  window.location.replace("/gnb");
}
function detButton() {
  window.location.replace("/det");
}
function minButton() {
  window.location.replace("/min");
}

function NFCNorth() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>NORTH</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={chiButton}>
              <img className="logos" src={chiLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={gnbButton}>
              <img className="logos" src={gnbLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={detButton}>
              <img className="logos" src={detLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={minButton}>
              <img className="logos" src={minLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default NFCNorth;

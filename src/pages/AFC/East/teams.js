import bufLogo from './bufLogo.png';
import nweLogo from './nweLogo.png';
import nyjLogo from './nyjLogo.png';
import miaLogo from './miaLogo.png';


function bufButton() {
  window.location.replace("/buf");
}
function nweButton() {
  window.location.replace("/nwe");
}
function nyjButton() {
  window.location.replace("/nyj");
}
function miaButton() {
  window.location.replace("/mia");
}

function AFCEast() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>EAST</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={bufButton}>
              <img className="logos" src={bufLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={nweButton}>
              <img className="logos" src={nweLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={nyjButton}>
              <img className="logos" src={nyjLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={miaButton}>
              <img className="logos" src={miaLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AFCEast;

import atlLogo from './atlLogo.png';
import carLogo from './carLogo.png';
import tamLogo from './tamLogo.png';
import norLogo from './norLogo.png';


function atlButton() {
  window.location.replace("/atl");
}
function carButton() {
  window.location.replace("/car");
}
function tamButton() {
  window.location.replace("/tam");
}
function norButton() {
  window.location.replace("/nor");
}

function NFCSouth() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>SOUTH</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={atlButton}>
              <img className="logos" src={atlLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={carButton}>
              <img className="logos" src={carLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={tamButton}>
              <img className="logos" src={tamLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={norButton}>
              <img className="logos" src={norLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default NFCSouth;

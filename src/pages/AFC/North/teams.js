import cleLogo from './cleLogo.png';
import ravLogo from './ravLogo.png';
import pitLogo from './pitLogo.png';
import cinLogo from './cinLogo.png';


function cleButton() {
  window.location.replace("/cle");
}
function ravButton() {
  window.location.replace("/rav");
}
function pitButton() {
  window.location.replace("/pit");
}
function cinButton() {
  window.location.replace("/cin");
}

function AFCNorth() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>NORTH</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={cleButton}>
              <img className="logos" src={cleLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={ravButton}>
              <img className="logos" src={ravLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={pitButton}>
              <img className="logos" src={pitLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={cinButton}>
              <img className="logos" src={cinLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AFCNorth;

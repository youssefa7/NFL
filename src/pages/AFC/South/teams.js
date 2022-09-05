import cltLogo from './cltLogo.png';
import htxLogo from './htxLogo.png';
import otiLogo from './otiLogo.png';
import jaxLogo from './jaxLogo.png';


function htxButton() {
  window.location.replace("/htx");
}
function cltButton() {
  window.location.replace("/clt");
}
function otiButton() {
  window.location.replace("/oti");
}
function jaxButton() {
  window.location.replace("/jax");
}

function AFCSouth() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>SOUTH</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={htxButton}>
              <img className="logos" src={htxLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={cltButton}>
              <img className="logos" src={cltLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={otiButton}>
              <img className="logos" src={otiLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={jaxButton}>
              <img className="logos" src={jaxLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AFCSouth;

import raiLogo from './raiLogo.png';
import denLogo from './denLogo.png';
import kanLogo from './kanLogo.png';
import sdgLogo from './sdgLogo.png';



function raiButton() {
  window.location.replace("/rai");
}
function denButton() {
  window.location.replace("/den");
}
function kanButton() {
  window.location.replace("/kan");
}
function sdgButton() {
  window.location.replace("/sdg");
}

function AFCWest() {
  return (
    <div>
    <table id="customers">
      <tbody>
        <tr>
          <th>WEST</th>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={raiButton}>
              <img className="logos" src={raiLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={denButton}>
              <img className="logos" src={denLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button" onClick={kanButton}>
              <img className="logos" src={kanLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>
             <button className="button" onClick={sdgButton}>
              <img className="logos" src={sdgLogo} alt="logo" width="87" height="87"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AFCWest;

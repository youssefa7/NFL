import './HomePage.css';

import NFCNorth from './pages/NFC/North/teams';
import NFCSouth from './pages/NFC/South/teams';
import NFCEast from './pages/NFC/East/teams';
import NFCWest from './pages/NFC/West/teams';

import AFCNorth from './pages/AFC/North/teams';
import AFCSouth from './pages/AFC/South/teams';
import AFCEast from './pages/AFC/East/teams';
import AFCWest from './pages/AFC/West/teams';


function HomePage() {
  return (
    <div>
      <table id="conf">
        <tbody>
          <tr>
            <td>
              <table className="confTable">
                <tbody>
                  <tr>
                    <th colSpan="4">NFC</th>
                  </tr>
                  <tr>
                    <td> <NFCNorth/> </td>
                    <td> <NFCSouth/> </td>
                    <td> <NFCEast/> </td>
                    <td> <NFCWest/> </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="confTable">
                <tbody>
                  <tr>
                    <th colSpan="4">AFC</th>
                  </tr>
                  <tr>
                    <td> <AFCNorth/> </td>
                    <td> <AFCSouth/> </td>
                    <td> <AFCEast/> </td>
                    <td> <AFCWest/> </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 id="Footer">
        All right reserved ... Some other important legal documentation can be found at the link below. <br></br>
        <div id="link">
          link.site.0rg
        </div>
      </h4>
    </div>

  );
}

export default HomePage;

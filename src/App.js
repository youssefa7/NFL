import './App.css';

import HomePage from "./HomePage";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";

//NFC North
import ChiPage from "./pages/NFC/North/chiPage"
import GnbPage from "./pages/NFC/North/gnbPage"
import DetPage from "./pages/NFC/North/detPage"
import MinPage from "./pages/NFC/North/minPage"
//NFC South
import AtlPage from "./pages/NFC/South/atlPage"
import CarPage from "./pages/NFC/South/carPage"
import NorPage from "./pages/NFC/South/norPage"
import TamPage from "./pages/NFC/South/tamPage"
//NFC East
import DalPage from "./pages/NFC/East/dalPage"
import NygPage from "./pages/NFC/East/nygPage"
import PhiPage from "./pages/NFC/East/phiPage"
import WasPage from "./pages/NFC/East/wasPage"
//NFC West
import CrdPage from "./pages/NFC/West/crdPage"
import RamPage from "./pages/NFC/West/ramPage"
import SeaPage from "./pages/NFC/West/seaPage"
import SfoPage from "./pages/NFC/West/sfoPage"

//AFC North
import CinPage from "./pages/AFC/North/cinPage"
import ClePage from "./pages/AFC/North/clePage"
import PitPage from "./pages/AFC/North/pitPage"
import RavPage from "./pages/AFC/North/ravPage"
//AFC South
import HtxPage from "./pages/AFC/South/htxPage"
import CltPage from "./pages/AFC/South/cltPage"
import OtiPage from "./pages/AFC/South/otiPage"
import JaxPage from "./pages/AFC/South/jaxPage"
//AFC East
import BufPage from "./pages/AFC/East/bufPage"
import NwePage from "./pages/AFC/East/nwePage"
import NyjPage from "./pages/AFC/East/nyjPage"
import MiaPage from "./pages/AFC/East/miaPage"
//AFC West
import RaiPage from "./pages/AFC/West/raiPage"
import DenPage from "./pages/AFC/West/denPage"
import KanPage from "./pages/AFC/West/kanPage"
import SdgPage from "./pages/AFC/West/sdgPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
  	<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          //NFC North
          <Route path="chi" element={<ChiPage />} />
          <Route path="gnb" element={<GnbPage />} />
          <Route path="det" element={<DetPage />} />
          <Route path="min" element={<MinPage />} />
          //NFC South
          <Route path="atl" element={<AtlPage />} />
          <Route path="car" element={<CarPage />} />
          <Route path="nor" element={<NorPage />} />
          <Route path="tam" element={<TamPage />} />
          //NFC East
          <Route path="dal" element={<DalPage />} />
          <Route path="phi" element={<PhiPage />} />
          <Route path="was" element={<WasPage />} />
          <Route path="nyg" element={<NygPage />} />
          //NFC West
          <Route path="crd" element={<CrdPage />} />
          <Route path="ram" element={<RamPage />} />
          <Route path="sea" element={<SeaPage />} />
          <Route path="sfo" element={<SfoPage />} />

          //AFC North
          <Route path="cin" element={<CinPage />} />
          <Route path="cle" element={<ClePage />} />
          <Route path="pit" element={<PitPage />} />
          <Route path="rav" element={<RavPage />} />
          //AFC South
          <Route path="htx" element={<HtxPage />} />
          <Route path="clt" element={<CltPage />} />
          <Route path="oti" element={<OtiPage />} />
          <Route path="jax" element={<JaxPage />} />
          //AFC East
          <Route path="buf" element={<BufPage />} />
          <Route path="nwe" element={<NwePage />} />
          <Route path="nyj" element={<NyjPage />} />
          <Route path="mia" element={<MiaPage />} />
          //AFC West
          <Route path="rai" element={<RaiPage />} />
          <Route path="den" element={<DenPage />} />
          <Route path="kan" element={<KanPage />} />
          <Route path="sdg" element={<SdgPage />} />

          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  	</>
  );
  }

export default App;

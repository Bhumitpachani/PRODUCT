import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from './router';
import Age from './alldata/age';
import Brahma from './alldata/brahma';
import Cartoon from './alldata/cartoon';
import Crush from './alldata/crush';
import Dia from './alldata/dia';
import Feel from './alldata/feel';
import Frien from './alldata/frien';
import Friends from './alldata/friends';
import Good from './alldata/good';
import Here from './alldata/here';
import Lity from './alldata/lity';
import Live from './alldata/live';
import Love from './alldata/love';
import Name from './alldata/name';
import Secret from './alldata/secret';
import Soulmate from './alldata/soulmate';
import Truelove from './alldata/truelove';
import You from './alldata/you';
import Frnd from './alldata/setdata/setfriend';
import Daia from './alldata/setdata/setdia';
import Somate from "./alldata/setdata/setsoulmate"
import Crushh from "./alldata/setdata/setcrushes"
import Syou from "./alldata/setdata/setyou"
import Sfr from "./alldata/setdata/setfriends"
import Slove from "./alldata/setdata/setlove"
import Sage from "./alldata/setdata/setage"
import Sfeel from "./alldata/setdata/setfeel"
import Stlove from "./alldata/setdata/settlove"
import Sgood from "./alldata/setdata/setgood"










function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="age" element={<Age />} />
          <Route path="brahma" element={<Brahma />} />
          <Route path="cartoon" element={<Cartoon />} />
          <Route path="crush" element={<Crush />} />
          <Route path="dia" element={<Dia />} />
          <Route path="feel" element={<Feel />} />
          <Route path="frien" element={<Frien />} />
          <Route path="friends" element={<Friends />} />
          <Route path="good" element={<Good />} />
          <Route path="here" element={<Here />} />
          <Route path="lity" element={<Lity />} />
          <Route path="live" element={<Live />} />
          <Route path="love" element={<Love />} />
          <Route path="name" element={<Name />} />
          <Route path="soulmate" element={<Soulmate />} />
          <Route path="truelove" element={<Truelove />} />
          <Route path="you" element={<You />} />
          <Route path="secret" element={<Secret />} />
          <Route path="frnd" element={<Frnd />} />
          <Route path="daisend" element={<Daia />} />
          <Route path="somate" element={<Somate />} />
          <Route path="crusheh" element={<Crushh />} />
          <Route path="syou" element={<Syou />} />
          <Route path="sfr" element={<Sfr />} />
          <Route path="slove" element={<Slove />} />
          <Route path="sage" element={<Sage />} />
          <Route path="stlove" element={<Stlove />} />
          <Route path="sgood" element={<Sgood />} />
          <Route path="sfeel" element={<Sfeel />} />











        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

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


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Genres from './pages/Genres';
import About from './pages/About';

import Action from './genre/Action';
import Adventure from './genre/Adventure';
import Animation from './genre/Animation';
import Biography from './genre/Biography';
import Comedy from './genre/Comedy';
import Crime from './genre/Crime';
import Drama from './genre/Drama';
import Family from './genre/Family';
import Fantasy from './genre/Fantasy';
import History from './genre/History';
import Horror from './genre/Horror';
import Musical from './genre/Musical';
import Romance from './genre/Romance';
import SciFi from './genre/SciFi';
import Short from './genre/Short';
import Sport from './genre/Sport';
import Thriller from './genre/Thriller';
import War from './genre/War';
import Western from './genre/Western';

import Layout from "./components/Layout"

import Drama1 from "./drama/Drama1"
import Drama2 from "./drama/Drama2"
import Drama3 from "./drama/Drama3"
import Drama4 from "./drama/Drama4"
import Drama5 from "./drama/Drama5"
import Drama6 from "./drama/Drama6"
import Drama7 from "./drama/Drama7"
import Drama8 from "./drama/Drama8"
import Drama9 from "./drama/Drama9"
import Drama10 from "./drama/Drama10"
import Drama11 from "./drama/Drama11"
import Drama12 from "./drama/Drama12"
import Drama13 from "./drama/Drama13"
import Drama14 from "./drama/Drama14"

import Action1 from "./action/Action1"
import Action2 from "./action/Action2"
import Action3 from "./action/Action3"
import Action4 from "./action/Action4"
import Action5 from "./action/Action5"
import Action6 from "./action/Action6"
import Action7 from "./action/Action7"
import Action8 from "./action/Action8"
import Action9 from "./action/Action9"
import Action10 from "./action/Action10"
import Action11 from "./action/Action11"
import Action12 from "./action/Action12"
import Action13 from "./action/Action13"
import Action14 from "./action/Action14"


import Adventure1 from "./adventure/Adventure1"
import Adventure2 from "./adventure/Adventure2"
import Adventure3 from "./adventure/Adventure3"
import Adventure4 from "./adventure/Adventure4"
import Adventure5 from "./adventure/Adventure5"
import Adventure6 from "./adventure/Adventure6"

import Animation1 from "./animation/Animation1"
import Animation2 from "./animation/Animation2"
import Animation3 from "./animation/Animation3"
import Animation4 from "./animation/Animation4"
import Animation5 from "./animation/Animation5"
import Animation6 from "./animation/Animation6"

import Biography1 from "./biography/Biography1"
import Biography2 from "./biography/Biography2"
import Biography3 from "./biography/Biography3"
import Biography4 from "./biography/Biography4"
import Biography5 from "./biography/Biography5"
import Biography6 from "./biography/Biography6"


import Comedy1 from "./comedy/Comedy1"
import Comedy2 from "./comedy/Comedy2"
import Comedy3 from "./comedy/Comedy3"
import Comedy4 from "./comedy/Comedy4"
import Comedy5 from "./comedy/Comedy5"
import Comedy6 from "./comedy/Comedy6"
import Comedy7 from "./comedy/Comedy7"
import Comedy8 from "./comedy/Comedy8"
import Comedy9 from "./comedy/Comedy9"
import Comedy10 from "./comedy/Comedy10"
import Comedy11 from "./comedy/Comedy11"
import Comedy12 from "./comedy/Comedy12"
import Comedy13 from "./comedy/Comedy13"
import Comedy14 from "./comedy/Comedy14"

import Crime1 from "./crime/Crime1"
import Crime2 from "./crime/Crime2"

import Family1 from "./family/Family1"
import Family2 from "./family/Family2"

import Fantasy1 from "./fantasy/Fantasy1"
import Fantasy2 from "./fantasy/Fantasy2"

import History1 from "./history/History1"
import History2 from "./history/History2"

import Horror1 from "./horror/Horror1"
import Horror2 from "./horror/Horror2"
import Horror3 from "./horror/Horror3"
import Horror4 from "./horror/Horror4"
import Horror5 from "./horror/Horror5"
import Horror6 from "./horror/Horror6"

import Musical1 from "./musical/Musical1"
import Musical2 from "./musical/Musical2"

import Romance1 from "./romance/Romance1"
import Romance2 from "./romance/Romance2"

import SciFi1 from "./scifi/SciFi1"
import SciFi2 from "./scifi/SciFi2"

import Short1 from "./short/Short1"

import Sport1 from "./sport/Sport1"
import Sport2 from "./sport/Sport2"

import Thriller1 from "./thriller/Thriller1"
import Thriller2 from "./thriller/Thriller2"

import War1 from "./war/War1"
import War2 from "./war/War2"

import Western1 from "./western/Western1"
import Western2 from "./western/Western2"


import Recommend1 from "./recommend/Recommend1"
import Recommend2 from "./recommend/Recommend2"
import Recommend3 from "./recommend/Recommend3"
import Recommend4 from "./recommend/Recommend4"
import Recommend5 from "./recommend/Recommend5"
import Recommend6 from "./recommend/Recommend6"
import Recommend7 from "./recommend/Recommend7"
import Recommend8 from "./recommend/Recommend8"
import Recommend9 from "./recommend/Recommend9"
import Recommend10 from "./recommend/Recommend10"
import Recommend11 from "./recommend/Recommend11"
import Recommend12 from "./recommend/Recommend12"
import Recommend13 from "./recommend/Recommend13"
import Recommend14 from "./recommend/Recommend14"
import Recommend15 from "./recommend/Recommend15"
import Recommend16 from "./recommend/Recommend16"
import Recommend17 from "./recommend/Recommend17"
import Recommend18 from "./recommend/Recommend18"
import Recommend19 from "./recommend/Recommend19"
import Recommend20 from "./recommend/Recommend20"
import Recommend21 from "./recommend/Recommend21"
import Recommend22 from "./recommend/Recommend22"
import Recommend23 from "./recommend/Recommend23"
import Recommend24 from "./recommend/Recommend24"
import Recommend25 from "./recommend/Recommend25"
import Recommend26 from "./recommend/Recommend26"
import Recommend27 from "./recommend/Recommend27"
import Recommend28 from "./recommend/Recommend28"
import Recommend29 from "./recommend/Recommend29"
import Recommend30 from "./recommend/Recommend30"
import Recommend31 from "./recommend/Recommend31"
import Recommend32 from "./recommend/Recommend32"
import Recommend33 from "./recommend/Recommend33"
import Recommend34 from "./recommend/Recommend34"
import Recommend35 from "./recommend/Recommend35"
import Recommend36 from "./recommend/Recommend36"
import Recommend37 from "./recommend/Recommend37"
import Recommend38 from "./recommend/Recommend38"
import Recommend39 from "./recommend/Recommend39"
import Recommend40 from "./recommend/Recommend40"
import Recommend41 from "./recommend/Recommend41"
import Recommend42 from "./recommend/Recommend42"
import Recommend43 from "./recommend/Recommend43"
import Recommend44 from "./recommend/Recommend44"
import Recommend45 from "./recommend/Recommend45"
import Recommend46 from "./recommend/Recommend46"
import Recommend47 from "./recommend/Recommend47"
import Recommend48 from "./recommend/Recommend48"
import Recommend49 from "./recommend/Recommend49"
import Recommend50 from "./recommend/Recommend50"
import Recommend51 from "./recommend/Recommend51"
import Recommend52 from "./recommend/Recommend52"
import Recommend53 from "./recommend/Recommend53"
import Recommend54 from "./recommend/Recommend54"
import Recommend55 from "./recommend/Recommend55"
import Recommend56 from "./recommend/Recommend56"
import Recommend57 from "./recommend/Recommend57"
import Recommend58 from "./recommend/Recommend58"
import Recommend59 from "./recommend/Recommend59"
import Recommend60 from "./recommend/Recommend60"
import Recommend61 from "./recommend/Recommend61"
import Recommend62 from "./recommend/Recommend62"
import Recommend63 from "./recommend/Recommend63"
import Recommend64 from "./recommend/Recommend64"
import Recommend65 from "./recommend/Recommend65"
import Recommend66 from "./recommend/Recommend66"
import Recommend67 from "./recommend/Recommend67"
import Recommend68 from "./recommend/Recommend68"
import Recommend69 from "./recommend/Recommend69"
import Recommend70 from "./recommend/Recommend70"
import Recommend71 from "./recommend/Recommend71"
import Recommend72 from "./recommend/Recommend72"
import Recommend73 from "./recommend/Recommend73"
import Recommend74 from "./recommend/Recommend74"
import Recommend75 from "./recommend/Recommend75"
import Recommend76 from "./recommend/Recommend76"
import Recommend77 from "./recommend/Recommend77"
import Recommend78 from "./recommend/Recommend78"
import Recommend79 from "./recommend/Recommend79"
import Recommend80 from "./recommend/Recommend80"
import Recommend81 from "./recommend/Recommend81"
import Recommend82 from "./recommend/Recommend82"
import Recommend83 from "./recommend/Recommend83"
import Recommend84 from "./recommend/Recommend84"
import Recommend85 from "./recommend/Recommend85"
import Recommend86 from "./recommend/Recommend86"
import Recommend87 from "./recommend/Recommend87"
import Recommend88 from "./recommend/Recommend88"
import Recommend89 from "./recommend/Recommend89"
import Recommend90 from "./recommend/Recommend90"
import Recommend91 from "./recommend/Recommend91"
import Recommend92 from "./recommend/Recommend92"
import Recommend93 from "./recommend/Recommend93"
import Recommend94 from "./recommend/Recommend94"
import Recommend95 from "./recommend/Recommend95"
import Recommend96 from "./recommend/Recommend96"
import Recommend97 from "./recommend/Recommend97"
import Recommend98 from "./recommend/Recommend98"
import Recommend99 from "./recommend/Recommend99"
import Recommend100 from "./recommend/Recommend100"
import Recommend101 from "./recommend/Recommend101"
import Recommend102 from "./recommend/Recommend102"
import Recommend103 from "./recommend/Recommend103"
import Recommend104 from "./recommend/Recommend104"
import Recommend105 from "./recommend/Recommend105"
import Recommend106 from "./recommend/Recommend106"
import Recommend107 from "./recommend/Recommend107"
import Recommend108 from "./recommend/Recommend108"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/action" element={<Action />} />
          <Route path="/genres/adventure" element={<Adventure />} />
          <Route path="/genres/animation" element={<Animation />} />
          <Route path="/genres/biography" element={<Biography />} />
          <Route path="/genres/comedy" element={<Comedy />} />
          <Route path="/genres/crime" element={<Crime />} />
          <Route path="/genres/drama" element={<Drama />} />
          <Route path="/genres/family" element={<Family />} />
          <Route path="/genres/fantasy" element={<Fantasy />} />
          <Route path="/genres/history" element={<History />} />
          <Route path="/genres/horror" element={<Horror />} />
          <Route path="/genres/musical" element={<Musical />} />
          <Route path="/genres/romance" element={<Romance />} />
          <Route path="/genres/scifi" element={<SciFi />} />
          <Route path="/genres/short" element={<Short />} />
          <Route path="/genres/sport" element={<Sport />} />
          <Route path="/genres/thriller" element={<Thriller />} />
          <Route path="/genres/war" element={<War />} />
          <Route path="/genres/western" element={<Western />} />
          <Route path="/recommend/1" element={<Recommend1 />} />
          <Route path="/recommend/2" element={<Recommend2 />} />
          <Route path="/recommend/3" element={<Recommend3 />} />
          <Route path="/recommend/4" element={<Recommend4 />} />
          <Route path="/recommend/5" element={<Recommend5 />} />
          <Route path="/recommend/6" element={<Recommend6 />} />
          <Route path="/recommend/7" element={<Recommend7 />} />
          <Route path="/recommend/8" element={<Recommend8 />} />
          <Route path="/recommend/9" element={<Recommend9 />} />
          <Route path="/recommend/10" element={<Recommend10 />} />
          <Route path="/recommend/11" element={<Recommend11 />} />
          <Route path="/recommend/12" element={<Recommend12 />} />
          <Route path="/recommend/13" element={<Recommend13 />} />
          <Route path="/recommend/14" element={<Recommend14 />} />
          <Route path="/recommend/15" element={<Recommend15 />} />
          <Route path="/recommend/16" element={<Recommend16 />} />
          <Route path="/recommend/17" element={<Recommend17 />} />
          <Route path="/recommend/18" element={<Recommend18 />} />
          <Route path="/recommend/19" element={<Recommend19 />} />
          <Route path="/recommend/20" element={<Recommend20 />} />
          <Route path="/recommend/21" element={<Recommend21 />} />
          <Route path="/recommend/22" element={<Recommend22 />} />
          <Route path="/recommend/23" element={<Recommend23 />} />
          <Route path="/recommend/24" element={<Recommend24 />} />
          <Route path="/recommend/25" element={<Recommend25 />} />
          <Route path="/recommend/26" element={<Recommend26 />} />
          <Route path="/recommend/27" element={<Recommend27 />} />
          <Route path="/recommend/28" element={<Recommend28 />} />
          <Route path="/recommend/29" element={<Recommend29 />} />
          <Route path="/recommend/30" element={<Recommend30 />} />
          <Route path="/recommend/31" element={<Recommend31 />} />
          <Route path="/recommend/32" element={<Recommend32 />} />
          <Route path="/recommend/33" element={<Recommend33 />} />
          <Route path="/recommend/34" element={<Recommend34 />} />
          <Route path="/recommend/35" element={<Recommend35 />} />
          <Route path="/recommend/36" element={<Recommend36 />} />
          <Route path="/recommend/37" element={<Recommend37 />} />
          <Route path="/recommend/38" element={<Recommend38 />} />
          <Route path="/recommend/39" element={<Recommend39 />} />
          <Route path="/recommend/40" element={<Recommend40 />} />
          <Route path="/recommend/41" element={<Recommend41 />} />
          <Route path="/recommend/42" element={<Recommend42 />} />
          <Route path="/recommend/43" element={<Recommend43 />} />
          <Route path="/recommend/44" element={<Recommend44 />} />
          <Route path="/recommend/45" element={<Recommend45 />} />
          <Route path="/recommend/46" element={<Recommend46 />} />
          <Route path="/recommend/47" element={<Recommend47 />} />
          <Route path="/recommend/48" element={<Recommend48 />} />
          <Route path="/recommend/49" element={<Recommend49 />} />
          <Route path="/recommend/50" element={<Recommend50 />} />
          <Route path="/recommend/51" element={<Recommend51 />} />
          <Route path="/recommend/52" element={<Recommend52 />} />
          <Route path="/recommend/53" element={<Recommend53 />} />
          <Route path="/recommend/54" element={<Recommend54 />} />
          <Route path="/recommend/55" element={<Recommend55 />} />
          <Route path="/recommend/56" element={<Recommend56 />} />
          <Route path="/recommend/57" element={<Recommend57 />} />
          <Route path="/recommend/58" element={<Recommend58 />} />
          <Route path="/recommend/59" element={<Recommend59 />} />
          <Route path="/recommend/60" element={<Recommend60 />} />
          <Route path="/recommend/61" element={<Recommend61 />} />
          <Route path="/recommend/62" element={<Recommend62 />} />
          <Route path="/recommend/63" element={<Recommend63 />} />
          <Route path="/recommend/64" element={<Recommend64 />} />
          <Route path="/recommend/65" element={<Recommend65 />} />
          <Route path="/recommend/66" element={<Recommend66 />} />
          <Route path="/recommend/67" element={<Recommend67 />} />
          <Route path="/recommend/68" element={<Recommend68 />} />
          <Route path="/recommend/69" element={<Recommend69 />} />
          <Route path="/recommend/70" element={<Recommend70 />} />
          <Route path="/recommend/71" element={<Recommend71 />} />
          <Route path="/recommend/72" element={<Recommend72 />} />
          <Route path="/recommend/73" element={<Recommend73 />} />
          <Route path="/recommend/74" element={<Recommend74 />} />
          <Route path="/recommend/75" element={<Recommend75 />} />
          <Route path="/recommend/76" element={<Recommend76 />} />
          <Route path="/recommend/77" element={<Recommend77 />} />
          <Route path="/recommend/78" element={<Recommend78 />} />
          <Route path="/recommend/79" element={<Recommend79 />} />
          <Route path="/recommend/80" element={<Recommend80 />} />
          <Route path="/recommend/81" element={<Recommend81 />} />
          <Route path="/recommend/82" element={<Recommend82 />} />
          <Route path="/recommend/83" element={<Recommend83 />} />
          <Route path="/recommend/84" element={<Recommend84 />} />
          <Route path="/recommend/85" element={<Recommend85 />} />
          <Route path="/recommend/86" element={<Recommend86 />} />
          <Route path="/recommend/87" element={<Recommend87 />} />
          <Route path="/recommend/88" element={<Recommend88 />} />
          <Route path="/recommend/89" element={<Recommend89 />} />
          <Route path="/recommend/90" element={<Recommend90 />} />
          <Route path="/recommend/91" element={<Recommend91 />} />
          <Route path="/recommend/92" element={<Recommend92 />} />
          <Route path="/recommend/93" element={<Recommend93 />} />
          <Route path="/recommend/94" element={<Recommend94 />} />
          <Route path="/recommend/95" element={<Recommend95 />} />
          <Route path="/recommend/96" element={<Recommend96 />} />
          <Route path="/recommend/97" element={<Recommend97 />} />
          <Route path="/recommend/98" element={<Recommend98 />} />
          <Route path="/recommend/99" element={<Recommend99 />} />
          <Route path="/recommend/100" element={<Recommend100 />} />
          <Route path="/recommend/101" element={<Recommend101 />} />
          <Route path="/recommend/102" element={<Recommend102 />} />
          <Route path="/recommend/103" element={<Recommend103 />} />
          <Route path="/recommend/104" element={<Recommend104 />} />
          <Route path="/recommend/105" element={<Recommend105 />} />
          <Route path="/recommend/106" element={<Recommend106 />} />
          <Route path="/recommend/107" element={<Recommend107 />} />
          <Route path="/recommend/108" element={<Recommend108 />} />
          <Route path="/drama/1" element={<Drama1 />} />
          <Route path="/drama/2" element={<Drama2 />} />
          <Route path="/drama/3" element={<Drama3 />} />
          <Route path="/drama/4" element={<Drama4 />} />
          <Route path="/drama/5" element={<Drama5 />} />
          <Route path="/drama/6" element={<Drama6 />} />
          <Route path="/drama/7" element={<Drama7 />} />
          <Route path="/drama/8" element={<Drama8 />} />
          <Route path="/drama/9" element={<Drama9 />} />
          <Route path="/drama/10" element={<Drama10 />} />
          <Route path="/drama/11" element={<Drama11 />} />
          <Route path="/drama/12" element={<Drama12 />} />
          <Route path="/drama/13" element={<Drama13 />} />
          <Route path="/drama/14" element={<Drama14 />} />
          <Route path="/action/1" element={<Action1 />} />
          <Route path="/action/2" element={<Action2 />} />
          <Route path="/action/3" element={<Action3 />} />
          <Route path="/action/4" element={<Action4 />} />
          <Route path="/action/5" element={<Action5 />} />
          <Route path="/action/6" element={<Action6 />} />
          <Route path="/action/7" element={<Action7 />} />
          <Route path="/action/8" element={<Action8 />} />
          <Route path="/action/9" element={<Action9 />} />
          <Route path="/action/10" element={<Action10 />} />
          <Route path="/action/11" element={<Action11 />} />
          <Route path="/action/12" element={<Action12 />} />
          <Route path="/action/13" element={<Action13 />} />
          <Route path="/action/14" element={<Action14 />} />
          <Route path="/adventure/1" element={<Adventure1 />} />
          <Route path="/adventure/2" element={<Adventure2 />} />
          <Route path="/adventure/3" element={<Adventure3 />} />
          <Route path="/adventure/4" element={<Adventure4 />} />
          <Route path="/adventure/5" element={<Adventure5 />} />
          <Route path="/adventure/6" element={<Adventure6 />} />
          <Route path="/animation/1" element={<Animation1 />} />
          <Route path="/animation/2" element={<Animation2 />} />
          <Route path="/animation/3" element={<Animation3 />} />
          <Route path="/animation/4" element={<Animation4 />} />
          <Route path="/animation/5" element={<Animation5 />} />
          <Route path="/animation/6" element={<Animation6 />} />
          <Route path="/biography/1" element={<Biography1 />} />
          <Route path="/biography/2" element={<Biography2 />} />
          <Route path="/biography/3" element={<Biography3 />} />
          <Route path="/biography/4" element={<Biography4 />} />
          <Route path="/biography/5" element={<Biography5 />} />
          <Route path="/biography/6" element={<Biography6 />} />
          <Route path="/comedy/1" element={<Comedy1 />} />
          <Route path="/comedy/2" element={<Comedy2 />} />
          <Route path="/comedy/3" element={<Comedy3 />} />
          <Route path="/comedy/4" element={<Comedy4 />} />
          <Route path="/comedy/5" element={<Comedy5 />} />
          <Route path="/comedy/6" element={<Comedy6 />} />
          <Route path="/comedy/7" element={<Comedy7 />} />
          <Route path="/comedy/8" element={<Comedy8 />} />
          <Route path="/comedy/9" element={<Comedy9 />} />
          <Route path="/comedy/10" element={<Comedy10 />} />
          <Route path="/comedy/11" element={<Comedy11 />} />
          <Route path="/comedy/12" element={<Comedy12 />} />
          <Route path="/comedy/13" element={<Comedy13 />} />
          <Route path="/comedy/14" element={<Comedy14 />} />
          <Route path="/crime/1" element={<Crime1 />} />
          <Route path="/crime/2" element={<Crime2 />} />
          <Route path="/family/1" element={<Family1 />} />
          <Route path="/family/2" element={<Family2 />} />
          <Route path="/fantasy/1" element={<Fantasy1 />} />
          <Route path="/fantasy/2" element={<Fantasy2 />} />
          <Route path="/history/1" element={<History1 />} />
          <Route path="/history/2" element={<History2 />} />
          <Route path="/horror/1" element={<Horror1 />} />
          <Route path="/horror/2" element={<Horror2 />} />
          <Route path="/horror/3" element={<Horror3 />} />
          <Route path="/horror/4" element={<Horror4 />} />
          <Route path="/horror/5" element={<Horror5 />} />
          <Route path="/horror/6" element={<Horror6 />} />
          <Route path="/musical/1" element={<Musical1 />} />
          <Route path="/musical/2" element={<Musical2 />} />
          <Route path="/romance/1" element={<Romance1 />} />
          <Route path="/romance/2" element={<Romance2 />} />
          <Route path="/scifi/1" element={<SciFi1 />} />
          <Route path="/scifi/2" element={<SciFi2 />} />
          <Route path="/short/1" element={<Short1 />} />
          <Route path="/sport/1" element={<Sport1 />} />
          <Route path="/sport/2" element={<Sport2 />} />
          <Route path="/thriller/1" element={<Thriller1 />} />
          <Route path="/thriller/2" element={<Thriller2 />} />
          <Route path="/war/1" element={<War1 />} />
          <Route path="/war/2" element={<War2 />} />
          <Route path="/western/1" element={<Western1 />} />
          <Route path="/western/2" element={<Western2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
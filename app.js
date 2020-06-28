const WORDS = [
  "abbreviation",
  "able",
  "abord",
  "accuse",
  "action",
  "Avengers",
  "adult",
  "adopt",
  "alphabet",
  "afraid",
  "aerobics",
  "altogether",
  "amphibian",
  "game",
  "enormous",
  "hiss",
  "animal",
  "announce",
  "ant",
  "art",
  "arithmetic",
  "entertain",
  "badminton",
  "bad",
  "pear",
  "baboon",
  "baby",
  "banana",
  "bank",
  "basketball",
  "tropical",
  "battery",
  "battle",
  "beach",
  "beaver",
  "become",
  "behaviour",
  "gas",
  "bicycle",
  "birthday",
  "big",
  "blank",
  "bin",
  "bird",
  "bill",
  "fair",
  "gang",
  "blob",
  "drop",
  "bun",
  "brother",
  "triangle",
  "equator",
  "buzz",
  "button",
  "cat",
  "dyslexic",
  "cage",
  "duck",
  "cable",
  "cabin",
  "holiday",
  "Round",
  "lion",
  "stereo",
  "yoga",
  "gasses",
  "calf",
  "camcorder",
  "camel",
  "cannal",
  "glad",
  "falcon",
  "pudding",
  "peace",
  "indoors",
  "carrot",
  "loaf",
  "niche",
  "carpet",
  "captain",
  "capital",
  "trap",
  "steam",
  "reupt",
  "germ",
  "care",
  "careless",
  "lollipop",
  "cautious",
  "ceiling",
  "cd",
  "date",
  "cereal",
  "dye",
  "golf",
  "certain",
  "eat",
  "professional",
  "enthusiastic",
  "length",
  "hive",
  "century",
  "champion",
  "ink",
  "decade",
  "pencils",
  "delicious",
  "gymnastics",
  "chance",
  "stag",
  "grab",
  "nightmare",
  "nasty",
  "goggles",
  "change",
  "catch",
  "gorilla",
  "patient",
  "each",
  "sea",
  "factory",
  "channel",
  "nettle",
  "check",
  "learn",
  "domino",
  "deer",
  "scratch",
  "drill",
  "orchestra",
  "gram",
  "necklace",
  "sheriff",
  "Government",
  "important",
  "pass",
  "vast",
  "yesterday",
  "kind",
  "lap",
  "diagram",
  "photograph",
  "hide",
  "part",
  "elbow",
  "smack",
  "deep",
  "Example",
  "dump",
  "satsuma",
  "optimistic",
  "howl",
  "drum",
  "fall",
  "laugh",
  "medal",
  "large",
  "dish",
  "dim",
  "nectar",
  "trouser",
  "high",
  "drama",
  "Welcome",
  "Constructed",
  "laid",
  "dash",
  "drought",
  "dyslexic",
  "Strength",
  "Place",
  "trucks",
  "echo",
  "sank",
  "summer",
  "diwali",
  "Kaput",
  "dew",
  "Fully",
  "video",
  "oak",
  "heroine",
  "Son",
  "xulon",
  "Licensed",
  "Elastic",
  "noise",
  "Mouth",
  "disc",
  "sob",
  "late",
  "spoil",
  "size",
  "Keynote",
  "melon",
  "realism",
  "occur",
  "sail",
  "imitate",
  "youth",
  "yogurt",
  "onion",
  "encyclopedia",
  "eel",
  "reveal",
  "zigzag",
  "echo",
  "enter",
  "Kiosk",
  "Houses",
  "Xylophone",
  "each",
  "edge",
  "netball",
  "existed",
  "drip",
  "leader",
  "north",
  "hero",
  "obvious",
  "rude",
  "warb",
  "hotel",
  "keep",
  "Job",
  "melt",
  "Gush",
  "vehicle",
  "Distributor",
  "nosy",
  "superior",
  "rot",
  "radio",
  "old",
  "Ebullient",
  "peacock",
  "rein",
  "experiment",
  "land",
  "enormous",
  "reason",
  "event",
  "trumpet",
  "Grovel",
  "europe",
  "recorder",
  "walkies",
  "Extol",
  "enlock",
  "essential",
  "sale",
  "veil",
  "Enjoy",
  "Endeavour",
  "Basic",
  "poll",
  "leaf",
  "eventually",
  "Gamut",
  "imagine",
  "estimate",
  "village",
  "obtain",
  "huge",
  "Earnest",
  "young",
  "Roughshod",
  "you",
  "rooms",
  "octagon",
  "EYE",
  "measure",
  "Morgan",
  "rip",
  "Grandparents",
  "ealdorman",
  "millicoulomb",
  "Yard",
  "Ellipsis",
  "koala",
  "Fisherman",
  "ears",
  "eagerness",
  "Outport",
  "yell",
  "bloodshed",
  "oats",
  "nada",
  "secure",
  "Esoteric",
  "unfair",
  "Embattled",
  "numb",
  "evolutionist",
  "called",
  "eavesdrop",
  "zodiac",
  "ardeb",
  "earliest",
  "nephew",
  "Ramification",
  "nab",
  "Surgery",
  "earthenware",
  "presidency",
  "Eavesdrop",
  "earningses",
  "relese",
  "President",
  "Rift",
  "niece",
  "elbow",
  "enfeoff",
  "unemployment",
  "statcoulomb",
  "nudge",
  "visitor",
  "pay",
  "website",
  "ecclesiastical",
  "deown",
  "Ebb",
  "Rakish",
  "Teaching",
  "vase",
  "web",
  "thingamabob",
  "quarter",
  "wand",
  "undo",
  "zoom",
  "pebble",
  "State",
  "Span",
  "king",
  "ugly",
  "written",
  "earlobes",
  "printed",
  "combination",
  "emphasis",
  "Jury",
  "yap",
  "pattern",
  "Formula",
  "Kinship",
];
function removerepeat(arr) {
  var l = arr.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  return l;
}
var sound = new Audio();
var s1 = new Audio();
var s2 = new Audio();
var s3 = new Audio();
var s4 = new Audio();
var lv1 = new Audio();
sound.src = "sounds/CLICK17C.wav";
s1.src = "sounds/button-10.wav";
s2.src = "sounds/BEEP1C.wav";
s3.src = "sounds/button-4.wav";
s4.src = "sounds/s6.mp3";
lv1.scr = "sounds/level.wav";
var glo_count = 0;
var glo_countend = 0;
var glo_w1 = "";
var glo_w2 = "";
var glo_correct = 0;
var glo_array = [];
var glo_array1 = [];
glo_array = removerepeat(WORDS);
console.log(WORDS);
console.log(glo_array);
//to shuffle the words
function randomGenerator(a, l) {
  var arr = a;
  for (var i = l - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
//to change the words with jumple upper and lower case
function uplow(array) {
  var a = array;
  var l = 0;
  var s1 = "";
  var c = "";
  var len = a.length;
  var i, j;
  for (i = 0; i < len; i++) {
    l = a[i].length;
    for (j = 0; j < l; j++) {
      c =
        Math.random() < 0.5
          ? a[i].charAt(j).toUpperCase()
          : a[i].charAt(j).toLowerCase();
      s1 = s1 + c;
    }
    a[i] = s1;
    s1 = "";
  }
  return a;
}
//import the buttons to html file
const insert = (arr) => {
  let data = "";
  var a;
  for (let i = 0; i < 30; i++) {
    a = `<button id="${arr[i].toUpperCase()}" class="${arr[i].toUpperCase()}">${
      arr[i]
    }</button>`;
    data = data + a;
  }
  return data;
};
//link the buttons to html
const start = (array) => {
  document.getElementById("maincon").innerHTML = insert(array);
};
//this will reduce the array
function reduceArray(arr, k) {
  var l = [];
  for (var i = 0; i < k; i++) {
    l[i] = arr[i];
  }
  return l;
}

//to show word to find
const worddis = (wooo) => {
  document.getElementById("wordfun").innerHTML = `<h2>Words: ${wooo}</h2>`;
};
function pick(arr) {
  var a = [];
  var l = "";
  var l1 = "";
  var temp;
  // var arr = removerepeat(arr);
  console.log(arr);
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length; j++) {
      l = arr[i].charAt(arr[i].length - 1);
      l1 = arr[j].charAt(0);
      if (l.toUpperCase() == l1 || l.toLowerCase() == l1) {
        temp = arr[i + 1];
        arr[i + 1] = arr[j];
        arr[j] = temp;
      }
    }
    a[i] = arr[i];
  }
  console.log(a);
  return a;
}
//condition to find the word is correct or not
function wordclick(word1, word2) {
  var l = word1.charAt(word1.length - 1);
  var k = word2.charAt(0);

  if (word1.toUpperCase() == word2.toUpperCase() && glo_count == 1) {
    console.log("true1 " + word1 + " " + word2);
    glo_w1 = glo_w2;
    return true;
  } else if (l.toUpperCase() == k.toUpperCase()) {
    console.log("true2" + word1 + " " + word2);
    glo_w1 = glo_w2;
    return true;
  } else {
    console.log("false" + word1 + " " + word2);
    return false;
  }
}
//this compares the words and print true or false & and also colours the box clicked
function buttoncolor(word, lim) {
  document.getElementById(word.toUpperCase()).style.background = "orangered";
  glo_count = glo_count + 1;
  glo_w2 = word.toUpperCase();
  console.log(glo_w1 + " " + glo_w2 + " " + glo_count + " " + glo_correct);
  document.getElementById("timer1").innerHTML = `<p>${glo_count}</P>`;
  if (wordclick(glo_w1, glo_w2) && glo_count <= lim) {
    glo_correct = glo_correct + 1;
    sound.play();
    console.log(glo_count + " " + glo_correct + " " + lim);
  } else if (glo_count > lim) {
    console.log(lim + 5);
    document.getElementById("timer1").innerHTML = ``;
    startfun(lim + 5);
  } else {
    s4.play();
    glo_count = 0;
    glo_correct = 0;
    while (lim > 5) {
      document.getElementById("lvl" + Math.floor(lim / 5)).style.color =
        "rgb(132, 255, 255)";
      lim = lim - 1;
    }
    document.getElementById("timer1").innerHTML = ``;
    startfun(5);
  }
}
function levelinc(l) {
  console.log(l / 5);
  document.getElementById("lvl" + Math.floor(l / 5)).style.color = "red";
  if (l > 5)
    document.getElementById("lvl" + Math.floor((l - 5) / 5)).style.color =
      "black";
}
//this starts the game
function startfun(limit) {
  var l1 = limit;
  document.getElementById(
    "add"
  ).innerHTML = `<button id="kill">Restart</button>`;
  document.getElementById("kill").onclick = function () {
    s4.play();
    glo_count = 0;
    glo_correct = 0;
    remo(6);
    startfun(5);
  };
  var a = [];
  var firstword;
  glo_count = 0;
  glo_correct = 0;
  levelinc(limit);
  glo_countend = limit;
  var previousword;
  a = pick(removerepeat(randomGenerator(WORDS, WORDS.length)));
  firstword = a[0];
  glo_array = a;
  previousword = "";
  glo_w1 = firstword.toUpperCase();
  worddis(firstword.toUpperCase());
  start(uplow(randomGenerator(a, 30)));
  glo_array1 = a;
  document.getElementById(a[0].toUpperCase()).onclick = function () {
    buttoncolor(a[0], glo_countend);
  };
  document.getElementById(a[1].toUpperCase()).onclick = function () {
    buttoncolor(a[1], glo_countend);
  };
  document.getElementById(a[2].toUpperCase()).onclick = function () {
    buttoncolor(a[2], glo_countend);
  };
  document.getElementById(a[3].toUpperCase()).onclick = function () {
    buttoncolor(a[3], glo_countend);
  };
  document.getElementById(a[4].toUpperCase()).onclick = function () {
    buttoncolor(a[4], glo_countend);
  };
  document.getElementById(a[5].toUpperCase()).onclick = function () {
    buttoncolor(a[5], glo_countend);
  };
  document.getElementById(a[6].toUpperCase()).onclick = function () {
    buttoncolor(a[6], glo_countend);
  };
  document.getElementById(a[7].toUpperCase()).onclick = function () {
    buttoncolor(a[7], glo_countend);
  };
  document.getElementById(a[8].toUpperCase()).onclick = function () {
    buttoncolor(a[8], glo_countend);
  };
  document.getElementById(a[9].toUpperCase()).onclick = function () {
    buttoncolor(a[9], glo_countend);
  };
  document.getElementById(a[10].toUpperCase()).onclick = function () {
    buttoncolor(a[10], glo_countend);
  };
  document.getElementById(a[11].toUpperCase()).onclick = function () {
    buttoncolor(a[11], glo_countend);
  };
  document.getElementById(a[12].toUpperCase()).onclick = function () {
    buttoncolor(a[12], glo_countend);
  };
  document.getElementById(a[13].toUpperCase()).onclick = function () {
    buttoncolor(a[13], glo_countend);
  };
  document.getElementById(a[14].toUpperCase()).onclick = function () {
    buttoncolor(a[14], glo_countend);
  };
  document.getElementById(a[15].toUpperCase()).onclick = function () {
    buttoncolor(a[15], glo_countend);
  };
  document.getElementById(a[16].toUpperCase()).onclick = function () {
    buttoncolor(a[16], glo_countend);
  };
  document.getElementById(a[17].toUpperCase()).onclick = function () {
    buttoncolor(a[17], glo_countend);
  };
  document.getElementById(a[18].toUpperCase()).onclick = function () {
    buttoncolor(a[18], glo_countend);
  };
  document.getElementById(a[19].toUpperCase()).onclick = function () {
    buttoncolor(a[19], glo_countend);
  };
  document.getElementById(a[20].toUpperCase()).onclick = function () {
    buttoncolor(a[20], glo_countend);
  };
  document.getElementById(a[21].toUpperCase()).onclick = function () {
    buttoncolor(a[21], glo_countend);
  };
  document.getElementById(a[22].toUpperCase()).onclick = function () {
    buttoncolor(a[22], glo_countend);
  };
  document.getElementById(a[23].toUpperCase()).onclick = function () {
    buttoncolor(a[23], glo_countend);
  };
  document.getElementById(a[24].toUpperCase()).onclick = function () {
    buttoncolor(a[24], glo_countend);
  };
  document.getElementById(a[25].toUpperCase()).onclick = function () {
    buttoncolor(a[25], glo_countend);
  };
  document.getElementById(a[26].toUpperCase()).onclick = function () {
    buttoncolor(a[26], glo_countend);
  };
  document.getElementById(a[27].toUpperCase()).onclick = function () {
    buttoncolor(a[27], glo_countend);
  };
  document.getElementById(a[28].toUpperCase()).onclick = function () {
    buttoncolor(a[28], glo_countend);
  };
  document.getElementById(a[29].toUpperCase()).onclick = function () {
    buttoncolor(a[29], glo_countend);
  };
}
function remo(n) {
  for (var i = 1; i <= n; i++) {
    document.getElementById("lvl" + i).style.color = "rgb(132, 255, 255)";
  }
  document.getElementById("timer1").innerHTML = ``;
}
//display and start
window.onload = () => {
  document.getElementById("strt").onclick = function () {
    startfun(5);
  };
};

// NAVIGATION LINKS
const navVenus = document.querySelector('#nav-venus');
const navMercury = document.querySelector('#nav-mercury');
const navEarth = document.querySelector("#nav-earth");
const navMars = document.querySelector("#nav-mars");
const navJupiter = document.querySelector("#nav-jupiter");
const navSaturn = document.querySelector('#nav-saturn');
const navUranus = document.querySelector("#nav-uranus");
const navNeptune = document.querySelector("#nav-neptune");

var cda = document.querySelector('.section-svg');

// H1 PLANET NAME
const planetName = document.querySelector('#planet-name');

// PLANET INFO <p> 
const planetInfo = document.querySelector('.planet-info');
//PLANET SOURCE LINK
const sourceLink = document.querySelector('#source-link');

// Three BTN
var overBtn = document.querySelector('.overview-btn');
var interBtn = document.querySelector('.internal-btn');
var surfBtn = document.querySelector('.surf-btn');

//MOBILE THREE BTN
const overBtnMobile = document.querySelector('.over-mobile');
const interBtnMobile = document.querySelector('.inter-mobile');
const surfBtnMobile = document.querySelector('.surf-mobile');


// MOBILE <A> BOTTOM-BORDERS
const overBorder = document.querySelector('.over-border')
const interBorder = document.querySelector('.inter-border')
const surfBorder = document.querySelector('.surf-border')


// MAIN AND SURFACE IMG SELECTORS
var img = document.querySelector('#main-img');
var surfImg = document.querySelector('#surface-img');

// SPAN SELECTORS FOR BOTTOM INFO
const spanOne = document.querySelector('#span-one')
const spanTwo = document.querySelector('#span-two')
const spanThree = document.querySelector('#span-three')
const spanFour = document.querySelector('#span-four')

var currentPlanet = "venus"


// MOBILE MENU TOGGLE

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");


navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', true)
    : navToggle.setAttribute('aria-expanded', false);
  primaryNav.toggleAttribute('data-visible');
  surfImg.src = ''
});



//BEFORE CLICK
surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = "img/mercury.svg"
      planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury.svg";
        planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      })

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury.svg";
        planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      })


      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury-int.svg";
        planetInfo.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
      })
      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury-int.svg";
        planetInfo.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

      });

      surfBtnMobile.addEventListener('click', () => {
        img.src = "img/mercury.svg";
        surfImg.src = "img/mercury-surf.svg"
        planetInfo.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's."

      })


      surfBtn.addEventListener('click', () => {
        img.src = "img/mercury.svg";
        surfImg.src = "img/mercury-surf.svg"
        planetInfo.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's."

      })


//BEFORE CLICK COLORS
overBtn.style.backgroundColor = "rgb(65, 158, 187)"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"

      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "rgb(65, 158, 187)"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"

      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "rgb(65, 158, 187)"
        surfBtn.style.backgroundColor = "transparent"

      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "rgb(65, 158, 187)"

      })




//NAV.LIST CLICKS
navMercury.addEventListener('click', () => {
  currentPlanet = "mercury";
  planetName.innerHTML = "MERCURY"
  updateOverview();
  bgColor();
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  spanOne.innerHTML = "58.6 DAYS"
  spanTwo.innerHTML = "87.97 DAYS"
  spanThree.innerHTML = "2,439.7 KM"
  spanFour.innerHTML = "430&deg;C"

})

navVenus.addEventListener('click', () => {
  currentPlanet = "venus";
  planetName.innerHTML = "VENUS"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Venus"
  spanOne.innerHTML = "243 DAYS"
  spanTwo.innerHTML = "224.7 DAYS"
  spanThree.innerHTML = "6,051.8 KM"
  spanFour.innerHTML = "471&deg;C"
})

navEarth.addEventListener('click', () => {
  currentPlanet = 'earth';
  planetName.innerHTML = "EARTH"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Earth"
  spanOne.innerHTML = "0.99 DAYS"
  spanTwo.innerHTML = "365.26 DAYS"
  spanThree.innerHTML = "6,371 KM"
  spanFour.innerHTML = "16&deg;C"
})

navMars.addEventListener('click', () => {
  currentPlanet = 'mars';
  planetName.innerHTML = "MARS"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Mars"
  spanOne.innerHTML = "1.03 DAYS"
  spanTwo.innerHTML = "1.88 YEARS"
  spanThree.innerHTML = "3,389.5 KM"
  spanFour.innerHTML = "-28&deg;C"
})

navJupiter.addEventListener('click', () => {
  currentPlanet = 'jupiter';
  planetName.innerHTML = "JUPITER"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Jupiter"
  spanOne.innerHTML = "9.93 HOURS"
  spanTwo.innerHTML = "11.86 YEARS"
  spanThree.innerHTML = "69,911 KM"
  spanFour.innerHTML = "-108&deg;C"
})

navSaturn.addEventListener('click', () => {
  currentPlanet = 'saturn';
  planetName.innerHTML = "SATURN"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Saturn"
  spanOne.innerHTML = "10.8 HOURS"
  spanTwo.innerHTML = "29.46 YEARS"
  spanThree.innerHTML = "58.232 KM"
  spanFour.innerHTML = "-138&deg;C"
})

navUranus.addEventListener('click', () => {
  currentPlanet = 'uranus';
  planetName.innerHTML = "URANUS"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Uranus"
  spanOne.innerHTML = "17.2 HOURS"
  spanTwo.innerHTML = "84 YEARS"
  spanThree.innerHTML = "25.362 KM"
  spanFour.innerHTML = "-195&deg;C"
})

navNeptune.addEventListener('click', () => {
  currentPlanet = 'neptune';
  planetName.innerHTML = "NEPTUNE"
  updateOverview();
  bgColor()
  borderBottomMobile();
  primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', false);
  sourceLink.href = "https://en.wikipedia.org/wiki/Neptune"
  spanOne.innerHTML = "16.08 HOURS"
  spanTwo.innerHTML = "164.79 YEARS"
  spanThree.innerHTML = "24.622 KM"
  spanFour.innerHTML = "-201&deg;C"
})



// IMG AND TEXT UPDATE WHEN CLICKED

function updateOverview() {
  switch (currentPlanet) {
    case "mercury":
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = "img/mercury.svg"
      planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury.svg";
        planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      })

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury.svg";
        planetInfo.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
      })


      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury-int.svg";
        planetInfo.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
      })
      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mercury-int.svg";
        planetInfo.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

      });

      surfBtnMobile.addEventListener('click', () => {
        img.src = "img/mercury.svg";
        surfImg.src = "img/mercury-surf.svg"
        planetInfo.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's."

      })


      surfBtn.addEventListener('click', () => {
        img.src = "img/mercury.svg";
        surfImg.src = "img/mercury-surf.svg"
        planetInfo.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's."

      })


      break;

    case 'venus':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/venus.svg'
      planetInfo.innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/venus.svg'
        planetInfo.innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."

      })

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/venus.svg'
        planetInfo.innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."

      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/venus-inter.svg"
        planetInfo.innerHTML = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."

      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/venus-inter.svg"
        planetInfo.innerHTML = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."

      });

      surfBtn.addEventListener('click', () => {
        surfImg.setAttribute('data-surf', currentPlanet);
        img.src = 'img/venus.svg'
        surfImg.src = "img/venus-surf.svg"
        planetInfo.innerHTML = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."

      })

      surfBtnMobile.addEventListener('click', () => {
        surfImg.setAttribute('data-surf', currentPlanet);
        img.src = 'img/venus.svg'
        surfImg.src = "img/venus-surf.svg"
        planetInfo.innerHTML = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."

      })
      break;

    case 'earth':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/earth.svg'
      planetInfo.innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/earth.svg'
        planetInfo.innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
      })
      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/earth.svg'
        planetInfo.innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/earth-inter.svg"
        planetInfo.innerHTML = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/earth-inter.svg"
        planetInfo.innerHTML = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
      });

      surfBtn.addEventListener('click', () => {
        img.src = 'img/earth.svg'
        surfImg.src = "img/earth-surf.svg"
        planetInfo.innerHTML = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
      })

      surfBtnMobile.addEventListener('click', () => {
        img.src = 'img/earth.svg'
        surfImg.src = "img/earth-surf.svg"
        planetInfo.innerHTML = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
      })
      break;

    case "mars":
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/mars.svg'
      planetInfo.innerHTML = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".';

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/mars.svg'
        planetInfo.innerHTML = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'
      });

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/mars.svg'
        planetInfo.innerHTML = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'
      });

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mars-inter.svg"
        planetInfo.innerHTML = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/mars-inter.svg"
        planetInfo.innerHTML = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
      });

      surfBtn.addEventListener('click', () => {
        surfImg.setAttribute('data-surf', currentPlanet);
        img.src = 'img/mars.svg'
        surfImg.src = "img/mars-surf.svg"
        planetInfo.innerHTML = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
      })

      surfBtnMobile.addEventListener('click', () => {
        surfImg.setAttribute('data-surf', currentPlanet);
        img.src = 'img/mars.svg'
        surfImg.src = "img/mars-surf.svg"
        planetInfo.innerHTML = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
      })
      break;

    case 'jupiter':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/jupiter.svg'
      planetInfo.innerHTML = 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.';

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/jupiter.svg'
        planetInfo.innerHTML = 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.'
      })

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/jupiter.svg'
        planetInfo.innerHTML = 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.'
      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/jupiter-inter.svg"
        planetInfo.innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/jupiter-inter.svg"
        planetInfo.innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
      });

      surfBtn.addEventListener('click', () => {
        img.src = 'img/jupiter.svg'
        surfImg.src = "img/jupiter-surf.svg"
        planetInfo.innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
      })

      surfBtnMobile.addEventListener('click', () => {
        img.src = 'img/jupiter.svg'
        surfImg.src = "img/jupiter-surf.svg"
        planetInfo.innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
      })
      break;

    case 'saturn':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/saturn.svg'
      planetInfo.innerHTML = 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.';

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/saturn.svg'
        planetInfo.innerHTML = 'JSaturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.'
      })

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/saturn.svg'
        planetInfo.innerHTML = 'JSaturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.'
      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/saturn-inter.svg"
        planetInfo.innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/saturn-inter.svg"
        planetInfo.innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
      });

      surfBtn.addEventListener('click', () => {
        img.src = 'img/saturn.svg'
        surfImg.src = "img/saturn-surf.svg"
        planetInfo.innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. "
      })

      surfBtnMobile.addEventListener('click', () => {
        img.src = 'img/saturn.svg'
        surfImg.src = "img/saturn-surf.svg"
        planetInfo.innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. "
      })
      break;

    case 'uranus':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/uranus.svg'
      planetInfo.innerHTML = 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.';

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/uranus.svg'
        planetInfo.innerHTML = 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.'
      })

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/uranus.svg'
        planetInfo.innerHTML = 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.'
      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/uranus-inter.svg"
        planetInfo.innerHTML = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/uranus-inter.svg"
        planetInfo.innerHTML = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
      });

      surfBtn.addEventListener('click', () => {
        img.src = 'img/uranus.svg'
        surfImg.src = "img/uranus-surf.svg"
        planetInfo.innerHTML = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
      })

      surfBtnMobile.addEventListener('click', () => {
        img.src = 'img/uranus.svg'
        surfImg.src = "img/uranus-surf.svg"
        planetInfo.innerHTML = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
      })
      break;

    case 'neptune':
      surfImg.src = ''
      cda.setAttribute('data-planet', currentPlanet);
      img.src = 'img/neptune.svg'
      planetInfo.innerHTML = 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.';

      overBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/neptune.svg'
        planetInfo.innerHTML = 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.'
      })

      overBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = 'img/neptune.svg'
        planetInfo.innerHTML = 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.'
      })

      interBtn.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/neptune-inter.svg"
        planetInfo.innerHTML = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
      });

      interBtnMobile.addEventListener('click', () => {
        surfImg.src = ''
        img.src = "img/neptune-inter.svg"
        planetInfo.innerHTML = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
      });

      surfBtn.addEventListener('click', () => {
        img.src = 'img/neptune.svg'
        surfImg.src = "img/neptune-surf.svg"
        planetInfo.innerHTML = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
      })

      surfBtnMobile.addEventListener('click', () => {
        img.src = 'img/neptune.svg'
        surfImg.src = "img/neptune-surf.svg"
        planetInfo.innerHTML = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
      })
      break;
  }
}


//Button colors

function bgColor() {
  switch (currentPlanet) {
    case "mercury":

      overBtn.style.backgroundColor = "rgb(65, 158, 187)"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"

      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "rgb(65, 158, 187)"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"

      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "rgb(65, 158, 187)"
        surfBtn.style.backgroundColor = "transparent"

      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "rgb(65, 158, 187)"

      })
      break;

    case 'venus':
      overBtn.style.backgroundColor = "#EDA249"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"


      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#EDA249"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"

      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#EDA249"
        surfBtn.style.backgroundColor = "transparent"

      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#EDA249"

      })
      break;

    case 'earth':
      overBtn.style.backgroundColor = "#6F2ED6"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#6F2ED6"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#6F2ED6"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#6F2ED6"
      })
      break;

    case 'mars':
      overBtn.style.backgroundColor = "#D14C32"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#D14C32"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#D14C32"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#D14C32"
      })
      break;

    case 'jupiter':
      overBtn.style.backgroundColor = "#D83A34"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#D83A34"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#D83A34"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#D83A34"
      })
      break;

    case 'saturn':
      overBtn.style.backgroundColor = "#CD5120"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#CD5120"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#CD5120"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#CD5120"
      })
      break;

    case 'uranus':
      overBtn.style.backgroundColor = "#1EC2A4"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#1EC2A4"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#1EC2A4"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#1EC2A4"
      })
      break;

    case 'neptune':
      overBtn.style.backgroundColor = "#2D68F0"
      interBtn.style.backgroundColor = "transparent"
      surfBtn.style.backgroundColor = "transparent"
      overBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "#2D68F0"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "transparent"
      })

      interBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "#2D68F0"
        surfBtn.style.backgroundColor = "transparent"
      })

      surfBtn.addEventListener('click', () => {
        overBtn.style.backgroundColor = "transparent"
        interBtn.style.backgroundColor = "transparent"
        surfBtn.style.backgroundColor = "#2D68F0"
      })
      break;
  }
}

//Button colors mobile
function borderBottomMobile() {
  switch (currentPlanet) {
    case 'mercury':
      overBorder.style.borderBottom = "5px solid #419EBB"

      overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #419EBB"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #419EBB"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #419EBB"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

    case 'venus':
      overBorder.style.borderBottom = "5px solid #EDA249"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #EDA249"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #EDA249"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #EDA249"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case 'earth':
        overBorder.style.borderBottom = "5px solid #6f2ED6"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #6f2ED6"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #6f2ED6"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #6f2ED6"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case 'mars':
        overBorder.style.borderBottom = "5px solid #D14C32"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #D14C32"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #D14C32"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #D14C32"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case 'jupiter':
        overBorder.style.borderBottom = "5px solid #D83A34"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #D83A34"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #D83A34"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #D83A34"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case 'saturn':
        overBorder.style.borderBottom = "5px solid #CD5120"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #CD5120"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #CD5120"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #CD5120"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case "uranus":
        overBorder.style.borderBottom = "5px solid #1EC2A4"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #1EC2A4"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #1EC2A4"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #1EC2A4"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;

      case 'neptune':
        overBorder.style.borderBottom = "5px solid #2D68F0"
        overBorder.addEventListener('mouseover', () => {
        overBorder.style.borderBottom = "5px solid #2D68F0"
      })

      overBorder.addEventListener('mouseout', () => {
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseover', () => {
        interBorder.style.borderBottom = "5px solid #2D68F0"
        overBorder.style.borderBottom = ""
      })

      interBorder.addEventListener('mouseout', () => {
        interBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseover', () => {
        surfBorder.style.borderBottom = "5px solid #2D68F0"
        overBorder.style.borderBottom = ""
      })

      surfBorder.addEventListener('mouseout', () => {
        surfBorder.style.borderBottom = ""
      })
      break;
  }
}




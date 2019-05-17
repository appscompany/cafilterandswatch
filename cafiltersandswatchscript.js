(function () {

  /* Load Script function we may need to load jQuery from the Google's CDN */
  /* That code is world-reknown. */
  /* One source: http://snipplr.com/view/18756/loadscript/ */

  var loadScript = function (url, callback) {

    var script = document.createElement("script");
    script.type = "text/javascript";

    // If the browser is Internet Explorer.
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
      // For any other browser.
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);

  };

  /* This is my app's JavaScript */
  var myAppJavaScript = function ($) {
    // $ in this scope references the jQuery object we'll use.
    // Don't use jQuery, or jQuery191, use the dollar sign.
    // Do this and do that, using $.
    //var nowtime = new Date();
    //$("head").append("<link rel='stylesheet' href='https://variantswatches.apphb.com/cafilterscss.css' type='text/css' media='screen'>");
    $("head").append("<script type='text/javascript' src='https://cdn.shopify.com/s/javascripts/currencies.js'></script>");
    //$('body').append("<link rel='stylesheet' type='text/css' href='https://variantswatches.apphb.com/cafilterandswatchappcss.css?datetime=" + nowtime + "'>");
    //$('head').append("<link rel='stylesheet' type='text/css' href='https://variantswatches.apphb.com/cafilterandswatchappcss.css'>");
    // Parallel Ajax
    (function ($) {

      if (!$) {
        throw Error('jquery-parallel-ajax: jQuery not found');
      }

      var defalutOption = {
        type: 'GET',
        cache: true
      };

      var reqAmount = 0;
      var resList = {
        length: 0
      };
      var timeoutTimer = null;
      var timeoutDefault = 3000;

      /* function _clearTimeout()
                                {
                                  timeoutTimer = setTimeout(function(){
                                    resList.length = 0;            
                                    error({msg: 'timeout'});
                                  }, timeoutTimer || timeoutDefault);
                                }*/
      function reqCallBackSuccess(idx, res, successCallback) {
        resList[idx] = res;
        resList.length++;
        if (resList.length === reqAmount) {
          successCallback(resList);
          clearTimeout(timeoutTimer);
        }
      }

      function reqCallBackError(idx, err, errorCallback) {
        if (resList.length === -1) {
          return;
        }
        resList.length = -1;
        console.error('reqCallBackError', {
          index: idx,
          error: err
        });
        errorCallback(err);
        clearTimeout(timeoutTimer);
      }


      function parallelAjax(options, success, error, timeout) {
        resList = {
          length: 0
        };
        var ajaxOptions = [];
        if (options instanceof Array) {
          ajaxOptions = options;
        }
        else {
          ajaxOptions.push(options);
        }
        // set ajax amount
        reqAmount = ajaxOptions.length;
        for (var i = 0; i < ajaxOptions.length; i++) {
          (function (arg) {
            // combine defalut option
            $.extend(ajaxOptions[i], defalutOption);
            // add success callback
            ajaxOptions[i].success = function (res) {
              reqCallBackSuccess(arg, res, success);
            }
            // add fail callback
            ajaxOptions[i].error = function (err) {
              reqCallBackError(arg, err, error);
            }
          })(i);
        }

        // do the reqests
        for (var i = 0; i < ajaxOptions.length; i++) {
          $.ajax(ajaxOptions[i]);
        }

        // set timeout
        timeoutTimer = setTimeout(function () {
          resList.length = -1;
          error({ msg: 'timeout' });
        }, timeout || timeoutDefault);
      }

      $.extend({
        'parallelAjax': parallelAjax
      })
    })($);
    /* (function(global, factory) {
                    if (typeof module === 'object' && module.exports) {
                      module.exports = factory(global);
                    } else if (typeof define === 'function') {
                      define(function() { return factory(global) });
                    } else factory(global);        
                }(typeof window !== "undefined" ? window : this, function(window) {
                   //do something...
                })) */
    var colorcodesjson = {
      "Camel": "BB9568",
      "Black": "000000",
      "Navy": "5A5D64",
      "Navy Blue": "000080",
      "Dark Blue": "0000C8",
      "Blue": "0000FF",
      "Stratos": "000741",
      "Swamp": "001B1C",
      "Resolution Blue": "002387",
      "Deep Fir": "002900",
      "Burnham": "002E20",
      "International Klein Blue": "002FA7",
      "Prussian Blue": "003153",
      "Midnight Blue": "003366",
      "Smalt": "003399",
      "Deep Teal": "003532",
      "Cyprus": "003E40",
      "Kaitoke Green": "004620",
      "Cobalt": "0047AB",
      "Crusoe": "004816",
      "Sherpa Blue": "004950",
      "Endeavour": "0056A7",
      "Camarone": "00581A",
      "Science Blue": "0066CC",
      "Blue Ribbon": "0066FF",
      "Tropical Rain Forest": "00755E",
      "Allports": "0076A3",
      "Deep Cerulean": "007BA7",
      "Lochmara": "007EC7",
      "Azure Radiance": "007FFF",
      "Teal": "008080",
      "Bondi Blue": "0095B6",
      "Pacific Blue": "009DC4",
      "Persian Green": "00A693",
      "Jade": "00A86B",
      "Caribbean Green": "00CC99",
      "Robin's Egg Blue": "00CCCC",
      "Green": "00FF00",
      "Spring Green": "00FF7F",
      "Cyan / Aqua": "00FFFF",
      "Blue Charcoal": "010D1A",
      "Midnight": "011635",
      "Holly": "011D13",
      "Daintree": "012731",
      "Cardin Green": "01361C",
      "County Green": "01371A",
      "Astronaut Blue": "013E62",
      "Regal Blue": "013F6A",
      "Aqua Deep": "014B43",
      "Orient": "015E85",
      "Blue Stone": "016162",
      "Fun Green": "016D39",
      "Pine Green": "01796F",
      "Blue Lagoon": "017987",
      "Deep Sea": "01826B",
      "Green Haze": "01A368",
      "English Holly": "022D15",
      "Sherwood Green": "02402C",
      "Congress Blue": "02478E",
      "Evening Sea": "024E46",
      "Bahama Blue": "026395",
      "Observatory": "02866F",
      "Cerulean": "02A4D3",
      "Tangaroa": "03163C",
      "Green Vogue": "032B52",
      "Mosque": "036A6E",
      "Midnight Moss": "041004",
      "Black Pearl": "041322",
      "Blue Whale": "042E4C",
      "Zuccini": "044022",
      "Teal Blue": "044259",
      "Deep Cove": "051040",
      "Gulf Blue": "051657",
      "Venice Blue": "055989",
      "Watercourse": "056F57",
      "Catalina Blue": "062A78",
      "Tiber": "063537",
      "Gossamer": "069B81",
      "Niagara": "06A189",
      "Tarawera": "073A50",
      "Jaguar": "080110",
      "Black Bean": "081910",
      "Deep Sapphire": "082567",
      "Elf Green": "088370",
      "Bright Turquoise": "08E8DE",
      "Downriver": "092256",
      "Palm Green": "09230F",
      "Madison": "09255D",
      "Bottle Green": "093624",
      "Deep Sea Green": "095859",
      "Salem": "097F4B",
      "Black Russian": "0A001C",
      "Dark Fern": "0A480D",
      "Japanese Laurel": "0A6906",
      "Atoll": "0A6F75",
      "Cod Gray": "0B0B0B",
      "Marshland": "0B0F08",
      "Gordons Green": "0B1107",
      "Black Forest": "0B1304",
      "San Felix": "0B6207",
      "Malachite": "0BDA51",
      "Ebony": "0C0B1D",
      "Woodsmoke": "0C0D0F",
      "Racing Green": "0C1911",
      "Surfie Green": "0C7A79",
      "Blue Chill": "0C8990",
      "Black Rock": "0D0332",
      "Bunker": "0D1117",
      "Aztec": "0D1C19",
      "Bush": "0D2E1C",
      "Cinder": "0E0E18",
      "Firefly": "0E2A30",
      "Torea Bay": "0F2D9E",
      "Vulcan": "10121D",
      "Green Waterloo": "101405",
      "Eden": "105852",
      "Arapawa": "110C6C",
      "Ultramarine": "120A8F",
      "Elephant": "123447",
      "Jewel": "126B40",
      "Diesel": "130000",
      "Asphalt": "130A06",
      "Blue Zodiac": "13264D",
      "Parsley": "134F19",
      "Nero": "140600",
      "Tory Blue": "1450AA",
      "Bunting": "151F4C",
      "Denim": "1560BD",
      "Genoa": "15736B",
      "Mirage": "161928",
      "Hunter Green": "161D10",
      "Big Stone": "162A40",
      "Celtic": "163222",
      "Timber Green": "16322C",
      "Gable Green": "163531",
      "Pine Tree": "171F04",
      "Chathams Blue": "175579",
      "Deep Forest Green": "182D09",
      "Blumine": "18587A",
      "Palm Leaf": "19330E",
      "Nile Blue": "193751",
      "Fun Blue": "1959A8",
      "Lucky Point": "1A1A68",
      "Mountain Meadow": "1AB385",
      "Tolopea": "1B0245",
      "Haiti": "1B1035",
      "Deep Koamaru": "1B127B",
      "Acadia": "1B1404",
      "Seaweed": "1B2F11",
      "Biscay": "1B3162",
      "Matisse": "1B659D",
      "Crowshead": "1C1208",
      "Rangoon Green": "1C1E13",
      "Persian Blue": "1C39BB",
      "Everglade": "1C402E",
      "Elm": "1C7C7D",
      "Green Pea": "1D6142",
      "Creole": "1E0F04",
      "Karaka": "1E1609",
      "El Paso": "1E1708",
      "Cello": "1E385B",
      "Te Papa Green": "1E433C",
      "Dodger Blue": "1E90FF",
      "Eastern Blue": "1E9AB0",
      "Night Rider": "1F120F",
      "Java": "1FC2C2",
      "Jacksons Purple": "20208D",
      "Cloud Burst": "202E54",
      "Blue Dianne": "204852",
      "Eternity": "211A0E",
      "Deep Blue": "220878",
      "Forest Green": "228B22",
      "Mallard": "233418",
      "Violet": "240A40",
      "Kilamanjaro": "240C02",
      "Log Cabin": "242A1D",
      "Black Olive": "242E16",
      "Green House": "24500F",
      "Graphite": "251607",
      "Cannon Black": "251706",
      "Port Gore": "251F4F",
      "Shark": "25272C",
      "Green Kelp": "25311C",
      "Curious Blue": "2596D1",
      "Paua": "260368",
      "Paris M": "26056A",
      "Wood Bark": "261105",
      "Gondola": "261414",
      "Steel Gray": "262335",
      "Ebony Clay": "26283B",
      "Bay of Many": "273A81",
      "Plantation": "27504B",
      "Eucalyptus": "278A5B",
      "Oil": "281E15",
      "Astronaut": "283A77",
      "Mariner": "286ACD",
      "Violent Violet": "290C5E",
      "Bastille": "292130",
      "Zeus": "292319",
      "Charade": "292937",
      "Jelly Bean": "297B9A",
      "Jungle Green": "29AB87",
      "Cherry Pie": "2A0359",
      "Coffee Bean": "2A140E",
      "Baltic Sea": "2A2630",
      "Turtle Green": "2A380B",
      "Cerulean Blue": "2A52BE",
      "Sepia Black": "2B0202",
      "Valhalla": "2B194F",
      "Heavy Metal": "2B3228",
      "Blue Gem": "2C0E8C",
      "Revolver": "2C1632",
      "Bleached Cedar": "2C2133",
      "Lochinvar": "2C8C84",
      "Mikado": "2D2510",
      "Outer Space": "2D383A",
      "St Tropaz": "2D569B",
      "Jacaranda": "2E0329",
      "Jacko Bean": "2E1905",
      "Rangitoto": "2E3222",
      "Rhino": "2E3F62",
      "Sea Green": "2E8B57",
      "Scooter": "2EBFD4",
      "Onion": "2F270E",
      "Governor Bay": "2F3CB3",
      "Sapphire": "2F519E",
      "Spectra": "2F5A57",
      "Casal": "2F6168",
      "Melanzane": "300529",
      "Cocoa Brown": "301F1E",
      "Woodrush": "302A0F",
      "San Juan": "304B6A",
      "Turquoise": "30D5C8",
      "Eclipse": "311C17",
      "Pickled Bluewood": "314459",
      "Azure": "315BA1",
      "Calypso": "31728D",
      "Paradiso": "317D82",
      "Persian Indigo": "32127A",
      "Blackcurrant": "32293A",
      "Mine Shaft": "323232",
      "Stromboli": "325D52",
      "Bilbao": "327C14",
      "Astral": "327DA0",
      "Christalle": "33036B",
      "Thunder": "33292F",
      "Shamrock": "33CC99",
      "Tamarind": "341515",
      "Mardi Gras": "350036",
      "Valentino": "350E42",
      "Jagger": "350E57",
      "Tuna": "353542",
      "Chambray": "354E8C",
      "Martinique": "363050",
      "Tuatara": "363534",
      "Waiouru": "363C0D",
      "Ming": "36747D",
      "La Palma": "368716",
      "Chocolate": "370202",
      "Clinker": "371D09",
      "Brown Tumbleweed": "37290E",
      "Birch": "373021",
      "Oracle": "377475",
      "Blue Diamond": "380474",
      "Grape": "381A51",
      "Dune": "383533",
      "Oxford Blue": "384555",
      "Clover": "384910",
      "Limed Spruce": "394851",
      "Dell": "396413",
      "Toledo": "3A0020",
      "Sambuca": "3A2010",
      "Jacarta": "3A2A6A",
      "William": "3A686C",
      "Killarney": "3A6A47",
      "Keppel": "3AB09E",
      "Temptress": "3B000B",
      "Aubergine": "3B0910",
      "Jon": "3B1F1F",
      "Treehouse": "3B2820",
      "Amazon": "3B7A57",
      "Boston Blue": "3B91B4",
      "Windsor": "3C0878",
      "Rebel": "3C1206",
      "Meteorite": "3C1F76",
      "Dark Ebony": "3C2005",
      "Camouflage": "3C3910",
      "Bright Gray": "3C4151",
      "Cape Cod": "3C4443",
      "Lunar Green": "3C493A",
      "Bean  ": "3D0C02",
      "Bistre": "3D2B1F",
      "Goblin": "3D7D52",
      "Kingfisher Daisy": "3E0480",
      "Cedar": "3E1C14",
      "English Walnut": "3E2B23",
      "Black Marlin": "3E2C1C",
      "Ship Gray": "3E3A44",
      "Pelorous": "3EABBF",
      "Bronze": "3F2109",
      "Cola": "3F2500",
      "Madras": "3F3002",
      "Minsk": "3F307F",
      "Cabbage Pont": "3F4C3A",
      "Tom Thumb": "3F583B",
      "Mineral Green": "3F5D53",
      "Puerto Rico": "3FC1AA",
      "Harlequin": "3FFF00",
      "Brown Pod": "401801",
      "Cork": "40291D",
      "Masala": "403B38",
      "Thatch Green": "403D19",
      "Fiord": "405169",
      "Viridian": "40826D",
      "Chateau Green": "40A860",
      "Ripe Plum": "410056",
      "Paco": "411F10",
      "Deep Oak": "412010",
      "Merlin": "413C37",
      "Gun Powder": "414257",
      "East Bay": "414C7D",
      "Royal Blue": "4169E1",
      "Ocean Green": "41AA78",
      "Burnt Maroon": "420303",
      "Lisbon Brown": "423921",
      "Faded Jade": "427977",
      "Scarlet Gum": "431560",
      "Iroko": "433120",
      "Armadillo": "433E37",
      "River Bed": "434C59",
      "Green Leaf": "436A0D",
      "Barossa": "44012D",
      "Morocco Brown": "441D00",
      "Mako": "444954",
      "Kelp": "454936",
      "San Marino": "456CAC",
      "Picton Blue": "45B1E8",
      "Loulou": "460B41",
      "Crater Brown": "462425",
      "Gray Asparagus": "465945",
      "Steel Blue": "4682B4",
      "Rustic Red": "480404",
      "Bulgarian Rose": "480607",
      "Clairvoyant": "480656",
      "Cocoa Bean": "481C1C",
      "Woody Brown": "483131",
      "Taupe": "483C32",
      "Van Cleef": "49170C",
      "Brown Derby": "492615",
      "Metallic Bronze": "49371B",
      "Verdun Green": "495400",
      "Blue Bayoux": "496679",
      "Bismark": "497183",
      "Bracken": "4A2A04",
      "Deep Bronze": "4A3004",
      "Mondo": "4A3C30",
      "Tundora": "4A4244",
      "Gravel": "4A444B",
      "Trout": "4A4E5A",
      "Pigment Indigo": "4B0082",
      "Nandor": "4B5D52",
      "Saddle": "4C3024",
      "Abbey": "4C4F56",
      "Blackberry": "4D0135",
      "Cab Sav": "4D0A18",
      "Indian Tan": "4D1E01",
      "Cowboy": "4D282D",
      "Livid Brown": "4D282E",
      "Rock": "4D3833",
      "Punga": "4D3D14",
      "Bronzetone": "4D400F",
      "Woodland": "4D5328",
      "Mahogany": "4E0606",
      "Bossanova": "4E2A5A",
      "Matterhorn": "4E3B41",
      "Bronze Olive": "4E420C",
      "Mulled Wine": "4E4562",
      "Axolotl": "4E6649",
      "Wedgewood": "4E7F9E",
      "Shakespeare": "4EABD1",
      "Honey Flower": "4F1C70",
      "Daisy Bush": "4F2398",
      "Indigo": "4F69C6",
      "Fern Green": "4F7942",
      "Fruit Salad": "4F9D5D",
      "Apple": "4FA83D",
      "Mortar": "504351",
      "Kashmir Blue": "507096",
      "Cutty Sark": "507672",
      "Emerald": "50C878",
      "Emperor": "514649",
      "Chalet Green": "516E3D",
      "Como": "517C66",
      "Smalt Blue": "51808F",
      "Castro": "52001F",
      "Maroon Oak": "520C17",
      "Gigas": "523C94",
      "Voodoo": "533455",
      "Victoria": "534491",
      "Hippie Green": "53824B",
      "Heath": "541012",
      "Judge Gray": "544333",
      "Fuscous Gray": "54534D",
      "Vida Loca": "549019",
      "Cioccolato": "55280C",
      "Saratoga": "555B10",
      "Finlandia": "556D56",
      "Havelock Blue": "5590D9",
      "Fountain Blue": "56B4BE",
      "Spring Leaves": "578363",
      "Saddle Brown": "583401",
      "Scarpa Flow": "585562",
      "Cactus": "587156",
      "Hippie Blue": "589AAF",
      "Wine Berry": "591D35",
      "Brown Bramble": "592804",
      "Congo Brown": "593737",
      "Millbrook": "594433",
      "Waikawa Gray": "5A6E9C",
      "Horizon": "5A87A0",
      "Jambalaya": "5B3013",
      "Bordeaux": "5C0120",
      "Mulberry Wood": "5C0536",
      "Carnaby Tan": "5C2E01",
      "Comet": "5C5D75",
      "Redwood": "5D1E0F",
      "Don Juan": "5D4C51",
      "Chicago": "5D5C58",
      "Verdigris": "5D5E37",
      "Dingley": "5D7747",
      "Breaker Bay": "5DA19F",
      "Kabul": "5E483E",
      "Hemlock": "5E5D3B",
      "Irish Coffee": "5F3D26",
      "Mid Gray": "5F5F6E",
      "Shuttle Gray": "5F6672",
      "Aqua Forest": "5FA777",
      "Tradewind": "5FB3AC",
      "Horses Neck": "604913",
      "Smoky": "605B73",
      "Corduroy": "606E68",
      "Danube": "6093D1",
      "Espresso": "612718",
      "Eggplant": "614051",
      "Costa Del Sol": "615D30",
      "Glade Green": "61845F",
      "Buccaneer": "622F30",
      "Quincy": "623F2D",
      "Butterfly Bush": "624E9A",
      "West Coast": "625119",
      "Finch": "626649",
      "Patina": "639A8F",
      "Fern": "63B76C",
      "Blue Violet": "6456B7",
      "Dolphin": "646077",
      "Storm Dust": "646463",
      "Siam": "646A54",
      "Nevada": "646E75",
      "Cornflower Blue": "6495ED",
      "Viking": "64CCDB",
      "Rosewood": "65000B",
      "Cherrywood": "651A14",
      "Purple Heart": "652DC1",
      "Fern Frond": "657220",
      "Willow Grove": "65745D",
      "Hoki": "65869F",
      "Pompadour": "660045",
      "Purple": "660099",
      "Tyrian Purple": "66023C",
      "Dark Tan": "661010",
      "Silver Tree": "66B58F",
      "Bright Green": "66FF00",
      "Screamin' Green": "66FF66",
      "Black Rose": "67032D",
      "Scampi": "675FA6",
      "Ironside Gray": "676662",
      "Viridian Green": "678975",
      "Christi": "67A712",
      "Nutmeg Wood Finish": "683600",
      "Zambezi": "685558",
      "Salt Box": "685E6E",
      "Tawny Port": "692545",
      "Finn": "692D54",
      "Scorpion": "695F62",
      "Lynch": "697E9A",
      "Spice": "6A442E",
      "Himalaya": "6A5D1B",
      "Soya Bean": "6A6051",
      "Hairy Heath": "6B2A14",
      "Royal Purple": "6B3FA0",
      "Shingle Fawn": "6B4E31",
      "Dorado": "6B5755",
      "Bermuda Gray": "6B8BA2",
      "Olive Drab": "6B8E23",
      "Eminence": "6C3082",
      "Turquoise Blue": "6CDAE7",
      "Lonestar": "6D0101",
      "Pine Cone": "6D5E54",
      "Dove Gray": "6D6C6C",
      "Juniper": "6D9292",
      "Gothic": "6D92A1",
      "Red Oxide": "6E0902",
      "Moccaccino": "6E1D14",
      "Pickled Bean": "6E4826",
      "Dallas": "6E4B26",
      "Kokoda": "6E6D57",
      "Pale Sky": "6E7783",
      "Cafe Royale": "6F440C",
      "Flint": "6F6A61",
      "Highland": "6F8E63",
      "Limeade": "6F9D02",
      "Downy": "6FD0C5",
      "Persian Plum": "701C1C",
      "Sepia": "704214",
      "Antique Bronze": "704A07",
      "Ferra": "704F50",
      "Coffee": "706555",
      "Slate Gray": "708090",
      "Cedar Wood Finish": "711A00",
      "Metallic Copper": "71291D",
      "Affair": "714693",
      "Studio": "714AB2",
      "Tobacco Brown": "715D47",
      "Yellow Metal": "716338",
      "Peat": "716B56",
      "Olivetone": "716E10",
      "Storm Gray": "717486",
      "Sirocco": "718080",
      "Aquamarine Blue": "71D9E2",
      "Venetian Red": "72010F",
      "Old Copper": "724A2F",
      "Go Ben": "726D4E",
      "Raven": "727B89",
      "Seance": "731E8F",
      "Raw Umber": "734A12",
      "Kimberly": "736C9F",
      "Crocodile": "736D58",
      "Crete": "737829",
      "Xanadu": "738678",
      "Spicy Mustard": "74640D",
      "Limed Ash": "747D63",
      "Rolling Stone": "747D83",
      "Blue Smoke": "748881",
      "Laurel": "749378",
      "Mantis": "74C365",
      "Russett": "755A57",
      "Deluge": "7563A8",
      "Cosmic": "76395D",
      "Blue Marguerite": "7666C6",
      "Lima": "76BD17",
      "Sky Blue": "76D7EA",
      "Dark Burgundy": "770F05",
      "Crown of Thorns": "771F1F",
      "Walnut": "773F1A",
      "Pablo": "776F61",
      "Pacifika": "778120",
      "Oxley": "779E86",
      "Pastel Green": "77DD77",
      "Japanese Maple": "780109",
      "Mocha": "782D19",
      "Peanut": "782F16",
      "Camouflage Green": "78866B",
      "Wasabi": "788A25",
      "Ship Cove": "788BBA",
      "Sea Nymph": "78A39C",
      "Roman Coffee": "795D4C",
      "Old Lavender": "796878",
      "Rum": "796989",
      "Fedora": "796A78",
      "Sandstone": "796D62",
      "Spray": "79DEEC",
      "Siren": "7A013A",
      "Fuchsia Blue": "7A58C1",
      "Boulder": "7A7A7A",
      "Wild Blue Yonder": "7A89B8",
      "De York": "7AC488",
      "Red Beech": "7B3801",
      "Cinnamon": "7B3F00",
      "Yukon Gold": "7B6608",
      "Tapa": "7B7874",
      "Waterloo ": "7B7C94",
      "Flax Smoke": "7B8265",
      "Amulet": "7B9F80",
      "Asparagus": "7BA05B",
      "Kenyan Copper": "7C1C05",
      "Pesto": "7C7631",
      "Topaz": "7C778A",
      "Concord": "7C7B7A",
      "Jumbo": "7C7B82",
      "Trendy Green": "7C881A",
      "Gumbo": "7CA1A6",
      "Acapulco": "7CB0A1",
      "Neptune": "7CB7BB",
      "Pueblo": "7D2C14",
      "Bay Leaf": "7DA98D",
      "Malibu": "7DC8F7",
      "Bermuda": "7DD8C6",
      "Copper Canyon": "7E3A15",
      "Claret": "7F1734",
      "Peru Tan": "7F3A02",
      "Falcon": "7F626D",
      "Mobster": "7F7589",
      "Moody Blue": "7F76D3",
      "Chartreuse": "7FFF00",
      "Aquamarine": "7FFFD4",
      "Maroon": "800000",
      "Rose Bud Cherry": "800B47",
      "Falu Red": "801818",
      "Red Robin": "80341F",
      "Vivid Violet": "803790",
      "Russet": "80461B",
      "Friar Gray": "807E79",
      "Olive": "808000",
      "Gray": "808080",
      "Grey": "808080",
      "Gulf Stream": "80B3AE",
      "Glacier": "80B3C4",
      "Seagull": "80CCEA",
      "Nutmeg": "81422C",
      "Spicy Pink": "816E71",
      "Empress": "817377",
      "Spanish Green": "819885",
      "Sand Dune": "826F65",
      "Gunsmoke": "828685",
      "Battleship Gray": "828F72",
      "Merlot": "831923",
      "Shadow": "837050",
      "Chelsea Cucumber": "83AA5D",
      "Monte Carlo": "83D0C6",
      "Plum": "843179",
      "Granny Smith": "84A0A0",
      "Chetwode Blue": "8581D9",
      "Bandicoot": "858470",
      "Bali Hai": "859FAF",
      "Half Baked": "85C4CC",
      "Red Devil": "860111",
      "Lotus": "863C3C",
      "Ironstone": "86483C",
      "Bull Shot": "864D1E",
      "Rusty Nail": "86560A",
      "Bitter": "868974",
      "Regent Gray": "86949F",
      "Disco": "871550",
      "Americano": "87756E",
      "Hurricane": "877C7B",
      "Oslo Gray": "878D91",
      "Sushi": "87AB39",
      "Spicy Mix": "885342",
      "Kumera": "886221",
      "Suva Gray": "888387",
      "Avocado": "888D65",
      "Camelot": "893456",
      "Solid Pink": "893843",
      "Cannon Pink": "894367",
      "Makara": "897D6D",
      "Burnt Umber": "8A3324",
      "True V": "8A73D6",
      "Clay Creek": "8A8360",
      "Monsoon": "8A8389",
      "Stack": "8A8F8A",
      "Jordy Blue": "8AB9F1",
      "Electric Violet": "8B00FF",
      "Monarch": "8B0723",
      "Corn Harvest": "8B6B0B",
      "Olive Haze": "8B8470",
      "Schooner": "8B847E",
      "Natural Gray": "8B8680",
      "Mantle": "8B9C90",
      "Portage": "8B9FEE",
      "Envy": "8BA690",
      "Cascade": "8BA9A5",
      "Riptide": "8BE6D8",
      "Cardinal Pink": "8C055E",
      "Mule Fawn": "8C472F",
      "Potters Clay": "8C5738",
      "Trendy Pink": "8C6495",
      "Paprika": "8D0226",
      "Sanguine Brown": "8D3D38",
      "Tosca": "8D3F3F",
      "Cement": "8D7662",
      "Granite Green": "8D8974",
      "Manatee": "8D90A1",
      "Polo Blue": "8DA8CC",
      "Red Berry": "8E0000",
      "Rope": "8E4D1E",
      "Opium": "8E6F70",
      "Domino": "8E775E",
      "Mamba": "8E8190",
      "Nepal": "8EABC1",
      "Pohutukawa": "8F021C",
      "El Salva": "8F3E33",
      "Korma": "8F4B0E",
      "Squirrel": "8F8176",
      "Vista Blue": "8FD6B4",
      "Burgundy": "900020",
      "Old Brick": "901E1E",
      "Hemp": "907874",
      "Almond Frost": "907B71",
      "Sycamore": "908D39",
      "Sangria": "92000A",
      "Cumin": "924321",
      "Beaver": "926F5B",
      "Stonewall": "928573",
      "Venus": "928590",
      "Medium Purple": "9370DB",
      "Cornflower": "93CCEA",
      "Algae Green": "93DFB8",
      "Copper Rust": "944747",
      "Arrowtown": "948771",
      "Scarlett": "950015",
      "Strikemaster": "956387",
      "Mountain Mist": "959396",
      "Carmine": "960018",
      "Brown": "964B00",
      "Leather": "967059",
      "Purple Mountain's Majesty": "9678B6",
      "Lavender Purple": "967BB6",
      "Pewter": "96A8A1",
      "Summer Green": "96BBAB",
      "Au Chico": "97605D",
      "Wisteria": "9771B5",
      "Atlantis": "97CD2D",
      "Vin Rouge": "983D61",
      "Lilac Bush": "9874D3",
      "Bazaar": "98777B",
      "Hacienda": "98811B",
      "Pale Oyster": "988D77",
      "Mint Green": "98FF98",
      "Fresh Eggplant": "990066",
      "Violet Eggplant": "991199",
      "Tamarillo": "991613",
      "Totem Pole": "991B07",
      "Copper Rose": "996666",
      "Amethyst": "9966CC",
      "Mountbatten Pink": "997A8D",
      "Blue Bell": "9999CC",
      "Prairie Sand": "9A3820",
      "Toast": "9A6E61",
      "Gurkha": "9A9577",
      "Olivine": "9AB973",
      "Shadow Green": "9AC2B8",
      "Oregon": "9B4703",
      "Lemon Grass": "9B9E8F",
      "Stiletto": "9C3336",
      "Hawaiian Tan": "9D5616",
      "Gull Gray": "9DACB7",
      "Pistachio": "9DC209",
      "Granny Smith Apple": "9DE093",
      "Anakiwa": "9DE5FF",
      "Chelsea Gem": "9E5302",
      "Sepia Skin": "9E5B40",
      "Sage": "9EA587",
      "Citron": "9EA91F",
      "Rock Blue": "9EB1CD",
      "Morning Glory": "9EDEE0",
      "Cognac": "9F381D",
      "Reef Gold": "9F821C",
      "Star Dust": "9F9F9C",
      "Santas Gray": "9FA0B1",
      "Sinbad": "9FD7D3",
      "Feijoa": "9FDD8C",
      "Tabasco": "A02712",
      "Buttered Rum": "A1750D",
      "Hit Gray": "A1ADB5",
      "Citrus": "A1C50A",
      "Aqua Island": "A1DAD7",
      "Water Leaf": "A1E9DE",
      "Flirt": "A2006D",
      "Rouge": "A23B6C",
      "Cape Palliser": "A26645",
      "Gray Chateau": "A2AAB3",
      "Edward": "A2AEAB",
      "Pharlap": "A3807B",
      "Amethyst Smoke": "A397B4",
      "Blizzard Blue": "A3E3ED",
      "Delta": "A4A49D",
      "Wistful": "A4A6D3",
      "Green Smoke": "A4AF6E",
      "Jazzberry Jam": "A50B5E",
      "Zorba": "A59B91",
      "Bahia": "A5CB0C",
      "Roof Terracotta": "A62F20",
      "Paarl": "A65529",
      "Barley Corn": "A68B5B",
      "Donkey Brown": "A69279",
      "Dawn": "A6A29A",
      "Mexican Red": "A72525",
      "Luxor Gold": "A7882C",
      "Rich Gold": "A85307",
      "Reno Sand": "A86515",
      "Coral Tree": "A86B6B",
      "Dusty Gray": "A8989B",
      "Dull Lavender": "A899E6",
      "Tallow": "A8A589",
      "Bud": "A8AE9C",
      "Locust": "A8AF8E",
      "Norway": "A8BD9F",
      "Chinook": "A8E3BD",
      "Gray Olive": "A9A491",
      "Aluminium": "A9ACB6",
      "Cadet Blue": "A9B2C3",
      "Schist": "A9B497",
      "Tower Gray": "A9BDBF",
      "Perano": "A9BEF2",
      "Opal": "A9C6C2",
      "Night Shadz": "AA375A",
      "Fire": "AA4203",
      "Muesli": "AA8B5B",
      "Sandal": "AA8D6F",
      "Shady Lady": "AAA5A9",
      "Logan": "AAA9CD",
      "Spun Pearl": "AAABB7",
      "Regent St Blue": "AAD6E6",
      "Magic Mint": "AAF0D1",
      "Lipstick": "AB0563",
      "Royal Heath": "AB3472",
      "Sandrift": "AB917A",
      "Cold Purple": "ABA0D9",
      "Bronco": "ABA196",
      "Limed Oak": "AC8A56",
      "East Side": "AC91CE",
      "Lemon Ginger": "AC9E22",
      "Napa": "ACA494",
      "Hillary": "ACA586",
      "Cloudy": "ACA59F",
      "Silver Chalice": "ACACAC",
      "Swamp Green": "ACB78E",
      "Spring Rain": "ACCBB1",
      "Conifer": "ACDD4D",
      "Celadon": "ACE1AF",
      "Mandalay": "AD781B",
      "Casper": "ADBED1",
      "Moss Green": "ADDFAD",
      "Padua": "ADE6C4",
      "Green Yellow": "ADFF2F",
      "Hippie Pink": "AE4560",
      "Desert": "AE6020",
      "Bouquet": "AE809E",
      "Medium Carmine": "AF4035",
      "Apple Blossom": "AF4D43",
      "Brown Rust": "AF593E",
      "Driftwood": "AF8751",
      "Alpine": "AF8F2C",
      "Lucky": "AF9F1C",
      "Martini": "AFA09E",
      "Bombay": "AFB1B8",
      "Pigeon Post": "AFBDD9",
      "Cadillac": "B04C6A",
      "Matrix": "B05D54",
      "Tapestry": "B05E81",
      "Mai Tai": "B06608",
      "Del Rio": "B09A95",
      "Powder Blue": "B0E0E6",
      "Inch Worm": "B0E313",
      "Bright Red": "B10000",
      "Vesuvius": "B14A0B",
      "Pumpkin Skin": "B1610B",
      "Santa Fe": "B16D52",
      "Teak": "B19461",
      "Fringy Flower": "B1E2C1",
      "Ice Cold": "B1F4E7",
      "Shiraz": "B20931",
      "Biloba Flower": "B2A1EA",
      "Tall Poppy": "B32D29",
      "Fiery Orange": "B35213",
      "Hot Toddy": "B38007",
      "Taupe Gray": "B3AF95",
      "La Rioja": "B3C110",
      "Well Read": "B43332",
      "Blush": "B44668",
      "Jungle Mist": "B4CFD3",
      "Turkish Rose": "B57281",
      "Lavender": "B57EDC",
      "Mongoose": "B5A27F",
      "Olive Green": "B5B35C",
      "Jet Stream": "B5D2CE",
      "Cruise": "B5ECDF",
      "Hibiscus": "B6316C",
      "Thatch": "B69D98",
      "Heathered Gray": "B6B095",
      "Eagle": "B6BAA4",
      "Spindle": "B6D1EA",
      "Gum Leaf": "B6D3BF",
      "Rust": "B7410E",
      "Muddy Waters": "B78E5C",
      "Sahara": "B7A214",
      "Husk": "B7A458",
      "Nobel": "B7B1B1",
      "Heather": "B7C3D0",
      "Madang": "B7F0BE",
      "Milano Red": "B81104",
      "Copper": "B87333",
      "Gimblet": "B8B56A",
      "Green Spring": "B8C1B1",
      "Celery": "B8C25D",
      "Sail": "B8E0F9",
      "Chestnut": "B94E48",
      "Crail": "B95140",
      "Marigold": "B98D28",
      "Wild Willow": "B9C46A",
      "Rainee": "B9C8AC",
      "Guardsman Red": "BA0101",
      "Rock Spray": "BA450C",
      "Bourbon": "BA6F1E",
      "Pirate Gold": "BA7F03",
      "Nomad": "BAB1A2",
      "Submarine": "BAC7C9",
      "Charlotte": "BAEEF9",
      "Medium Red Violet": "BB3385",
      "Brandy Rose": "BB8983",
      "Rio Grande": "BBD009",
      "Surf": "BBD7C1",
      "Powder Ash": "BCC9C2",
      "Tuscany": "BD5E2E",
      "Quicksand": "BD978E",
      "Silk": "BDB1A8",
      "Malta": "BDB2A1",
      "Chatelle": "BDB3C7",
      "Lavender Gray": "BDBBD7",
      "French Gray": "BDBDC6",
      "Clay Ash": "BDC8B3",
      "Loblolly": "BDC9CE",
      "French Pass": "BDEDFD",
      "London Hue": "BEA6C3",
      "Pink Swan": "BEB5B7",
      "Fuego": "BEDE0D",
      "Rose of Sharon": "BF5500",
      "Tide": "BFB8B0",
      "Blue Haze": "BFBED8",
      "Silver Sand": "BFC1C2",
      "Key Lime Pie": "BFC921",
      "Ziggurat": "BFDBE2",
      "Lime": "BFFF00",
      "Thunderbird": "C02B18",
      "Mojo": "C04737",
      "Old Rose": "C08081",
      "Silver": "C0C0C0",
      "Pale Leaf": "C0D3B9",
      "Pixie Green": "C0D8B6",
      "Tia Maria": "C1440E",
      "Fuchsia Pink": "C154C1",
      "Buddha Gold": "C1A004",
      "Bison Hide": "C1B7A4",
      "Tea": "C1BAB0",
      "Gray Suit": "C1BECD",
      "Sprout": "C1D7B0",
      "Sulu": "C1F07C",
      "Indochine": "C26B03",
      "Twine": "C2955D",
      "Cotton Seed": "C2BDB6",
      "Pumice": "C2CAC4",
      "Jagged Ice": "C2E8E5",
      "Maroon Flush": "C32148",
      "Indian Khaki": "C3B091",
      "Pale Slate": "C3BFC1",
      "Gray Nickel": "C3C3BD",
      "Periwinkle Gray": "C3CDE6",
      "Tiara": "C3D1D1",
      "Tropical Blue": "C3DDF9",
      "Cardinal": "C41E3A",
      "Fuzzy Wuzzy Brown": "C45655",
      "Orange Roughy": "C45719",
      "Mist Gray": "C4C4BC",
      "Coriander": "C4D0B0",
      "Mint Tulip": "C4F4EB",
      "Mulberry": "C54B8C",
      "Nugget": "C59922",
      "Tussock": "C5994B",
      "Sea Mist": "C5DBCA",
      "Yellow Green": "C5E17A",
      "Brick Red": "C62D42",
      "Contessa": "C6726B",
      "Oriental Pink": "C69191",
      "Roti": "C6A84B",
      "Ash": "C6C3B5",
      "Kangaroo": "C6C8BD",
      "Las Palmas": "C6E610",
      "Monza": "C7031E",
      "Red Violet": "C71585",
      "Coral Reef": "C7BCA2",
      "Melrose": "C7C1FF",
      "Cloud": "C7C4BF",
      "Ghost": "C7C9D5",
      "Pine Glade": "C7CD90",
      "Botticelli": "C7DDE5",
      "Antique Brass": "C88A65",
      "Lilac": "C8A2C8",
      "Hokey Pokey": "C8A528",
      "Lily": "C8AABF",
      "Laser": "C8B568",
      "Edgewater": "C8E3D7",
      "Piper": "C96323",
      "Pizza": "C99415",
      "Light Wisteria": "C9A0DC",
      "Rodeo Dust": "C9B29B",
      "Sundance": "C9B35B",
      "Earls Green": "C9B93B",
      "Silver Rust": "C9C0BB",
      "Conch": "C9D9D2",
      "Reef": "C9FFA2",
      "Aero Blue": "C9FFE5",
      "Flush Mahogany": "CA3435",
      "Turmeric": "CABB48",
      "Paris White": "CADCD4",
      "Bitter Lemon": "CAE00D",
      "Skeptic": "CAE6DA",
      "Viola": "CB8FA9",
      "Foggy Gray": "CBCAB6",
      "Green Mist": "CBD3B0",
      "Nebula": "CBDBD6",
      "Persian Red": "CC3333",
      "Burnt Orange": "CC5500",
      "Ochre": "CC7722",
      "Puce": "CC8899",
      "Thistle Green": "CCCAA8",
      "Periwinkle": "CCCCFF",
      "Electric Lime": "CCFF00",
      "Tenn": "CD5700",
      "Chestnut Rose": "CD5C5C",
      "Brandy Punch": "CD8429",
      "Onahau": "CDF4FF",
      "Sorrell Brown": "CEB98F",
      "Cold Turkey": "CEBABA",
      "Yuma": "CEC291",
      "Chino": "CEC7A7",
      "Eunry": "CFA39D",
      "Old Gold": "CFB53B",
      "Tasman": "CFDCCF",
      "Surf Crest": "CFE5D2",
      "Humming Bird": "CFF9F3",
      "Scandal": "CFFAF4",
      "Red Stage": "D05F04",
      "Hopbush": "D06DA1",
      "Meteor": "D07D12",
      "Perfume": "D0BEF8",
      "Prelude": "D0C0E5",
      "Tea Green": "D0F0C0",
      "Geebung": "D18F1B",
      "Vanilla": "D1BEA8",
      "Soft Amber": "D1C6B4",
      "Celeste": "D1D2CA",
      "Mischka": "D1D2DD",
      "Pear": "D1E231",
      "Hot Cinnamon": "D2691E",
      "Raw Sienna": "D27D46",
      "Careys Pink": "D29EAA",
      "Tan": "D2B48C",
      "Deco": "D2DA97",
      "Blue Romance": "D2F6DE",
      "Gossip": "D2F8B0",
      "Sisal": "D3CBBA",
      "Swirl": "D3CDC5",
      "Charm": "D47494",
      "Clam Shell": "D4B6AF",
      "Straw": "D4BF8D",
      "Akaroa": "D4C4A8",
      "Bird Flower": "D4CD16",
      "Iron": "D4D7D9",
      "Geyser": "D4DFE2",
      "Hawkes Blue": "D4E2FC",
      "Grenadier": "D54600",
      "Can Can": "D591A4",
      "Whiskey": "D59A6F",
      "Winter Hazel": "D5D195",
      "Granny Apple": "D5F6E3",
      "My Pink": "D69188",
      "Tacha": "D6C562",
      "Moon Raker": "D6CEF6",
      "Quill Gray": "D6D6D1",
      "Snowy Mint": "D6FFDB",
      "New York Pink": "D7837F",
      "Pavlova": "D7C498",
      "Fog": "D7D0FF",
      "Valencia": "D84437",
      "Japonica": "D87C63",
      "Thistle": "D8BFD8",
      "Maverick": "D8C2D5",
      "Foam": "D8FCFA",
      "Cabaret": "D94972",
      "Burning Sand": "D99376",
      "Cameo": "D9B99B",
      "Timberwolf": "D9D6CF",
      "Tana": "D9DCC1",
      "Link Water": "D9E4F5",
      "Mabel": "D9F7FF",
      "Cerise": "DA3287",
      "Flame Pea": "DA5B38",
      "Bamboo": "DA6304",
      "Red Damask": "DA6A41",
      "Orchid": "DA70D6",
      "Copperfield": "DA8A67",
      "Golden Grass": "DAA520",
      "Zanah": "DAECD6",
      "Iceberg": "DAF4F0",
      "Oyster Bay": "DAFAFF",
      "Cranberry": "DB5079",
      "Petite Orchid": "DB9690",
      "Di Serria": "DB995E",
      "Alto": "DBDBDB",
      "Frosted Mint": "DBFFF8",
      "Crimson": "DC143C",
      "Punch": "DC4333",
      "Galliano": "DCB20C",
      "Blossom": "DCB4BC",
      "Wattle": "DCD747",
      "Westar": "DCD9D2",
      "Moon Mist": "DCDDCC",
      "Caper": "DCEDB4",
      "Swans Down": "DCF0EA",
      "Swiss Coffee": "DDD6D5",
      "White Ice": "DDF9F1",
      "Cerise Red": "DE3163",
      "Roman": "DE6360",
      "Tumbleweed": "DEA681",
      "Gold Tips": "DEBA13",
      "Brandy": "DEC196",
      "Wafer": "DECBC6",
      "Sapling": "DED4A4",
      "Barberry": "DED717",
      "Beryl Green": "DEE5C0",
      "Pattens Blue": "DEF5FF",
      "Heliotrope": "DF73FF",
      "Apache": "DFBE6F",
      "Chenin": "DFCD6F",
      "Lola": "DFCFDB",
      "Willow Brook": "DFECDA",
      "Chartreuse Yellow": "DFFF00",
      "Mauve": "E0B0FF",
      "Anzac": "E0B646",
      "Harvest Gold": "E0B974",
      "Calico": "E0C095",
      "Baby Blue": "E0FFFF",
      "Sunglo": "E16865",
      "Equator": "E1BC64",
      "Pink Flare": "E1C0C8",
      "Periglacial Blue": "E1E6D6",
      "Kidnapper": "E1EAD4",
      "Tara": "E1F6E8",
      "Mandy": "E25465",
      "Terracotta": "E2725B",
      "Golden Bell": "E28913",
      "Shocking": "E292C0",
      "Dixie": "E29418",
      "Light Orchid": "E29CD2",
      "Snuff": "E2D8ED",
      "Mystic": "E2EBED",
      "Apple Green": "E2F3EC",
      "Razzmatazz": "E30B5C",
      "Alizarin Crimson": "E32636",
      "Cinnabar": "E34234",
      "Cavern Pink": "E3BEBE",
      "Peppermint": "E3F5E1",
      "Mindaro": "E3F988",
      "Deep Blush": "E47698",
      "Gamboge": "E49B0F",
      "Melanie": "E4C2D5",
      "Twilight": "E4CFDE",
      "Bone": "E4D1C0",
      "Sunflower": "E4D422",
      "Grain Brown": "E4D5B7",
      "Zombie": "E4D69B",
      "Frostee": "E4F6E7",
      "Snow Flurry": "E4FFD1",
      "Amaranth": "E52B50",
      "Zest": "E5841B",
      "Dust Storm": "E5CCC9",
      "Stark White": "E5D7BD",
      "Hampton": "E5D8AF",
      "Bon Jour": "E5E0E1",
      "Mercury": "E5E5E5",
      "Polar": "E5F9F6",
      "Trinidad": "E64E03",
      "Gold Sand": "E6BE8A",
      "Cashmere": "E6BEA5",
      "Double Spanish White": "E6D7B9",
      "Satin Linen": "E6E4D4",
      "Harp": "E6F2EA",
      "Off Green": "E6F8F3",
      "Hint of Green": "E6FFE9",
      "Tranquil": "E6FFFF",
      "Mango Tango": "E77200",
      "Christine": "E7730A",
      "Tonys Pink": "E79F8C",
      "Kobi": "E79FC4",
      "Rose Fog": "E7BCB4",
      "Corn": "E7BF05",
      "Putty": "E7CD8C",
      "Gray Nurse": "E7ECE6",
      "Lily White": "E7F8FF",
      "Bubbles": "E7FEFF",
      "Fire Bush": "E89928",
      "Shilo": "E8B9B3",
      "Pearl Bush": "E8E0D5",
      "Green White": "E8EBE0",
      "Chrome White": "E8F1D4",
      "Gin": "E8F2EB",
      "Aqua Squeeze": "E8F5F2",
      "Clementine": "E96E00",
      "Burnt Sienna": "E97451",
      "Tahiti Gold": "E97C07",
      "Oyster Pink": "E9CECD",
      "Confetti": "E9D75A",
      "Ebb": "E9E3E3",
      "Ottoman": "E9F8ED",
      "Clear Day": "E9FFFD",
      "Carissma": "EA88A8",
      "Porsche": "EAAE69",
      "Tulip Tree": "EAB33B",
      "Rob Roy": "EAC674",
      "Raffia": "EADAB8",
      "White Rock": "EAE8D4",
      "Panache": "EAF6EE",
      "Solitude": "EAF6FF",
      "Aqua Spring": "EAF9F5",
      "Dew": "EAFFFE",
      "Apricot": "EB9373",
      "Zinnwaldite": "EBC2AF",
      "Fuel Yellow": "ECA927",
      "Ronchi": "ECC54E",
      "French Lilac": "ECC7EE",
      "Just Right": "ECCDB9",
      "Wild Rice": "ECE090",
      "Fall Green": "ECEBBD",
      "Aths Special": "ECEBCE",
      "Starship": "ECF245",
      "Red Ribbon": "ED0A3F",
      "Tango": "ED7A1C",
      "Carrot Orange": "ED9121",
      "Sea Pink": "ED989E",
      "Tacao": "EDB381",
      "Desert Sand": "EDC9AF",
      "Pancho": "EDCDAB",
      "Chamois": "EDDCB1",
      "Primrose": "EDEA99",
      "Frost": "EDF5DD",
      "Aqua Haze": "EDF5F5",
      "Zumthor": "EDF6FF",
      "Narvik": "EDF9F1",
      "Honeysuckle": "EDFC84",
      "Lavender Magenta": "EE82EE",
      "Beauty Bush": "EEC1BE",
      "Chalky": "EED794",
      "Almond": "EED9C4",
      "Flax": "EEDC82",
      "Bizarre": "EEDEDA",
      "Double Colonial White": "EEE3AD",
      "Cararra": "EEEEE8",
      "Manz": "EEEF78",
      "Tahuna Sands": "EEF0C8",
      "Athens Gray": "EEF0F3",
      "Tusk": "EEF3C3",
      "Loafer": "EEF4DE",
      "Catskill White": "EEF6F7",
      "Twilight Blue": "EEFDFF",
      "Jonquil": "EEFF9A",
      "Rice Flower": "EEFFE2",
      "Jaffa": "EF863F",
      "Gallery": "EFEFEF",
      "Porcelain": "EFF2F3",
      "Mauvelous": "F091A9",
      "Golden Dream": "F0D52D",
      "Golden Sand": "F0DB7D",
      "Buff": "F0DC82",
      "Prim": "F0E2EC",
      "Khaki": "F0E68C",
      "Selago": "F0EEFD",
      "Titan White": "F0EEFF",
      "Alice Blue": "F0F8FF",
      "Feta": "F0FCEA",
      "Gold Drop": "F18200",
      "Wewak": "F19BAB",
      "Sahara Sand": "F1E788",
      "Parchment": "F1E9D2",
      "Blue Chalk": "F1E9FF",
      "Mint Julep": "F1EEC1",
      "Seashell": "F1F1F1",
      "Saltpan": "F1F7F2",
      "Tidal": "F1FFAD",
      "Chiffon": "F1FFC8",
      "Flamingo": "F2552A",
      "Tangerine": "F28500",
      "Mandys Pink": "F2C3B2",
      "Concrete": "F2F2F2",
      "Black Squeeze": "F2FAFA",
      "Pomegranate": "F34723",
      "Buttercup": "F3AD16",
      "New Orleans": "F3D69D",
      "Vanilla Ice": "F3D9DF",
      "Sidecar": "F3E7BB",
      "Dawn Pink": "F3E9E5",
      "Wheatfield": "F3EDCF",
      "Canary": "F3FB62",
      "Orinoco": "F3FBD4",
      "Carla": "F3FFD8",
      "Hollywood Cerise": "F400A1",
      "Sandy brown": "F4A460",
      "Saffron": "F4C430",
      "Ripe Lemon": "F4D81C",
      "Janna": "F4EBD3",
      "Pampas": "F4F2EE",
      "Wild Sand": "F4F4F4",
      "Zircon": "F4F8FF",
      "Froly": "F57584",
      "Cream Can": "F5C85C",
      "Manhattan": "F5C999",
      "Maize": "F5D5A0",
      "Wheat": "F5DEB3",
      "Sandwisp": "F5E7A2",
      "Pot Pourri": "F5E7E2",
      "Albescent White": "F5E9D3",
      "Soft Peach": "F5EDEF",
      "Ecru White": "F5F3E5",
      "Beige": "F5F5DC",
      "Golden Fizz": "F5FB3D",
      "Australian Mint": "F5FFBE",
      "French Rose": "F64A8A",
      "Brilliant Rose": "F653A6",
      "Illusion": "F6A4C9",
      "Merino": "F6F0E6",
      "Black Haze": "F6F7F7",
      "Spring Sun": "F6FFDC",
      "Violet Red": "F7468A",
      "Chilean Fire": "F77703",
      "Persian Pink": "F77FBE",
      "Rajah": "F7B668",
      "Azalea": "F7C8DA",
      "We Peep": "F7DBE6",
      "Quarter Spanish White": "F7F2E1",
      "Whisper": "F7F5FA",
      "Snow Drift": "F7FAF7",
      "Casablanca": "F8B853",
      "Chantilly": "F8C3DF",
      "Cherub": "F8D9E9",
      "Marzipan": "F8DB9D",
      "Energy Yellow": "F8DD5C",
      "Givry": "F8E4BF",
      "White Linen": "F8F0E8",
      "Magnolia": "F8F4FF",
      "Spring Wood": "F8F6F1",
      "Coconut Cream": "F8F7DC",
      "White Lilac": "F8F7FC",
      "Desert Storm": "F8F8F7",
      "Texas": "F8F99C",
      "Corn Field": "F8FACD",
      "Mimosa": "F8FDD3",
      "Carnation": "F95A61",
      "Saffron Mango": "F9BF58",
      "Carousel Pink": "F9E0ED",
      "Dairy Cream": "F9E4BC",
      "Portica": "F9E663",
      "Amour": "F9EAF3",
      "Rum Swizzle": "F9F8E4",
      "Dolly": "F9FF8B",
      "Sugar Cane": "F9FFF6",
      "Ecstasy": "FA7814",
      "Tan Hide": "FA9D5A",
      "Corvette": "FAD3A2",
      "Peach Yellow": "FADFAD",
      "Turbo": "FAE600",
      "Astra": "FAEAB9",
      "Champagne": "FAECCC",
      "Linen": "FAF0E6",
      "Fantasy": "FAF3F0",
      "Citrine White": "FAF7D6",
      "Alabaster": "FAFAFA",
      "Hint of Yellow": "FAFDE4",
      "Milan": "FAFFA4",
      "Brink Pink": "FB607F",
      "Geraldine": "FB8989",
      "Lavender Rose": "FBA0E3",
      "Sea Buckthorn": "FBA129",
      "Sun": "FBAC13",
      "Lavender Pink": "FBAED2",
      "Rose Bud": "FBB2A3",
      "Cupid": "FBBEDA",
      "Classic Rose": "FBCCE7",
      "Apricot Peach": "FBCEB1",
      "Banana Mania": "FBE7B2",
      "Marigold Yellow": "FBE870",
      "Festival": "FBE96C",
      "Sweet Corn": "FBEA8C",
      "Candy Corn": "FBEC5D",
      "Hint of Red": "FBF9F9",
      "Shalimar": "FBFFBA",
      "Shocking Pink": "FC0FC0",
      "Tickle Me Pink": "FC80A5",
      "Tree Poppy": "FC9C1D",
      "Lightning Yellow": "FCC01E",
      "Goldenrod": "FCD667",
      "Candlelight": "FCD917",
      "Cherokee": "FCDA98",
      "Double Pearl Lusta": "FCF4D0",
      "Pearl Lusta": "FCF4DC",
      "Vista White": "FCF8F7",
      "Bianca": "FCFBF3",
      "Moon Glow": "FCFEDA",
      "China Ivory": "FCFFE7",
      "Ceramic": "FCFFF9",
      "Torch Red": "FD0E35",
      "Wild Watermelon": "FD5B78",
      "Crusta": "FD7B33",
      "Sorbus": "FD7C07",
      "Sweet Pink": "FD9FA2",
      "Light Apricot": "FDD5B1",
      "Pig Pink": "FDD7E4",
      "Cinderella": "FDE1DC",
      "Golden Glow": "FDE295",
      "Lemon": "FDE910",
      "Old Lace": "FDF5E6",
      "Half Colonial White": "FDF6D3",
      "Drover": "FDF7AD",
      "Pale Prim": "FDFEB8",
      "Cumulus": "FDFFD5",
      "Persian Rose": "FE28A2",
      "Sunset Orange": "FE4C40",
      "Bittersweet": "FE6F5E",
      "California": "FE9D04",
      "Yellow Sea": "FEA904",
      "Melon": "FEBAAD",
      "Bright Sun": "FED33C",
      "Dandelion": "FED85D",
      "Salomie": "FEDB8D",
      "Cape Honey": "FEE5AC",
      "Remy": "FEEBF3",
      "Oasis": "FEEFCE",
      "Bridesmaid": "FEF0EC",
      "Beeswax": "FEF2C7",
      "Bleach White": "FEF3D8",
      "Pipi": "FEF4CC",
      "Half Spanish White": "FEF4DB",
      "Wisp Pink": "FEF4F8",
      "Provincial Pink": "FEF5F1",
      "Half Dutch White": "FEF7DE",
      "Solitaire": "FEF8E2",
      "White Pointer": "FEF8FF",
      "Off Yellow": "FEF9E3",
      "Orange White": "FEFCED",
      "Red": "FF0000",
      "Rose": "FF007F",
      "Purple Pizzazz": "FF00CC",
      "Magenta / Fuchsia": "FF00FF",
      "Scarlet": "FF2400",
      "Wild Strawberry": "FF3399",
      "Razzle Dazzle Rose": "FF33CC",
      "Radical Red": "FF355E",
      "Red Orange": "FF3F34",
      "Coral Red": "FF4040",
      "Vermilion": "FF4D00",
      "International Orange": "FF4F00",
      "Outrageous Orange": "FF6037",
      "Blaze Orange": "FF6600",
      "Pink Flamingo": "FF66FF",
      "Orange": "FF681F",
      "Hot Pink": "FF69B4",
      "Persimmon": "FF6B53",
      "Blush Pink": "FF6FFF",
      "Burning Orange": "FF7034",
      "Pumpkin": "FF7518",
      "Flamenco": "FF7D07",
      "Flush Orange": "FF7F00",
      "Coral": "FF7F50",
      "Salmon": "FF8C69",
      "Pizazz": "FF9000",
      "West Side": "FF910F",
      "Pink Salmon": "FF91A4",
      "Neon Carrot": "FF9933",
      "Atomic Tangerine": "FF9966",
      "Vivid Tangerine": "FF9980",
      "Sunshade": "FF9E2C",
      "Orange Peel": "FFA000",
      "Mona Lisa": "FFA194",
      "Web Orange": "FFA500",
      "Carnation Pink": "FFA6C9",
      "Hit Pink": "FFAB81",
      "Yellow Orange": "FFAE42",
      "Cornflower Lilac": "FFB0AC",
      "Sundown": "FFB1B3",
      "My Sin": "FFB31F",
      "Texas Rose": "FFB555",
      "Cotton Candy": "FFB7D5",
      "Macaroni and Cheese": "FFB97B",
      "Selective Yellow": "FFBA00",
      "Koromiko": "FFBD5F",
      "Amber": "FFBF00",
      "Wax Flower": "FFC0A8",
      "Pink": "FFC0CB",
      "Your Pink": "FFC3C0",
      "Supernova": "FFC901",
      "Flesh": "FFCBA4",
      "Sunglow": "FFCC33",
      "Golden Tainoi": "FFCC5C",
      "Peach Orange": "FFCC99",
      "Chardonnay": "FFCD8C",
      "Pastel Pink": "FFD1DC",
      "Romantic": "FFD2B7",
      "Grandis": "FFD38C",
      "Gold": "FFD700",
      "School bus Yellow": "FFD800",
      "Cosmos": "FFD8D9",
      "Mustard": "FFDB58",
      "Peach Schnapps": "FFDCD6",
      "Caramel": "FFDDAF",
      "Tuft Bush": "FFDDCD",
      "Watusi": "FFDDCF",
      "Pink Lace": "FFDDF4",
      "Navajo White": "FFDEAD",
      "Frangipani": "FFDEB3",
      "Pippin": "FFE1DF",
      "Pale Rose": "FFE1F2",
      "Negroni": "FFE2C5",
      "Cream Brulee": "FFE5A0",
      "Peach": "FFE5B4",
      "Tequila": "FFE6C7",
      "Kournikova": "FFE772",
      "Sandy Beach": "FFEAC8",
      "Karry": "FFEAD4",
      "Broom": "FFEC13",
      "Colonial White": "FFEDBC",
      "Derby": "FFEED8",
      "Vis Vis": "FFEFA1",
      "Egg White": "FFEFC1",
      "Papaya Whip": "FFEFD5",
      "Fair Pink": "FFEFEC",
      "Peach Cream": "FFF0DB",
      "Lavender blush": "FFF0F5",
      "Gorse": "FFF14F",
      "Buttermilk": "FFF1B5",
      "Pink Lady": "FFF1D8",
      "Forget Me Not": "FFF1EE",
      "Tutu": "FFF1F9",
      "Picasso": "FFF39D",
      "Chardon": "FFF3F1",
      "Paris Daisy": "FFF46E",
      "Barley White": "FFF4CE",
      "Egg Sour": "FFF4DD",
      "Sazerac": "FFF4E0",
      "Serenade": "FFF4E8",
      "Chablis": "FFF4F3",
      "Seashell Peach": "FFF5EE",
      "Sauvignon": "FFF5F3",
      "Milk Punch": "FFF6D4",
      "Varden": "FFF6DF",
      "Rose White": "FFF6F5",
      "Baja White": "FFF8D1",
      "Gin Fizz": "FFF9E2",
      "Early Dawn": "FFF9E6",
      "Lemon Chiffon": "FFFACD",
      "Bridal Heath": "FFFAF4",
      "Scotch Mist": "FFFBDC",
      "Soapstone": "FFFBF9",
      "Witch Haze": "FFFC99",
      "Buttery White": "FFFCEA",
      "Island Spice": "FFFCEE",
      "Cream": "FFFDD0",
      "Chilean Heath": "FFFDE6",
      "Travertine": "FFFDE8",
      "Orchid White": "FFFDF3",
      "Quarter Pearl Lusta": "FFFDF4",
      "Half and Half": "FFFEE1",
      "Apricot White": "FFFEEC",
      "Rice Cake": "FFFEF0",
      "Black White": "FFFEF6",
      "Romance": "FFFEFD",
      "Yellow": "FFFF00",
      "Laser Lemon": "FFFF66",
      "Pale Canary": "FFFF99",
      "Portafino": "FFFFB4",
      "Ivory": "FFFFF0",
      "White": "FFFFFF"
    };
    // Pagination
    function resizeImages(imgsrc, size) {

      imgsrc = imgsrc.replace('_small', '');
      imgsrc = imgsrc.replace('_grande', '');
      imgsrc = imgsrc.replace('_medium', '');
      imgsrc = imgsrc.replace('_large', '');

      var imageextensionList = imgsrc.split('.');
      var imageextensionstring = imageextensionList[imageextensionList.length - 1];
      var imageextension = imageextensionstring.split('?')[0];

      if (imageextension == 'jpg') {
        imgsrc = imgsrc.replace('.jpg', '_' + size + 'x' + size + '.jpg');
      }
      if (imageextension == 'jpeg') {
        imgsrc = imgsrc.replace('.jpeg', '_' + size + 'x' + size + '.jpeg');
      }
      if (imageextension == 'png') {
        imgsrc = imgsrc.replace('.png', '_' + size + 'x' + size + '.png');
      }
      return imgsrc;

    }
    function ConvertToSingular(wordtoconvert) {

      var convertedword = wordtoconvert;
      if (wordtoconvert != '' && wordtoconvert != null) {
        var convertedword = wordtoconvert;
        var lastchar = convertedword[convertedword.length - 1];
        if (lastchar == 's') {
          convertedword = convertedword.substr(0, convertedword.length - 1);
          var _lastchar = convertedword[convertedword.length - 1];
          if (_lastchar == 's') {
            convertedword = convertedword.substr(0, convertedword.length - 1);
          }
        }
      }


      return convertedword;
    }
    Array.prototype.removeByVal = function (val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
          this.splice(i, 1);
          i--;
        }
      }
      return this;
    }
    // Money Symbols
    var CurrencyMoneyFormats = {
      "USD": {
        "money_format": "$",
        "money_with_currency_format": "$USD"
      },
      "EUR": {
        "money_format": "&euro;",
        "money_with_currency_format": "&euro;EUR"
      },
      "GBP": {
        "money_format": "&pound;",
        "money_with_currency_format": "&pound;GBP"
      },
      "CAD": {
        "money_format": "$",
        "money_with_currency_format": "$CAD"
      },
      "ALL": {
        "money_format": "Lek",
        "money_with_currency_format": "Lek ALL"
      },
      "DZD": {
        "money_format": "DA",
        "money_with_currency_format": "DA DZD"
      },
      "AOA": {
        "money_format": "Kz",
        "money_with_currency_format": "KzAOA"
      },
      "ARS": {
        "money_format": "$",
        "money_with_currency_format": "$ARS"
      },
      "AMD": {
        "money_format": "AMD",
        "money_with_currency_format": "AMD"
      },
      "AWG": {
        "money_format": "Afl",
        "money_with_currency_format": "AflAWG"
      },
      "AUD": {
        "money_format": "$",
        "money_with_currency_format": "$AUD"
      },
      "BBD": {
        "money_format": "$",
        "money_with_currency_format": "$Bds"
      },
      "AZN": {
        "money_format": "m.",
        "money_with_currency_format": "m.AZN"
      },
      "BDT": {
        "money_format": "Tk",
        "money_with_currency_format": "Tk BDT"
      },
      "BSD": {
        "money_format": "BS$",
        "money_with_currency_format": "BS$BSD"
      },
      "BHD": {
        "money_format": "0 BD",
        "money_with_currency_format": "0 BHD"
      },
      "BYR": {
        "money_format": "Br",
        "money_with_currency_format": "Br BYR"
      },
      "BZD": {
        "money_format": "BZ$",
        "money_with_currency_format": "BZ$BZD"
      },
      "BTN": {
        "money_format": "Nu",
        "money_with_currency_format": "Nu BTN"
      },
      "BAM": {
        "money_format": "KM",
        "money_with_currency_format": "KM BAM"
      },
      "BRL": {
        "money_format": "R$",
        "money_with_currency_format": "R$ BRL"
      },
      "BOB": {
        "money_format": "Bs",
        "money_with_currency_format": "BsBOB"
      },
      "BWP": {
        "money_format": "P",
        "money_with_currency_format": "PBWP"
      },
      "BND": {
        "money_format": "$",
        "money_with_currency_format": "$BND"
      },
      "BGN": {
        "money_format": "лв",
        "money_with_currency_format": "лв BGN"
      },
      "MMK": {
        "money_format": "K",
        "money_with_currency_format": "KMMK"
      },
      "KHR": {
        "money_format": "KHR",
        "money_with_currency_format": "KHR"
      },
      "KYD": {
        "money_format": "$",
        "money_with_currency_format": "$KYD"
      },
      "XAF": {
        "money_format": "FCFA",
        "money_with_currency_format": "FCFAXAF"
      },
      "CLP": {
        "money_format": "$",
        "money_with_currency_format": "$CLP"
      },
      "CNY": {
        "money_format": "&#165;",
        "money_with_currency_format": "&#165;CNY"
      },
      "COP": {
        "money_format": "$",
        "money_with_currency_format": "$COP"
      },
      "CRC": {
        "money_format": "&#8353;",
        "money_with_currency_format": "&#8353; CRC"
      },
      "HRK": {
        "money_format": "kn",
        "money_with_currency_format": "kn HRK"
      },
      "CZK": {
        "money_format": "K&#269;",
        "money_with_currency_format": "K&#269;"
      },
      "DKK": {
        "money_format": "",
        "money_with_currency_format": "kr."
      },
      "DOP": {
        "money_format": "RD$",
        "money_with_currency_format": "RD$"
      },
      "XCD": {
        "money_format": "$",
        "money_with_currency_format": "EC$"
      },
      "EGP": {
        "money_format": "LE",
        "money_with_currency_format": "LE EGP"
      },
      "ETB": {
        "money_format": "Br",
        "money_with_currency_format": "BrETB"
      },
      "XPF": {
        "money_format": " XPF",
        "money_with_currency_format": " XPF"
      },
      "FJD": {
        "money_format": "$",
        "money_with_currency_format": "FJ$"
      },
      "GMD": {
        "money_format": "D",
        "money_with_currency_format": "D GMD"
      },
      "GHS": {
        "money_format": "GH&#8373;",
        "money_with_currency_format": "GH&#8373;"
      },
      "GTQ": {
        "money_format": "Q",
        "money_with_currency_format": "GTQ"
      },
      "GYD": {
        "money_format": "G$",
        "money_with_currency_format": "$GYD"
      },
      "GEL": {
        "money_format": "GEL",
        "money_with_currency_format": "GEL"
      },
      "HNL": {
        "money_format": "L",
        "money_with_currency_format": "L HNL"
      },
      "HKD": {
        "money_format": "$",
        "money_with_currency_format": "HK$"
      },
      "HUF": {
        "money_format": "",
        "money_with_currency_format": " Ft"
      },
      "ISK": {
        "money_format": "kr",
        "money_with_currency_format": "kr ISK"
      },
      "INR": {
        "money_format": "Rs.",
        "money_with_currency_format": "Rs."
      },
      "IDR": {
        "money_format": "",
        "money_with_currency_format": "Rp"
      },
      "ILS": {
        "money_format": "NIS",
        "money_with_currency_format": "NIS"
      },
      "JMD": {
        "money_format": "$",
        "money_with_currency_format": "$JMD"
      },
      "JPY": {
        "money_format": "&#165;",
        "money_with_currency_format": "&#165;JPY"
      },
      "JEP": {
        "money_format": "&pound;",
        "money_with_currency_format": "&pound;JEP"
      },
      "JOD": {
        "money_format": "0 JD",
        "money_with_currency_format": "0 JOD"
      },
      "KZT": {
        "money_format": "KZT",
        "money_with_currency_format": "KZT"
      },
      "KES": {
        "money_format": "KSh",
        "money_with_currency_format": "KSh"
      },
      "KWD": {
        "money_format": "0 KD",
        "money_with_currency_format": "0 KWD"
      },
      "KGS": {
        "money_format": "лв",
        "money_with_currency_format": "лв"
      },
      "LVL": {
        "money_format": "Ls",
        "money_with_currency_format": "Ls LVL"
      },
      "LBP": {
        "money_format": "L&pound;",
        "money_with_currency_format": "L&pound;LBP"
      },
      "LTL": {
        "money_format": "Lt",
        "money_with_currency_format": "Lt"
      },
      "MGA": {
        "money_format": "Ar",
        "money_with_currency_format": "Ar MGA"
      },
      "MKD": {
        "money_format": "ден",
        "money_with_currency_format": "ден MKD"
      },
      "MOP": {
        "money_format": "MOP$",
        "money_with_currency_format": "MOP$"
      },
      "MVR": {
        "money_format": "Rf",
        "money_with_currency_format": "RfMRf"
      },
      "MXN": {
        "money_format": "$",
        "money_with_currency_format": "$ MXN"
      },
      "MYR": {
        "money_format": "RMMYR",
        "money_with_currency_format": "RMMYR"
      },
      "MUR": {
        "money_format": "Rs",
        "money_with_currency_format": "Rs MUR"
      },
      "MDL": {
        "money_format": "MDL",
        "money_with_currency_format": "MDL"
      },
      "MAD": {
        "money_format": "dh",
        "money_with_currency_format": "Dh MAD"
      },
      "MNT": {
        "money_format": "&#8366",
        "money_with_currency_format": "MNT"
      },
      "MZN": {
        "money_format": "Mt",
        "money_with_currency_format": "Mt MZN"
      },
      "NAD": {
        "money_format": "N$",
        "money_with_currency_format": "N$NAD"
      },
      "NPR": {
        "money_format": "Rs",
        "money_with_currency_format": "RsNPR"
      },
      "ANG": {
        "money_format": "&fnof;",
        "money_with_currency_format": "NA&fnof;"
      },
      "NZD": {
        "money_format": "$",
        "money_with_currency_format": "$NZD"
      },
      "NIO": {
        "money_format": "C$",
        "money_with_currency_format": "C$NIO"
      },
      "NGN": {
        "money_format": "&#8358;",
        "money_with_currency_format": "&#8358;NGN"
      },
      "NOK": {
        "money_format": "kr",
        "money_with_currency_format": "kr NOK"
      },
      "OMR": {
        "money_format": "OMR",
        "money_with_currency_format": "OMR"
      },
      "PKR": {
        "money_format": "Rs.",
        "money_with_currency_format": "Rs.PKR"
      },
      "PGK": {
        "money_format": "K",
        "money_with_currency_format": "K PGK"
      },
      "PYG": {
        "money_format": "Gs.",
        "money_with_currency_format": "Gs. PYG"
      },
      "PEN": {
        "money_format": "S/.",
        "money_with_currency_format": "S/. PEN"
      },
      "PHP": {
        "money_format": "&#8369;",
        "money_with_currency_format": "&#8369;PHP"
      },
      "PLN": {
        "money_format": "zl",
        "money_with_currency_format": "zl PLN"
      },
      "QAR": {
        "money_format": "QAR",
        "money_with_currency_format": "QAR"
      },
      "RON": {
        "money_format": "lei",
        "money_with_currency_format": "lei RON"
      },
      "RUB": {
        "money_format": "&#1088;&#1091;&#1073;",
        "money_with_currency_format": "&#1088;&#1091;&#1073;RUB"
      },
      "RWF": {
        "money_format": "RF",
        "money_with_currency_format": "RWF"
      },
      "WST": {
        "money_format": "WS$",
        "money_with_currency_format": "WS$ WST"
      },
      "SAR": {
        "money_format": "SR",
        "money_with_currency_format": "SAR"
      },
      "STD": {
        "money_format": "Db",
        "money_with_currency_format": "Db STD"
      },
      "RSD": {
        "money_format": "RSD",
        "money_with_currency_format": "RSD"
      },
      "SCR": {
        "money_format": "Rs",
        "money_with_currency_format": "Rs SCR"
      },
      "SGD": {
        "money_format": "$",
        "money_with_currency_format": "$SGD"
      },
      "SYP": {
        "money_format": "S&pound;",
        "money_with_currency_format": "S&pound;SYP"
      },
      "ZAR": {
        "money_format": "R",
        "money_with_currency_format": "R ZAR"
      },
      "KRW": {
        "money_format": "&#8361;",
        "money_with_currency_format": "&#8361;KRW"
      },
      "LKR": {
        "money_format": "Rs",
        "money_with_currency_format": "Rs LKR"
      },
      "SEK": {
        "money_format": "kr",
        "money_with_currency_format": "kr SEK"
      },
      "CHF": {
        "money_format": "SFr.",
        "money_with_currency_format": "SFr. CHF"
      },
      "TWD": {
        "money_format": "$",
        "money_with_currency_format": "$TWD"
      },
      "THB": {
        "money_format": "&#xe3f;",
        "money_with_currency_format": "&#xe3f; THB"
      },
      "TZS": {
        "money_format": "TZS",
        "money_with_currency_format": "TZS"
      },
      "TTD": {
        "money_format": "$",
        "money_with_currency_format": "$TTD"
      },
      "TND": {
        "money_format": "",
        "money_with_currency_format": "DT"
      },
      "TRY": {
        "money_format": "TL",
        "money_with_currency_format": "TL"
      },
      "UGX": {
        "money_format": "Ush ",
        "money_with_currency_format": "Ush UGX"
      },
      "UAH": {
        "money_format": "₴",
        "money_with_currency_format": "₴UAH"
      },
      "AED": {
        "money_format": "Dhs.",
        "money_with_currency_format": "Dhs. AED"
      },
      "UYU": {
        "money_format": "$",
        "money_with_currency_format": "$UYU"
      },
      "VUV": {
        "money_format": "$",
        "money_with_currency_format": "$VT"
      },
      "VEF": {
        "money_format": "Bs.",
        "money_with_currency_format": "Bs. VEF"
      },
      "VND": {
        "money_format": "&#8363;",
        "money_with_currency_format": " VND"
      },
      "XBT": {
        "money_format": "BTC",
        "money_with_currency_format": "BTC"
      },
      "XOF": {
        "money_format": "CFA",
        "money_with_currency_format": "CFAXOF"
      },
      "ZMW": {
        "money_format": "K",
        "money_with_currency_format": "ZMW"
      }
    };
    var url = window.location.href;
    var _pathslist = url.split('?')[0];
    var pathslist = _pathslist.split('/');
    var laststring = pathslist[pathslist.length - 1];
    var productstring = pathslist[pathslist.length - 2];

    // Modal
    !function (t, o) { "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o() : t.tingle = o() }(this, function () { function t(t) { var o = { onClose: null, onOpen: null, beforeOpen: null, beforeClose: null, stickyFooter: !1, footer: !1, cssClass: [], closeLabel: "Close", closeMethods: ["overlay", "button", "escape"] }; this.opts = r({}, o, t), this.init() } function o() { this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px") } function e() { this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose"), this.modal.style.display = "none", this.opts.cssClass.forEach(function (t) { "string" == typeof t && this.modal.classList.add(t) }, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = "&#9783;", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(this.modalBox) } function s() { this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter) } function i() { this._events = { clickCloseBtn: this.close.bind(this), clickOverlay: l.bind(this), resize: this.checkOverflow.bind(this), keyboardNav: n.bind(this) }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn), this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav) } function n(t) { -1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close() } function l(t) { -1 !== this.opts.closeMethods.indexOf("overlay") && !d(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth && this.close() } function d(t, o) { for (; (t = t.parentElement) && !t.classList.contains(o);); return t } function a() { -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn), this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav) } function r() { for (var t = 1; t < arguments.length; t++)for (var o in arguments[t]) arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]); return arguments[0] } var h = function () { var t, o = document.createElement("tingle-test-transition"), e = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (t in e) if (void 0 !== o.style[t]) return e[t] }(); return t.prototype.init = function () { this.modal || (e.call(this), i.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter()) }, t.prototype.destroy = function () { null !== this.modal && (a.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null) }, t.prototype.open = function () { var t = this; "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), this._scrollPosition = window.pageYOffset, document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), h ? this.modal.addEventListener(h, function o() { "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t.modal.removeEventListener(h, o, !1) }, !1) : "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), this.checkOverflow() }, t.prototype.isOpen = function () { return !!this.modal.classList.contains("tingle-modal--visible") }, t.prototype.close = function () { if ("function" == typeof this.opts.beforeClose) { if (!this.opts.beforeClose.call(this)) return } document.body.classList.remove("tingle-enabled"), window.scrollTo(0, this._scrollPosition), document.body.style.top = null, this.modal.classList.remove("tingle-modal--visible"); var t = this; h ? this.modal.addEventListener(h, function o() { t.modal.removeEventListener(h, o, !1), t.modal.style.display = "none", "function" == typeof t.opts.onClose && t.opts.onClose.call(this) }, !1) : (t.modal.style.display = "none", "function" == typeof t.opts.onClose && t.opts.onClose.call(this)) }, t.prototype.setContent = function (t) { "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t)), this.isOpen() && this.checkOverflow() }, t.prototype.getContent = function () { return this.modalBoxContent }, t.prototype.addFooter = function () { s.call(this) }, t.prototype.setFooterContent = function (t) { this.modalBoxFooter.innerHTML = t }, t.prototype.getFooterContent = function () { return this.modalBoxFooter }, t.prototype.setStickyFooter = function (t) { this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), o.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))) }, t.prototype.addFooterBtn = function (t, o, e) { var s = document.createElement("button"); return s.innerHTML = t, s.addEventListener("click", e), "string" == typeof o && o.length && o.split(" ").forEach(function (t) { s.classList.add(t) }), this.modalBoxFooter.appendChild(s), s }, t.prototype.resize = function () { console.warn("Resize is deprecated and will be removed in version 1.0") }, t.prototype.isOverflow = function () { var t = window.innerHeight; return this.modalBox.clientHeight >= t }, t.prototype.checkOverflow = function () { this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (o.call(this), this.setStickyFooter(!0))) }, { modal: t } });
    //return an array of objects according to key, value, or key and value matching
    function getObjects(obj, key, val) {
      var objects = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));
        } else
          //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
          if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
          } else if (obj[i] == val && key == '') {
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1) {
              objects.push(obj);
            }
          }
      }
      return objects;
    }
    //return an array of values that match on a certain key
    function getValues(obj, key) {
      var objects = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
          objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
          objects.push(obj[i]);
        }
      }
      return objects;
    }
    //return an array of keys that match on a certain value
    function getKeys(obj, val) {
      var objects = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
          objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
          objects.push(i);
        }
      }
      return objects;
    }
    // Detect Mobile Devices
    !function (e) { var n = /iPhone/i, t = /iPod/i, r = /iPad/i, a = /\bAndroid(?:.+)Mobile\b/i, p = /Android/i, l = /\bAndroid(?:.+)SD4930UR\b/i, b = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, f = /Windows Phone/i, u = /\bWindows(?:.+)ARM\b/i, c = /BlackBerry/i, s = /BB10/i, v = /Opera Mini/i, h = /\b(CriOS|Chrome)(?:.+)Mobile/i, w = /\Mobile(?:.+)Firefox\b/i; function m(e, i) { return e.test(i) } function i(e) { var i = e || ("undefined" != typeof navigator ? navigator.userAgent : ""), o = i.split("[FBAN"); void 0 !== o[1] && (i = o[0]), void 0 !== (o = i.split("Twitter"))[1] && (i = o[0]); var d = { apple: { phone: m(n, i) && !m(f, i), ipod: m(t, i), tablet: !m(n, i) && m(r, i) && !m(f, i), device: (m(n, i) || m(t, i) || m(r, i)) && !m(f, i) }, amazon: { phone: m(l, i), tablet: !m(l, i) && m(b, i), device: m(l, i) || m(b, i) }, android: { phone: !m(f, i) && m(l, i) || !m(f, i) && m(a, i), tablet: !m(f, i) && !m(l, i) && !m(a, i) && (m(b, i) || m(p, i)), device: !m(f, i) && (m(l, i) || m(b, i) || m(a, i) || m(p, i)) }, windows: { phone: m(f, i), tablet: m(u, i), device: m(f, i) || m(u, i) }, other: { blackberry: m(c, i), blackberry10: m(s, i), opera: m(v, i), firefox: m(w, i), chrome: m(h, i), device: m(c, i) || m(s, i) || m(v, i) || m(w, i) || m(h, i) } }; return d.any = d.apple.device || d.android.device || d.windows.device || d.other.device, d.phone = d.apple.phone || d.android.phone || d.windows.phone, d.tablet = d.apple.tablet || d.android.tablet || d.windows.tablet, d } "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = i : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = i() : "function" == typeof define && define.amd ? define([], e.isMobile = i()) : e.isMobile = i() }(this);
    var domainName = window.location.hostname;
    domainName = domainName.replace('www.', '');
    var _ismobiledevice = false;
    if (isMobile.android.device == true ||
        isMobile.windows.device == true ||
        isMobile.apple.device == true ||
        isMobile.amazon.device == true ||
        isMobile.other.device == true) {
      _ismobiledevice = true;
    }

    // InjectCSS JS
    (function (jQuery) {
      'use strict';

      function toCSS(jss, options) {
        function jsonToCSS(scope, css) {
          if (scope && !result[scope]) {
            result[scope] = {};
          }
          for (var property in css) {
            var value = css[property];
            if (value instanceof Array) {
              var values = value;
              for (var i = 0; i < values.length; i++) {
                addProperty(scope, property, values[i]);
              }
            }
            else {
              switch (typeof (value)) {
                case "number":
                case "string":
                  addProperty(scope, property, value);
                  break;
                case "object":
                  var endChar = property.charAt(property.length - 1);
                  if (scope && (endChar === "_" || endChar === "-")) {
                    var variants = value;
                    for (var key in variants) {
                      // key may be a comma separted list
                      var list = key.split(/\s*,\s*/);
                      for (var j = 0; j < list.length; j++) {
                        var valueVariant = variants[key];
                        if (valueVariant instanceof Array) {
                          var valuesVariant = valueVariant;
                          for (var k = 0; k < valuesVariant.length; k++) {
                            addProperty(scope, property + list[j], valuesVariant[k]);
                          }
                        }
                        else {
                          addProperty(scope, property + list[j], variants[key]);
                        }
                      }
                    }
                  }
                  else {
                    jsonToCSS(makeSelectorName(scope, property), value);
                  }
                  break;
              }
            }
          }
        }

        function makePropertyName(n) {
          return n.replace(/_/g, "-");
        }

        function makeSelectorName(scope, name) {
          var snames = [];
          var names = name.split(/\s*,\s*/);
          var scopes = scope.split(/\s*,\s*/);
          for (var s = 0; s < scopes.length; s++) {
            var currentScope = scopes[s];
            for (var i = 0; i < names.length; i++) {
              var currentName = names[i];
              if (currentName.charAt(0) === "&") {
                snames.push(currentScope + currentName.substr(1));
              } else {
                snames.push(currentScope ? currentScope + " " + currentName : currentName);
              }
            }
          }
          return snames.join(", ");
        }

        function addProperty(scope, property, value) {

          if (typeof (value) === "number" && !options.useRawValues) {
            value = value + "px";
          }

          var properties = property.split(/\s*,\s*/);
          for (var i = 0; i < properties.length; i++) {
            var currentProperty = makePropertyName(properties[i]);

            if (result[scope][currentProperty]) {
              result[scope][currentProperty].push(value);
            } else {
              result[scope][currentProperty] = [value];
            }
          }
        }

        // --------------


        var result = {};

        if (typeof (jss) === "string") {
          // evaluate the JSS object:
          try {
            eval("var jss = {" + jss + "}");
          }
          catch (e) {
            return "/*\nUnable to parse JSS: " + e + "\n*/";
          }
        }

        jsonToCSS("", jss);

        // output result:
        var ret = "";
        for (var a in result) {
          var css = result[a];
          ret += a + " {\n";
          for (var i in css) {
            var values = css[i];    // this is an array !
            for (var j = 0; j < values.length; j++) {
              ret += "\t" + i + ": " + values[j] + ";\n";
            }
          }
          ret += "}\n";
        }
        return ret;
      }

      var defaults = {
        truncateFirst: false,
        container: null,
        containerName: "injectCSSContainer",
        useRawValues: false
      };

      jQuery.injectCSS = function (jss, options) {
        options = jQuery.extend({}, defaults, options);

        options.media = options.media || 'all';

        var container = (options.container && jQuery(options.container)) || jQuery("#" + options.containerName);
        if (!container.length) {
          container = jQuery("<style></style>").appendTo('head').attr({
            media: options.media,
            id: options.containerName,
            type: 'text/css'
          });
        }

        var containerDomElem = container[0];
        var isIeStylesheet = containerDomElem.styleSheet !== undefined && containerDomElem.styleSheet.cssText !== undefined;

        var css = "";
        if (!options.truncateFirst) {
          css += isIeStylesheet ? containerDomElem.styleSheet.cssText : container.text();
        }
        css += toCSS(jss, options);

        if (isIeStylesheet) {
          containerDomElem.styleSheet.cssText = css;
        } else {
          container.text(css); //Others
        }

        return container;
      };
    }($));

    String.prototype.replaceAll = function (search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };

    function sortJson(element, prop, propType, asc) {
      switch (propType) {
        case "int":
          element = element.sort(function (a, b) {
            if (asc) {
              return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
            } else {
              return (parseInt(b[prop]) > parseInt(a[prop])) ? 1 : ((parseInt(b[prop]) < parseInt(a[prop])) ? -1 : 0);
            }
          });
          break;
        default:
          element = element.sort(function (a, b) {
            if (asc) {
              return (a[prop].toLowerCase() > b[prop].toLowerCase()) ? 1 : ((a[prop].toLowerCase() < b[prop].toLowerCase()) ? -1 : 0);
            } else {
              return (b[prop].toLowerCase() > a[prop].toLowerCase()) ? 1 : ((b[prop].toLowerCase() < a[prop].toLowerCase()) ? -1 : 0);
            }
          });
      }
    }
    //Comparer Function  
    function GetSortOrderA(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    }
    function GetSortOrderD(prop) {
      return function (a, b) {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      }
    }
    function GetSortOrderPrice_A(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    }
    function GetSortOrderPrice_D(prop) {
      return function (a, b) {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      }
    }
    $(document).ready(function () {
      var _paginationElementDiv = '<button type="button" id="ca_swatchy_filtery_viewmorebtn" class="btn">' +
          'View More' +
          '</button>';
      var paginationElementDiv = document.createElement('button');
      paginationElementDiv.id = 'ca_swatchy_filtery_viewmorebtn';
      paginationElementDiv.className = 'btn';
      paginationElementDiv.type = 'button';
      paginationElementDiv.innerHTML = 'View More';
      //$('body').append(paginationElementDiv);

      var pagesHiddenInput = document.createElement('input');
      pagesHiddenInput.type = 'hidden';
      pagesHiddenInput.id = 'ca_swatchfilter_page';
      pagesHiddenInput.value = 0;
      pagesHiddenInput.setAttribute('data-cafilter-url', '');
      $('body').append(pagesHiddenInput);
      var getObjectByValue = function (array, key, value) {
        return array.filter(function (object) {
          return object[key] === value;
        });
      };
      // Sort Div


      $.extend({
        getValues: function (url) {
          var result = null;
          $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
              result = data;
            }
          });
          return result;
        }
      });
      var _isadmin = 'false';
      var adminiframe = document.getElementById('admin-bar-iframe');
      if (adminiframe != null) {
        _isadmin = true;
      }
      /// preview
      var previewiframe = document.getElementById('preview-bar-iframe');
      if (previewiframe != null) {
        _isadmin = true;
      }
      _isadmin = true;

      var appvariables = $.getValues('https://variantswatches.apphb.com/api/FilterAppNewVariables/GetVariables?DomainName=' + domainName + '&IsAdmin=' + _isadmin);
      console.log(appvariables);

      if (productstring == 'collections') {
        var paginationElements = document.querySelectorAll(appvariables.Search_PaginationElementQuerySelector);
        for (var p = 0; p < paginationElements.length; p++) {
          paginationElements[p].style.display = 'none';
        }
        var collectionjson = $.getValues('https://' + window.location.hostname + '/collections/' + laststring + '.json');
        //console.log(collectionjson);
        var _collectionjson = collectionjson.collection;
        var _collectionid = _collectionjson.id;
        var _collectionproductsList = [];
        var _collectionallproductsList = [];
        var _collectionproductsnoofpages = 1;
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://variantswatches.apphb.com/api/GetFilterMetafield/GetMetafield?DomainName=" + domainName + "&IsAdmin=true&CollectionId=" + _collectionid,
          "method": "GET",
          "headers": {
            "cache-control": "no-cache"
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);
          /*var ca_filter_datajson = JSON.parse(response);
                  var ca_metafield = ca_filter_datajson[0].metafield;
                  var ca_productscount = ca_filter_datajson[0].ProductsCount;
                  var ca_themename = ca_filter_datajson[0].ThemeName;
                  var ca_collection_handle = ca_filter_datajson[0].CollectionHandle;
                  var _totalproductsincollection = ca_productscount * 1;*/

          var ca_metafield = response;
          var ca_productscount = collectionjson.products_count;
          var ca_themename = appvariables.ThemeName;
          var ca_collection_handle = collectionjson.handle;
          var _totalproductsincollection = collectionjson.products_count;

          //console.log(_totalproductsincollection);
          if (productstring == 'collections') {
            var collectionHandle = laststring;
            collectionHandle.split('?')[0];
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://" + window.location.hostname + "/collections/" + collectionHandle + ".json",
              "method": "GET",
              "headers": {
                "cache-control": "no-cache"
              }
            }

            $.ajax(settings).done(function (response) {
              //console.log(response);
              var collectionproductscount = response.collection.products_count * 1;
              var noofcollectionpages = (collectionproductscount / 250);
              var noofpages = 1;
              //console.log(noofcollectionpages);
              if (collectionproductscount < 250) {
                noofpages = 1;
              }
              else {
                noofpages = Math.ceil(noofcollectionpages);

              }
              _collectionproductsnoofpages = noofpages;
              for (var n = 1; n <= noofpages; n++) {
                //_collectionproductsList.push({url: "https://" + window.location.hostname + "/collections/" + collectionHandle + "/products.json?page=" + n + "&limit=250"});
                _collectionproductsList.push({ url: "https://" + window.location.hostname + "/collections/" + collectionHandle + "?sort_by=best-selling&view=cafiltersjson&page=" + n });
              }

              //console.log(_collectionproductsList);
              // DisableFilterDiv
              $('#ca_filterdiv').find('*').prop('disabled', true);
              $.parallelAjax(_collectionproductsList, function (response) {
                //console.info('Products List=', response);
                _collectionallproductsList = response;
                console.log(_collectionallproductsList);
                $('#ca_filterdiv').find('*').prop('disabled', false);

                LoadCollectionFilters(ca_metafield, ca_collection_handle, _ismobiledevice, 1, 'Vertical');
              }, function (error) {
                console.info('error', error);
              }, 15000);

            });
          }
          $.injectCSS({
            ".tippy-tooltip.swatchytheme-theme": {
              "background-color": "#" + appvariables.Swatch_TooltipBGColor,
              "color": "#" + appvariables.Swatch_TooltipTextColor
            },
            ".tippy-tooltip.swatchytheme-theme[data-animatefill]": {
              "background-color": "transparent"
            },
            ".tippy-tooltip.swatchytheme-theme .tippy-backdrop": {
              "background-color": "#" + appvariables.Swatch_TooltipBGColor
            },
            ".tippy-popper[x-placement^='top'] .tippy-tooltip.swatchytheme-theme .tippy-arrow": {
              "border-top-color": "#" + appvariables.Swatch_TooltipBGColor
            },
            ".tippy-popper[x-placement^='bottom'] .tippy-tooltip.swatchytheme-theme .tippy-arrow": {
              "border-bottom-color": "#" + appvariables.Swatch_TooltipBGColor
            },
            ".tippy-popper[x-placement^='left'] .tippy-tooltip.swatchytheme-theme .tippy-arrow": {
              "border-left-color": "#" + appvariables.Swatch_TooltipBGColor
            },
            ".tippy-popper[x-placement^='right'] .tippy-tooltip.swatchytheme-theme .tippy-arrow": {
              "border-right-color": "#" + appvariables.Swatch_TooltipBGColor
            }

          });
          //domainName = 'shopthelookdemo.myshopify.com';
          //console.log(ca_filter_metafield);
          if (appvariables.Filter_IsActive == true) {

            var CollectionFilterType = appvariables.Filter_FilterType;
            var SearchFilterType = appvariables.Search_FilterType;
            var FilterValueInput = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_producttype" name="ca_filtervalue_producttype" value="" />';
            var VendorInput = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_vendor" name="ca_filtervalue_vendor" value="" />';
            var Option1Input = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_option1" name="ca_filtervalue_option1" value="" />';
            var Option2Input = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_option2" name="ca_filtervalue_option2" value="" />';
            var Option3Input = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_option3" name="ca_filtervalue_option3" value="" />';
            var DiscountInput = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_discount" name="ca_filtervalue_discount" value="" />';
            var BudgetInput = '<input type="hidden" class="ca_filter_hiddeninput" id="ca_filtervalue_budget" name="ca_filtervalue_budget" value="" />';
            $('body').append(FilterValueInput);
            $('body').append(VendorInput);
            $('body').append(Option1Input);
            $('body').append(Option2Input);
            $('body').append(Option3Input);
            $('body').append(DiscountInput);
            $('body').append(BudgetInput);
            //var FilterContainerDiv = '<div id="ca_filterdivcontainer">Filter Results</div>';
            var FilterDiv = '<div id="ca_filterdiv"></div>';
            var paginationDiv = '<div id="ca_filter_paginationdiv" class="ca_filter_pagination">' +
                _paginationElementDiv +
                '</div>';
            /*var paginationDiv = '<div id="ca_filter_paginationdiv" class="ca_filter_pagination">' +
                        _paginationElementDiv +
                        '<a href="#" id="ca_paginationPrev" class="ca_paginationPrevNextatag">❮</a>' +
                        '<span id="ca_filter_pagenospan" value="1">Page 1</span>' +
                        '<a href="#" id="ca_paginationNext" class="ca_paginationPrevNextatag">❯</a>' +
                        '</div>';*/
            //$('body').append(FilterContainerDiv);
            $('body').append(FilterDiv);
            var productscountinput = document.createElement('input');
            productscountinput.id = 'ca_filter_productscount';
            productscountinput.type = 'hidden';
            $('body').append(productscountinput);
            //$('body').append(paginationDiv);
            var productpagesListInput = document.createElement('input');
            productpagesListInput.id = 'ca_filtery_pageslist';
            productpagesListInput.type = 'hidden';
            productpagesListInput.value = '1';
            $('body').append(productpagesListInput);
            var displayedproductpagesListInput = document.createElement('input');
            displayedproductpagesListInput.id = 'ca_filtery_displayedpageslist';
            displayedproductpagesListInput.type = 'hidden';
            displayedproductpagesListInput.value = '1';
            $('body').append(displayedproductpagesListInput);
            var displayedproductcountInput = document.createElement('input');
            displayedproductcountInput.id = 'ca_filtery_displayedproductcountlist';
            displayedproductcountInput.type = 'hidden';
            displayedproductcountInput.value = '16';
            $('body').append(displayedproductcountInput);
            var _iscollectionpage = 'false';
            var _issearchpage = 'false';
            var _collectionname = '';
            var _url = window.location.href;
            var pathslist = _url.split('/');
            var lasttring = pathslist[pathslist.length - 1];
            var collectionstring = pathslist[pathslist.length - 2];
            if (collectionstring == 'collections') {
              _iscollectionpage = 'true';
              var _lasttring = lasttring.split('?')[0];
              _collectionname = _lasttring;

              var _collectionjson = $.getValues("https://" + window.location.hostname + "/collections/" + _collectionname + ".json");
              var _collection = _collectionjson.collection;
              document.getElementById('ca_filter_productscount').value = _collection.products_count;
            }
            var searchproductsperpage = 0;

            //console.log(searchproductsperpage);
            var startOptions = {
              maxThreads: 32,
              cache: true,
              debug: true,
              persistence: true,
              debug: 'verbose'
            };

            function unique(list) {
              var result = [];
              $.each(list, function (i, e) {
                if ($.inArray(e, result) == -1) result.push(e);
              });
              return result;
            }
            var collectionProductsArray = [];
            var searchProductsArray = [];
            var ProductTypesArray = [];
            var VendorsArray = [];
            var Option1ValuesArray = [];
            var Option2ValuesArray = [];
            var Option3ValuesArray = [];
            var searchProductsArray = [];
            var buttonOptions = [];
            buttonOptions.push('Size');
            var ColorOptions = [];
            ColorOptions.push('Color');
            var allproductatagsinpage = document.querySelectorAll('a');
            var correctallproductatagsinpage = [];
            for (var t = 0; t < allproductatagsinpage.length; t++) {
              var ataghref = allproductatagsinpage[t].href;
              if (ataghref.includes('products')) {
                correctallproductatagsinpage.push(allproductatagsinpage[t]);
              }

            }
            var productsperpage = correctallproductatagsinpage.length;
            function GetSortOrder(prop) {
              return function (a, b) {
                if (a[prop] > b[prop]) {
                  return 1;
                } else if (a[prop] < b[prop]) {
                  return -1;
                }
                return 0;
              }
            }
            var loaderElementDiv = document.createElement('div');
            loaderElementDiv.id = 'ca_filter_loaderspinner';
            loaderElementDiv.style.display = 'none';
            $('body').append(loaderElementDiv);
            var themename = Shopify.theme.name;
            if (_iscollectionpage == 'true') {
              var collectiondiv = document.querySelector(appvariables.Filter_GridQuerySelector);
              //$(collectiondiv).before(paginationElement);
              //$(collectiondiv).after(paginationDiv);
              if (appvariables.Filter_PaginationElementQuerySelector != '') {
                var default_paginationElement = document.querySelector(appvariables.Filter_PaginationElementQuerySelector);
                if (default_paginationElement != null) {
                  //default_paginationElement.style.display = 'none';
                }
              }



              var collectionproductscount = document.getElementById('ca_filter_productscount').value * 1;
              if (collectionproductscount > productsperpage) {
                // Enable Pagination
                //$('#ca_filter_paginationdiv').hide();
              }
              if (collectionproductscount == productsperpage) {
                // Hide Pagination       
                /*var pagination_element = document.getElementById('ca_filter_paginationdiv');
                            if (pagination_element != null) {
                              pagination_element.style.visibility = 'none';
                            }*/

              }
            }

            if (_ismobiledevice == true) {
              var Filterbtn = document.createElement('button');
              Filterbtn.id = 'ca_filter_filterbtn';
              Filterbtn.innerHTML = 'Filter Results';
              Filterbtn.className = 'btn';
              Filterbtn.style.width = '95%';
              Filterbtn.style.margin = '10px';
              $('body').append(Filterbtn);

            }


            // Collection Filter Load

            var shopcurrency = Shopify.currency.active;
            var currencysymbol = CurrencyMoneyFormats[shopcurrency].money_format;

            // Search Filter Load
            var themename = Shopify.theme.name;
            var themestoreid = Shopify.theme.theme_store_id;
            var allatags = document.querySelectorAll('a');
            var paginationElement;
            var correctatags = [];
            for (var a = 0; a < allatags.length; a++) {
              var ahref = allatags[a].href;
              if (ahref.includes('products')) {
                correctatags.push(allatags[a]);
              }
            }

            var productsurl_Array = [];
            var collectionpageurl = window.location.href;
            collectionpageurl = collectionpageurl.split('?')[0];
            if (_iscollectionpage == 'true') {

            }
            var _searchedProducts;
            var themename = Shopify.theme.name;
            var filteredProductsArray = [];
            function FilterCollectionNew() {
              //console.log(_CollectionProductsArray);

            }
            /*function cartProd(paramArray) {

                      function addTo(curr, args) {

                        var i, copy, 
                            rest = args.slice(1),
                            last = !rest.length,
                            result = [];

                        for (i = 0; i < args[0].length; i++) {

                          copy = curr.slice();
                          copy.push(args[0][i]);

                          if (last) {
                            result.push(copy);

                          } else {
                            result = result.concat(addTo(copy, rest));
                          }
                        }

                        return result;
                      }


                      return addTo([], Array.prototype.slice.call(arguments));
                    }*/

            function cartesianProduct(a) { // a = array of array
              var i, j, l, m, a1, o = [];
              if (!a || a.length == 0) return a;

              a1 = a.splice(0, 1)[0]; // the first array of a
              a = cartesianProduct(a);
              for (i = 0, l = a1.length; i < l; i++) {
                if (a && a.length) for (j = 0, m = a.length; j < m; j++)
                  o.push([a1[i]].concat(a[j]));
                else
                  o.push([a1[i]]);
              }
              return o;
            }
            var _selectedsortby = 'title-ascending';
            function _FilterCollectionProducts(filterpageno, sortby) {
              $('#ca_filterdiv').find('*').prop('disabled', true);
              var themename = Shopify.theme.name;
              var themestoreid = Shopify.theme.theme_store_id;
              $('#ca_filter_loaderspinner').show();
              var productsperpage = appvariables.Filter_ProductsPerPage;
              //console.log(productsperpage);
              //$('body').append(loadingdiv);


              var producttypevalues = document.getElementById('ca_filtervalue_producttype').value;
              var vendorvalues = document.getElementById('ca_filtervalue_vendor').value;
              var option1values = document.getElementById('ca_filtervalue_option1').value;
              var option2values = document.getElementById('ca_filtervalue_option2').value;
              var option3values = document.getElementById('ca_filtervalue_option3').value;
              var discountvalues = document.getElementById('ca_filtervalue_discount').value;
              var budgetvalues = document.getElementById('ca_filtervalue_budget').value;
              var _producttypevalues = [];
              if (producttypevalues != '') {
                _producttypevalues = producttypevalues.split(',');
              }
              var filterString = '';
              var _vendorvalues = [];
              if (vendorvalues != '') {
                _vendorvalues = vendorvalues.split(',');
              }
              var _optionvalues = [];
              var _optionvaluesList = [];
              var optioninputElements = document.querySelectorAll('.ca_filter_option_inputs');


              for (var m = 0; m < optioninputElements.length; m++) {
                var optionvaluesstring = '';

                var optionName = optioninputElements[m].id;
                var _option_value = optioninputElements[m].value;
                var optionvaluesList = _option_value.split(',');
                for (var o = 0; o < optionvaluesList.length; o++) {
                  if (optionvaluesList[o] != '') {
                    _optionvaluesList.push(optionvaluesList[o]);
                  }

                }
                var _optionvaluesstring = '';
                if (_option_value != '') {
                  _optionvaluesstring = optionName + '_' + optioninputElements[m].value;
                  //_optionvaluesstring = optioninputElements[p].value;

                }
                if (_optionvaluesstring != '') {
                  _optionvalues.push(_optionvaluesstring);
                }

              }

              var _discountvalues = [];
              if (discountvalues != '') {
                _discountvalues = discountvalues.split(',');
              }
              var _budgetvalues = [];
              if (budgetvalues != '') {
                _budgetvalues = budgetvalues.split(',');
              }

              var isProductTypeAvailable = false;
              var isProductVendorAvailable = false;
              var IsOptionsAvailable = false;
              var IsPriceRangeAvailable = false;
              var IsDiscountRangeAvailable = false;
              var gridSelector = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
              gridSelector.style.opacity = 0.3;
              //console.log(_producttypevalues);
              $('html, body').animate({
                scrollTop: $(gridSelector).offset().top
              }, 'slow');
              var filteredProducts = [];
              //console.log(_collectionallproductsList.length);
               
              for (var v = 0; v<_collectionallproductsList.length; v++) {
                var products = JSON.parse(_collectionallproductsList[v]);
                //console.log(products);
                for (var p = 0; p<products.length; p++) {
                  var _variantsjson = products[p].variants;
                  isProductTypeAvailable = false;
                  isProductVendorAvailable = false;
                  IsOptionsAvailable = false;
                  IsPriceRangeAvailable = false;
                  IsDiscountRangeAvailable = false;

                  // Check Product Type
                  if (_producttypevalues.length > 0) {
                    //console.log(_producttypevalues.includes(products[p].product_type));
                    if (_producttypevalues.includes(products[p].product_type) == true) {
                      isProductTypeAvailable = true;
                    }


                  }
                  else {
                    isProductTypeAvailable = true;
                  }
                  // Check Product Vendor
                  if (_vendorvalues.length > 0) {
                    if (_vendorvalues.includes(products[p].vendor)) {
                      isProductVendorAvailable = true;
                    }

                  }
                  else {
                    isProductVendorAvailable = true;
                  }

                  // Check Options
                  //console.log(_optionvaluesList);
                  //var _optionValues = _optionvaluesList.split(',');

                  var _isOptionAvailableList = [];
                  var _isOptionAvailable = false;
                  //console.log(_optionvalues);
                  if (_optionvalues.length > 0) {

                    for (var b = 0; b<_optionvalues.length; b++) {
                      _isOptionAvailable = false;
                      //console.log(_optionvalues[b]);
                      var _optionName = _optionvalues[b].split('_')[0];
                      var _optionValues = _optionvalues[b].split('_')[1];
                      //console.log(_optionValues);
                      if (_optionValues != undefined) {
                        var option_ValuesList = _optionValues.split(',');

                        for (var o = 0; o < option_ValuesList.length; o++) {
                          var _optionvalue = option_ValuesList[o].replace('-', ' ');

                          var variantslist = getObjects(_variantsjson, 'option1', _optionvalue);
                          //console.log(variantslist);
                          if (variantslist.length == 0) {
                            variantslist = getObjects(_variantsjson, 'option2', _optionvalue);
                            // console.log(variantslist);
                          }
                          else {
                            _isOptionAvailable = true;

                          }
                          if (variantslist.length == 0) {
                            variantslist = getObjects(_variantsjson, 'option3', _optionvalue);
                          }
                          else {
                            _isOptionAvailable = true;

                          }

                        }
                      }
                      else {
                        _isOptionAvailable = true;
                        _isOptionAvailableList.push(_isOptionAvailable);
                      }

                      //console.log(_isOptionAvailable);
                      _isOptionAvailableList.push(_isOptionAvailable);

                    }
                  }
                  else {
                    _isOptionAvailable = true;
                  }

                  //console.log(_isOptionAvailableList);

                  var lengthofOptionsAvailableCount = _isOptionAvailableList.length;
                  var _lengthofOptionsAvailableCount = 0;

                  for (var n = 0; n<_isOptionAvailableList.length; n++) {
                    if (_isOptionAvailableList[n] == true) {
                      _lengthofOptionsAvailableCount = _lengthofOptionsAvailableCount + 1;
                    }
                  }
                  if (_lengthofOptionsAvailableCount == lengthofOptionsAvailableCount) {
                    IsOptionsAvailable = true;
                  }
                  else {
                    IsOptionsAvailable = false;
                  }

                  // Check Discount
                  var discountp = products[p].discountp;
                  //console.log(_discountvalues);
                  if (_discountvalues.length > 0) {
                    for (var d = 0; d < _discountvalues.length; d++) {

                      if (_discountvalues[d] == 'Under25') {
                        if (discountp <= 25) {
                          IsDiscountRangeAvailable = true;
                        }
                      }
                      if (_discountvalues[d] == '26-50') {
                        if (discountp > 25 && discountp <= 50) {
                          IsDiscountRangeAvailable = true;
                        }
                      }
                      if (_discountvalues[d] == '51-75') {
                        if (discountp > 50 && discountp <= 75) {
                          IsDiscountRangeAvailable = true;
                        }
                      }
                      if (_discountvalues[d] == 'Above75') {
                        if (discountp > 75) {
                          IsDiscountRangeAvailable = true;
                        }
                      }
                    }
                  }
                  else {
                    IsDiscountRangeAvailable = true;
                  }
                  // Check Price Range
                  var _minprice = products[p].minprice;
                  //console.log(_budgetvalues);
                  if (_budgetvalues.length > 0) {
                    for (var b = 0; b < _budgetvalues.length; b++) {
                      var pricestring = _budgetvalues[b];
                      var minprice = pricestring.split('_')[0];
                      var maxprice = pricestring.split('_')[1];
                      if (_minprice >= minprice && _minprice <= maxprice) {
                        IsPriceRangeAvailable = true;
                      }
                    }
                  }
                  else {
                    IsPriceRangeAvailable = true;
                  }
                  //console.info(isProductTypeAvailable, isProductVendorAvailable, IsOptionsAvailable, IsPriceRangeAvailable, IsDiscountRangeAvailable);
                  if (isProductTypeAvailable == true && isProductVendorAvailable == true &&
                      IsOptionsAvailable == true && IsPriceRangeAvailable == true &&
                      IsDiscountRangeAvailable == true) {
                    filteredProducts.push(products[p]);
                  }
                }

              }
              console.log(filteredProducts);
              // Sorting
             var sortElement = document.getElementById('ca_filter_sortbyselect');
              var sortby = sortElement.value;
              var _filteredProducts;
              if (sortby == 'title-ascending') {
                _filteredProducts = filteredProducts.sort(GetSortOrderA("title"));
              }
              if (sortby == 'title-descending') {
                _filteredProducts = filteredProducts.sort(GetSortOrderD("title"));
              }
              if (sortby == 'best-selling') {
                _filteredProducts = filteredProducts;
              }
              if (sortby == 'price-ascending') {
                _filteredProducts = filteredProducts.sort(function (a, b) { return a.minprice - b.minprice });
                //_filteredProducts = filteredProducts.sort(GetSortOrderPrice_A("minprice"));
              }
              if (sortby == 'price-descending') {
                _filteredProducts = filteredProducts.sort(function (a, b) { return b.minprice - a.minprice });
                //_filteredProducts = filteredProducts.sort(GetSortOrderPrice_D("minprice"));
              }
              console.log(_filteredProducts);
              var first20products = _filteredProducts.slice(0, 20);
              var producthandlesstring = '';
              if (first20products.length > 0) {
                for (var f = 0; f < first20products.length; f++) {
                  if (producthandlesstring == '') {
                    producthandlesstring = first20products[f].handle;
                  }
                  else {
                    producthandlesstring = producthandlesstring + ',' + first20products[f].handle;
                  }
                }

                console.log(producthandlesstring);
                var myRequest = collectionpageurl + '?sort_by=' + sortby + '&page=1' + '?products=' + producthandlesstring;
                console.log(myRequest);
                fetch(myRequest).then(function (response) {
                  return response.text().then(function (text) {
                    var _productgrid = new DOMParser().parseFromString(text, "text/html");
                    var productgrid = _productgrid.querySelector(appvariables.Filter_GridQuerySelector);                  
                    $(gridSelector).html('');
                    gridSelector.innerHTML = productgrid.innerHTML;
                    gridSelector.style.opacity = 1;
                    $('#ca_filter_loaderspinner').hide();

                    // COlor Swatches             
                    var colorswatchdivs = document.querySelectorAll('.swatchy_c_colordiv');

                    for (var c = 0; c < colorswatchdivs.length; c++) {

                      colorswatchdivs[c].style.display = 'inline-block';
                      var colorname = colorswatchdivs[c].getAttribute('swatchy-data-color');
                      var _colorvalue = colorcodesjson[colorname];
                      colorswatchdivs[c].style.BackgroundImage = 'none';
                      //console.log(_colorvalue);
                      colorswatchdivs[c].style.backgroundColor = '#' + _colorvalue;
                      if (appvariables.Swatch_IsCircular == true) {
                        colorswatchdivs[c].style.borderRadius = '50%';
                      }

                      //colorswatchdivs[c].style.BackgroundSize = 'cover';
                      $(colorswatchdivs[c]).css("background-image", "");


                    }

                    tippy('.swatchy_c_colordiv', {
                      arrow: true,
                      theme: 'swatchytheme'
                    });
                  });
                }).catch(function (err) {
                  console.log("Something went wrong!", err);
                });
              }
              else {

                if (gridSelector != null) {
                  $(gridSelector).html('');
                  $('#ca_filter_loaderspinner').hide();
                }
              }
              $('#ca_filterdiv').find('*').prop('disabled', false);

            }

            $('body').on('change', '#ca_filter_sortbyselect', function (e) {
              e.preventDefault();
              var selectedsortby = e.currentTarget.value;
              console.log(selectedsortby);
              var filterHiddenInputs = document.querySelectorAll('.ca_filter_hiddeninput');
              var filterValuesList = [];
              for (var f = 0; f < filterHiddenInputs.length; f++) {
                var filterinputvalue = filterHiddenInputs[f].value;
                if (filterinputvalue != '') {
                  filterValuesList.push(filterinputvalue);
                }
              }
              var optioninputs = document.querySelectorAll('.ca_filter_option_inputs');
              for (var o = 0; o < optioninputs.length; o++) {
                var filterinputvalue = optioninputs[o].value;
                if (filterinputvalue != '') {
                  filterValuesList.push(filterinputvalue);
                }
              }
              console.log(filterValuesList);
              console.log(filterValuesList.length);
              if (filterValuesList.length > 0) {

                //alert(selectedsortby);
                console.log(selectedsortby);
                _FilterCollectionProducts(1, selectedsortby);
              }
              /*else
                        {
                          var urlstring = window.location.href.split('?')[0];
                          window.location = urlstring + '?sort_by=' + selectedsortby;
                        }*/

            });

            function LoadFilterCollectionProducts() {
              //console.log(first20products);
              //console.log(collectionpageurl);
              console.log(producthandlesstring);
              var myRequest = collectionpageurl + '?sort_by=' + ca_filter_sortby + '&page=1' + '?products=' + producthandlesstring;
              fetch(myRequest).then(function (response) {
                return response.text().then(function (text) {
                  var _productgrid = new DOMParser().parseFromString(text, "text/html");
                  var productgrid = _productgrid.querySelector(appvariables.Filter_GridQuerySelector);

                  $(gridSelector).html('');
                  gridSelector.innerHTML = productgrid.innerHTML;
                  gridSelector.style.opacity = 1;
                  $('#ca_filter_loaderspinner').hide();

                  // COlor Swatches             
                  var colorswatchdivs = document.querySelectorAll('.swatchy_c_colordiv');

                  for (var c = 0; c < colorswatchdivs.length; c++) {

                    colorswatchdivs[c].style.display = 'inline-block';
                    var colorname = colorswatchdivs[c].getAttribute('swatchy-data-color');
                    var _colorvalue = colorcodesjson[colorname];
                    colorswatchdivs[c].style.BackgroundImage = 'none';
                    console.log(_colorvalue);
                    colorswatchdivs[c].style.backgroundColor = '#' + _colorvalue;
                    if (appvariables.Swatch_IsCircular == true) {
                      colorswatchdivs[c].style.borderRadius = '50%';
                    }

                    //colorswatchdivs[c].style.BackgroundSize = 'cover';
                    $(colorswatchdivs[c]).css("background-image", "");


                  }

                  tippy('.swatchy_c_colordiv', {
                    arrow: true,
                    theme: 'swatchytheme'
                  });


                });
              }).catch(function (err) {
                console.log("Something went wrong!", err);
              });
            }
            function FilterCollectionProducts(filterpageno) {
              $('#ca_filterdiv').find('*').prop('disabled', true);
              var themename = Shopify.theme.name;
              var themestoreid = Shopify.theme.theme_store_id;
              /*var loadingdiv = document.getElementById('ca_filter_loaderspinner');
                        loadingdiv.style.position = 'fixed';
                        loadingdiv.style.left = '50%';
                        loadingdiv.style.top = '50%';
                        loadingdiv.style.display = 'inline-block';

                        //console.log(productsperpage);
                        $('body').append(loadingdiv);*/
              var productsperpage = appvariables.Filter_ProductsPerPage;
              var producttypevalues = document.getElementById('ca_filtervalue_producttype').value;
              var vendorvalues = document.getElementById('ca_filtervalue_vendor').value;
              var option1values = document.getElementById('ca_filtervalue_option1').value;
              var option2values = document.getElementById('ca_filtervalue_option2').value;
              var option3values = document.getElementById('ca_filtervalue_option3').value;
              var discountvalues = document.getElementById('ca_filtervalue_discount').value;
              var budgetvalues = document.getElementById('ca_filtervalue_budget').value;
              var _producttypevalues = [];
              if (producttypevalues != '') {
                _producttypevalues = producttypevalues.split(',');
              }
              var filterString = '';
              var _vendorvalues = [];
              if (vendorvalues != '') {
                _vendorvalues = vendorvalues.split(',');
              }
              var _option1values = [];
              if (option1values != '') {
                _option1values = option1values.split(',');
              }
              var _option2values = [];
              if (option2values != '') {
                _option2values = option2values.split(',');
              }
              var _option3values = [];
              if (option3values != '') {
                _option3values = option3values.split(',');
              }
              var _discountvalues = [];
              if (discountvalues != '') {
                _discountvalues = discountvalues.split(',');
              }
              var _budgetvalues = [];
              if (budgetvalues != '') {
                _budgetvalues = budgetvalues.split(',');
              }
              var productLayoutDiv = document.querySelectorAll(appvariables.Filter_GridQuerySelector);
              var filteredproductsurlArray = [];
              var filterstring_producttype = '';
              var filterstring_vendor = '';
              var filterstring_option1 = '';
              var filterstring_option2 = '';
              var filterstring_option3 = '';
              var filterstring_pricerange = '';
              var filterstring_discount = '';
              var filterstring = '';
              if (productLayoutDiv != null) {
                //console.log(_discountvalues);
                //console.log(cartesianProduct([["1","2"], ["100", "200", "300"]]));
                var filterArrays = [];

                if (_option1values.length > 0) {
                  filterArrays.push(_option1values);
                }
                if (_option2values.length > 0) {
                  filterArrays.push(_option2values);
                }
                if (_option3values.length > 0) {
                  filterArrays.push(_option3values);
                }
                if (_discountvalues.length > 0) {
                  for (var d = 0; d < _discountvalues.length; d++) {
                    _discountvalues[d] = 'discount_' + _discountvalues[d];
                  }
                  filterArrays.push(_discountvalues);
                }
                if (_budgetvalues.length > 0) {
                  for (var d = 0; d < _budgetvalues.length; d++) {
                    _budgetvalues[d] = 'pricerange_' + _budgetvalues[d];
                  }
                  filterArrays.push(_budgetvalues);
                }
                if (_producttypevalues.length > 0) {
                  filterArrays.push(_producttypevalues);
                  for (var t = 0; t < _producttypevalues.length; t++) {
                    if (filterstring_producttype == '') {
                      filterstring_producttype = _producttypevalues[t];
                    }
                    else {
                      filterstring_producttype = filterstring_producttype + ',' + _producttypevalues[t];
                    }
                  }

                }
                filterstring_producttype = '?caftype=' + filterstring_producttype;
                if (_vendorvalues.length > 0) {
                  filterArrays.push(_vendorvalues);
                  for (var t = 0; t < _vendorvalues.length; t++) {
                    if (filterstring_vendor == '') {
                      filterstring_vendor = _vendorvalues[t];
                    }
                    else {
                      filterstring_vendor = filterstring_vendor + ',' + _vendorvalues[t];
                    }
                  }

                }

                // OptionValues
                var optioninputElements = document.querySelectorAll('.ca_filter_option_inputs');
                var optionvaluesstring = '';
                for (var p = 0; p < optioninputElements.length; p++) {
                  var optionName = optioninputElements[p].id;
                  var _optionvaluesstring = '?caf' + optionName + '=' + optioninputElements[p].value;
                  if (optionvaluesstring == '') {
                    optionvaluesstring = _optionvaluesstring;
                  }
                  else {
                    optionvaluesstring = optionvaluesstring + _optionvaluesstring;
                  }
                }
                //console.log(optionvaluesstring);
                filterstring_vendor = '?cafvendor=' + filterstring_vendor;
                //console.log(filterArrays);
                filterstring = optionvaluesstring + filterstring_producttype + filterstring_vendor;
                var FilterUrls = cartesianProduct(filterArrays);
                //console.log(FilterUrls);
                /*for(var f=0; f<FilterUrls.length; f++)
                            {
                              //console.log(FilterUrls[f]);



                            }*/

                filteredproductsurlArray.push({ url: window.location.href + filterstring });

                //console.log(filteredproductsurlArray);

                $(productLayoutDiv).html('');
                var colorname = '';
                var _filteredproductsurlArray = unique(filteredproductsurlArray);
                //console.log(_filteredproductsurlArray);

                var productLayoutDiv = document.querySelectorAll(appvariables.Filter_GridQuerySelector);
                //window.open(window.location.href + '/' + _option2values[0], '_self');
                $.parallelAjax(_filteredproductsurlArray, function (response) {
                  //console.log(_filteredproductsurlArray);
                  //console.info('success', response);
                  for (let h = 0; h < response.length; h++) {
                    var responseurl = _filteredproductsurlArray[h].url;

                    var responseurllist = responseurl.split('/');

                    var optionnamestring = responseurllist[responseurllist.length - 1];
                    var optionnamelist = optionnamestring.split('+');
                    var optionname = optionnamelist[0];
                    var responsehtml = new DOMParser().parseFromString(response[h], "text/html");

                    var responsehtmlproductsul = responsehtml.querySelectorAll(appvariables.Filter_GridQuerySelector);
                    if (responsehtmlproductsul[0] != null) {
                      var responsehtmlproductslist = responsehtmlproductsul[0].children;

                      optionname = optionname.split('?')[0];
                      optionname = optionname.replace('-', ' ');
                      //console.log(optionname);
                      var productsList = [];
                      /*for(var r=0; r<responsehtmlproductslist.length; r++)
                                        {
                                          var productimagesrc = responsehtmlproductslist[r].getAttribute('data-productimagesrc');
                                          var variantsjson = responsehtmlproductslist[r].getAttribute('data-variantsjson');
                                          var _variantsjson = JSON.parse(variantsjson);
                                          var producttype = responsehtmlproductslist[r].getAttribute('data-type');
                                          var vendor = responsehtmlproductslist[r].getAttribute('data-vendor');
                                          for(var o=0; o<optionnamelist.length; o++)
                                          {
                                            var optionnameString = optionnamelist[o].split('?')[0];
                                            optionnameString = optionnameString.replace('-', ' ');

                                            var variantslist = getObjects(_variantsjson, 'type', optionnameString);

                                            if(variantslist.length == 0)
                                            {
                                              var variantslist = getObjects(_variantsjson, 'option1', optionnameString);
                                            }
                                            if(variantslist.length == 0)
                                            {
                                              variantslist = getObjects(_variantsjson, 'option2', optionnameString);
                                            }
                                            if(variantslist.length == 0)
                                            {
                                              variantslist = getObjects(_variantsjson, 'option3', optionnameString);
                                            }
                                            if(variantslist.length == 0)
                                            {
                                              variantslist = getObjects(_variantsjson, 'type', optionnameString);
                                              if(variantslist.length > 0)
                                              {
                                                productsList.push(responsehtmlproductslist[r].getAttribute('data-productimagesrc'));
                                              }
                                            }
                                             if(variantslist.length == 0)
                                            {
                                              variantslist = getObjects(_variantsjson, 'vendor', optionnameString);
                                              if(variantslist.length > 0)
                                              {
                                                productsList.push(responsehtmlproductslist[r].getAttribute('data-productimagesrc'));
                                              }
                                            }

                                          }
                                          //console.log(variantslist);
                                          var variantimagesrc;
                                          if(variantslist.length > 0)
                                          {
                                            if(variantslist[0].featured_image != null)
                                            {
                                              variantimagesrc = variantslist[0].featured_image.src;
                                            }
                                            else
                                            {

                                              variantimagesrc = productimagesrc;
                                            }
                                          }
                                          else
                                          {
                                            variantimagesrc = productimagesrc;

                                          }*/


                      /*var imageElements = $(responsehtmlproductslist[r]).find('img');
                                          //console.log(imageElements[0]);
                                          var imageHeight = imageElements[0].clientHeight;
                                          var imageWidth = imageElements[0].clientWidth;
                                          variantimagesrc = resizeImages(variantimagesrc, 200);
                                          //console.log(imageWidth + ',' + imageHeight);
                                          imageElements[0].setAttribute('srcset', '');
                                          imageElements[0].setAttribute('data-srcset', '');
                                          imageElements[0].src = variantimagesrc;
                                          imageElements[0].setAttribute('data-src', variantimagesrc);
                                        }*/
                      //console.log(responsehtmlproductsul);
                      $(productLayoutDiv).append(responsehtmlproductslist);
                      var gridList = document.querySelectorAll(appvariables.Filter_GridQuerySelector);
                      var allImagesList = $(gridList).find('img');
                      /*setTimeout(function(){  


                                        for(var a=0; a<allImagesList.length; a++)
                                        {

                                          allImagesList[a].setAttribute('srcset', '');
                                          allImagesList[a].setAttribute('data-srcset', '');
                                        } 
                                      }, 800);*/
                    }


                  }

                  var _collectiondiv = document.querySelector(appvariables.Filter_GridQuerySelector);
                  var loadspinner = document.getElementById('ca_filter_loaderspinner');
                  loadspinner.style.display = 'none';
                  var allatagsinGrid = $(_collectiondiv).find('img');



                  var filterpageInput = document.getElementById('ca_swatchfilter_page');
                  filterpageInput.value = filterpageno;
                  var urlstring = '';
                  for (var u = 0; u < _filteredproductsurlArray.length; u++) {
                    if (urlstring == '') {
                      urlstring = _filteredproductsurlArray[u].url;

                    }
                    else {
                      urlstring = urlstring + ',' + _filteredproductsurlArray[u].url;
                    }
                  }

                  filterpageInput.setAttribute('data-cafilter-url', urlstring);

                  //console.log(_ismobiledevice);
                  //console.log(filtettagdiv);
                  /* if (isfilterAvailable == false) {
                                  if (_ismobiledevice == false) {
                                    $(collectiondiv).before(filtettagdiv);
                                  }
                                }*/
                  $('#ca_filterdiv').find('*').prop('disabled', false);

                  // Swatches
                  var colorswatchDivs = document.querySelectorAll('.swatch_c_swatchdiv');
                  var colorswatchElements = document.querySelectorAll('.swatchy_c_colordiv');
                  //console.log(colorswatchElements);
                  for (var c = 0; c < colorswatchElements.length; c++) {
                    colorswatchElements[c].style.borderRadius = '50%';
                  }
                  console.log(appvariables);
                  var swatchcolorelements = document.querySelectorAll('.swatchy_c_colordiv');
                  //console.log(swatchcolorelements);
                  for (s = 0; s < swatchcolorelements.length; s++) {
                    swatchcolorelements[s].style.width = appvariables.Swatch_Size + 'px';
                    swatchcolorelements[s].style.height = appvariables.Swatch_Size + 'px';
                    swatchcolorelements[s].style.lineHeight = appvariables.Swatch_Size + 'px';
                    swatchcolorelements[s].style.verticalAlign = 'middle';
                    swatchcolorelements[s].style.backgroundClip = 'content-box';
                    if (appvariables.Swatch_IsCircular == true) {
                      swatchcolorelements[s].style.borderRadius = '50%';

                    }
                    else {
                      swatchcolorelements[s].style.borderRadius = '2px';
                    }

                    //console.log(swatchyp_swatchtype);
                    if (appvariables.SwatchType == 0) {
                      //swatchcolorelements[s].style.borderRadius = '50%';
                      swatchcolorelements[s].style.backgroundSize = 'cover';

                    }
                    if (appvariables.SwatchType == 1) {

                    }
                    if (appvariables.SwatchType == 2) {
                      var colorcodes = appvariables.Swatch_SolidColors;
                      var colorcodeslist = colorcodes.split(',');

                      var _colorname = swatchcolorelements[s].getAttribute('swatchy-data-color');

                      for (var c = 0; c < colorcodeslist.length; c++) {

                        var colorname = colorcodeslist[c].split('_')[0];
                        colorname = colorname.replace('andsymbol', '&');
                        colorname = colorname.replace('plussymbol', '+');
                        var colorvalue = colorcodeslist[c].split('_')[1];
                        //console.log(_colorname + ',' + colorname + ',' + colorvalue);
                        if (_colorname == colorname) {
                          swatchcolorelements[s].style.backgroundImage = 'none';
                          swatchcolorelements[s].style.backgroundColor = '#' + colorvalue;
                        }
                      }

                    }

                  }

                  tippy('.swatchy_c_colordiv', {
                    arrow: true,
                    theme: 'swatchytheme'
                  });
                }, function (error) {
                  console.info('error', error);
                }, 15000);



              }
            }
            $('body').on('click', '.product-card', function (e) {
              var divElement = e.currentTarget;
              var producturl = divElement.getAttribute('caf-data-producturl');
              window.location = 'https://' + window.location.hostname + producturl;
            });

            $('body').on('hover', '.ca_f_productimage', function (e) {
              var imageElement = e.currentTarget;

            });
            $('body').on('click', '#ca_swatchy_filtery_viewmorebtn', function (e) {
              //console.log('scrolling....');

              //$('#ca_filter_paginationdiv').hide();
              var FilterpageInput = document.getElementById('ca_swatchfilter_page');
              var oldpageNo = FilterpageInput.value * 1;
              var productsperpage = appvariables.Filter_ProductsPerPage * 1;
              var totalproducts = ca_collectionproductscount * 1;
              var noofpages = (totalproducts / productsperpage);
              noofpages = Math.ceil(noofpages);
              var noofpagesminusone = noofpages - 1;
              if (oldpageNo < noofpages) {
                // Show Button
                var newPageNo = (FilterpageInput.value * 1) + 1;
                //console.log(newPageNo);
                FilterpageInput.value = newPageNo;
                var filterpageurls = FilterpageInput.getAttribute('data-cafilter-url');
                var filterpageurlstringList = filterpageurls.split(',');
                var _filteredproductsurlArray = [];
                for (var f = 0; f < filterpageurlstringList.length; f++) {
                  var filterpageurlstring = filterpageurlstringList[f].split('?')[0];
                  filterpageurlstring = filterpageurlstring + '?page=' + newPageNo;
                  _filteredproductsurlArray.push({ url: filterpageurlstring });
                }

                //console.log(_filteredproductsurlArray);
                $.parallelAjax(_filteredproductsurlArray, function (response) {
                  //console.log(_filteredproductsurlArray);
                  //console.info('success', response);
                  for (let h = 0; h < response.length; h++) {
                    var responseurl = _filteredproductsurlArray[h].url;


                    var responsehtml = new DOMParser().parseFromString(response[h], "text/html");

                    var responsehtmlproductsul = responsehtml.querySelectorAll(appvariables.Filter_GridQuerySelector);
                    var responsehtmlproductslist = responsehtmlproductsul[0].children;
                    var productLayoutDiv = document.querySelectorAll(appvariables.Filter_GridQuerySelector);

                    //console.log(responsehtmlproductsul);
                    $(productLayoutDiv).append(responsehtmlproductslist);

                    var paginationelementdiv = document.getElementById('ca_swatchy_filtery_viewmorebtn');
                    //$(productLayoutDiv).after(paginationelementdiv);

                    var gridList = document.querySelectorAll(appvariables.Filter_GridQuerySelector);
                    var allImagesList = $(gridList).find('img');
                    /*setTimeout(function(){  


                                      for(var a=0; a<allImagesList.length; a++)
                                      {

                                        allImagesList[a].setAttribute('srcset', '');
                                        allImagesList[a].setAttribute('data-srcset', '');
                                      } 
                                    }, 800);*/

                  }

                  var _collectiondiv = document.querySelector(appvariables.Filter_GridQuerySelector);
                  var loadspinner = document.getElementById('ca_filter_loaderspinner');
                  loadspinner.style.display = 'none';
                  var allatagsinGrid = $(_collectiondiv).find('img');



                  var filterpageInput = document.getElementById('ca_swatchfilter_page');
                  filterpageInput.value = newPageNo;
                  var urlstring = '';
                  for (var u = 0; u < _filteredproductsurlArray.length; u++) {
                    if (urlstring == '') {
                      urlstring = _filteredproductsurlArray[u].url;

                    }
                    else {
                      urlstring = urlstring + ',' + _filteredproductsurlArray[u].url;
                    }
                  }

                  filterpageInput.setAttribute('data-cafilter-url', urlstring);

                  if (newPageNo == noofpages) {
                    $('#ca_filter_paginationdiv').hide();
                  }
                  //console.log(_ismobiledevice);
                  //console.log(filtettagdiv);
                  /* if (isfilterAvailable == false) {
                                  if (_ismobiledevice == false) {
                                    $(collectiondiv).before(filtettagdiv);
                                  }
                                }*/
                  $('#ca_filterdiv').find('*').prop('disabled', false);
                }, function (error) {
                  console.info('error', error);
                }, 8000);
              }
              else {
                $('#ca_filter_paginationdiv').hide();
              }

            });
            /*$(document).on('scroll', function() {
                      //console.log('scrolling....');

                      var paginationElement = document.getElementById('ca_filter_paginationdiv');
                      const top = paginationElement.getBoundingClientRect().top - 0;
                      const bottom = paginationElement.getBoundingClientRect().bottom + 0;

                      if (top <= window.innerHeight && bottom >= 0) {
                        //console.log('page div scrolled');

                      }
                      if($(this).scrollTop() >= $('#ca_filter_paginationdiv').position().top ){

                      }
                    });*/
            var leftfilterdiv = document.getElementById('ca_filterdiv');
            if (_iscollectionpage == 'true') {
              //var collectionname = 'https://www.waldenhomedecor.com/collections/area-rugs';
              //var collectionurl = 'https://www.waldenhomedecor.com/collections/area-rugs';
              //console.log(_iscollectionpage);
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + domainName + "/collections/" + _collectionname + ".json",
                "method": "GET",
                "headers": {
                  "cache-control": "no-cache",
                }
              }

              $.ajax(settings).done(function (response) {
                //console.log(response);
                var collectionjson = response.collection;
                var collectionid = collectionjson.id;
                //LoadCollectionFilters(_collectionname, _ismobiledevice, collectionid, 1);
              });


            }
            $('#ca_filter_paginationdiv').on('click', '.ca_paginationPrevNextatag', function (e) {
              var prevnextbutton = e.currentTarget;
              console.log(prevnextbutton);
              var collectiondiv = document.querySelector(appvariables.Filter_GridQuerySelector);
              var buttonid = prevnextbutton.id;
              var currentpagenumberstring = $('#ca_filter_pagenospan').html();
              currentpagenumberstring = currentpagenumberstring.replace('Page ', '');
              var currentpageno = currentpagenumberstring * 1;

              var allfiltervalues = document.querySelectorAll('.ca_filter_hiddeninput');
              var allfiltervaluesArray = [];
              for (var f = 0; f < allfiltervalues.length; f++) {
                var filtervalues = allfiltervalues[f].value;
                var filtervalueslist = filtervalues.split(',');
                for (var _f = 0; _f < filtervalueslist.length; _f++) {
                  if (filtervalueslist[_f] != '') {
                    allfiltervaluesArray.push(filtervalueslist[_f]);
                  }

                }
              }

              var productsperpage = appvariables.Filter_ProductsPerPage;
              var newContainer;
              var containerElement;
              //console.log(allfiltervaluesArray);       
              if (allfiltervaluesArray.length > 0) {
                var isfilterAvailable = true;
                // Filter Applied
                if (buttonid == 'ca_paginationPrev') {
                  var _pageNo = currentpageno - 1;
                  $('#ca_filter_pagenospan').html('Page ' + _pageNo);
                }
                if (buttonid == 'ca_paginationNext') {
                  var _pageNo = currentpageno + 1;
                  var _urlstring = window.location.href;
                  var urlstring = _urlstring.split('?')[0];
                  $('#ca_filter_pagenospan').html('Page ' + _pageNo);

                }

                var newurl = window.location.href + '&page=' + _pageNo;
                newurl = newurl.replace('#', '');
                newurl = newurl.replace('&page=' + currentpageno, '');
                //console.log(newurl);
                window.history.pushState({ path: newurl }, '', newurl);
                var sliceindex = productsperpage * _pageNo;
                var filteredproductslength = filteredProductsArray.length;
                var slicedproducts;
                var currentsliceindex = currentpageno * productsperpage;
                if (_pageNo > currentpageno) {
                  // Next Page
                  if (sliceindex < filteredproductslength) {
                    slicedproducts = filteredProductsArray.slice(currentsliceindex, (productsperpage * _pageNo));
                  }
                  else {
                    slicedproducts = filteredProductsArray.slice(currentsliceindex, filteredproductslength);
                  }
                }
                //console.log(slicedproducts);
                if (_pageNo < currentpageno) {
                  // Prev Page
                  if (_pageNo == 1) {
                    slicedproducts = filteredProductsArray.slice(0, (productsperpage * _pageNo));
                  }
                  else {
                    currentsliceindex = (productsperpage * _pageNo) - productsperpage;
                    slicedproducts = filteredProductsArray.slice(currentsliceindex, (productsperpage * _pageNo));
                  }
                }
                var productspageList = [];

                var producthandlesList = [];
                for (var p = 0; p < slicedproducts.length; p++) {
                  productspageList.push(slicedproducts[p].pageno * 1);
                  //producthandlesList.push(searchedproducts[p].handle);
                  //var pagewiseproducts = JSON.search(searchedproducts, '//person[age=65]' );
                }
                //console.log(productspageList);
                var pageslistelement = document.getElementById('ca_filtery_pageslist');
                //console.log(pageslistelement);
                var pagesstring = '';
                for (var c = 0; c < productspageList.length; c++) {
                  if (pagesstring == '') {
                    pagesstring = productspageList[c];
                  }
                  else {
                    pagesstring = pagesstring + ',' + productspageList[c];
                  }
                }
                pageslistelement.value = pagesstring;
                var _productspageList = unique(productspageList);
                var containerElement = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
                $(containerElement).html('');
                var allpageElements = [];
                // Filters Applied
                var productsdataurlArray = [];
                var paginationInput = document.createElement('input');
                var productspageList = [];
                var producthandlesList = [];
                for (var p = 0; p < filteredProductsArray.length; p++) {
                  productspageList.push(filteredProductsArray[p].pageno * 1);
                  //producthandlesList.push(searchedproducts[p].handle);
                  //var pagewiseproducts = JSON.search(searchedproducts, '//person[age=65]' );
                }
                //console.log(productspageList);
                var pageslistelement = document.getElementById('ca_filtery_pageslist');
                //console.log(pageslistelement);
                var pagesstring = '';
                for (var c = 0; c < productspageList.length; c++) {
                  if (pagesstring == '') {
                    pagesstring = productspageList[c];
                  }
                  else {
                    pagesstring = pagesstring + ',' + productspageList[c];
                  }
                }
                pageslistelement.value = pagesstring;
                var _productspageList = unique(productspageList);
                //console.log(productsperpage);
                var containerElement = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
                $(containerElement).html('');
                var filtetedDiv = [];
                var slicestartindex = 0;
                var sliceEndindex = 0;
                var filteredproductslength = filteredProductsArray.length;
                if (_pageNo == 1) {
                  slicestartindex = 0;
                }
                else {
                  slicestartindex = (_pageNo - 1) * productsperpage;
                }
                slicedproducts = filteredProductsArray.slice(slicestartindex, (slicestartindex + productsperpage));
                //console.log(slicedproducts);
                //console.log(_productspageList);

                for (var w = 0; w < _productspageList.length; w++) {
                  productsdataurlArray.push({ url: collectionpageurl + '?sort_by=title-ascending&page=' + _productspageList[w] });
                }

                //console.log(productsdataurlArray);
                $.parallelAjax(productsdataurlArray, function (response) {

                  var newContainer;
                  var containerElement;
                  var _Children;
                  //console.log(response);
                  //console.log(slicedproducts);

                  console.log(collectiondiv);
                  $('html, body').animate({
                    scrollTop: $(collectiondiv).offset().top
                  }, 2000);

                  for (let h = 0; h < response.length; h++) {
                    var responsehtml = new DOMParser().parseFromString(response[h], "text/html");
                    var requesturl = productsdataurlArray[h].url;
                    var requesturllist = requesturl.split('?')[1];
                    var requsturlstring = requesturllist.replace('sort_by=title-ascending&page=', '');
                    var _pageNo = requsturlstring * 1;
                    newContainer = responsehtml.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
                    containerElement = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];

                    _Children = newContainer.children;
                    for (var s = 0; s < slicedproducts.length; s++) {
                      var productindex = (slicedproducts[s].ProductIndexInPage * 1) - 1;
                      var pageno = slicedproducts[s].pageno * 1;
                      var productindexinpage = slicedproducts[s].ProductIndexInPage * 1;
                      var _productindexinpage = s + 1;
                      //console.log(_pageNo + '-' + pageno);

                      if (_pageNo == pageno) {
                        //console.log(_pageNo + '-' + pageno + ',' + (productindexinpage - 1));
                        containerElement = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
                        //console.log(containerElement);
                        //console.log(containerElement.children);
                        //_Children[productindexinpage - 1].setAttribute('data-pageno', _pageNo);
                        containerElement.insertAdjacentHTML('beforeend', _Children[productindexinpage - 1].outerHTML);


                      }

                    }
                  }

                  if (_ismobiledevice == true) {
                    // Close Filter Div
                    _ca_filter_modal.close();

                  }

                  var loadspinner = document.getElementById('ca_filter_loaderspinner');
                  loadspinner.style.display = 'none';
                  //console.log(_ismobiledevice);
                  //console.log(filtettagdiv);
                  if (isfilterAvailable == false) {
                    if (_ismobiledevice == false) {
                      $(collectiondiv).before(filtettagdiv);
                    }
                  }
                  $('#ca_filterdiv').find('*').prop('disabled', false);

                  // COlor Swatches
                  var colorswatchdivs = document.querySelectorAll('.swatchy_colordiv');

                  for (var c = 0; c < colorswatchdivs.length; c++) {
                    var colorname = colorswatchdivs[c].getAttribute('swatchy-data-color');
                    var _colorvalue = colorcodesjson[colorname];
                    colorswatchdivs[c].style.BackgroundImage = 'none';
                    //console.log(colorswatchdivs[c]);
                    colorswatchdivs[c].style.backgroundColor = '#' + _colorvalue;
                    if (appvariables.Swatch_IsCircular == true) {
                      colorswatchdivs[c].style.borderRadius = '50%';
                    }

                    //colorswatchdivs[c].style.BackgroundSize = 'cover';
                    $(colorswatchdivs[c]).css("background-image", "");


                  }

                  // Discount Percentage
                  var productdivs = $('[data-productid]');
                  console.log(productdivs);
                  for (var p = 0; p < productdivs.length; p++) {
                    var productid = productdivs[p].getAttribute('data-productid');
                    var _aElement = $(productdivs[p]).find('a')[0];
                    var discountinput = $('input[name="ca_filterapp_input_' + productid + '"]')[0];
                    if (discountinput != null) {
                      var discountvaluestring = discountinput.value;

                      if (discountvaluestring != '') {
                        var discountsList = discountvaluestring.split('_');
                        var _mindiscountp = Math.min.apply(Math, discountsList);
                        var _maxdiscountp = Math.max.apply(Math, discountsList);
                        //console.log(_maxdiscountp);
                        //console.log(_maxdiscountp);
                        var discountp = _maxdiscountp;
                        var discountspan = document.createElement('span');
                        if (_mindiscountp < _maxdiscountp) {
                          discountspan.innerHTML = _mindiscountp + '% - ' + discountp + '% OFF';
                        }
                        else {
                          discountspan.innerHTML = discountp + '% OFF';
                        }

                        discountspan.style.backgroundColor = '#000';
                        discountspan.style.padding = '5px';
                        discountspan.style.position = 'relative';
                        discountspan.style.color = '#fff';
                        discountspan.style.top = '0px';
                        discountspan.style.left = '0px';
                        discountspan.style.verticalAlign = 'middle';
                        discountspan.style.textAlign = 'center';
                        $(_aElement).append(discountspan);
                      }
                    }

                  }


                }, function (error) {
                  console.info('error', error);
                }, 8000);



              }
              else {
                //console.log('filter not applied');
                // Filter Not Applied
                if (buttonid == 'ca_paginationPrev') {
                  var _pageNo = currentpageno - 1;
                  $('#ca_filter_pagenospan').html('Page ' + _pageNo);
                }
                if (buttonid == 'ca_paginationNext') {
                  var _pageNo = currentpageno + 1;
                  var _urlstring = window.location.href;
                  var urlstring = _urlstring.split('?')[0];
                  $('#ca_filter_pagenospan').html('Page ' + _pageNo);

                }
                var newurl = window.location.href + '&page=' + _pageNo;
                newurl = newurl.replace('#', '');
                newurl = newurl.replace('&page=' + currentpageno, '');
                //console.log(newurl);
                window.history.pushState({ path: newurl }, '', newurl);
                //console.log(_pageNo);
                var newContainer;
                var containerElement;

                //var _pageNo = 1;
                var request = new XMLHttpRequest();

                request.onreadystatechange = function success(e) {
                  if (this.readyState === 4 && this.status === 200) {

                    //console.log(e.currentTarget.responseURL);
                    // var _pageNostring = e.currentTarget.responseURL.split('?')[1];
                    //var _pageNo = _pageNostring.replace('sort_by=title-ascending&page=', '');
                    //_pageNo = _pageNo * 1;
                    newContainer = this.responseXML.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];
                    containerElement = document.querySelectorAll(appvariables.Filter_GridQuerySelector)[0];

                    $(containerElement).html('');
                    //var colorswatchdivs_container = newContainer.querySelector(appvariables.Filter_GridQuerySelector);
                    var colorswatchdivs = newContainer.querySelectorAll('.swatchy_colordiv');
                    //console.log(colorswatchdivs);
                    for (var c = 0; c < colorswatchdivs.length; c++) {
                      var colorname = colorswatchdivs[c].getAttribute('swatchy-data-color');
                      var _colorvalue = colorcodesjson[colorname];
                      colorswatchdivs[c].style.BackgroundImage = 'none';
                      //console.log(colorswatchdivs[c]);
                      colorswatchdivs[c].style.backgroundColor = '#' + _colorvalue;
                      if (appvariables.Swatch_IsCircular == true) {
                        colorswatchdivs[c].style.borderRadius = '50%';
                      }
                      else {
                        //colorswatchdivs[c].style.borderRadius = '50%';
                      }

                      //colorswatchdivs[c].style.BackgroundSize = 'cover';
                      $(colorswatchdivs[c]).css("background-image", "");
                    }

                    // Discount Percentage
                    var productdivs = newContainer.querySelectorAll('[data-productid]');

                    for (var p = 0; p < productdivs.length; p++) {
                      var productid = productdivs[p].getAttribute('data-productid');

                      var _aElement = $(productdivs[p]).find('a')[0];
                      var discountinput = newContainer.querySelectorAll('input[name="ca_filterapp_input_' + productid + '"]')[0];
                      console.log(discountinput);
                      if (discountinput != null) {
                        var discountvaluestring = discountinput.value;

                        if (discountvaluestring != '') {
                          var discountsList = discountvaluestring.split('_');
                          var _mindiscountp = Math.min.apply(Math, discountsList);
                          var _maxdiscountp = Math.max.apply(Math, discountsList);
                          //console.log(_maxdiscountp);
                          //console.log(_maxdiscountp);
                          var discountp = _maxdiscountp;
                          var discountspan = document.createElement('span');
                          if (_mindiscountp < _maxdiscountp) {
                            discountspan.innerHTML = _mindiscountp + '% - ' + discountp + '% OFF';
                          }
                          else {
                            discountspan.innerHTML = discountp + '% OFF';
                          }

                          discountspan.style.backgroundColor = '#000';
                          discountspan.style.padding = '5px';
                          discountspan.style.position = 'relative';
                          discountspan.style.color = '#fff';
                          discountspan.style.top = '0px';
                          discountspan.style.left = '0px';
                          discountspan.style.verticalAlign = 'middle';
                          discountspan.style.textAlign = 'center';
                          $(_aElement).append(discountspan);
                        }
                      }

                    }
                    containerElement.insertAdjacentHTML('beforeend', newContainer.innerHTML);
                    containerElement.style.visibility = 'visible';

                    $('html, body').animate({
                      scrollTop: $(collectiondiv).offset().top
                    }, 2000);


                  }

                };
                //console.log(collectionpageurl + '?sort_by=title-ascending&page=' + _pageNo);
                request.open('GET', collectionpageurl + '?sort_by=title-ascending&page=' + _pageNo);
                request.responseType = 'document';
                request.send();
              }


            });
            $('#ca_filterdiv').on('click', '.ca_filtery_checkbox', function (e) {


              var filterelement = e.currentTarget;
              var classname = filterelement.className;
              var ischecked = $(filterelement).is(':checked');
              var filtervalue = filterelement.id;
              var filteroptionName = filterelement.getAttribute('data-optionname');

              $('#ca_filterdiv').find('*').prop('disabled', true);

              if (classname.includes('ca_filtery_btn')) {

                ischecked = filterelement.getAttribute('data-ischecked');
                if (ischecked == 'true') {
                  filterelement.setAttribute('data-ischecked', 'false');
                  var innerhtmlstring = filterelement.innerHTML;
                  innerhtmlstring = innerhtmlstring.replace('✓', '');
                  filterelement.innerHTML = innerhtmlstring;
                  //filterelement.style.backgroundColor = '#fff';
                  //filterelement.style.color = '#000';
                  //filterelement.style.fontSize = '10px';
                  ischecked = false;
                }
                else {
                  filterelement.setAttribute('data-ischecked', 'true');
                  filterelement.innerHTML = '✓' + filterelement.innerHTML;
                  //filterelement.style.backgroundColor = '#436076';
                  //filterelement.style.color = '#fff';
                  //filterelement.style.fontSize = '10px';
                  ischecked = true;
                }

                if (classname.includes('ca_filtery_color_btn')) {
                  filterelement.style.color = '#fff';
                  filterelement.style.fontSize = '11px';
                }
              }
              if (classname.includes('ca_filtery_colorbtn')) {

                ischecked = filterelement.getAttribute('data-ischecked');
                if (ischecked == 'true') {
                  filterelement.setAttribute('data-ischecked', 'false');
                  var innerhtmlstring = filterelement.innerHTML;
                  filterelement.innerHTML = '';
                  filterelement.style.border = '';
                  ischecked = false;
                }
                else {
                  filterelement.setAttribute('data-ischecked', 'true');
                  filterelement.innerHTML = '✓';
                  filterelement.style.border = '1px solid #EAEAEA';
                  ischecked = true;
                }
              }

              var selectedfiltername = filterelement.id;
              var filtername = filterelement.getAttribute('data-filtername');
              // Product Type
              if (filtername == 'ca_filter_producttype') {
                var oldproducttype = document.getElementById('ca_filtervalue_producttype').value;
                var typeValue = filterelement.value;
                //typeValue = typeValue.replace(' ', '-');
                if (ischecked == true) {
                  if (oldproducttype == '') {
                    document.getElementById('ca_filtervalue_producttype').value = typeValue;
                  }
                  else {
                    document.getElementById('ca_filtervalue_producttype').value = oldproducttype + ',' + typeValue;
                  }
                }
                else {
                  var oldproducttypeList = oldproducttype.split(',');

                  var newproducttypeList = oldproducttypeList.removeByVal(selectedfiltername);

                  var newproducttypestring = '';
                  for (var v = 0; v < newproducttypeList.length; v++) {
                    var newTypeValue = newproducttypeList[v];
                    //newTypeValue = newTypeValue.replace(' ', '-');
                    if (newproducttypestring == '') {
                      newproducttypestring = newTypeValue;
                    }
                    else {
                      newproducttypestring = newproducttypestring + "," + newTypeValue;
                    }
                  }

                  document.getElementById('ca_filtervalue_producttype').value = newproducttypestring;
                }


              }
              // Vendor
              if (filtername == 'ca_filter_vendor') {
                var oldproductvendor = document.getElementById('ca_filtervalue_vendor').value;
                var vendorValue = filterelement.value;
                //vendorValue = vendorValue.replace(' ', '-');
                if (ischecked == true) {
                  if (oldproductvendor == '') {
                    document.getElementById('ca_filtervalue_vendor').value = vendorValue;
                  }
                  else {
                    document.getElementById('ca_filtervalue_vendor').value = oldproductvendor + ',' + vendorValue;
                  }
                }
                else {
                  var oldproductvendorList = oldproductvendor.split(',');
                  var newproductvendorList = oldproductvendorList.removeByVal(selectedfiltername);

                  var newproductvendorstring = '';
                  for (var v = 0; v < newproductvendorList.length; v++) {
                    var newVendorValue = newproductvendorList[v];
                    //newVendorValue = newVendorValue.replace(' ', '-');
                    if (newproductvendorstring == '') {
                      newproductvendorstring = newVendorValue;
                    }
                    else {
                      newproductvendorstring = newproductvendorstring + "," + newVendorValue;
                    }
                  }

                  document.getElementById('ca_filtervalue_vendor').value = newproductvendorstring;
                }


              }

              // Option Click
              if (filteroptionName != '' && filteroptionName != null) {
                var oldoption = document.getElementById(filteroptionName).value;

                var optionValue = filterelement.id;
                //optionValue = option1Value.replace(' ', '-');

                if (ischecked == true) {
                  if (oldoption == '') {
                    document.getElementById(filteroptionName).value = optionValue;
                  }
                  else {
                    document.getElementById(filteroptionName).value = oldoption + ',' + optionValue;
                  }
                }
                else {
                  var oldoptionList = oldoption.split(',');
                  var newoptionList = oldoptionList.removeByVal(selectedfiltername);

                  var newoptionstring = '';
                  for (var v = 0; v < newoptionList.length; v++) {
                    var newoption = newoptionList[v];
                    newoption = newoption.replace(' ', '-');
                    if (newoptionstring == '') {
                      newoptionstring = newoption;
                    }
                    else {
                      newoptionstring = newoptionstring + "," + newoption;
                    }
                  }

                  document.getElementById(filteroptionName).value = newoptionstring;
                }


              }

              // Option1
              if (filtername == 'ca_filter_option1') {
                var oldoption1 = document.getElementById('ca_filtervalue_option1').value;

                var option1Value = filterelement.id;
                option1Value = option1Value.replace(' ', '-');

                if (ischecked == true) {
                  if (oldoption1 == '') {
                    document.getElementById('ca_filtervalue_option1').value = option1Value;
                  }
                  else {
                    document.getElementById('ca_filtervalue_option1').value = oldoption1 + ',' + option1Value;
                  }
                }
                else {
                  var oldoption1List = oldoption1.split(',');
                  var newoption1List = oldoption1List.removeByVal(selectedfiltername);

                  var newoption1string = '';
                  for (var v = 0; v < newoption1List.length; v++) {
                    var newoption1 = newoption1List[v];
                    newoption1 = newoption1.replace(' ', '-');
                    if (newoption1string == '') {
                      newoption1string = newoption1;
                    }
                    else {
                      newoption1string = newoption1string + "," + newoption1;
                    }
                  }

                  document.getElementById('ca_filtervalue_option1').value = newoption1string;
                }


              }

              // Option 2        
              if (filtername == 'ca_filter_option2') {
                var oldoption2 = document.getElementById('ca_filtervalue_option2').value;
                //console.log(ischecked);
                var option2Value = filterelement.id;
                option2Value = option2Value.replace(' ', '-');
                if (ischecked == true) {
                  if (oldoption2 == '') {
                    document.getElementById('ca_filtervalue_option2').value = option2Value;
                  }
                  else {
                    document.getElementById('ca_filtervalue_option2').value = oldoption2 + ',' + option2Value;
                  }
                }
                else {
                  var oldoption2List = oldoption2.split(',');
                  var newoption2List = oldoption2List.removeByVal(selectedfiltername);

                  var newoption2string = '';
                  for (var v = 0; v < newoption2List.length; v++) {
                    var newoption2 = newoption2List[v];
                    newoption2 = newoption2.replace(' ', '-');
                    if (newoption2string == '') {
                      newoption2string = newoption2;
                    }
                    else {
                      newoption2string = newoption2string + "," + newoption2;
                    }
                  }

                  document.getElementById('ca_filtervalue_option2').value = newoption2string;
                }


              }
              // Option 3
              //console.log(filtername);
              if (filtername == 'ca_filter_option3') {

                var oldoption3 = document.getElementById('ca_filtervalue_option3').value;
                var option3Value = filterelement.id;
                option3Value = option3Value.replace(' ', '-');

                if (ischecked == true) {
                  if (oldoption3 == '') {
                    document.getElementById('ca_filtervalue_option3').value = option3Value;
                  }
                  else {
                    document.getElementById('ca_filtervalue_option3').value = oldoption3 + ',' + option3Value;
                  }
                }
                else {
                  var oldoption3List = oldoption3.split(',');
                  var newoption3List = oldoption3List.removeByVal(selectedfiltername);

                  var newoption3string = '';
                  for (var v = 0; v < newoption3List.length; v++) {
                    var newoption3 = newoption3List[v];
                    newoption3 = newoption3.replace(' ', '-');
                    if (newoption3string == '') {
                      newoption3string = newoption3;
                    }
                    else {
                      newoption3string = newoption3string + "," + newoption3;
                    }
                  }

                  document.getElementById('ca_filtervalue_option3').value = newoption3string;
                }


              }

              // Discount      
              if (filtername == 'ca_filter_discount') {

                var olddiscount = document.getElementById('ca_filtervalue_discount').value;

                var discountStringValue = filterelement.id.replace(/\%/g, '');
                discountStringValue = discountStringValue.replace(/\ /g, '');
                if (ischecked == true) {
                  if (olddiscount == '') {

                    document.getElementById('ca_filtervalue_discount').value = discountStringValue;
                  }
                  else {
                    document.getElementById('ca_filtervalue_discount').value = olddiscount + ',' + discountStringValue;
                  }
                }
                else {
                  var olddiscountList = olddiscount.split(',');
                  var newdiscountList = olddiscountList.removeByVal(selectedfiltername);

                  var newdiscountstring = '';
                  for (var v = 0; v < newdiscountList.length; v++) {
                    var discountString = newdiscountList[v].replace(/\%/g, '');
                    discountString = discountString.replace(/\ /g, '');
                    if (newdiscountstring == '') {
                      newdiscountstring = discountString;
                    }
                    else {
                      newdiscountstring = newdiscountstring + "," + discountString;
                    }
                  }

                  document.getElementById('ca_filtervalue_discount').value = newdiscountstring;
                }

              }

              // Budget      
              if (filtername == 'ca_filter_budget') {
                var budgetElement = document.getElementById('ca_filtervalue_budget');
                var oldbudget = document.getElementById('ca_filtervalue_budget').value;
                var budgetfrom = filterelement.getAttribute('data-budget-from');
                var budgetto = filterelement.getAttribute('data-budget-to');
                var filtervalue = budgetfrom + "_" + budgetto;
                //console.log(filterelement);
                if (ischecked == true) {
                  var budgetvaluefrom = filterelement.getAttribute('data-budget-from');
                  var budgetvalueto = filterelement.getAttribute('data-budget-to');
                  if (oldbudget == '') {
                    document.getElementById('ca_filtervalue_budget').value = budgetvaluefrom + '_' + budgetvalueto;
                  }
                  else {
                    document.getElementById('ca_filtervalue_budget').value = oldbudget + ',' + budgetvaluefrom + '_' + budgetvalueto;
                  }
                }
                else {
                  var oldbudgetList = oldbudget.split(',');
                  var newbudgetList = oldbudgetList.removeByVal(filtervalue);

                  var newbudgetstring = '';
                  //console.log(newbudgetList);
                  for (var v = 0; v < newbudgetList.length; v++) {
                    if (newbudgetstring == '') {
                      newbudgetstring = newbudgetList[v];
                    }
                    else {
                      newbudgetstring = newbudgetstring + "," + newbudgetList[v];
                    }
                  }

                  document.getElementById('ca_filtervalue_budget').value = newbudgetstring;
                }

              }
              var _producttype = document.getElementById('ca_filtervalue_producttype').value;
              var _vendor = document.getElementById('ca_filtervalue_vendor').value;
              var _option1 = document.getElementById('ca_filtervalue_option1').value;
              var _option2 = document.getElementById('ca_filtervalue_option2').value;
              var _option3 = document.getElementById('ca_filtervalue_option3').value;
              var _discount = document.getElementById('ca_filtervalue_discount').value;
              var _budget = document.getElementById('ca_filtervalue_budget').value;
              setTimeout(function () {
                console.log(_iscollectionpage);
                if (_iscollectionpage == 'true') {
                  //FilterCollection();
                  console.log(_selectedsortby);
                  _FilterCollectionProducts(1, _selectedsortby);
                }
                if (_issearchpage == 'true') {
                  var searchurl = window.location.href;
                  var searchquerystring = searchurl.split('?')[1];
                  var searchquery = searchquerystring.replace('q=', '');
                  //FilterSearch(searchquery);
                }

              }, 100);

            });
            $('body').on('click', '.ca_filtervalues_btn', function (e) {
              var button = e.currentTarget;
              //console.log(button.classList);
              // Removing filter
              if (button != null) {

                var datafiltername = button.getAttribute('data-btnfiltername');
                datafiltername = datafiltername.replace('filtervalue', 'filter');
                var datafiltervalue = button.id;
                datafiltervalue = datafiltervalue.replace('ca_filter_id_', '');
                var correctfiltercheckbox = document.getElementById(datafiltervalue);
                $(correctfiltercheckbox).trigger('click');
                button.style.display = 'none';
              }
              /*var allfilterinputs = document.querySelectorAll('.ca_filter_hiddeninput');
                                var filtervalues = [];
                                var filtettagdiv = document.getElementById('ca_filtervalues_btndiv');   
                                var isfilterAvailable = false;
                                if(filtettagdiv != null)
                                {
                                  $(filtettagdiv).html('');
                                  isfilterAvailable = true;
                                  for(var f=0; f<allfilterinputs.length; f++)
                                  {
                                    var filtervalue = allfilterinputs[f].value;

                                    if(filtervalue != '')
                                    {
                                      var filtervalueslist = filtervalue.split(',');

                                      for(var _f=0; _f<filtervalueslist.length; _f++)
                                      {
                                        var _filtertag = document.createElement('button');
                                        _filtertag.style.display = 'inline-block';
                                        _filtertag.style.fontStyle = 'italic';
                                        _filtertag.className = 'ca_filtervalues_btn';
                                        _filtertag.innerHTML = filtervalueslist[_f] + ' X';
                                        $(filtettagdiv).append(_filtertag);
                                      }
                                    }    
                                  }
                                }*/
            });
            $('body').on('click', '.swatchy_colordiv', function (e) {
              var swatchElement = e.currentTarget;
              var imagesrc = swatchElement.getAttribute('swatchy-data-variantimage');
              var productid = swatchElement.getAttribute('swatchy-data-productid');
              //var divContainer = document.querySelectorAll(appvariables.Filter_ProductDivQuerySelector);
              var productdiv = $("[data-productid=" + productid + "]")[0];

              var _imageElement = $(productdiv).find('img')[0];
              //console.log(_imageElement);    
              _imageElement.removeAttribute('srcset');
              _imageElement.removeAttribute('data-srcset');
              _imageElement.src = imagesrc;

            });

            $('body').on('click', '#ca_filterdivcontainer', function (e) {
              var filterDiv = document.getElementById('ca_filterdiv');
              filterDiv.style.display = 'block';

              /*var _accordions = document.querySelectorAll('.ca_filter_accordion');
                                for(var a=0; a<_accordions.length; a++)
                                {
                                  _accordions[a].classList.toggle("ca_filter_active");
                                  var panel = _accordions[a].nextElementSibling;
                                  console.log(CollectionFilterType);
                                  if (panel.style.minHeight) {
                                      panel.style.minHeight = null;
                                    } else {
                                      panel.style.minHeight = "100px";

                                    }
                                }*/


            });
            /* $('#ca_filterdiv').on('click', '.ca_filter_accordion', function (e) {
                      var button = e.currentTarget;
                      //console.log(button.classList);
                      button.classList.toggle("ca_filter_active");
                      var panel = button.nextElementSibling;
                      if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                      } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                      }
                    });*/
            // instanciate new modal
            var _ca_filter_modal = new tingle.modal({
              footer: true,
              stickyFooter: false,
              closeMethods: ['overlay', 'button', 'escape'],
              //closeMethods: ['escape'],
              closeLabel: "Filter",
              cssClass: ['custom-class-1', 'custom-class-2'],
              onOpen: function () {
                //console.log('modal open');
              },
              onClose: function () {
                //console.log('modal closed');
              },
              beforeClose: function () {
                // here's goes some logic
                // e.g. save content before closing the modal
                return true; // close the modal
                return false; // nothing happens
              }
            });
            $('body').on('click', '#ca_filter_filterbtn', function (e) {
              var button = e.currentTarget;
              //console.log(button);



              var filterDiv = document.getElementById('ca_filterdiv');
              ca_filterdiv.style.width = '100%';
              // set content
              _ca_filter_modal.setContent(filterDiv);

              // add a button
              /* _ca_filter_modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
                                  // here goes some logic
                                  _ca_filter_modal.close();
                                });*/

              // add another button
              /* _ca_filter_modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
                                  // here goes some logic
                                  _ca_filter_modal.close();
                                });*/

              // open modal
              _ca_filter_modal.open();

              // close modal
              //modal.close();

            });


          }

          function LoadCollectionFilters(metafieldstring, _collectionname, ismobiledevice, filterpage, CollectionFilterType) {
            var _parallelajaxurllist = [];
            var noofpages = _totalproductsincollection / 1000;
            var _noofpagesrounded = Math.ceil(noofpages);
            console.log(_noofpagesrounded);
            for (var v = 1; v <= _noofpagesrounded; v++) {
              _parallelajaxurllist.push({ url: 'https://' + window.location.hostname + '/collections/' + _collectionname + '?sort_by=title-ascending&view=cafiltersjson&page=' + v });
            }
            //var filterpageInput = document.getElementById('ca_swatchfilter_page');       

            //filterpageInput.setAttribute('data-cafilter-url', window.location.href);
            //document.getElementById('ca_swatchfilter_page').value = filterpage;
            var filtermetafieldlist = metafieldstring.split('@');
            //console.log(filtermetafieldlist);
            var pricerangeValuesList = filtermetafieldlist[0].split('_');
            var _optionsValuesList = [];
            var producttypeValuesList = filtermetafieldlist[filtermetafieldlist.length - 2].split('_');
            var productvendorValuesList = filtermetafieldlist[filtermetafieldlist.length - 1].split('_');
            var end_Index = filtermetafieldlist.length - 2;
            for (var v = 0; v < filtermetafieldlist.length; v++) {
              if (v > 0 && v < end_Index) {
                _optionsValuesList.push(filtermetafieldlist[v]);
              }
            }

            var option1ValuesList = filtermetafieldlist[1].split('_');
            var option2ValuesList = filtermetafieldlist[2].split('_');
            var option3ValuesList = filtermetafieldlist[3].split('_');
            //var collectionsalljson = $.getValues('https://' + window.location.hostname + '/collections/' + _collectionname + '.json');
            var allproductscount = collectionjson.products_count;
            var rawQuotient = allproductscount / 250;
            var remainder = rawQuotient % 1;
            var quotient = rawQuotient - remainder;
            var pagesCount = quotient + 1;
            var parallelajaxurl = [];
            var parallelajaxurllist = [];
            var ajaxurllist = [];
            var reqObj = [];
            for (var p = 1; p <= pagesCount; p++) {
              parallelajaxurllist.push({ url: "https://" + window.location.hostname + "/collections/" + _collectionname + "/products.json?sort_by=best_selling&page=" + p + "&limit=250" });
            }
            var coloroptionnamesarray = [];
            coloroptionnamesarray.push('Color');
            coloroptionnamesarray.push('Colour');
            //parallelajaxurllist.push({url: "https://" + window.location.hostname + "/collections/" + _collectionname + "?page=1&limit=50&view=filteryapp" });
            //console.log(parallelajaxurllist);

            var productsjson = [];

            //console.log(products);
            var producttypesarray = [];
            var productvendorsarray = [];
            var option1array = [];
            var option2array = [];
            var option3array = [];
            var _producttypesarray = [];
            var _productvendorsarray = [];
            var _option1array = [];
            var _option2array = [];
            var _option3array = [];
            var _budgetMax = 0;
            var _budgetMin = 0;
            var option1name = '';
            var option2name = '';
            var option3name = '';
            var _minpricearray = [];
            var _pricearray = [];
            var _comparepricearray = [];
            var _maxpricearray = [];
            //console.log(CollectionFilterType);
            //producttypes
            var filterdiv = document.getElementById('ca_filterdiv');
            filterdiv.style.display = 'block';
            var titleElement = document.createElement('p');
            titleElement.id = 'ca_filtertitle';
            titleElement.innerHTML = 'Filter Results';

            $(filterdiv).append(titleElement);
            //producttypes
            var producttypesstring = '';

            for (var i = 0; i < producttypeValuesList.length; i++) {
              var producttypename = producttypeValuesList[i].split('#')[0];
              var producttypecount = producttypeValuesList[i].split('#')[1];
              producttypesstring = producttypesstring + '<li>' +
                '<label class="ca_filter_container">' + producttypename + ' (' + producttypecount + ')' +
                '<input data-filtername="ca_filter_producttype" id="' + producttypename + '" name="' + producttypename + '" class="ca_filtery_checkbox" type="checkbox" value="' + producttypename + '">' +
                '<span class="ca_filter_checkmark"></span>' +
                '</label>' +
                '</li>';
              //'<input data-filtername="ca_filter_producttype" class="ca_filtery_checkbox" type="checkbox" id="' + producttypesarray[i] + '" name="' +  producttypesarray[i] + '" value="' + producttypesarray[i] + '" />' + producttypesarray[i] +

            }
            var producttypeaccordiondiv = '<div id="ca_filter_producttype_container" class="ca_filter_div"><button type="button" id="ca_filter_producttype_accordion" class="ca_filter_accordion">Product Type</button>' +
                '<div class="ca_filter_panel">' +
                '<ul>' + producttypesstring + '</ul>' +
                '</div></div>';
            $(filterdiv).append(producttypeaccordiondiv);
            var _producttypeaccordiondiv = document.getElementById('ca_filter_producttype_accordion');

            /*if (CollectionFilterType == 'Vertical') {
                        _producttypeaccordiondiv.classList.toggle("ca_filter_active");
                        var panel = _producttypeaccordiondiv.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";

                        }
                      }*/

            //productvendors
            var productvendorsstring = '';
            for (var i = 0; i < productvendorValuesList.length; i++) {
              var productvendorname = productvendorValuesList[i].split('#')[0];
              var productvendorcount = productvendorValuesList[i].split('#')[1];

              productvendorsstring = productvendorsstring + '<li>' +
                '<label class="ca_filter_container">' + productvendorname + ' (' + productvendorcount + ')' +
                '<input data-filtername="ca_filter_vendor" id="' + productvendorname + '" name="' + productvendorname + '" class="ca_filtery_checkbox" type="checkbox" value="' + productvendorname + '">' +
                '<span class="ca_filter_checkmark"></span>' +
                '</label>' +
                '</li>';
              //'<input data-filtername="ca_filter_vendor" class="ca_filtery_checkbox" type="checkbox" id="' + productvendorsarray[i] + '" name="' +  productvendorsarray[i] + '" value="' + productvendorsarray[i] + '" />' + productvendorsarray[i] +

            }
            var productvendoraccordiondiv = '<div id="ca_filter_vendor_container" class="ca_filter_div"><button type="button" id="ca_filter_vendor_accordion" class="ca_filter_accordion">Vendor</button>' +
                '<div class="ca_filter_panel">' +
                '<ul>' + productvendorsstring + '</ul>' +
                '</div></div>';
            $(filterdiv).append(productvendoraccordiondiv);
            var _productvendoraccordiondiv = document.getElementById('ca_filter_vendor_accordion');

            /*if (CollectionFilterType == 'Vertical') {
                        _productvendoraccordiondiv.classList.toggle("ca_filter_active");
                        var panel = _productvendoraccordiondiv.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";

                        }
                      }
                      else
                                        {
                                          if (panel.style.minHeight) {
                                            panel.style.minHeight = null;
                                          } else {
                                            panel.style.minHeight = "100px";

                                          }
                                        }*/

            // OptionsArray Creation
            for (var o = 0; o < _optionsValuesList.length; o++) {

              var optionValuesList = _optionsValuesList[o].split('_');
              console.log(optionValuesList);
              var optionarraystring = '';
              var optionName = optionValuesList[0];
              var optiontype = 'normal';
              // Creating HiddenINput
              if (optionName != '') {
                var _optionInput = document.createElement('input');
                _optionInput.type = 'hidden';
                _optionInput.id = optionName;
                _optionInput.className = 'ca_filter_option_inputs';
                _optionInput.value = '';
                $('body').append(_optionInput);
              }

              if (buttonOptions.includes(optionName)) {

                optiontype = 'button';
              }
              if (ColorOptions.includes(optionName)) {

                optiontype = 'color';
              }
              if (optionName != '') {
                if (optionValuesList.length > 0) {
                  for (var i = 1; i < optionValuesList.length; i++) {
                    var optionname = optionValuesList[i].split('#')[0];
                    var optioncount = optionValuesList[i].split('#')[1];
                    if (optiontype == 'normal') {
                      optionarraystring = optionarraystring + '<li>' +
                        '<input data-optionName="' + optionName + '" data-variantscount="' + optioncount + '" data-filtername="ca_filter_option_' + optionName + '" class="ca_filtery_checkbox" type="checkbox" id="' + optionname + '" name="' + optionname + '" value="' + optionname + '" />' + optionname +
                        '</li>';
                    }
                    if (optiontype == 'button') {
                      optionarraystring = optionarraystring +
                        '<div data-optionName="' + optionName + '" data-variantscount="' + optioncount + '" style="display: inline-block; margin-right: 5px;" data-filtername="ca_filter_option_' + optionName + '" id="' + optionname + '" class="ca_filtery_checkbox ca_filtery_btn" value="' + optionname + '" data-ischecked="false">' + optionname +
                        '</div>';
                    }
                    if (optiontype == 'color') {
                      var _colorname = colorcodesjson[optionname];
                      optionarraystring = optionarraystring +
                        '<div data-optionName="' + optionName + '" data-variantscount="' + optioncount + '" style="display: inline-block; background-color: #' + _colorname + '; width: 20px; height: 20px; line-height: 20px; margin-right: 5px; border-radius: 50%;" title="' + optionname + '" data-filtername="ca_filter_option_' + optionName + '" id="' + optionname + '" class="ca_filtery_checkbox ca_filtery_btn ca_filtery_color_btn" value="' + optionname + '" data-ischecked="false">' +
                        '</div>';
                    }

                  }
                  var optionarrayaccordiondiv = '<div id="ca_filter_option_container_' + optionName + '" class="ca_filter_div"><button type="button" id="ca_filter_option_accordion_' + optionName + '" class="ca_filter_accordion">' + optionName + '</button>' +
                      '<div class="ca_filter_panel">' +
                      '<ul>' + optionarraystring + '</ul>' +
                      '</div></div>';

                  $(filterdiv).append(optionarrayaccordiondiv);
                  var _optionarrayaccordiondiv = document.getElementById('ca_filter_option_accordion_' + optionName);
                }
              }
            }

            var discountsarray = [];
            discountsarray.push('Under 25%');
            discountsarray.push('26% - 50%');
            discountsarray.push('51% - 75%');
            discountsarray.push('Above 75%');
            // Discount Array
            var discountarraystring = '';
            var discountIsButton = 'false';
            var discountIsColor = 'false';
            var discounttype = 'normal';
            if (discountsarray.length > 0) {
              for (var i = 0; i < discountsarray.length; i++) {
                var _discountsarraystring = discountsarray[i];
                _discountsarraystring = _discountsarraystring.replaceAll(' ', '');
                _discountsarraystring = _discountsarraystring.replaceAll('%', '');
                console.log(_discountsarraystring);
                if (i == 0) {
                  discountarraystring = discountarraystring + '<li>' +
                    '<label class="ca_filter_container">' + discountsarray[i] +
                    '<input data-filter-discount-from="0" data-filter-discount-from="25" data-filtername="ca_filter_discount" id="' + _discountsarraystring + '" name="' + discountsarray[i] + '" class="ca_filtery_checkbox" type="checkbox" value="' + discountsarray[i] + '">' +
                    '<span class="ca_filter_checkmark"></span>' +
                    '</label>' +
                    '</li>';
                }
                if (i == 1) {
                  discountarraystring = discountarraystring + '<li>' +
                    '<label class="ca_filter_container">' + discountsarray[i] +
                    '<input data-filter-discount-from="26" data-filter-discount-from="50" data-filtername="ca_filter_discount" id="' + _discountsarraystring + '" name="' + discountsarray[i] + '" class="ca_filtery_checkbox" type="checkbox" value="' + discountsarray[i] + '">' +
                    '<span class="ca_filter_checkmark"></span>' +
                    '</label>' +
                    '</li>';
                }
                if (i == 2) {
                  discountarraystring = discountarraystring + '<li>' +
                    '<label class="ca_filter_container">' + discountsarray[i] +
                    '<input data-filter-discount-from="51" data-filter-discount-from="75" data-filtername="ca_filter_discount" id="' + _discountsarraystring + '" name="' + discountsarray[i] + '" class="ca_filtery_checkbox" type="checkbox" value="' + discountsarray[i] + '">' +
                    '<span class="ca_filter_checkmark"></span>' +
                    '</label>' +
                    '</li>';
                }
                if (i == 3) {
                  discountarraystring = discountarraystring + '<li>' +
                    '<label class="ca_filter_container">' + discountsarray[i] +
                    '<input data-filter-discount-from="76" data-filter-discount-from="100" data-filtername="ca_filter_discount" id="' + _discountsarraystring + '" name="' + discountsarray[i] + '" class="ca_filtery_checkbox" type="checkbox" value="' + discountsarray[i] + '">' +
                    '<span class="ca_filter_checkmark"></span>' +
                    '</label>' +
                    '</li>';
                }


              }
              var discountarrayaccordiondiv = '<div id="ca_filter_discount_container" class="ca_filter_div"><button type="button" id="ca_filter_discount_accordion" class="ca_filter_accordion">Percentage Sale</button>' +
                  '<div class="ca_filter_panel">' +
                  '<ul>' + discountarraystring + '</ul>' +
                  '</div></div>';
              $(filterdiv).append(discountarrayaccordiondiv);
              var _discountarrayaccordiondiv = document.getElementById('ca_filter_discount_accordion');

            }


            // Budget
            var budgetArray = [];
            for (var p = 0; p < pricerangeValuesList.length; p++) {
              var priceList = pricerangeValuesList[p].split('#')[0];
              var pricerangemin = priceList.split('*')[0];
              budgetArray.push(pricerangemin);
            }

            //console.log(budgetArray);
            //console.log(pricerangeValuesList);
            var budgetarraystring = '';
            if (pricerangeValuesList.length > 0) {
              for (var i = 0; i < pricerangeValuesList.length; i++) {
                /*if (i < (pricerangeValuesList.length - 1)) {
                                }*/
                var budgetValuesListstring = pricerangeValuesList[i].split('#')[0];


                var budgetfrom = budgetValuesListstring.split('*')[0];
                var budgetto = budgetValuesListstring.split('*')[1];
                budgetarraystring = budgetarraystring + '<li>' +
                  '<label class="ca_filter_container">' + currencysymbol + budgetfrom + ' - ' + currencysymbol + budgetto +
                  '<input data-budget-from="' + budgetfrom + '" data-budget-to="' + budgetto + '" data-filtername="ca_filter_budget" id="' + budgetArray[i] + '" name="' + budgetArray[i] + '" class="ca_filtery_checkbox" type="checkbox" value="' + budgetArray[i] + '">' +
                  '<span class="ca_filter_checkmark"></span>' +
                  '</label>' +
                  '</li>';


              }
              //console.log(budgetarraystring);
              var budgetarrayaccordiondiv = '<div id="ca_filter_budget_container" class="ca_filter_div"><button type="button" id="ca_filter_budget_accordion" class="ca_filter_accordion">Price Range</button>' +
                  '<div class="ca_filter_panel">' +
                  '<ul>' + budgetarraystring + '</ul>' +
                  '</div></div>';
              $(filterdiv).append(budgetarrayaccordiondiv);
              var _budgetarrayaccordiondiv = document.getElementById('ca_filter_budget_accordion');


            }

            var themename = Shopify.theme.name;
            var themestoreid = Shopify.theme.theme_store_id;
            var filterdiv = document.getElementById('ca_filterdiv');
            var allfilterdivs = document.querySelectorAll('.ca_filter_div');
            var allfilterbuttons = document.querySelectorAll('.ca_filter_accordion');
            //var filtercontainerbtn = document.getElementById('ca_filterdivcontainer');
            //filtercontainerbtn.style.display = 'block';
            //console.log(CollectionFilterType);
            var rightdiv = document.querySelector(appvariables.Filter_GridQuerySelector);
            // console.log(filterdiv);
            if (CollectionFilterType == 'Vertical') {
              var acc = document.getElementsByClassName("ca_filter_accordion");
              var i;

              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function (e) {
                  console.log(this);
                  this.classList.toggle("ca_filter_active");
                  var panel = this.nextElementSibling;

                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    console.log('null=' + panel.style.maxHeight);
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    //console.log(panel.style.maxHeight);
                  }
                });
              }
            }
            var filterdivs = document.querySelectorAll('.ca_filter_div');
            if (CollectionFilterType == 'Vertical') {
              for (var c = 0; c < filterdivs.length; c++) {
                filterdivs[c].style.width = '100%';
                filterdivs[c].style.display = 'block';
              }

              var filterpanels = document.querySelectorAll('.ca_filter_panel');
              for (var c = 0; c < filterpanels.length; c++) {
                filterpanels[c].style.maxHeight = "0";

              }

            }
            $('body').on('click', '.ca_filter_accordion', function (e) {
              var panelParent = e.currentTarget;
              panelParent.classList.toggle("ca_filter_active");
              var panel = panelParent.nextElementSibling;

              //console.log(CollectionFilterType);
              // console.log(panel.scrollHeight);
              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                //panel.style.minHeight = "150px";
                //console.log('null=' + panel.style.maxHeight);
              } else {
                if (CollectionFilterType == 'Horizontal') {
                  panel.style.maxHeight = "200px";
                  //panel.style.minHeight = "150px";
                }
                else {

                  //panel.style.minHeight = "50px";
                  panel.style.maxHeight = panel.scrollHeight + "px";
                }

                //console.log(panel.style.maxHeight);
              }
            });

            if (_ismobiledevice == true) {
              var filterbtnElement = document.getElementById('ca_filter_filterbtn');
              $(rightdiv).before(filterbtnElement);
            }
            else {
              var filterSortDivs = document.querySelectorAll(appvariables.Filter_SortElementQuerySelector);
              for(var p=0; p<filterSortDivs.length; p++)
              {
                if (filterSortDivs[p] != null) {
                  filterSortDivs[p].style.display = 'none';
                }
              }

              var sortbyDiv = document.getElementById('ca_filter_sortbydiv');
              $(rightdiv).before(sortbyDiv);
              if (CollectionFilterType == 'Horizontal') {
                filterdiv.style.display = 'inline-block';
                filterdiv.style.width = '100%';
                /*filterdiv.style.borderTop = '1px solid #EAEAEA';*/
                /*filterdiv.style.borderBottom = '1px solid #EAEAEA';*/
                filterdiv.style.padding = '10px';
                filterdiv.style.textAlign = 'center';
                for (var f = 0; f < allfilterdivs.length; f++) {
                  allfilterdivs[f].style.display = 'inline-block';
                  allfilterdivs[f].style.marginRight = '10px';
                }
                for (var b = 0; b < allfilterbuttons.length; b++) {
                  /*allfilterbuttons[b].style.border = '1px solid #EAEAEA';*/
                }
                $(rightdiv).before(filterdiv);




              }
              //console.log(CollectionFilterType);
              if (CollectionFilterType == 'Vertical') {
                //filterdiv.style.display = 'block';
                filterdiv.style.width = '20%';
                filterdiv.style.float = 'left';
                rightdiv.style.float = 'right';
                rightdiv.style.width = '75%';
                /* var leftpadding = appvariables.Filter_LeftPaddingAdjustment;
                                                    var _width = 100 - (leftpadding * 1);
                                                    if (leftpadding == 0) {
                                                        rightdiv.style.width = '75%';
                                                    }
                                                    else {
                                                        rightdiv.style.width = _width + '%';
                                                    }*/
                var sortElementDiv = '<div id="ca_filter_sortbydiv">' +
                    '<select id="ca_filter_sortbyselect">' +
                    '<option value="best-selling" selected>Sort By Best Sellers</option>' +
                    '<option value="title-ascending">Sort By Alphabetically, A-Z</option>' +
                    '<option value="title-descending">Sort By Alphabetically, Z-A</option>' +
                    '<option value="price-ascending">Sort By Price, low to high</option>' +
                    '<option value="price-descending">Sort By Price, high to low</option>' +
                    '</select>'
                '</div>';
                $(rightdiv).before(sortElementDiv);
                $(rightdiv).before(filterdiv);
                if (appvariables.ThemeName == 'Supply') {
                  $('#collectionFilters').html('');
                  $('#collectionFilters').before(filterdiv);
                }
                //var _searchedproducts = results.data[0];
              }
            }
            var ThemeName = 'Supply';


            if (ThemeName == 'Retina') {
              var alldivs = document.querySelectorAll(Filter_ProductDivQuerySelector);
              for (var d = 0; d < alldivs.length; d++) {
                alldivs[d].style.width = '280px';
              }
            }

            // COlor Swatches
            var colorswatchdivs = document.querySelectorAll('.swatchy_c_colordiv');

            for (var c = 0; c < colorswatchdivs.length; c++) {
              colorswatchdivs[c].style.display = 'inline-block';
              var colorname = colorswatchdivs[c].getAttribute('swatchy-data-color');
              var _colorvalue = colorcodesjson[colorname];
              colorswatchdivs[c].style.BackgroundImage = 'none';
              //console.log(colorswatchdivs[c]);
              colorswatchdivs[c].style.backgroundColor = '#' + _colorvalue;
              console.log(appvariables.Swatch_IsCircular);
              if (appvariables.Swatch_IsCircular == true) {
                colorswatchdivs[c].style.borderRadius = '50%';
              }

              //colorswatchdivs[c].style.BackgroundSize = 'cover';
              $(colorswatchdivs[c]).css("background-image", "");


            }

            /*var colorswatchMaindivs = document.querySelectorAll('.swatch_c_swatchdiv');
                      for(var m=0; m<colorswatchMaindivs.length; m++)
                      {
                        var nextElement = $(colorswatchMaindivs[m]).next();
                        console.log(nextElement);
                        $(nextElement).after(colorswatchMaindivs[m]);
                      }*/

            tippy('.swatchy_c_colordiv', {
              arrow: true,
              theme: 'swatchytheme'
            });
            // Discount Percentage
            var productdivs = $('[data-productid]');
            for (var p = 0; p < productdivs.length; p++) {
              var productid = productdivs[p].getAttribute('data-productid');
              var _aElement = $(productdivs[p]).find('a')[0];
              var discountinput = $('input[name="ca_filterapp_input_' + productid + '"]')[0];
              if (discountinput != null) {
                var discountvaluestring = discountinput.value;

                if (discountvaluestring != '') {
                  var discountsList = discountvaluestring.split('_');
                  var _mindiscountp = Math.min.apply(Math, discountsList);
                  var _maxdiscountp = Math.max.apply(Math, discountsList);
                  //console.log(_maxdiscountp);
                  //console.log(_maxdiscountp);
                  var discountp = _maxdiscountp;
                  var discountspan = document.createElement('span');
                  if (_mindiscountp < _maxdiscountp) {
                    discountspan.innerHTML = _mindiscountp + '% - ' + discountp + '% OFF';
                  }
                  else {
                    discountspan.innerHTML = discountp + '% OFF';
                  }

                  discountspan.style.backgroundColor = '#000';
                  discountspan.style.padding = '5px';
                  discountspan.style.position = 'relative';
                  discountspan.style.color = '#fff';
                  discountspan.style.top = '0px';
                  discountspan.style.left = '0px';
                  discountspan.style.verticalAlign = 'middle';
                  discountspan.style.textAlign = 'center';
                  $(_aElement).append(discountspan);
                }
              }

            }

            var productLayoutDiv = document.querySelectorAll(appvariables.Filter_GridQuerySelector);

            var paginationelementdiv = document.getElementById('ca_swatchy_filtery_viewmorebtn');
            //$(productLayoutDiv).after(paginationelementdiv);

            var paginationButtonDiv = document.createElement('div');
            paginationButtonDiv.style.width = '80%';
            paginationButtonDiv.style.textAlign = 'center';
            paginationButtonDiv.style.float = 'right';
            var paginationButton = document.createElement('button');
            paginationButton.type = 'button';
            paginationButton.className = 'btn';
            paginationButton.innerHTML = 'Show Next 20 ->';
            paginationButton.style.marginTop = '10px';
            paginationButton.style.textAlign = 'center';
            paginationButtonDiv.append(paginationButton);
            var collectiondiv = document.querySelector(appvariables.Filter_GridQuerySelector);
            var parentElement = collectiondiv.parentElement;
            if (parentElement != null) {
              $(parentElement).after(paginationButtonDiv);
            }


          }
        });
      }
      console.log(laststring);
      if (laststring == 'search') {
        var themename = Shopify.theme.name;
        var searchurl = window.location.href;
        var searchquerystring = searchurl.split('?')[1];
        var searchquery = searchquerystring.replace('q=', '');
        var collectionslistjson = $.getValues('https://' + window.location.hostname + '/collections.json');
        var paginationElements = document.querySelectorAll(appvariables.Search_PaginationElementQuerySelector);
        for (var p = 0; p < paginationElements.length; p++) {
          paginationElements[p].style.display = 'none';
        }
      }
    });
  };

  /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
        we will load jQuery from the Google CDN, and when it's fully loaded, we will run
        our app's JavaScript. Set your own limits here, the sample's code below uses 1.9.1
        as the minimum version we are ready to use, and if the jQuery is older, we load 1.9.1 */
  if ((typeof jQuery === 'undefined') || (parseInt(jQuery.fn.jquery) === 1 && parseFloat(jQuery.fn.jquery.replace(/^1\./, "")) < 9.1)) {
    loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function () {
      jQuery191 = jQuery.noConflict(true);
      myAppJavaScript(jQuery191);
    });
  } else {
    myAppJavaScript(jQuery);
  }

})();
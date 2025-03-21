if(localStorage.getItem("timeMode") === 'Layer1'){
  var mmData = [
    {
          id: 62017277,
          monomaps: {
            image: "https://i.postimg.cc/prGKCwTj/rp-monoford-v1j0206.jpg",
            name: "Twin Mountain Medical Group",
            description:
              "The Monoford Hospital is where you are brought for when you have medical emergencies, you'll also respawn here when you die.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
            type: ["Government"],
            position: "absolute",
            top: 605,
            left: 1350,
            icon: "star-of-life",
            marker: "marker",
            color: "#f83030",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 98961296,
          monomaps: {
            image: "https://i.postimg.cc/SQDLmMrK/rp-monoford-v1j0207.jpg",
            name: "Monoford Police Department",
            description:
              "To Protect and Serve, this is where all the police department officials come to arrest their suspects, go on duty, and obtain their equipment.\n<br><br>\n<br>\n<i class='fa-solid fa-gun'></i> This place can be raided by criminals to reobtain their items from the evidence locker, or to break out their friend from jail. ",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
            type: ["Government"],
            position: "absolute",
            top: 385,
            left: 1235,
            icon: "user-police-tie",
            marker: "marker",
            color: "#1fa6e0",
            event: function () {
              customMarker(this.id);
            },
          },
        },

        {
          id: 88500981,
          monomaps: {
            image: "https://i.postimg.cc/DZcNvwjK/rp-monoford-v1j0274.jpg",
            name: "Fishing Docks",
            description:
              "The fishing docks, you can visit the Fishing Vendor to purchase a rod and bait to begin fishing for various of different fishes, or chance to grab a random item.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 230,
            left: 1460,
            icon: "fishing-rod",
            marker: "marker",
            color: "#6ba4ff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 14331182,
          monomaps: {
            image: "https://i.postimg.cc/zG5RWDpQ/rp-monoford-v1j0242.jpg",
            name: "Fire Department",
            description:
              "The Fire Department is the place where you can become a fire-fighter, and is the headquarters of the firemen when there's no active fires.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
            type: ["Government"],
            position: "absolute",
            top: 910,
            left: 425,
            icon: "fire-extinguisher",
            marker: "marker",
            color: "#f55656",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 33219228,
          monomaps: {
            image: "https://i.postimg.cc/L65t58C3/rp-monoford-v1j0205.jpg",
            name: "Obsidian Crown Financial Group",
            description:
              "The bank is where you make your deposits, and your withdrawals, there's also a recruitment position for you to join the Security Force here.\n<br><br>\n<b style='color: red;'>Heist Location</b><br>\nThis place can be robbed by a group of people for a high payout, however a keycard is required to rob this location.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Heist Location", type: "badge-red"}],
            type: ["Public"],
            position: "absolute",
            top: 760,
            left: 1630,
            icon: "money-bill-wave",
            marker: "marker",
            color: "#d7d237",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 80994340,
          monomaps: {
            image: "https://i.postimg.cc/MpdXQ7nc/rp-monoford-v1j0250.jpg",
            name: "Jewelry Store",
            description:
              "The Jewelry Store is a robbable heist location that offers alright payout as well as the chance to obtain a keycard to rob the Bank.\n<br><br>\n<b style='color: red;'>Heist Location</b><br>\nThis place can be robbed by a group of people for a high payout, and the chance to obtain a keycard for bank.\n<br><br>\nRequires a Class-3 weapon equipped and specific amount of police officers on duty to rob this location.\n",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Heist Location", type: "badge-red"}],
            type: ["Public"],
            position: "absolute",
            top: 570, //x:544, y:576
            left: 540,
            icon: "gem",
            marker: "marker",
            color: "#3caf73",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 37369781,
          monomaps: {
            image: "https://i.postimg.cc/Z5y6PDh9/rp-monoford-v1j0204.jpg",
            name: "Car Dealership",
            description:
              "The Car Dealership is where you can purchase your vehicles from.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 750,
            left: 1450,
            icon: "cars",
            marker: "marker",
            color: "#ffffff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 9016571,
          monomaps: {
            image: "https://i.postimg.cc/SRNvJb3Y/rp-monoford-v1j0277.jpg",
            name: "Essence Gas Station",
            description:
              "A location where you can purchase gas for your vehicle, or head inside to the npcs and purchase a snack or something. ",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}, {name: "Robbable Place", type: "badge-red"}],
            type: ["Shop"],
            position: "absolute",
            top: 530,
            left: 1230,
            icon: "gas-pump",
            marker: "marker",
            color: "#1ac71d",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 9016571,
          monomaps: {
            image: "https://i.postimg.cc/v8JnYtnb/rp-monoford-v1j0238.jpg",
            name: "Gas Station",
            description:
              "A location where you can purchase gas for your vehicle.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 1140,
            left: 620,
            icon: "gas-pump",
            marker: "marker",
            color: "#1ac71d",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 27204899,
          monomaps: {
            image: "https://i.postimg.cc/141sktf1/rp-monoford-v1j0236.jpg",
            name: "Supermarket",
            description:
              "A place where you can purchase Seeds, Groceries, and Other items from this location.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 1070,
            left: 535,
            icon: "basket-shopping",
            marker: "marker",
            color: "#3dc733",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 24163975,
          monomaps: {
            image: "https://i.postimg.cc/QtDgdgwF/rp-monoford-v1j0201.jpg",
            name: "Clothing Store",
            description:
              "Change up your style, purchase new clothing from the clothing store, from the basic outfits, to suits, jackets, and more.\n<br><br><i class='fa-solid fa-star'></i> There's also a Cosmetic NPC which features hats, scarfs, maskes and more, only available for Premium Members.",
          },
          monomaps_data: {
            iconSize: 26,
            hoverSize: 34,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 645,
            left: 1560,
            icon: "shirt",
            marker: "marker",
            color: "orange",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 24787861,
          monomaps: {
            image: "https://i.postimg.cc/0QNQnbJt/rp-monoford-v1j0226.jpg",
            name: "Gun Store",
            description:
              "Grab yourself a weapon for self-defense, you can also purchase ammunition here for your weapons or head around back to the shooting range.\n<br><br>\n<span style='color: skyblue;'><i class='fa-solid fa-id-card'></i> Gun License is required to purchase weapons from this location.</span>",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 540,
            left: 1615,
            icon: "gun",
            marker: "marker",
            color: "#799fec",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 33432005,
          monomaps: {
            image: "https://i.postimg.cc/4xKQLxpx/rp-monoford-v1j0200.jpg",
            name: "Monoford City Hall",
            description:
              "The City Hall is where you come to pay off your tickets, become the mayor / secret service, obtain your licenses and also purchase premium member items from the Premium NPC.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 590,
            left: 1485,
            icon: "building-columns",
            marker: "marker",
            color: "#ffffff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 79270522,
          monomaps: {
            image: "https://i.postimg.cc/k5YVkQ9r/rp-monoford-v1j0243.jpg",
            name: "Casino",
            description:
              "You can come visit the casino and enjoy  some DJ and dance time, or head up stairs and check out the variety of different gambling machines available.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 845,
            left: 350,
            icon: "coins",
            marker: "marker",
            color: "#b7b115",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 32609209,
          monomaps: {
            image: "https://i.postimg.cc/nL3VXpwq/rp-monoford-v1j0232.jpg",
            name: "Taxi & Bus Station",
            description:
              "The Taxi & Bus Station is a public transport business allowing people to get rides from Point A to Point B within' the city.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 1000,
            left: 1600,
            icon: "taxi",
            marker: "marker",
            color: "#c4dd0e",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 326092100,
          monomaps: {
            image: "https://i.postimg.cc/xCskVK2D/rp-monoford-v1j0218.jpg",
            name: "Taxi & Bus Station",
            description:
              "The Taxi & Bus Station is a public transport business allowing people to get rides from Point A to Point B within' the city.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 410, //x:1348, y:424
            left: 1340,
            icon: "taxi",
            marker: "marker",
            color: "#c4dd0e",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 18614559,
          monomaps: {
            image: "https://i.postimg.cc/mrgzXdvN/rp-monoford-v1j0239.jpg",
            name: "Police Impound Lot",
            description:
              "The impound lot is where Police Tow Truck Drivers brings your vehicles to impound them.\n<br><br>\n<b>Impound Fee:</b> $1,000",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
            type: ["Government"],
            position: "absolute",
            top: 1200,
            left: 630,
            icon: "truck-tow",
            marker: "marker",
            color: "#2083df",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 31826382,
          monomaps: {
            image: "",
            name: "Contraband Dealer",
            description:
              "The Contraband Dealer sells illegal goods, from Lockpicks, Drills, to materials needed for LSD & Cocaine.\n<br><br>\n<b>Storage Container</b><br>\nThere's also a storage container at this location as well, you must have <i class='fa-solid fa-star'></i> Premium Membership to use it. ",
          },
          monomaps_data: {
            iconSize: 28,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Illegal", type: "badge-red"}],
            type: ["Illegal"],
            position: "absolute",
            top: 370,
            left: 1320,
            icon: "screwdriver",
            marker: "marker",
            color: "#bb3535",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        
        {
          id: 4675918,
          monomaps: {
            image: "https://i.postimg.cc/d3yJNdQ9/rp-monoford-v1j0233.jpg",
            name: "Eagle Post",
            description:
              "The Eagle Post is a package delivery business, where you can go to various locations within the city and drop off packages.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: ["Public"],
            position: "absolute",
            top: 1000, // x:1504, y:1008
            left: 1500,
            icon: "box-open",
            marker: "marker",
            color: "#d17233",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 985773656,
          monomaps: {
            image: "",
            name: "Drug Dealer Location",
            description:
              "This is 1 of the 3 locations the drug dealer is located at, here you can sell drugs and purchase supplies.<br><br><b>Located underneath the Bridge.</b>",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Illegal", type: "badge-red"}],
            type: ["Illegal"],
            position: "absolute",
            top: 435,
            left: 995,
            icon: "user",
            marker: "marker",
            color: "#e64141",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 985773356,
          monomaps: {
            image: "",
            name: "Drug Dealer Location",
            description:
              "This is 1 of the 3 locations the drug dealer is located at, here you can sell drugs and purchase supplies.<br><br><b>Located inside the Metro Station</b>",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Illegal", type: "badge-red"}],
            type: ["Illegal"],
            position: "absolute",
            top: 775, //x:360, y:790
            left: 360,
            icon: "user",
            marker: "marker",
            color: "#e64141",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122664,
          monomaps: {
            image: "",
            name: "Metro",
            description:
              "The metro station allows you to travel to different points within' Monoford quickly, requires a Mono-Rail Ticket.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 810, //x:360, y:790
            left: 360,
            icon: "m",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122666,
          monomaps: {
            image: "",
            name: "Metro",
            description:
              "The metro station allows you to travel to different points within' Monoford quickly, requires a Mono-Rail Ticket.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 1580, //x:360, y:790
            left: 1140,
            icon: "m",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122667,
          monomaps: {
            image: "",
            name: "Metro",
            description:
              "The metro station allows you to travel to different points within' Monoford quickly, requires a Mono-Rail Ticket.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 1460, //x:360, y:790
            left: 500,
            icon: "m",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122668,
          monomaps: {
            image: "",
            name: "Metro",
            description:
              "The metro station allows you to travel to different points within' Monoford quickly, requires a Mono-Rail Ticket.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 520, //x:360, y:790
            left: 1420,
            icon: "m",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122665,
          monomaps: {
            image: "",
            name: "Parking Garage",
            description:
              "Obtain your vehicles from the Parking Garages, this is one of the many locations.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 900, //x:360, y:790
            left: 360,
            icon: "p",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 1122670,
          monomaps: {
            image: "",
            name: "Parking Garage",
            description:
              "Obtain your vehicles from the Parking Garages, this is one of the many locations.",
          },
          monomaps_data: {
            iconSize: 20,
            hoverSize: 25,
            perm: true,
            preview: true,
            badges: [{name: "City Services", type: "badge-blue"}],
            type: ["Public"],
            position: "absolute",
            top: 500, //x:360, y:790
            left: 1370,
            icon: "p",
            marker: "service-marker",
            color: "#fff",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 16859454,
          monomaps: {
            image: "https://i.postimg.cc/pVF96567/rp-monoford-v1j0245.jpg",
            name: "Hardware & Appliance Store",
            description:
              "The Hardware Store is the place where you can buy variety of tools for the job you're needing to get done.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
            type: ["Shop"],
            position: "absolute",
            top: 715,
            left: 430,
            icon: "tools",
            marker: "marker",
            color: "#36aaba",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 47756629,
          monomaps: {
            image: "https://i.postimg.cc/B6yqCN36/rp-monoford-v1j0235.jpg",
            name: "Cargo Ship",
            description:
              "This is the Cargo Ship that contains valuable items that can be robbed.\n<br><br>\n<b>Heist Location</b><br>\nThis place can be robbed by a group of people for a high payout.\n<br><br>\nRequires a Class-3 weapon equipped and specific amount of police officers on duty to rob this location.",
          },
          monomaps_data: {
            iconSize: 42,
            hoverSize: 50,
            perm: true,
            preview: false,
            badges: [{name: "Heist Location", type: "badge-red"}],
            type: ["Public"],
            position: "absolute",
            top: 1218, //x:1773, y:1218
            left: 1773,
            icon: "ship",
            marker: "marker",
            color: "#e62897",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 62020006,
          monomaps: {
            image: "https://i.postimg.cc/XJZZ3r7r/rp-monoford-v1j0244.jpg",
            name: "Car Mechanic",
            description:
              "Get your vehicle patched up at the Mechanics, or purchase repair kits / tire kits from here.\n<br><br>\nThere's also a Car Customization NPC here to customize your vehicles.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: "Public",
            position: "absolute",
            top: 700,
            left: 350,
            icon: "car-wrench",
            marker: "marker",
            color: "#c15dd5",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 39696459,
          monomaps: {
            image: "",
            name: "Premium Box",
            description:
              "The Premium Box allows you to store or obtain your items from your bank storage, you can also access your organization bank storage if you're in a org.\n<br><br>\n<b>Premium Only</b><br>\nThis cannot be used without <i class='fa-solid fa-star'></i> Premium Membership",
          },
          monomaps_data: {
            iconSize: 26,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "<i class='fa-solid fa-star'></i> Premium", type: "badge-blue2"}],
            type: "Premium",
            position: "absolute",
            top: 535, //x:1518, y:505
            left: 1560,
            icon: "box-archive",
            marker: "marker",
            color: "#3e6cf4",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 39696460,
          monomaps: {
            image: "",
            name: "Premium Box",
            description:
              "The Premium Box allows you to store or obtain your items from your bank storage, you can also access your organization bank storage if you're in a org.\n<br><br>\n<b>Premium Only</b><br>\nThis cannot be used without <i class='fa-solid fa-star'></i> Premium Membership",
          },
          monomaps_data: {
            iconSize: 28,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "<i class='fa-solid fa-star'></i> Premium", type: "badge-blue2"}],
            type: "Premium",
            position: "absolute",
            top: 740, //x:303, y:871
            left: 460,
            icon: "box-archive",
            marker: "marker",
            color: "#3e6cf4",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 39696461,
          monomaps: {
            image: "",
            name: "Premium Box",
            description:
              "The Premium Box allows you to store or obtain your items from your bank storage, you can also access your organization bank storage if you're in a org.\n<br><br>\n<b>Premium Only</b><br>\nThis cannot be used without <i class='fa-solid fa-star'></i> Premium Membership",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "<i class='fa-solid fa-star'></i> Premium", type: "badge-blue2"}],
            type: "Premium",
            position: "absolute",
            top: 1060, //x:590, y:1093
            left: 570,
            icon: "box-archive",
            marker: "marker",
            color: "#3e6cf4",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 59185033,
          monomaps: {
            image: "https://i.postimg.cc/Wb0khqmr/rp-monoford-v1j0240.jpg",
            name: "Bite Driver",
            description:
              "Become a bite driver and drive around a Bite Van selling your food for profits, the more you sell, the more variety of stuff you can sell later on.<br><br>You can also come here to restock your van when it becomes low or empty.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: "Public",
            position: "absolute",
            top: 1085,
            left: 460,
            icon: "fork-knife",
            marker: "marker",
            color: "#eba434",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 74730502,
          monomaps: {
            image: "https://i.postimg.cc/WzChhTz5/rp-monoford-v1j0221.jpg",
            name: "Boat Retrieval",
            description:
              "Retrieve both Commercial and Public boats here at the Boat Retrieval NPC.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Public Location", type: ""}],
            type: "Public",
            position: "absolute",
            top: 235,
            left: 1495,
            icon: "sailboat",
            marker: "marker",
            color: "#20bbd9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 70984559,
          monomaps: {
            image: "https://i.postimg.cc/pTBfhhMq/rp-monoford-v1j0202.jpg",
            name: "Crown Ave #2 (Game Country)",
            description:
              "Rentable commercial building for $73 with 3 Doors and 2 Outlets.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 640, //x:1565, y:649
            left: 1590,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 887786,
          monomaps: {
            image: "https://i.postimg.cc/QNyB6kmc/rp-monoford-v1j0223.jpg",
            name: "Central Goods #223",
            description:
              "Rentable commercial building for $73 with 2 Doors and 1 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 530, //x:1509, y:543
            left: 1500,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 7756677,
          monomaps: {
            image: "https://i.postimg.cc/WbqdxFYC/rp-monoford-v1j0224.jpg",
            name: "Fancy Tramp",
            description:
              "Rentable commercial building for $73 with 3 Doors and 3 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 530, //x:1538, y:535
            left: 1530,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 665456,
          monomaps: {
            image: "https://i.postimg.cc/d0wD7WQc/rp-monoford-v1j0225.jpg",
            name: "Sunset Cafe #223",
            description:
              "Rentable commercial building for $73 with 2 Doors and 1 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 500, //x:1568, y:527
            left: 1570,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 665345,
          monomaps: {
            image: "https://i.postimg.cc/QdLFD8Rt/rp-monoford-v1j0220.jpg",
            name: "Oceanview Apartments",
            description:
              "Rentable apartments on floor D for $104 with 4 Doors and 4 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 330, //x:1378, y:338
            left: 1350,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 4236234,
          monomaps: {
            image: "https://i.postimg.cc/Z5cvLkM5/rp-monoford-v1j0241.jpg",
            name: "President Bay Apartments",
            description:
              "Rentable apartments for $42 with 3 Doors and 4 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1020, //x:1378, y:338
            left: 360,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5562234,
          monomaps: {
            image: "https://i.postimg.cc/QdLFD8Rt/rp-monoford-v1j0220.jpg",
            name: "Oceanview Penthouse",
            description:
              "Rentable Apartment on the highest floor for $292 with 9 Doors and 23 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 330, //x:1376, y:373
            left: 1390,
            icon: "house-building",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 65165345,
          monomaps: {
            image: "https://i.postimg.cc/9f00tD9L/rp-monoford-v1j0249.jpg",
            name: "Crolos Apartments",
            description:
              "Rentable apartments for $42 with 4 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 620, //x:1378, y:338
            left: 550,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 62365345,
          monomaps: {
            image: "https://i.postimg.cc/MpdXQ7nc/rp-monoford-v1j0250.jpg",
            name: "Sheldon Apartments",
            description:
              "Rentable apartments for $21 with 3 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 540, //x:1378, y:338
            left: 550,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5562344,
          monomaps: {
            image: "https://i.postimg.cc/xd3Jgwpd/rp-monoford-v1j0217.jpg",
            name: "Lonewolf Steakhouse",
            description:
              "Rentable commercial property for $69 with 3 Doors and 4 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 470, //x:1018, y:478
            left: 1010,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 553362344,
          monomaps: {
            image: "https://i.postimg.cc/9Fs7ftqc/rp-monoford-v1j0216.jpg",
            name: "Schonwild Cork Top Vines",
            description:
              "Rentable commercial property for $63 with 2 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 540, //x:1018, y:478
            left: 1010,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },

        {
          id: 66234662,
          monomaps: {
            image: "https://i.postimg.cc/pXmjx1r0/rp-monoford-v1j0215.jpg",
            name: "Channel Towers Apartments",
            description:
              "Rentable apartment for $125 with 5 Doors and 4 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 510, //x:1046, y:519
            left: 1040,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524632331243,
          monomaps: {
            image: "",
            name: "Channel Towers Garage #2",
            description:
              "Rentable Industrial Property for $35 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 540, //x:463, y:1658
            left: 1120,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524632331253,
          monomaps: {
            image: "",
            name: "Channel Towers Garage #1",
            description:
              "Rentable Industrial Property for $35 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 475, //x:463, y:1658
            left: 1120,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5323552,
          monomaps: {
            image: "",
            name: "Portside Apartments",
            description:
              "Rentable apartments for $52 with 4 Doors and 4 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 830, //x:1555, y:833
            left: 1550,
            icon: "apartment",
            marker: "marker",
            color: "#22a875",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3434362,
          monomaps: {
            image: "",
            name: "Parker C5 Warehouse",
            description:
              "Rentable Industrial Property for $323 with 4 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1000, //x:1755, y:1008
            left: 1750,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 54354352,
          monomaps: {
            image: "",
            name: "Recycling D4",
            description:
              "Rentable Industrial Property for $375 with 6 Doors and 6 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 920, //x:1888, y:922
            left: 1890,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 75465462,
          monomaps: {
            image: "",
            name: "Ducatel Sugar Co.",
            description:
              "Rentable Industrial Property for $360 with 6 Doors and 5 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1630, //x:1376, y:1632
            left: 1370,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5234677,
          monomaps: {
            image: "",
            name: "Battery Ave. Warehouse",
            description:
              "Rentable Industrial Property for $348 with 7 Doors and 5 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1810, //x:1331, y:1812
            left: 1325,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 7563456,
          monomaps: {
            image: "",
            name: "Nov St Warehouse #14",
            description:
              "Rentable Industrial Property for $333 with 5 Doors and 4 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1630, //x:1172, y:1634
            left: 1170,
            icon: "warehouse",
            marker: "marker",
            color: "#b136c9",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5243245,
          monomaps: {
            image: "",
            name: "Mill Rd Farm",
            description:
              "Rentable House Property for $94 with 7 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1640, //x:419, y:1648
            left: 410,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3443561235,
          monomaps: {
            image: "",
            name: "AD 24/7 #3",
            description:
              "Rentable House Property for $31 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 620, //x:419, y:1648
            left: 480,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3443561237,
          monomaps: {
            image: "",
            name: "AD 24/7 #2",
            description:
              "Rentable House Property for $31 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 800, //x:419, y:1648
            left: 650,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3443561236,
          monomaps: {
            image: "",
            name: "AD 24/7 #1",
            description:
              "Rentable House Property for $31 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 770, //x:419, y:1648
            left: 650,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 353252352,
          monomaps: {
            image: "",
            name: "AD 24/7 #4",
            description:
              "Rentable House Property for $31 with 2 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 580, //x:484, y:627
            left: 480,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5243262345,
          monomaps: {
            image: "",
            name: "72nd Street #116",
            description:
              "Rentable House Property for $73 with 9 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 600, //x:419, y:1648
            left: 630,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 6234234664,
          monomaps: {
            image: "",
            name: "72nd Street #122",
            description:
              "Rentable House Property for $73 with 9 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 625, //x:419, y:1648
            left: 630,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 7234523562,
          monomaps: {
            image: "",
            name: "72nd Street #126",
            description:
              "Rentable House Property for $73 with 9 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 650, //x:419, y:1648
            left: 630,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524324555,
          monomaps: {
            image: "",
            name: "72nd Street #130",
            description:
              "Rentable House Property for $73 with 9 Doors and 3 Outlets",
          },
          monomaps_data: {
            iconSize: 25,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 675, //x:419, y:1648
            left: 630,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 5243233345,
          monomaps: {
            image: "",
            name: "Evo Ln #2",
            description:
              "Rentable House Property for $302 with 13 Doors and 8 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1680, //x:751, y:1683
            left: 750,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52433235,
          monomaps: {
            image: "",
            name: "Evo Ln #1",
            description:
              "Rentable House Property for $250 with 9 Doors and 5 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1670, //x:553, y:1678
            left: 550,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524356235,
          monomaps: {
            image: "",
            name: "Sater Bay #3",
            description:
              "Rentable House Property for $250 with 9 Doors and 5 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1380, //x:419, y:1383
            left: 410,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524373235,
          monomaps: {
            image: "",
            name: "Sater Bay #1",
            description:
              "Rentable House Property for $271 with 15 Doors and 8 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1280, //x:305, y:1289
            left: 300,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52432213235,
          monomaps: {
            image: "",
            name: "Sater Bay #2",
            description:
              "Rentable House Property for $302 with 13 Doors and 8 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1410, //x:205, y:1413
            left: 200,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52467533235,
          monomaps: {
            image: "",
            name: "Sater Bay #5",
            description:
              "Rentable House Property for $271 with 11 Doors and 7 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1590, //x:276, y:1591
            left: 270,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52432353235,
          monomaps: {
            image: "",
            name: "Sater Bay #4",
            description:
              "Rentable House Property for $260 with 9 Doors and 5 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1450, //x:315, y:1457
            left: 310,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52433272335,
          monomaps: {
            image: "",
            name: "President Bay #23",
            description:
              "Rentable House Property for $73 with 6 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1060, //x:205, y:1067
            left: 200,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 52433222535,
          monomaps: {
            image: "",
            name: "President Bay #11",
            description:
              "Rentable House Property for $73 with 5 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 990, //x:210, y:998
            left: 210,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 524332234535,
          monomaps: {
            image: "",
            name: "President Bay #5",
            description:
              "Rentable House Property for $69 with 5 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 930, //x:149, y:937
            left: 140,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 223345612,
          monomaps: {
            image: "",
            name: "Crooke Cres #3",
            description:
              "Rentable House Property for $73 with 5 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 530, //x:149, y:937
            left: 300,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 553343432,
          monomaps: {
            image: "",
            name: "Crooke Cres #9",
            description:
              "Rentable House Property for $69 with 5 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 600, //x:149, y:937
            left: 290,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 673453454,
          monomaps: {
            image: "",
            name: "Crooke Cres #15",
            description:
              "Rentable House Property for $73 with 6 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 670, //x:149, y:937
            left: 200,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 23472346,
          monomaps: {
            image: "",
            name: "Crooke Cres #29",
            description:
              "Rentable House Property for $69 with 3 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 670, //x:149, y:937
            left: 130,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 12372345,
          monomaps: {
            image: "",
            name: "Crooke Cres #20",
            description:
              "Rentable House Property for $69 with 5 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 600, //x:149, y:937
            left: 130,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 723467234,
          monomaps: {
            image: "",
            name: "Crooke Cres #6",
            description:
              "Rentable House Property for $63 with 5 Doors and 1 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 560, //x:149, y:937
            left: 210,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },        {
          id: 7322387834,
          monomaps: {
            image: "",
            name: "Crooke Cres #2",
            description:
              "Rentable House Property for $69 with 6 Doors and 2 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 500, //x:149, y:937
            left: 220,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 2323251233,
          monomaps: {
            image: "",
            name: "Sutherlin Estate",
            description:
              "Rentable House Property for $583 with 33 Doors and 20 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 220, //x:149, y:937
            left: 100,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 2324451233,
          monomaps: {
            image: "",
            name: "Lolas Mansion",
            description:
              "Rentable House Property for $292 with 17 Doors and 15 Outlets",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 170, //x:149, y:937
            left: 540,
            icon: "house",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 2323251233,
          monomaps: {
            image: "",
            name: "Monoford Convention Center",
            description:
              "No Description",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Unknown", type: ""}],
            type: "Public",
            position: "absolute",
            top: 440, //x:149, y:937
            left: 1540,
            icon: "monument",
            marker: "marker",
            color: "#db9d21",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3234522,
          monomaps: {
            image: "",
            name: "Monoford County Energy (Powerplant)",
            description:
              "No Description Provided",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Unknown", type: ""}],
            type: "Public",
            position: "absolute",
            top: 1710, //x:1476, y:1719
            left: 1470,
            icon: "utility-pole-double",
            marker: "marker",
            color: "#22a834",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 53434555,
          monomaps: {
            image: "",
            name: "Old Glenn's Convenience Store",
            description:
              "Rentable commercial building for $21 with 2 Doors and 2 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 1120, //x:657, y:1120
            left: 650,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 34451235,
          monomaps: {
            image: "",
            name: "Pawnbrokers",
            description:
              "Rentable commercial building for $42 with 3 Doors and 2 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 730, //x:523, y:730
            left: 520,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 66612352,
          monomaps: {
            image: "",
            name: "Laundromat Cleaners",
            description:
              "Rentable commercial building for $42 with 3 Doors and 2 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 730, //x:523, y:730
            left: 490,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 23555123,
          monomaps: {
            image: "",
            name: "It's 5:00 Somewhere",
            description:
              "Rentable commercial building for $83 with 3 Doors and 3 Outlet",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Rentable",
            position: "absolute",
            top: 760, //x:595, y:769
            left: 590,
            icon: "building",
            marker: "marker",
            color: "#4b56f2",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3232353221352,
          monomaps: {
            image: "",
            name: "Mine Cave",
            description:
              "Something secret is hidden in this Mine Cave.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Resource",
            position: "absolute",
            top: 60, //x:595, y:769
            left: 700,
            icon: "archway",
            marker: "marker",
            color: "#3271a8",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3232345521352,
          monomaps: {
            image: "",
            name: "Resource Location",
            description:
              "There's Rocks & Trees within' this area.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Resource",
            position: "absolute",
            top: 1960, //x:595, y:769
            left: 400,
            icon: "mound",
            marker: "marker",
            color: "#a88132",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3232366521352,
          monomaps: {
            image: "",
            name: "Resource Location",
            description:
              "There's Rocks & Trees within' this area.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Resource",
            position: "absolute",
            top: 1960, //x:595, y:769
            left: 600,
            icon: "mound",
            marker: "marker",
            color: "#a88132",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3232378521352,
          monomaps: {
            image: "",
            name: "Resource Location",
            description:
              "There's Rocks & Trees within' this area.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Resource",
            position: "absolute",
            top: 1960, //x:595, y:769
            left: 800,
            icon: "mound",
            marker: "marker",
            color: "#a88132",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3232352951352,
          monomaps: {
            image: "",
            name: "Resource Location",
            description:
              "There's Rocks & Trees within' this area.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Rentable Property", type: ""}],
            type: "Resource",
            position: "absolute",
            top: 430, //x:595, y:769
            left: 1800,
            icon: "mound",
            marker: "marker",
            color: "#a88132",
            event: function () {
              customMarker(this.id);
            },
          },
        },
        {
          id: 3233252951352,
          monomaps: {
            image: "",
            name: "Pine County",
            description:
              "Interstate 84, This leads you straight up into the Pine County layer.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: false,
            badges: [{name: "Monomaps", type: "badge-blue"}],
            type: "Monomaps",
            position: "absolute",
            top: 1990, //x:595, y:769
            left: 1800,
            icon: "map",
            marker: "marker",
            color: "#ebd834",
            event: function () {
              localStorage.setItem("timeMode", "Layer2")
              window.location.reload();
            },
          },
        },
        {
          id: 3232232951352,
          monomaps: {
            image: "",
            name: "Pine County",
            description:
              "Highway 18, This leads you straight up into the Pine County layer.",
          },
          monomaps_data: {
            iconSize: 32,
            hoverSize: 40,
            perm: true,
            preview: true,
            badges: [{name: "Monomaps", type: "badge-blue"}],
            type: "Monomaps",
            position: "absolute",
            top: 680, //x:595, y:769
            left: 20,
            icon: "map",
            marker: "marker",
            color: "#ebd834",
            event: function () {
              localStorage.setItem("timeMode", "Layer2")
              window.location.reload();
            },
          },
        },
      ];
      mmAlert({
        name: "Monomap Data",
        message: `Loaded ${mmData.length} map-markers`
      })
} else if(localStorage.getItem("timeMode") === 'Layer2') {
  var mmData = [
    {
      id: 323223233452,
      monomaps: {
        image: "",
        name: "Monoford County",
        description:
          "Highway 18, This leads you straight up into the Monoford County layer.",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Monomaps", type: "badge-blue"}],
        type: "Monomaps",
        position: "absolute",
        top: 1760, //x:595, y:769
        left: 20,
        icon: "map",
        marker: "marker",
        color: "#ebd834",
        event: function () {
          localStorage.setItem("timeMode", "Layer1")
          window.location.reload();
        },
      },
    },
    {
      id: 3232232951352,
      monomaps: {
        image: "",
        name: "Monoford County",
        description:
          "Interstate 84, This leads you straight up into the Monoford County layer.",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: false,
        badges: [{name: "Monomaps", type: "badge-blue"}],
        type: "Monomaps",
        position: "absolute",
        top: 2010, //x:595, y:769
        left: 1470,
        icon: "map",
        marker: "marker",
        color: "#ebd834",
        event: function () {
          localStorage.setItem("timeMode", "Layer1")
          window.location.reload();
        },
      },
    },
    {
      id: 985773656,
      monomaps: {
        image: "",
        name: "Drug Dealer Location",
        description:
          "This is 1 of the 3 locations the drug dealer is located at, here you can sell drugs and purchase supplies.<br><br><b>Located underneath the Bridge.</b>",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Illegal", type: "badge-red"}],
        type: ["Illegal"],
        position: "absolute",
        top: 1180,
        left: 150,
        icon: "user",
        marker: "marker",
        color: "#e64141",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 31826382,
      monomaps: {
        image: "",
        name: "Handcuff Breaker",
        description:
          "The man the law enforcement hates, break your handcuffs here.<br><br><b>Located underneath the bridge.</b>",
      },
      monomaps_data: {
        iconSize: 28,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Illegal", type: "badge-red"}],
        type: ["Illegal"],
        position: "absolute",
        top: 1220,
        left: 150,
        icon: "hands-bound",
        marker: "marker",
        color: "#bb3535",
        event: function () {
          customMarker(this.id);
        },
      },
    },
        {
      id: 3332242345,
      monomaps: {
        image: "",
        name: "US Penitentiary",
        description:
          "This is the place where those very bad criminals go, and those who gets parking tickets.",
      },
      monomaps_data: {
        iconSize: 28,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Government", type: "badge-blue"}],
        type: ["Government"],
        position: "absolute",
        top: 230,
        left: 130,
        icon: "fort",
        marker: "marker",
        color: "#3271a8",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5243663245,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #6",
        description:
          "Rentable House Property for $229 with 3 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 700, //x:419, y:1648
        left: 1180,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5246643245,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #5",
        description:
          "Rentable House Property for $229 with 3 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 700, //x:419, y:1648
        left: 1270,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 52466223245,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #4",
        description:
          "Rentable House Property for $250 with 6 Doors and 3 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1490, //x:1282, y:1498
        left: 1280,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },    {
      id: 52466223265,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #3",
        description:
          "Rentable House Property for $260 with 7 Doors and 4 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1950, //x:1282, y:1498
        left: 700,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 52466255323265,
      monomaps: {
        image: "",
        name: "Pine Dr #1",
        description:
          "Rentable House Property for $69 with 5 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 960, //x:1282, y:1498
        left: 1290,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 52466223664265,
      monomaps: {
        image: "",
        name: "Pine Dr #3",
        description:
          "Rentable House Property for $77 with 6 Doors and 3 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1040, //x:1282, y:1498
        left: 1290,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 52466242326625,
      monomaps: {
        image: "",
        name: "Pine Dr #5",
        description:
          "Rentable House Property for $77 with 5 Doors and 3 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1110, //x:1282, y:1498
        left: 1290,
        icon: "house",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 524632331245,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #1",
        description:
          "Rentable House Property for $240 with 3 Doors and 4 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1650, //x:463, y:1658
        left: 460,
        icon: "warehouse",
        marker: "marker",
        color: "#b136c9",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5246323341245,
      monomaps: {
        image: "",
        name: "Falcon Outskirts #2",
        description:
          "Rentable House Property for $240 with 5 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1290, //x:463, y:1658
        left: 310,
        icon: "warehouse",
        marker: "marker",
        color: "#b136c9",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5246356341245,
      monomaps: {
        image: "",
        name: "Main St #6",
        description:
          "Rentable Industrial Property for $281 with 4 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1320, //x:463, y:1658
        left: 1150,
        icon: "warehouse",
        marker: "marker",
        color: "#b136c9",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5246556341245,
      monomaps: {
        image: "",
        name: "Welding Supply Co.",
        description:
          "Rentable Industrial Property for $281 with 4 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1360, //x:463, y:1658
        left: 1150,
        icon: "warehouse",
        marker: "marker",
        color: "#b136c9",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 52473243235,
      monomaps: {
        image: "",
        name: "Logging Area",
        description:
          "Nice location with variety of trees to chop down and ruin the enviroment!",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Resource", type: ""}],
        type: "Resource",
        position: "absolute",
        top: 760, //x:419, y:1648
        left: 670,
        icon: "trees",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5243557233,
      monomaps: {
        image: "",
        name: "Logging Area",
        description:
          "Nice location with variety of trees to chop down and ruin the enviroment!",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Resource", type: ""}],
        type: "Resource",
        position: "absolute",
        top: 880, //x:419, y:1648
        left: 1810,
        icon: "trees",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 5243288333,
      monomaps: {
        image: "",
        name: "Great Millennium Mine",
        description:
          "A nice big cave full of various rocks and stuff, a perfect place for mining.",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: false,
        badges: [{name: "Resource", type: ""}],
        type: "Resource",
        position: "absolute",
        top: 1240, //x:419, y:1648
        left: 1930,
        icon: "archway",
        marker: "marker",
        color: "#3271a8",
        event: function () {
          // GreatMillenniumMine();
          customMarker(this.id);
        },
      },
    },
    {
      id: 5243778233,
      monomaps: {
        image: "",
        name: "Logging Area",
        description:
          "Nice location with variety of trees to chop down and ruin the enviroment!",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Resource", type: ""}],
        type: "Resource",
        position: "absolute",
        top: 1770, //x:419, y:1648
        left: 1920,
        icon: "trees",
        marker: "marker",
        color: "#22a834",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 24163975,
      monomaps: {
        image: "",
        name: "Clothing Store",
        description:
          "Change up your style, purchase new clothing from the clothing store, from the basic outfits, to suits, jackets, and more.\n<br><br><i class='fa-solid fa-star'></i> There's also a Cosmetic NPC which features hats, scarfs, maskes and more, only available for Premium Members.",
      },
      monomaps_data: {
        iconSize: 26,
        hoverSize: 34,
        perm: true,
        preview: true,
        badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
        type: ["Shop"],
        position: "absolute",
        top: 1045,
        left: 1070,
        icon: "shirt",
        marker: "marker",
        color: "orange",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 62017277,
      monomaps: {
        image: "",
        name: "Hospital",
        description:
          "The South Side Hospital is where you are brought for when you have medical emergencies, you'll also respawn here when you die.\n<br><br>\nThis is also a Spawn Location when joining the server.",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
        type: ["Government"],
        position: "absolute",
        top: 960,
        left: 1140,
        icon: "star-of-life",
        marker: "marker",
        color: "#f83030",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 98961296,
      monomaps: {
        image: "",
        name: "Police Department",
        description:
          "To Protect and Serve, this is where all the police department officials come to arrest their suspects, go on duty, and obtain their equipment.\n<br><br>\n<br>\n<i class='fa-solid fa-gun'></i> This place can be raided by criminals to reobtain their items from the evidence locker, or to break out their friend from jail. ",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Public Location", type: ""}, {name: "Government", type: "badge-blue"}],
        type: ["Government"],
        position: "absolute",
        top: 940,
        left: 1050,
        icon: "user-police-tie",
        marker: "marker",
        color: "#1fa6e0",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 665345,
      monomaps: {
        image: "",
        name: "Main St Apartments",
        description:
          "Rentable apartments for $31 with 4 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 25,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1050, //x:1378, y:338
        left: 1040,
        icon: "apartment",
        marker: "marker",
        color: "#22a875",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 665354,
      monomaps: {
        image: "",
        name: "Main St Apartments",
        description:
          "Rentable apartments for $83 with 3 Doors and 2 Outlets",
      },
      monomaps_data: {
        iconSize: 25,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1130, //x:1378, y:338
        left: 1145,
        icon: "apartment",
        marker: "marker",
        color: "#22a875",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 709845659,
      monomaps: {
        image: "",
        name: "Main St. #102",
        description:
          "Rentable commercial building for $21 with 1 Doors and 1 Outlets.",
      },
      monomaps_data: {
        iconSize: 25,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1130, //x:1565, y:649
        left: 1125,
        icon: "building",
        marker: "marker",
        color: "#4b56f2",
        event: function () {
          customMarker(this.id);
        },
      },
    },    {
      id: 70984559,
      monomaps: {
        image: "",
        name: "Main St. #121",
        description:
          "Rentable commercial building for $31 with 4 Doors and 2 Outlets.",
      },
      monomaps_data: {
        iconSize: 25,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Rentable Property", type: ""}],
        type: "Rentable",
        position: "absolute",
        top: 1110, //x:1565, y:649
        left: 1070,
        icon: "building",
        marker: "marker",
        color: "#4b56f2",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 33219228,
      monomaps: {
        image: "",
        name: "Bank",
        description:
          "The bank is where you make your deposits, and your withdrawals, there's also a recruitment position for you to join the Security Force here.\n<br><br>\n<b style='color: red;'>Heist Location</b><br>\nThis place can be robbed by a group of people for a high payout, however a keycard is required to rob this location.",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Public Location", type: ""}, {name: "Heist Location", type: "badge-red"}],
        type: ["Public"],
        position: "absolute",
        top: 1210,
        left: 1130,
        icon: "money-bill-wave",
        marker: "marker",
        color: "#d7d237",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 9016571,
      monomaps: {
        image: "",
        name: "Essence Gas Station",
        description:
          "A location where you can purchase gas for your vehicle, or head inside to the npcs and purchase a snack or something. ",
      },
      monomaps_data: {
        iconSize: 32,
        hoverSize: 40,
        perm: true,
        preview: true,
        badges: [{name: "Public Location", type: ""}, {name: "Shop", type: "badge-green"}],
        type: ["Shop"],
        position: "absolute",
        top: 1250,
        left: 1040,
        icon: "gas-pump",
        marker: "marker",
        color: "#1ac71d",
        event: function () {
          customMarker(this.id);
        },
      },
    },
    {
      id: 1122670,
      monomaps: {
        image: "",
        name: "Parking Garage",
        description:
          "Obtain your vehicles from the Parking Garages, this is one of the many locations.",
      },
      monomaps_data: {
        iconSize: 20,
        hoverSize: 25,
        perm: true,
        preview: true,
        badges: [{name: "City Services", type: "badge-blue"}],
        type: ["Public"],
        position: "absolute",
        top: 1090, //x:360, y:790
        left: 1120,
        icon: "p",
        marker: "service-marker",
        color: "#fff",
        event: function () {
          customMarker(this.id);
        },
      },
    },
  ];
}
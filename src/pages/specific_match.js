//page to render a specific match
import NotFoundPage from "./404";

import Header from "../components/header";
import Footer from "../components/footer";
import MatchHeader from "../components/match_header";
import MatchMaps from "../components/match_maps";
//import all maps that are located in the assets/images/maps folder
import Mario_Kart_Stadium_Course from "../assets/images/maps/Mario_Kart_Stadium.png";
import DK_Jungle_Course from "../assets/images/maps/MK8_3DS_DK_Jungle_Course_Icon.png";
import Music_Park_Course from "../assets/images/maps/MK8_3DS_Music_Park_Course_Icon.png";
import Neo_Bowser_City_Course from "../assets/images/maps/MK8_3DS_Neo_Bowser_City_Course_Icon.png";
import Piranha_Plant_Slide_Course from "../assets/images/maps/MK8_3DS_Piranha_Plant_Slide_Course_Icon.png";
import Animal_Crossing_Course from "../assets/images/maps/MK8_Animal_Crossing_Course_Icon.png";
import Big_Blue_Course from "../assets/images/maps/MK8_Big_Blue_Course_Icon.png";
import Bone_Dry_Dunes_Course from "../assets/images/maps/MK8_Bone-Dry_Dunes_Course_Icon.png";
import Bowser_Castle_Course from "../assets/images/maps/MK8_Bowser's_Castle_Course_Icon.png";
import Cloudtop_Cruise_Course from "../assets/images/maps/MK8_Cloudtop_Cruise_Course_Icon.png";
import Dolphin_Shoals_Course from "../assets/images/maps/MK8_Dolphin_Shoals_Course_Icon.png";
import Dragon_Driftway_Course from "../assets/images/maps/MK8_Dragon_Driftway_Course_Icon.png";
import Cheep_Cheep_Beach_Course from "../assets/images/maps/MK8_DS_Cheep_Cheep_Beach_Course_Icon.png";
import Tick_Tock_Clock_Course from "../assets/images/maps/MK8_DS_Tick-Tock_Clock_Course_Icon.png";
import Wario_Stadium_Course from "../assets/images/maps/MK8_DS_Wario_Stadium_Course_Icon.png";
import Electrodrome_Course from "../assets/images/maps/MK8_Electrodrome_Course_Icon.png";
import Excitebike_Arena_Course from "../assets/images/maps/MK8_Excitebike_Arena_Course_Icon.png";
import Cheese_Land_Course from "../assets/images/maps/MK8_GBA_Cheese_Land_Course_Icon.png";
import Mario_Circuit_Course from "../assets/images/maps/MK8_GBA_Mario_Circuit_Course_Icon.png";
import Ribbon_Road_Course from "../assets/images/maps/MK8_GBA_Ribbon_Road_Course_Icon.png";
import Baby_Park_Course from "../assets/images/maps/MK8_GCN_Baby_Park_Course_Icon.png";
import Dry_Dry_Desert_Course from "../assets/images/maps/MK8_GCN_Dry_Dry_Desert_Course_Icon.png";
import Sherbet_Land_Course from "../assets/images/maps/MK8_GCN_Sherbet_Land_Course_Icon.png";
import Yoshi_Circuit_Course from "../assets/images/maps/MK8_GCN_Yoshi_Circuit_Course_Icon.png";
import Hyrule_Circuit_Course from "../assets/images/maps/MK8_Hyrule_Circuit_Course_Icon.png";
import Ice_Ice_Outpost_Course from "../assets/images/maps/MK8_Ice_Ice_Outpost_Course_Icon.png";
import Locked_Course from "../assets/images/maps/MK8_Locked_Course_Icon.png";
import Mario_Circuit_Course_2 from "../assets/images/maps/MK8_Mario_Circuit_Course_Icon.png";
import Mount_Wario_Course from "../assets/images/maps/MK8_Mount_Wario_Course_Icon.png";
import Mute_City_Course from "../assets/images/maps/MK8_Mute_City_Course_Icon.png";
import N64_Rainbow_Road_Course from "../assets/images/maps/MK8_N64_Rainbow_Road_Course_Icon.png";
import N64_Royal_Raceway_Course from "../assets/images/maps/MK8_N64_Royal_Raceway_Course_Icon.png";
import N64_Yoshi_Valley_Course from "../assets/images/maps/MK8_N64_Yoshi_Valley_Course_Icon.png";
import N64_Toads_Turnpike_Course from "../assets/images/maps/MK8_N64_Toad's_Turnpike_Course_Icon.png";
import Rainbow_Road_Course from "../assets/images/maps/MK8_Rainbow_Road_Course_Icon.png";
import Secret_Character from "../assets/images/maps/MK8_Secret_Character_Icon.png";
import Shy_Guy_Falls_Course from "../assets/images/maps/MK8_Shy_Guy_Falls_Course_Icon.png";
import SNES_Donut_Plains_Course from "../assets/images/maps/MK8_SNES_Donut_Plains_3_Course_Icon.png";
import SNES_Rainbow_Road_Course from "../assets/images/maps/MK8_SNES_Rainbow_Road_Course_Icon.png";
import Sunshine_Airport_Course from "../assets/images/maps/MK8_Sunshine_Airport_Course_Icon.png";
import Super_Bell_Subway_Course from "../assets/images/maps/MK8_Super_Bell_Subway_Course_Icon.png";
import Sweet_Sweet_Canyon_Course from "../assets/images/maps/MK8_Sweet_Sweet_Canyon_Course_Icon.png";
import Thwomp_Ruins_Course from "../assets/images/maps/MK8_Thwomp_Ruins_Course_Icon.png";
import Toad_Harbor_Course from "../assets/images/maps/MK8_Toad_Harbor_Course_Icon.png";
import Twisted_Mansion_Course from "../assets/images/maps/MK8_Twisted_Mansion_Course_Icon.png";
import Water_Park_Course from "../assets/images/maps/MK8_Water_Park_Course_Icon.png";
import Wii_Grumble_Volcano_Course from "../assets/images/maps/MK8_Wii_Grumble_Volcano_Course_Icon.png";
import Wii_Moo_Moo_Meadows_Course from "../assets/images/maps/MK8_Wii_Moo_Moo_Meadows_Course_Icon.png";
import Wii_Warios_Gold_Mine_Course from "../assets/images/maps/MK8_Wii_Wario's_Gold_Mine_Course_Icon.png";
import Wild_Woods_Course from "../assets/images/maps/MK8_Wild_Woods_Course_Icon.png";
//import all tournement icons from the assets/images/tournaments folder
import Mushroom_Cup from "../assets/images/tournaments/MK8_MushroomCup.png";
import Flower_Cup from "../assets/images/tournaments/MK8_FlowerCup.png";
import Star_Cup from "../assets/images/tournaments/MK8_Star_Cup_Emblem.png";
import Special_Cup from "../assets/images/tournaments/MK8_Special_Cup_Emblem.png";
import Shell_Cup from "../assets/images/tournaments/MK8_Shell_Cup_Emblem.png";
import Banana_Cup from "../assets/images/tournaments/MK8_Banana_Cup_Emblem.png";
import Leaf_Cup from "../assets/images/tournaments/MK8_Leaf_Cup_Emblem.png";
import Lightning_Cup from "../assets/images/tournaments/MK8_Lightning_Cup_Emblem.png";
import Egg_Cup from "../assets/images/tournaments/MK8_Egg_Cup_Emblem.png";
import Triforce_Cup from "../assets/images/tournaments/MK8_Triforce_Cup_Emblem.png";
import Bell_Cup from "../assets/images/tournaments/MK8_Bell_Cup_Emblem.png";
import Crossing_Cup from "../assets/images/tournaments/MK8_Crossing_Cup_Emblem.png";

import { useParams} from "react-router-dom";

const SpecificMatch = (props) => {

  //make a mapping of all the maps
  const maps = {
    "Tick_Tock_Clock_Course": Tick_Tock_Clock_Course,
    "Wario_Stadium_Course": Wario_Stadium_Course,
    "Electrodrome_Course": Electrodrome_Course,
    "Excitebike_Arena_Course": Excitebike_Arena_Course,
    "Cheese_Land_Course": Cheese_Land_Course,
    "Mario_Circuit_Course": Mario_Circuit_Course,
    "Ribbon_Road_Course": Ribbon_Road_Course,
    "Baby_Park_Course": Baby_Park_Course,
    "Dry_Dry_Desert_Course": Dry_Dry_Desert_Course,
    "Sherbet_Land_Course": Sherbet_Land_Course,
    "Yoshi_Circuit_Course": Yoshi_Circuit_Course,
    "Hyrule_Circuit_Course": Hyrule_Circuit_Course,
    "Ice_Ice_Outpost_Course": Ice_Ice_Outpost_Course,
    "Locked_Course": Locked_Course,
    "Mario_Circuit_Course_2": Mario_Circuit_Course_2,
    "Mount_Wario_Course": Mount_Wario_Course,
    "Mute_City_Course": Mute_City_Course,
    "N64_Rainbow_Road_Course": N64_Rainbow_Road_Course,
    "N64_Royal_Raceway_Course": N64_Royal_Raceway_Course,
    "N64_Yoshi_Valley_Course": N64_Yoshi_Valley_Course,
    "N64_Toads_Turnpike_Course": N64_Toads_Turnpike_Course,
    "Rainbow_Road_Course": Rainbow_Road_Course,
    "Secret_Character": Secret_Character,
    "Shy_Guy_Falls_Course": Shy_Guy_Falls_Course,
    "SNES_Donut_Plains_Course": SNES_Donut_Plains_Course,
    "SNES_Rainbow_Road_Course": SNES_Rainbow_Road_Course,
    "Sunshine_Airport_Course": Sunshine_Airport_Course,
    "Super_Bell_Subway_Course": Super_Bell_Subway_Course,
    "Sweet_Sweet_Canyon_Course": Sweet_Sweet_Canyon_Course,
    "Thwomp_Ruins_Course": Thwomp_Ruins_Course,
    "Toad_Harbor_Course": Toad_Harbor_Course,
    "Twisted_Mansion_Course": Twisted_Mansion_Course,
    "Water_Park_Course": Water_Park_Course,
    "Wii_Grumble_Volcano_Course": Wii_Grumble_Volcano_Course,
    "Wii_Moo_Moo_Meadows_Course": Wii_Moo_Moo_Meadows_Course,
    "Wii_Warios_Gold_Mine_Course": Wii_Warios_Gold_Mine_Course,
    "Wild_Woods_Course": Wild_Woods_Course,
    "Mario_Kart_Stadium_Course": Mario_Kart_Stadium_Course,
    "DK_Jungle_Course": DK_Jungle_Course,
    "Music_Park_Course": Music_Park_Course,
    "Neo_Bowser_City_Course": Neo_Bowser_City_Course,
    "Piranha_Plant_Slide_Course": Piranha_Plant_Slide_Course,
    "Animal_Crossing_Course": Animal_Crossing_Course,
    "Big_Blue_Course": Big_Blue_Course,
    "Bowser_Castle_Course": Bowser_Castle_Course,
    "Cloudtop_Cruise_Course": Cloudtop_Cruise_Course,
    "Dolphin_Shoals_Course": Dolphin_Shoals_Course,
    "Dragon_Driftway_Course": Dragon_Driftway_Course,
    "Cheep_Cheep_Beach_Course": Cheep_Cheep_Beach_Course,
    "Bone_Dry_Dunes_Course": Bone_Dry_Dunes_Course,
  };
  //make a mapping of all the tournaments with their right maps
  const tournaments = {
    "Mushroom_Cup": [
      maps["Mario_Kart_Stadium_Course"],
      maps["Water_Park_Course"],
      maps["Sweet_Sweet_Canyon_Course"],
      maps["Thwomp_Ruins_Course"]
    ],
    "Flower_Cup": [
      maps["Mario_Circuit_Course_2"],
      maps["Toad_Harbor_Course"],
      maps["Twisted_Mansion_Course"],
      maps["Shy_Guy_Falls_Course"]
    ],
    "Star_Cup": [
      maps["Sunshine_Airport_Course"],
      maps["Dolphin_Shoals_Course"],
      maps["Electrodrome_Course"],
      maps["Mount_Wario_Course"]
    ],
    "Special_Cup": [
      maps["Cloudtop_Cruise_Course"],
      maps["Bone_Dry_Dunes_Course"],
      maps["Bowser_Castle_Course"],
      maps["Rainbow_Road_Course"]
    ],
    "Shell_Cup": [
      maps["Wii_Moo_Moo_Meadows_Course"],
      maps["Mario_Circuit_Course"],
      maps["Cheep_Cheep_Beach_Course"],
      maps["N64_Toads_Turnpike_Course"]
    ],
    "Banana_Cup": [
      maps["Dry_Dry_Desert_Course"],
      maps["SNES_Donut_Plains_Course"],
      maps["N64_Royal_Raceway_Course"],
      maps["DK_Jungle_Course"]
    ],
    "Leaf_Cup": [
      maps["Wario_Stadium_Course"],
      maps["Sherbet_Land_Course"],
      maps["Music_Park_Course"],
      maps["N64_Yoshi_Valley_Course"]
    ],
    "Lightning_Cup": [
      maps["Tick_Tock_Clock_Course"],
      maps["Piranha_Plant_Slide_Course"],
      maps["Wii_Grumble_Volcano_Course"],
      maps["N64_Rainbow_Road_Course"]
    ],
    "Egg_Cup": [
      maps["Yoshi_Circuit_Course"],
      maps["Excitebike_Arena_Course"],
      maps["Dragon_Driftway_Course"],
      maps["Mute_City_Course"]
    ],
    "Triforce_Cup": [
      maps["Wii_Warios_Gold_Mine_Course"],
      maps["SNES_Rainbow_Road_Course"],
      maps["Ice_Ice_Outpost_Course"],
      maps["Hyrule_Circuit_Course"]
    ],
    "Crossing_Cup": [
      maps["Baby_Park_Course"],
      maps["Cheese_Land_Course"],
      maps["Wild_Woods_Course"],
      maps["Animal_Crossing_Course"]
    ],
    "Bell_Cup": [
      maps["Neo_Bowser_City_Course"],
      maps["Ribbon_Road_Course"],
      maps["Super_Bell_Subway_Course"],
      maps["Big_Blue_Course"]
    ],
    "Random": [
    ]
  };

  const tournament_icons = {
    "Mushroom_Cup": Mushroom_Cup,
    "Flower_Cup": Flower_Cup,
    "Star_Cup": Star_Cup,
    "Special_Cup": Special_Cup,
    "Shell_Cup": Shell_Cup,
    "Banana_Cup": Banana_Cup,
    "Leaf_Cup": Leaf_Cup,
    "Lightning_Cup": Lightning_Cup,
    "Egg_Cup": Egg_Cup,
    "Triforce_Cup": Triforce_Cup,
    "Crossing_Cup": Crossing_Cup,
    "Bell_Cup": Bell_Cup,
    "Random": Secret_Character,
  };


  console.log(props);

  //get the id from the url
  const { MatchID } = useParams();
  //console.log(MatchID);

  //get the specific match and tournament from the props
  const specific_match = props.data.MatchData.filter((match) => {
    return match.id=== MatchID;
  });

  const specific_match_prep = specific_match[0];
  console.log(specific_match_prep);

  //if the match is not found, return a 404 page
  if(specific_match_prep == undefined){
    return <NotFoundPage />;
  }

  const specific_tournament = props.data.TournamentData.filter((tournament) => {
    return tournament.id === specific_match_prep.tournamentID;
  });

  const specific_tournament_prep = specific_tournament[0];
  console.log(specific_tournament_prep);

  //do quality check of the specific match prep data
  // check if there is races key in the object
  if("races" in specific_match_prep == false){
    //check if there is a tournament key in the object
    if("tournamentName" in specific_match_prep == false){
      // fill in tournamentName key with value Random
      specific_match_prep.tournamentName = "Random";
      // fill in the races key with an array [Secret_Character,Secret_Character,Secret_Character,Secret_Character]
      specific_match_prep.new_races = [Secret_Character,Secret_Character,Secret_Character,Secret_Character];
    }
    else{
      console.log("tournamentName key is present");
      //check if the tournamentName key is equal to "Random" => if yes fill in the races key with an array [Secret_Character,Secret_Character,Secret_Character,Secret_Character]
      // if not take the races from the tournament name
      if(specific_match_prep.tournamentName === "Random"){
        specific_match_prep.new_races = [Secret_Character,Secret_Character,Secret_Character,Secret_Character];
      }
      else{
        specific_match_prep.new_races = tournaments[specific_match_prep.tournamentName];
      }
    }
  }else{
    //change the races to the correct format
    let newraces = [];
    console.log(specific_match_prep.races);
    for(let i = 0; i < specific_match_prep.races.length; i++){
      newraces.push(maps[specific_match_prep.races[i]]);
    }
    specific_match_prep.new_races = newraces;
  }

  //check if there are rankings in the specific match prep data
  if("rankings" in specific_match_prep == false){
    //check if the status of the match is TBP or finished => if TBP fill in rankings with  [{player:"TBD",points:"TBD"*4}]
    if(specific_match_prep.status === "TBP"){
      specific_match_prep.rankings = [{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"}];
    }
    //if the status is finished fill in rankings with [{player:"TBD",points:"TBD"*4}]
    else{
      specific_match_prep.rankings = [{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"},{player:"TBD",points:"TBD"}];
    }
  }

  //add the tournamentIcon to the specific_match_prep object
  specific_match_prep.tournamentIcon = tournament_icons[specific_match_prep.tournamentName]; 
  console.log(specific_match_prep);

  const tournament_phases = [
    "Group Stage",
    "Round of 16",
    "Quarter Finals",
    "Semi Finals",
    "Finals"
  ]

  const random_tournament = Math.floor(Math.random() * 13);

  const MockTournamentData = {
    tournamentID: 1,
    //random tournament name from the tournaments dict keys
    tournamentName: Object.keys(tournaments)[random_tournament],
    tournamentIcon: tournament_icons[Object.keys(tournaments)[random_tournament]]
  }

  //make races variable that will be the same as the match found in tournaments 
  //if the key == Random then choose 4 random maps from the maps dict
  const races = MockTournamentData.tournamentName == "Random" ?
    [
      maps[Object.keys(maps)[Math.floor(Math.random() * 19)]],
      maps[Object.keys(maps)[Math.floor(Math.random() * 19)]],
      maps[Object.keys(maps)[Math.floor(Math.random() * 19)]],
      maps[Object.keys(maps)[Math.floor(Math.random() * 19)]]
    ] : tournaments[MockTournamentData.tournamentName];


  const mockData = {
    tournamentID: 1,
    currentStage: tournament_phases[Math.floor(Math.random() * 5)],
    rankings: [
        {player:"nameplayer1", points: 60},
        {player:"nameplayer2", points: 50},
        {player:"nameplayer3", points: 45},
        {player:"nameplayer4", points: 33}
    ],
    tournamentName: Object.keys(tournaments)[random_tournament],
    tournamentIcon: tournament_icons[Object.keys(tournaments)[random_tournament]],
    races: races
  }

  return (
    <>
      <Header />
      <div className="col-lg-12">
        <div className="page-content">
          <h1>Specific Match Page {MatchID}</h1>
          <MatchHeader data={specific_match_prep} />
          <MatchMaps data={specific_match_prep}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificMatch;

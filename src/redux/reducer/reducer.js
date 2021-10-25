const initialState = {
  superHeroes: [],
  heroDetailSelected: {},
  badTeam: [],
  goodTeam: [],
  badTeamError: false,
  goodTeamError: false,
  powerStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  avgWeight: 0,
  avgHeight: 0,
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUSCAR_SUPERHEROE":
      return {
        ...state,
        superHeroes: state.superHeroes.concat(action.results),
      };
    case "RESET_SUPERHEROE":
      return {
        ...state,
        superHeroes: [],
      };
    case "ADD_GOOD_HERO":
      return {
        ...state,
        superHeroes: state.superHeroes.filter((item) => item.id !== action.id),
        goodTeam: [
          ...state.goodTeam,
          state.superHeroes.filter((item) => item.id === action.id)[0],
        ],
      };
    case "ADD_BAD_HERO":
      return {
        ...state,
        superHeroes: state.superHeroes.filter((item) => item.id !== action.id),
        badTeam: [
          ...state.badTeam,
          state.superHeroes.filter((item) => item.id === action.id)[0],
        ],
      };
    case "REMOVE_BAD_HERO":
      return {
        ...state,
        badTeam: state.badTeam.filter(
          (item) => item.id !== action.superHero.id
        ),
        superHeroes: state.superHeroes.concat(action.superHero),
      };
    case "REMOVE_GOOD_HERO":
      return {
        ...state,
        goodTeam: state.goodTeam.filter(
          (item) => item.id !== action.superHero.id
        ),
        superHeroes: state.superHeroes.concat(action.superHero),
      };
    case "GOOD_TEAM_ERROR":
      return {
        ...state,
        goodTeamError: true,
      };
    case "BAD_TEAM_ERROR":
      return {
        ...state,
        badTeamError: true,
      };
    case "RESET_ERROR":
      return {
        ...state,
        goodTeamError: false,
        badTeamError: false,
      };
    case "SUMAR_STATS_EQUIPO":
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence +
            Number(action.superHero.powerstats.intelligence),
          strength:
            state.powerStats.strength +
            Number(action.superHero.powerstats.strength),
          speed:
            state.powerStats.speed + Number(action.superHero.powerstats.speed),
          durability:
            state.powerStats.durability +
            Number(action.superHero.powerstats.durability),
          power:
            state.powerStats.power + Number(action.superHero.powerstats.power),
          combat:
            state.powerStats.combat +
            Number(action.superHero.powerstats.combat),
        },
      };
    case "RESTAR_STATS_EQUIPO":
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence -
            Number(action.superHero.powerstats.intelligence),
          strength:
            state.powerStats.strength -
            Number(action.superHero.powerstats.strength),
          speed:
            state.powerStats.speed - Number(action.superHero.powerstats.speed),
          durability:
            state.powerStats.durability -
            Number(action.superHero.powerstats.durability),
          power:
            state.powerStats.power - Number(action.superHero.powerstats.power),
          combat:
            state.powerStats.combat -
            Number(action.superHero.powerstats.combat),
        },
      };
    case "CALCULAR_PROMEDIOS":
      return {
        ...state,
        avgWeight: action.avg.weight,
        avgHeight: action.avg.height,
      };
    case "SHOW_DETAIL_HERO":
      return {
        ...state,
        heroDetailSelected: action.hero,
      };
    default:
      return state;
  }
};

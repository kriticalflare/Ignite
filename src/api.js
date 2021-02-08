// Base URL

const base_url = "https://api.rawg.io/api/";

// Get current month
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get current day
const getDay = () => {
  const day = new Date().getDay() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
console.log(new_games);

export const popularGamesUrl = () => `${base_url}${popular_games}`;

export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

export const newGamesUrl = () => `${base_url}${new_games}`;

export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;

export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

export const searchGameUrl = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;

//key: 5b741d26f108429da3d7d0a046a1bf29

const baseURL = `https://api.rawg.io/api/platforms?key=${process.env.REACT_APP_RAWG}`;

const twoCharDate = (numb) => {
    if (numb < 10) {
        return `0${numb}`;
    }else return numb
}

const day = new Date().getDate();
const currentDay = twoCharDate(day);

const month = new Date().getMonth();
const currentMonth = twoCharDate(month + 1);

const currentYear = new Date().getFullYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

const filteredURL = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${baseURL}${filteredURL}`

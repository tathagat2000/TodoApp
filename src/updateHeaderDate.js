import { queriedElements } from "/src/constants.js";

const updatePageDate = () => {
  const currentDate = new Date().toDateString();
  queriedElements.headerDate.innerHTML = currentDate;
};

updatePageDate();

import htmlStructure from '../components/shared/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/buttons/startSorting';
import events from '../events/formEvents';
import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM
const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();

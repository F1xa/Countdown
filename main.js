import { UI } from "./view.js";
import { DateTime } from "luxon";

UI.BUTTON.addEventListener('click', ()=> {
  const date = UI.INPUT.value;
  
  if(!date) return;
  
  const { years, days, hours } = DateTime.now().diff(DateTime.fromISO(date), ['years','days', 'hours',]).values;

  UI.RESULT.textContent = `Years: ${years}, Days: ${days}, Hours: ${Math.floor(hours)}`;
});


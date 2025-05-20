import { parseISO, format } from 'date-fns';


export  function dateToDay( inputDate ) {
//   const inputDate = '2025-05-20';
console.log(inputDate);

  const dateObject = parseISO(inputDate);
  return format(dateObject, "EEEE");
}

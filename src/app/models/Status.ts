export class Status {
  id:string;
  name:string;
  status:string;
  checkDate: Date;

  // constructor(init: Status) {
  //   this.id = init.id;
  //   this.name = init.name;
  //   this.status = init.status;
  //   this.checkDate = parseDate(init.checkDate);
  // }

}

// export function parseDate(input) {
//   var parts = input.match(/(\d+)/g);
//   // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
//   return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
// }



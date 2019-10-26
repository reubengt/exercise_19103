// The format method takes a datetime to format and the current system datetime in milliseconds as inputs.

// The format method implementation should return a formatted string as follows:

// When the date is the current system date return the string 'TODAY'
// When the date is not current system date return a formatted date string in the format 'DD/MM/YYYY'

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const dateToFormatObj = new Date(dateToFormatTimeMillis);
  const systemDateObj = new Date(systemDateTimeMillis);
  if (dateToFormatObj.toDateString() === systemDateObj.toDateString()) {
    return "TODAY";
  } else {
    //0 is prepended in all cases, but only stays if the date is a single digit number.
    //slice(-2) returns the last two characters
    //a date below 10, eg: 4, would initially become '04', and the slice method returns '04'
    //a date above 10, eg: 24, would initially become '024', and the slice method returns '24'
    const day = ("0" + dateToFormatObj.getDate()).slice(-2);
    //same as above, except months are indexed from 0 in javascript, hence adding 1 to Date.getMonth()
    const month = ("0" + (dateToFormatObj.getMonth() + 1)).slice(-2);
    const year = dateToFormatObj.getFullYear();
    const formattedDateString = `${day}/${month}/${year}`;
    return formattedDateString;
  }
};

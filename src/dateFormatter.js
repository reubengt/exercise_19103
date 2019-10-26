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
    return "";
  }
};

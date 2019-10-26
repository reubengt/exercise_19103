import { format } from "../src/dateFormatter";

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});
describe("when the system date and date to format are different", () => {
  it("formats year correctly", () => {
    const November = 10;
    const April = 3;
    const dateTimeToFormat = new Date(2019, November, 11, 11, 11).getTime();
    const systemDateTime = new Date(2019, April, 24, 12, 56).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    expect(formattedDate.slice(6)).toBe("2019");
  });
  it("formats month correctly for months before october - format function concatenates a 0 before the month", () => {
    const January = 0;
    const March = 2;
    const dateTimeToFormat = new Date(2019, January, 11, 11, 11).getTime();
    const systemDateTime = new Date(2019, March, 24, 12, 56).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    expect(formattedDate.slice(3, 5)).toBe("01");
  });
  it("formats month correctly for november/december", () => {
    const November = 10;
    const April = 3;
    const dateTimeToFormat = new Date(2019, November, 11, 11, 11).getTime();
    const systemDateTime = new Date(2019, April, 24, 12, 56).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    expect(formattedDate.slice(3, 5)).toBe("11");
  });
  it("formats day correctly for days before the 10th - format function concatenates a 0 before the day", () => {
    const June = 5;
    const February = 1;
    const dateTimeToFormat = new Date(2019, June, 3, 7, 45).getTime();
    const systemDateTime = new Date(2019, February, 8, 4, 15).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    expect(formattedDate.slice(0, 3)).toBe("03");
  });
  it("formats day correctly for days after the 10th", () => {
    const June = 5;
    const February = 1;
    const dateTimeToFormat = new Date(2019, June, 23, 7, 45).getTime();
    const systemDateTime = new Date(2019, February, 8, 4, 15).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    expect(formattedDate.slice(0, 3)).toBe("23");
  });
  it("formatted date has slashes in the right places and matches the dd/mm/yyyy format", () => {
    const November = 10;
    const April = 3;
    const dateTimeToFormat = new Date(2019, November, 11, 11, 11).getTime();
    const systemDateTime = new Date(2019, April, 24, 12, 56).getTime();
    const formattedDate = format(dateTimeToFormat, systemDateTime);
    const dateRegex = /^(\d{2}\/\d{2}\/\d{4})$/;
    expect(dateRegex.test(formattedDate)).toBe(true);
  });
});

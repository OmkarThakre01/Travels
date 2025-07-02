export interface QuoteParams {
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  vehicleType: string;
}

export const handleGetQuote = ({
  pickupLocation,
  dropoffLocation,
  date,
  time,
  passengers,
  vehicleType,
}: QuoteParams) => {
  const url = new URL("https://docs.google.com/forms/d/e/1FAIpQLSdBz8-lstUU-Kp8FYzdh3bLPmiv8gFrTwlIezEBABBpc2AAIg/viewform");

  url.searchParams.set("entry.123456789", pickupLocation);
  url.searchParams.set("entry.987654321", dropoffLocation);
  url.searchParams.set("entry.111111111", date);
  url.searchParams.set("entry.222222222", time);
  url.searchParams.set("entry.333333333", passengers);
  url.searchParams.set("entry.444444444", vehicleType);

  window.open(url.toString(), "_blank");
};

/**
 * Real water & sanitation charities.
 *
 * Every entry below was fetched and confirmed on 2026-10-14 — legal name,
 * registration number, and donation URL all come from the organisation's own
 * site. Nothing here is inferred from a search result.
 *
 * Two organisations are deliberately absent: water.org and wateraid.org both
 * return HTTP 403 to automated fetches from this environment, so their donation
 * URLs could not be confirmed. Add them only after checking by hand.
 *
 * Also note: bloodwater.org/donate and digdeep.org/donate both redirect to their
 * homepages rather than a giving form, which is why the checkout URLs below look
 * less tidy — they are the real, working donation flows.
 */

export type Charity = {
  name: string;
  legalName: string;
  focus: string;
  region: string;
  registration: string;
  donateUrl: string;
  website: string;
};

export const VERIFIED_ON = "14 October 2026";

export const charities: Charity[] = [
  {
    name: "charity: water",
    legalName: "Charity Global, Inc.",
    focus:
      "Funds wells, piped systems and remote sensors across 29 countries, and publishes every project on a public map.",
    region: "Sub-Saharan Africa, South and Southeast Asia",
    registration: "US 501(c)(3) · EIN 22-3936753",
    donateUrl: "https://www.charitywater.org/donate",
    website: "https://www.charitywater.org",
  },
  {
    name: "Water For Good",
    legalName: "Water For Good",
    focus:
      "Concentrates on one country rather than many, pairing new drilling with long-term maintenance so wells keep working.",
    region: "Central African Republic",
    registration: "US 501(c)(3) · EIN 32-0112278",
    donateUrl: "https://waterforgood.org/donate/",
    website: "https://waterforgood.org",
  },
  {
    name: "The Water Project",
    legalName: "The Water Project, Inc.",
    focus:
      "Builds wells, protects natural springs and installs rainwater catchments, with monitoring and repair after handover.",
    region: "Sub-Saharan Africa",
    registration: "US 501(c)(3) · EIN 26-1455510",
    donateUrl: "https://thewaterproject.org/donate",
    website: "https://thewaterproject.org",
  },
  {
    name: "Splash",
    legalName: "Splash International",
    focus:
      "Focuses on children in fast-growing cities, putting safe water into schools and child-serving institutions.",
    region: "Ethiopia, India, Nepal, Cambodia and others",
    registration: "US 501(c)(3)",
    donateUrl: "https://splash.org/donate",
    website: "https://splash.org",
  },
  {
    name: "Blood:Water",
    legalName: "Blood:Water",
    focus:
      "Partners with African-led organisations at the intersection of the water and HIV/AIDS crises.",
    region: "Sub-Saharan Africa",
    registration: "US 501(c)(3) · EIN 56-2483082",
    donateUrl: "https://fundraise.bloodwatermission.com/give/166025/",
    website: "https://bloodwater.org",
  },
  {
    name: "DIGDEEP",
    legalName: "The DigDeep Right to Water Project",
    focus:
      "Works on water access inside the United States — the Navajo Nation, rural Appalachia and the Texas colonias.",
    region: "United States",
    registration: "US 501(c)(3) · EIN 46-0686920",
    donateUrl: "https://giving.digdeep.org/-/XBKRQNQH",
    website: "https://www.digdeep.org",
  },
];

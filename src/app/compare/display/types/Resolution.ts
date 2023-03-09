interface Resolution {
  label: string;
  value: string;
  height: number;
}

const resolutions: Resolution[] = [
  {
    label: "",
    value: "",
    height: 0,
  },
  {
    label: "VGA",
    value: "VGA",
    height: 600,
  },
  {
    label: "HD",
    value: "HD",
    height: 768,
  },
  {
    label: "HD+",
    value: "HDp",
    height: 900,
  },
  {
    label: "FHD",
    value: "FHD",
    height: 1080,
  },
  {
    label: "FHD+",
    value: "FHDp",
    height: 1200,
  },
  {
    label: "QHD",
    value: "QHD",
    height: 1440,
  },
  {
    label: "QHD+",
    value: "QHDp",
    height: 1600,
  },
  {
    label: "4K",
    value: "4K",
    height: 2160,
  },
  {
    label: "5K",
    value: "5K",
    height: 2880,
  },
  {
    label: "6K",
    value: "6K",
    height: 3384,
  },
  {
    label: "8K",
    value: "8K",
    height: 4320,
  },
];

const defaultResolution: Resolution = resolutions[0];

export default Resolution;
export { resolutions, defaultResolution };

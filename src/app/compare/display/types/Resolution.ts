interface Resolution {
  label: string;
  value: string;
  width: number;
  height: number;
}

const resolutions: Resolution[] = [
  {
    label: "",
    value: "",
    width: 0,
    height: 0,
  },
  {
    label: "VGA",
    value: "VGA",
    width: 0,
    height: 600,
  },
  {
    label: "HD",
    value: "HD",
    width: 0,
    height: 768,
  },
  {
    label: "HD+",
    value: "HDp",
    width: 0,
    height: 900,
  },
  {
    label: "FHD",
    value: "FHD",
    width: 0,
    height: 1080,
  },
  {
    label: "FHD+",
    value: "FHDp",
    width: 0,
    height: 1200,
  },
  {
    label: "QHD",
    value: "QHD",
    width: 0,
    height: 1440,
  },
  {
    label: "QHD+",
    value: "QHDp",
    width: 0,
    height: 1600,
  },
  {
    label: "4K",
    value: "4K",
    width: 0,
    height: 2160,
  },
  {
    label: "5K",
    value: "5K",
    width: 0,
    height: 2880,
  },
  {
    label: "6K",
    value: "6K",
    width: 0,
    height: 3384,
  },
  {
    label: "8K",
    value: "8K",
    width: 0,
    height: 4320,
  },
];

const defaultResolution: Resolution = resolutions[0];

export default Resolution;
export { resolutions, defaultResolution };

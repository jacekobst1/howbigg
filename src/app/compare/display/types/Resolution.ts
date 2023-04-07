interface Resolution {
  label: string;
  value: string;
  width: number;
  height: number;
}

const defaultResolution: Resolution = {
  width: 0,
  height: 0,
  value: "",
  label: "",
};

export default Resolution;
export { defaultResolution };

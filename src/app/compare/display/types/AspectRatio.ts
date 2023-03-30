import { defaultResolution } from "@/app/compare/display/types/Resolution";

interface AspectRatio {
  label: string;
  value: string;
  decimalValue: number;
  optGroup?: string;
  possibleResolutions?: any;
}

const aspectRatios: AspectRatio[] = [
  {
    label: "4 x 3",
    value: "4x3",
    decimalValue: 4 / 3,
    optGroup: "Standard",
    possibleResolutions: [
      defaultResolution,
      {
        width: 160,
        height: 120,
        value: "160x120",
        label: "160 x 120 (QQVGA)",
      },
      {
        width: 192,
        height: 144,
        value: "192x144",
        label: "192 x 144",
      },
      {
        width: 320,
        height: 240,
        value: "320x240",
        label: "320 x 240 (QVGA)",
      },
      {
        width: 480,
        height: 360,
        value: "480x360",
        label: "480 x 360",
      },
      {
        width: 640,
        height: 480,
        value: "640x480",
        label: "640 x 480 (VGA)",
      },
      {
        width: 768,
        height: 576,
        value: "768x576",
        label: "768 x 576 (PAL)",
      },
      {
        width: 800,
        height: 600,
        value: "800x600",
        label: "800 x 600 (SVGA)",
      },
      {
        width: 960,
        height: 720,
        value: "960x720",
        label: "960 x 720",
      },
      {
        width: 1024,
        height: 768,
        value: "1024x768",
        label: "1024 x 768 (XGA)",
      },
      {
        width: 1152,
        height: 864,
        value: "1152x864",
        label: "1152 x 864 (XGA+)",
      },
      {
        width: 1200,
        height: 900,
        value: "1200x900",
        label: "1200 x 900",
      },
      {
        width: 1280,
        height: 960,
        value: "1280x960",
        label: "1280 x 960 (SXGA-)",
      },
      {
        width: 1400,
        height: 1050,
        value: "1400x1050",
        label: "1400 x 1050 (SXGA+)",
      },
      {
        width: 1440,
        height: 1080,
        value: "1440x1080",
        label: "1440 x 1080",
      },
      {
        width: 1600,
        height: 1200,
        value: "1600x1200",
        label: "1600 x 1200 (UXGA)",
      },
      {
        width: 1920,
        height: 1440,
        value: "1920x1440",
        label: "1920 x 1440",
      },
      {
        width: 2048,
        height: 1536,
        value: "2048x1536",
        label: "2048 x 1536 (QXGA)",
      },
      {
        width: 2560,
        height: 1920,
        value: "2560x1920",
        label: "2560 x 1920",
      },
      {
        width: 2732,
        height: 2048,
        value: "2732x2048",
        label: "2732 x 2048",
      },
      {
        width: 2880,
        height: 2160,
        value: "2880x2160",
        label: "2880 x 2160",
      },
      {
        width: 3200,
        height: 2400,
        value: "3200x2400",
        label: "3200 x 2400 (QUXGA)",
      },
      {
        width: 4096,
        height: 3072,
        value: "4096x3072",
        label: "4096 x 3072",
      },
    ],
  },
  {
    label: "5 x 4",
    value: "5x4",
    decimalValue: 5 / 4,
    optGroup: "Standard",
    possibleResolutions: [
      defaultResolution,
      {
        width: 600,
        height: 480,
        value: "600x480",
        label: "600 x 480",
      },
      {
        width: 675,
        height: 540,
        value: "675x540",
        label: "675 x 540",
      },
      {
        width: 720,
        height: 576,
        value: "720x576",
        label: "720 x 576",
      },
      {
        width: 750,
        height: 600,
        value: "750x600",
        label: "750 x 600",
      },
      {
        width: 960,
        height: 768,
        value: "960x768",
        label: "960 x 768",
      },
      {
        width: 1280,
        height: 1024,
        value: "1280x1024",
        label: "1280 x 1024 (SXGA)",
      },
      {
        width: 1500,
        height: 1200,
        value: "1500x1200",
        label: "1500 x 1200",
      },
      {
        width: 2560,
        height: 2048,
        value: "2560x2048",
        label: "2560 x 2048 (QSXGA)",
      },
    ],
  },

  {
    label: "16 x 9",
    value: "16x9",
    decimalValue: 16 / 9,
    optGroup: "Wide",
    possibleResolutions: [
      defaultResolution,
      {
        width: 256,
        height: 144,
        value: "256x144",
        label: "256 x 144",
      },
    ],
  },
  {
    label: "16 x 10",
    value: "16x10",
    decimalValue: 16 / 10,
    optGroup: "Wide",
    possibleResolutions: [
      defaultResolution,
      {
        width: 384,
        height: 240,
        value: "384x240",
        label: "384 x 240 (WQVGA)",
      },
    ],
  },

  {
    label: "21 x 9",
    value: "21x9",
    decimalValue: 64 / 27,
    // decimalValue: 43 / 18,
    // decimalValue: 2.38889,
    optGroup: "Ultra wide",
    possibleResolutions: [
      defaultResolution,
      {
        width: 2560,
        height: 1080,
        value: "2560x1080",
        label: "2560 x 1080",
      },
    ],
  },
  {
    label: "32 x 9",
    value: "32x9",
    decimalValue: 32 / 9,
    optGroup: "Ultra wide",
    possibleResolutions: [
      defaultResolution,
      {
        width: 3840,
        height: 1080,
        value: "3840x1080",
        label: "3840 x 1080",
      },
    ],
  },

  {
    label: "16 x 18",
    value: "16x18",
    decimalValue: 16 / 18,
    optGroup: "Other",
    possibleResolutions: [
      defaultResolution,
      {
        width: 2560,
        height: 2880,
      },
    ],
  },
  {
    label: "custom",
    value: "custom",
    decimalValue: 0,
    optGroup: "Other",
    possibleResolutions: [defaultResolution],
  },
];

const defaultAspectRatio: AspectRatio = aspectRatios[2];

export default AspectRatio;
export { aspectRatios, defaultAspectRatio };

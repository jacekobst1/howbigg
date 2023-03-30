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
        label: "160 x 120 | QQVGA",
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
        label: "320 x 240 | QVGA",
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
        label: "640 x 480 | VGA",
      },
      {
        width: 768,
        height: 576,
        value: "768x576",
        label: "768 x 576 | PAL",
      },
      {
        width: 800,
        height: 600,
        value: "800x600",
        label: "800 x 600 | SVGA",
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
        label: "1024 x 768 | XGA",
      },
      {
        width: 1152,
        height: 864,
        value: "1152x864",
        label: "1152 x 864 | XGA+",
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
        label: "1280 x 960 | SXGA-",
      },
      {
        width: 1400,
        height: 1050,
        value: "1400x1050",
        label: "1400 x 1050 | SXGA+",
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
        label: "1600 x 1200 | UXGA",
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
        label: "2048 x 1536 | QXGA",
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
        label: "3200 x 2400 | QUXGA",
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
        label: "1280 x 1024 | SXGA",
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
        label: "2560 x 2048 | QSXGA",
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
      {
        width: 432,
        height: 240,
        value: "432x240",
        label: "432 x 240 | FWQVGA",
      },
      {
        width: 640,
        height: 360,
        value: "640x360",
        label: "640 x 360 | nHD",
      },
      {
        width: 854,
        height: 480,
        value: "854x480",
        label: "854 x 480 | FWVGA",
      },
      {
        width: 960,
        height: 540,
        value: "960x540",
        label: "960 x 540 | qHD",
      },
      {
        width: 1024,
        height: 576,
        value: "1024x576",
        label: "1024 x 576 | WSVGA",
      },
      {
        width: 1136,
        height: 640,
        value: "1136x640",
        label: "1136 x 640",
      },
      {
        width: 1280,
        height: 720,
        value: "1280x720",
        label: "1280 x 720 | HD/WXGA",
      },
      {
        width: 1366,
        height: 768,
        value: "1366x768",
        label: "1366 x 768 | FWXGA",
      },
      {
        width: 1536,
        height: 864,
        value: "1536x864",
        label: "1536 x 864",
      },
      {
        width: 1600,
        height: 900,
        value: "1600x900",
        label: "1600 x 900 | HD+",
      },
      {
        width: 1920,
        height: 1080,
        value: "1920x1080",
        label: "1920 x 1080 | FHD",
      },
      {
        width: 2048,
        height: 1152,
        value: "2048x1152",
        label: "2048 x 1152 | WXGA",
      },
      {
        width: 2560,
        height: 1440,
        value: "2560x1440",
        label: "2560 x 1440 | | W)QH",
      },
      {
        width: 2880,
        height: 1620,
        value: "2880x1620",
        label: "2880 x 1620 | 3K",
      },
      {
        width: 3200,
        height: 1800,
        value: "3200x1800",
        label: "3200 x 1800 | QHD+",
      },
      {
        width: 3840,
        height: 2160,
        value: "3840x2160",
        label: "3840 x 2160 | 4K UHD",
      },
      {
        width: 5120,
        height: 2880,
        value: "5120x2880",
        label: "5120 x 2880 | 5K",
      },
      {
        width: 7680,
        height: 4320,
        value: "7680x4320",
        label: "7680 x 4320 | 8K UHD",
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
        label: "384 x 240 | WQVGA",
      },
      {
        width: 768,
        height: 480,
        value: "768x480",
        label: "768 x 480 | WVGA",
      },
      {
        width: 1024,
        height: 640,
        value: "1024x640",
        label: "1024 x 640",
      },
      {
        width: 1152,
        height: 720,
        value: "1152x720",
        label: "1152 x 720",
      },
      {
        width: 1280,
        height: 800,
        value: "1280x800",
        label: "1280 x 800 | WXGA",
      },
      {
        width: 1440,
        height: 900,
        value: "1440x900",
        label: "1440 x 900 | WXGA+",
      },
      {
        width: 1536,
        height: 960,
        value: "1536x960",
        label: "1536 x 960",
      },
      {
        width: 1680,
        height: 1050,
        value: "1680x1050",
        label: "1680 x 1050 | WSXGA+",
      },
      {
        width: 1920,
        height: 1200,
        value: "1920x1200",
        label: "1920 x 1200 | WUXGA",
      },
      {
        width: 2048,
        height: 1280,
        value: "2048x1280",
        label: "2048 x 1280",
      },
      {
        width: 2304,
        height: 1440,
        value: "2304x1440",
        label: "2304 x 1440",
      },
      {
        width: 2560,
        height: 1600,
        value: "2560x1600",
        label: "2560 x 1600 | WQXGA",
      },
      {
        width: 2880,
        height: 1800,
        value: "2880x1800",
        label: "2880 x 1800",
      },
      {
        width: 3072,
        height: 1920,
        value: "3072x1920",
        label: "3072 x 1920",
      },
      {
        width: 3840,
        height: 2400,
        value: "3840x2400",
        label: "3840 x 2400 | WQUXGA",
      },
      {
        width: 4096,
        height: 2560,
        value: "4096x2560",
        label: "4096 x 2560",
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
      {
        width: 3440,
        height: 1440,
        value: "3440x1440",
        label: "3440 x 1440",
      },
      {
        width: 3840,
        height: 1600,
        value: "3840x1600",
        label: "3840 x 1600",
      },
      {
        width: 5120,
        height: 2160,
        value: "5120x2160",
        label: "5120 x 2160",
      },
      {
        width: 10240,
        height: 4320,
        value: "10240x4320",
        label: "10240 x 4320 | 10K",
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
      {
        width: 5120,
        height: 1440,
        value: "5120x1440",
        label: "5120 x 1440",
      },
      {
        width: 7680,
        height: 2160,
        value: "7680x2160",
        label: "7680 x 2160",
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

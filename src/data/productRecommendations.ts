export interface ProductRecommendation {
  name: string;
  type: "monitor" | "tv";
  size: number; // in inches
  resolution: string;
  link: string;
}

export interface ProductSection {
  title: string;
  sizeRange: [number, number]; // [min, max] in inches
  type: "monitor" | "tv";
  products: ProductRecommendation[];
}

export const productSections: ProductSection[] = [
  {
    title: "24-inch monitors",
    sizeRange: [23, 24.5],
    type: "monitor",
    products: [
      {
        name: "Dell P2423DE 24\" QHD Monitor",
        type: "monitor",
        size: 24,
        resolution: "2560x1440",
        link: "https://example.com/dell-p2423de",
      },
      {
        name: "BenQ GW2485TC 24\" Full HD Monitor",
        type: "monitor",
        size: 24,
        resolution: "1920x1080",
        link: "https://example.com/benq-gw2485tc",
      },
      {
        name: "ASUS ProArt PA247CV 24\" Full HD Monitor",
        type: "monitor",
        size: 24,
        resolution: "1920x1080",
        link: "https://example.com/asus-proart-pa247cv",
      },
    ],
  },
  {
    title: "27-inch monitors",
    sizeRange: [26, 27.5],
    type: "monitor",
    products: [
      {
        name: "LG 27UK850-W 27\" 4K UHD Monitor",
        type: "monitor",
        size: 27,
        resolution: "3840x2160",
        link: "https://example.com/lg-27uk850",
      },
      {
        name: "Dell S2722DC 27\" QHD Monitor",
        type: "monitor",
        size: 27,
        resolution: "2560x1440",
        link: "https://example.com/dell-s2722dc",
      },
      {
        name: "BenQ SW270C 27\" QHD Monitor",
        type: "monitor",
        size: 27,
        resolution: "2560x1440",
        link: "https://example.com/benq-sw270c",
      },
    ],
  },
  {
    title: "32-inch monitors",
    sizeRange: [31, 32.5],
    type: "monitor",
    products: [
      {
        name: "LG 32UN880-B 32\" 4K UHD Monitor",
        type: "monitor",
        size: 32,
        resolution: "3840x2160",
        link: "https://example.com/lg-32un880",
      },
      {
        name: "Dell U3223QE 32\" 4K UHD Monitor",
        type: "monitor",
        size: 32,
        resolution: "3840x2160",
        link: "https://example.com/dell-u3223qe",
      },
      {
        name: "BenQ SW321C 32\" 4K UHD Monitor",
        type: "monitor",
        size: 32,
        resolution: "3840x2160",
        link: "https://example.com/benq-sw321c",
      },
    ],
  },
  {
    title: "34-inch ultrawide monitors",
    sizeRange: [33, 35],
    type: "monitor",
    products: [
      {
        name: "LG 34WN80C-B 34\" UltraWide Monitor",
        type: "monitor",
        size: 34,
        resolution: "3440x1440",
        link: "https://example.com/lg-34wn80c",
      },
      {
        name: "Dell U3421WE 34\" Curved UltraWide Monitor",
        type: "monitor",
        size: 34,
        resolution: "3440x1440",
        link: "https://example.com/dell-u3421we",
      },
      {
        name: "Samsung S34A650 34\" UltraWide Monitor",
        type: "monitor",
        size: 34,
        resolution: "3440x1440",
        link: "https://example.com/samsung-s34a650",
      },
    ],
  },
  {
    title: "38-inch ultrawide monitors",
    sizeRange: [37, 39],
    type: "monitor",
    products: [
      {
        name: "LG 38WN95C-W 38\" Curved UltraWide Monitor",
        type: "monitor",
        size: 38,
        resolution: "3840x1600",
        link: "https://example.com/lg-38wn95c",
      },
      {
        name: "Dell U3821DW 38\" Curved UltraWide Monitor",
        type: "monitor",
        size: 38,
        resolution: "3840x1600",
        link: "https://example.com/dell-u3821dw",
      },
    ],
  },
  {
    title: "42-inch TVs",
    sizeRange: [41, 43],
    type: "tv",
    products: [
      {
        name: "LG C3 42\" OLED 4K TV",
        type: "tv",
        size: 42,
        resolution: "3840x2160",
        link: "https://example.com/lg-c3-42",
      },
      {
        name: "Samsung QN90C 43\" QLED 4K TV",
        type: "tv",
        size: 43,
        resolution: "3840x2160",
        link: "https://example.com/samsung-qn90c-43",
      },
    ],
  },
  {
    title: "48-inch TVs",
    sizeRange: [47, 49],
    type: "tv",
    products: [
      {
        name: "LG C3 48\" OLED 4K TV",
        type: "tv",
        size: 48,
        resolution: "3840x2160",
        link: "https://example.com/lg-c3-48",
      },
      {
        name: "Sony X90L 48\" 4K LED TV",
        type: "tv",
        size: 48,
        resolution: "3840x2160",
        link: "https://example.com/sony-x90l-48",
      },
    ],
  },
  {
    title: "55-inch TVs",
    sizeRange: [54, 56],
    type: "tv",
    products: [
      {
        name: "LG C3 55\" OLED 4K TV",
        type: "tv",
        size: 55,
        resolution: "3840x2160",
        link: "https://example.com/lg-c3-55",
      },
      {
        name: "Samsung QN90C 55\" QLED 4K TV",
        type: "tv",
        size: 55,
        resolution: "3840x2160",
        link: "https://example.com/samsung-qn90c-55",
      },
      {
        name: "Sony X90L 55\" 4K LED TV",
        type: "tv",
        size: 55,
        resolution: "3840x2160",
        link: "https://example.com/sony-x90l-55",
      },
    ],
  },
  {
    title: "65-inch TVs",
    sizeRange: [64, 66],
    type: "tv",
    products: [
      {
        name: "LG C3 65\" OLED 4K TV",
        type: "tv",
        size: 65,
        resolution: "3840x2160",
        link: "https://example.com/lg-c3-65",
      },
      {
        name: "Samsung QN90C 65\" QLED 4K TV",
        type: "tv",
        size: 65,
        resolution: "3840x2160",
        link: "https://example.com/samsung-qn90c-65",
      },
      {
        name: "Sony X90L 65\" 4K LED TV",
        type: "tv",
        size: 65,
        resolution: "3840x2160",
        link: "https://example.com/sony-x90l-65",
      },
    ],
  },
  {
    title: "75-inch TVs",
    sizeRange: [74, 77],
    type: "tv",
    products: [
      {
        name: "Samsung QN90C 75\" QLED 4K TV",
        type: "tv",
        size: 75,
        resolution: "3840x2160",
        link: "https://example.com/samsung-qn90c-75",
      },
      {
        name: "Sony X90L 75\" 4K LED TV",
        type: "tv",
        size: 75,
        resolution: "3840x2160",
        link: "https://example.com/sony-x90l-75",
      },
      {
        name: "LG UR8000 75\" 4K LED TV",
        type: "tv",
        size: 75,
        resolution: "3840x2160",
        link: "https://example.com/lg-ur8000-75",
      },
    ],
  },
  {
    title: "85-inch TVs",
    sizeRange: [83, 86],
    type: "tv",
    products: [
      {
        name: "Samsung QN90C 85\" QLED 4K TV",
        type: "tv",
        size: 85,
        resolution: "3840x2160",
        link: "https://example.com/samsung-qn90c-85",
      },
      {
        name: "Sony X90L 85\" 4K LED TV",
        type: "tv",
        size: 85,
        resolution: "3840x2160",
        link: "https://example.com/sony-x90l-85",
      },
    ],
  },
];

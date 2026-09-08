import { Product, SizeOption } from '../types';

export const STANDARD_SIZE_OPTIONS: SizeOption[] = [
  { cut: 'Petite', girthRange: '20 – 32 cm', minGirth: 20, maxGirth: 32, backLengthRange: '18 – 24 cm', breeds: 'Toy Poodle, Yorkie, Chihuahua' },
  { cut: 'Standard', girthRange: '33 – 50 cm', minGirth: 33, maxGirth: 50, backLengthRange: '25 – 35 cm', breeds: 'Beagle, Whippet, Schnauzer' },
  { cut: 'Long-Body', girthRange: '40 – 55 cm', minGirth: 40, maxGirth: 55, backLengthRange: '36 – 46 cm', breeds: 'Dachshund, Corgi, Basset' },
  { cut: 'Broad-Chest', girthRange: '52 – 75 cm', minGirth: 52, maxGirth: 75, backLengthRange: '32 – 44 cm', breeds: 'Bulldog, Frenchie, Staffy' },
];

export const BRAND_WORDMARK = 'https://lh3.googleusercontent.com/aida/AEtjO1VJbGzDBPTRPIzSiGBriY8rMKuWsxLAeJLaOGKqtCBoHJVJ6xRe4CY1mGkuwR6NnlvAooR2SfK-Tqfb7avZ_tE_Lh_XwHd4MqLwG3hLzGcdoR4oBtSiHJkOtgrsPOufhIsEtGoBOfyCElAUZQIFwSxHD8SS1cOKZx_MAAaTSPtJBGYB8ttilNvESpE-eXdwUc3kmhk9gQdELR8gZVgruR6BPwvgwWkV-OSWMgJRRyZAxd3uY9uzArgvLFqN';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_QmIg2kQpNRNbm8BhjIzO-ivL2liHsKclSNW5PQGU-IrFZ1TE7QXpZfKKHhLvgEzieWpdE74QlLPXOj3XZHx64GJ2NZbZG4Nx0-8j4WckEtJLdgFlJ1TTI1wsLwNHw984zeMVUHTvRTlYMPH9_Ob5iyBCPL41MbVJSbnkQ0pNBQP4-KIv4nMJpBl656XbtgPBA8CXPi6eitDFKaaELFhV1eNuwzexK0dji5o9WlBI3DL_K-_gpaSpKQ';

export const EDITORIAL_STORY_IMAGES = {
  macroTexture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMKjlhYlWtfvCw7NkXCM17azaSp3b3KWiE5-DZO_8l13dHPRutJimubkeh9O3PJqFJVpcTyKG9pfFF5fRc3Yvb55eoUIFvPVvgri3NYDvM5JVBvUWfVFtfp8w4waKzs4gJbTrbcRAw-bVuPObdWWKed5tQipcEkGmiITKPfBg0cEBjJMlcaV-W81tzYi7mRRNae-V6uhu3Vbteg0AqSOZLVGo80GhND5LxAQMSxm2bJRzHf-CoUQpxw',
  goldenModel: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnDJCzYrscYgws7kuPkPwFUhX7MJ6FaQkjTS2OKKFlRakTAtR1V_-F5oamxn5e7FgwM2gEn1ne4f5MI778TMz6qYtCw3LL39ipTyMmza0x6u8sk20UU8_JK5XzYlIqRbu_NB7zn1h3j_wPJZ_J-FzkFNQcO4f51NWbG00IDsRozzI3k1AVGQ8Tg1-XPhlv6pvV-2EWhE6C6djox2vpUCAUONGmHq8vxhJC2TIlU5T9LrzWNLY9Y_LNtw'
};

export const PRODUCTS: Product[] = [
  {
    id: 'riviera-summer-linen-shirt',
    title: 'Riviera Summer Linen Shirt',
    category: 'summer',
    categoryLabel: 'Summer Linen & Mesh',
    tag: 'Summer Linen',
    tagBadge: 'Matches 38 cm',
    material: 'Pure Washed Linen',
    price: 42,
    originalPrice: 58,
    girth: 38,
    description: 'Light breathable natural linen with relaxed tailored open collar and mother-of-pearl snap buttons.',
    longDescription: 'Spun from 100% breathable organic European flax, the Riviera shirt marries Mediterranean resort elegance with uncompromised canine comfort. Lightweight, naturally hypoallergenic, and enzyme-washed for velvety softness against sensitive coats.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_QmIg2kQpNRNbm8BhjIzO-ivL2liHsKclSNW5PQGU-IrFZ1TE7QXpZfKKHhLvgEzieWpdE74QlLPXOj3XZHx64GJ2NZbZG4Nx0-8j4WckEtJLdgFlJ1TTI1wsLwNHw984zeMVUHTvRTlYMPH9_Ob5iyBCPL41MbVJSbnkQ0pNBQP4-KIv4nMJpBl656XbtgPBA8CXPi6eitDFKaaELFhV1eNuwzexK0dji5o9WlBI3DL_K-_gpaSpKQ',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDu2s40hZVqDpKZTgZ6Re_dvA4-DzWwCAG7tM80AtZ0UZ-VZFRPq6oQnZPZx737jO45FwHTQ0oevJUmWsNjgcVfScjuKOJwm6rqhMtiwC8QwOGS9eS3zOZnaExYHCIJdcKllMxxRpPPB_iBbgcTETJCuaL5oHZqKzvYQxxz9ETcuXlRkJxlG9taidx6rollN2RQhmAOPzE8ppszRdS5jOnjHMjyZy7KYD8l2IvY1NjGdJ8OVhhHQhs6gQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9oBUgTaWy0yW3N6hlrIxwqTk6Sm24Pk2aI8IqZPkxvHLIImuZhJW4DMSVmZsZCZc3wLCd7NGmA3YReIwJE1Ti6FggQqp9nz1ieK-lzYu7Hzo9gmY-__KtSsD1oJ_dSt17RUhPyVaFsvh6T5XQVfrsF8XxXI1cX45jZhWyoFOCYVndSKaOLtFtkXki9HMZ3x943xIcVW8OnL3tqVsfErDt8EWtRPelIDWf4dG_Hs5NMv0CcLQKvBcC-A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJfiW82xDd0mkibwltj8SLMIcjxOZpVa1CsWYBhrXJkQo6Sd2U6dQlxmkd3-EjdgRzg4iTyouD4cmRNryiFCJbqppBp4Qh120KAqC1l4j9_1Fv0A72OW-pb8hzKDqrlxlQZHxTNs87M9W90iyLnlaiQ08KFgXCW0FZnH-fk87H7vOZbJZwWeGp9soygC2X14s1IT76_qiIRbn6IRATBGt0wir61ef-Wm677yF-8-mvJfIETHD_ft_dVQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1MDrkQVizAoC_SqClCJza7q6Ye7__2NTI5cY70QX5ATpuPKAYsZM7Gq3J7SsmXNabi8Dc-07a6q-dHqdT8KAbEia0Ptkk1_pUiHv6hCVNzM6zyLbeQZ-FZZSptNgp3JRJ7SQMftt_2DFbal6svOxRiAi-tBg9KbfSXJKXr2tC6nv0RnHnrw1ah2lVGWeejaOBLpx6ZmjGkV8Tg9_WCblxna6nh1YKKNpcceOW3UVPvyrbx20770OfYQ'
    ],
    colorways: [
      { name: 'Warm Linen Cream', hex: '#FAF7F0' },
      { name: 'Muted Sage Green', hex: '#8E9775' },
      { name: 'Terracotta Clay', hex: '#BC7450' },
      { name: 'Soft Charcoal', hex: '#2A2B2A' }
    ],
    rating: 4.9,
    reviewCount: 84,
    edition: 'Resort 2025 Edition'
  },
  {
    id: 'quilted-forest-sage-vest',
    title: 'Quilted Forest Sage Vest',
    category: 'winter',
    categoryLabel: 'Winter Wool & Knits',
    tag: 'Thermal Outerwear',
    tagBadge: 'Broad-Chest Fit',
    material: 'Diamond Quilted',
    price: 54,
    originalPrice: 68,
    girth: 58,
    description: 'Lightweight thermal insulation with plush shearling fleece collar trim and expandable chest gusset.',
    longDescription: 'Engineered for chilly mornings and blustery park runs, the Quilted Sage Vest features dual-layer thermal loft fill with a tactile organic cotton fleece neckline. An anatomical belly taper prevents backsplash during wet walks.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEhW9Dfr-DNH2hcD-bATN1XuhRPtJbIzJZ8esD1riCkat-IXo54wE8HIfyEZplH7TLPeDf8t-uYUtC_updkc7mV-3kjvjCzbkqv85dv9LYChqUEQdaxRggoQ_n1WYvOg6OLoG7pAGqFCiixXS_p1eAiGSdWP5VKOL2VeRtlhJFQsakirjVi8xiB7XrrfAshWimPHkECcXotrkmEXcalxn6IBFlNTjdsyHc7AcN88iROUX2UplWUi9bBw',
    colorways: [
      { name: 'Forest Sage', hex: '#4A5B47' },
      { name: 'Alpine Charcoal', hex: '#2C302E' },
      { name: 'Oatmeal Shearling', hex: '#DED5C4' }
    ],
    rating: 4.8,
    reviewCount: 62,
    edition: 'Winter 2025'
  },
  {
    id: 'mayfair-occasion-tuxedo-cape',
    title: 'Mayfair Occasion Tuxedo Cape',
    category: 'occasion',
    categoryLabel: 'Occasion & Gala',
    tag: 'Gala Special',
    tagBadge: 'Heritage Large',
    material: 'Midnight Satin & Wool',
    price: 58,
    originalPrice: 75,
    girth: 82,
    description: 'Formal satin shawl lapel cape with magnetic adjustable collar and pleated wingtip bib detail.',
    longDescription: 'Commissioned for black-tie gatherings and milestone pet celebrations, the Mayfair Cape drapes effortlessly over broad and slender frames without constricting the forelegs. Completed with faux horn buttons and magnetic neck clasps.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEhtTzqi9odnjwLxuBXOP02tiBAWka_odiTCxtoQqGNmF8syn-GWPAVqpLGJm2yutg5KitWseOpuoAG-G108-1Yphvff3mxWDGFhV0ZsM9Qfy7-7rqpJXLdMvx_7aWsl0hVwwajaLG2KzpKSqFqjQFq_TsEcBUfc1lt_H7OyluoXzOTKOGmvooweBFRbIV7q13OI5M2qxWulrwUslpY4wqAZbgTefEHp9iVjT0SbWLvy0bNencSpIvBw',
    colorways: [
      { name: 'Midnight Navy', hex: '#1C2541' },
      { name: 'Classic Tuxedo Black', hex: '#111215' }
    ],
    rating: 5.0,
    reviewCount: 47,
    edition: 'Ceremony Series'
  },
  {
    id: 'terracotta-ribbed-knit-sweater',
    title: 'Terracotta Ribbed Knit Sweater',
    category: 'winter',
    categoryLabel: 'Winter Wool & Knits',
    tag: 'Pure Merino Blend',
    tagBadge: 'Long-Body Matrix',
    material: 'Thermal Rib Knit',
    price: 38,
    originalPrice: 48,
    girth: 46,
    description: 'Ultra-soft high-stretch ribbing that hugs sighthounds and long-bodied breeds without restricting stride.',
    longDescription: 'Spun with fine Australian merino and organic cotton, this rib-knit provides adaptive stretch that contours to deep ribcages and elongated spines with zero sagging or armhole chafing.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWvzJ0csLzCiGLDcKex25dd03GP0kvK07CyqbSe8_sSa77YvNhNt-qcu8pXt0weiCdNljZSuQ6lXCow6IYmlo0vmgkvcAn2Rf-eC7OghZTj1dQwHOf31k1NRxKJIRLHuFc4fILqeBXebsFn4XXU6Sg1KXpUchbYlgpcb0b4WeHGfkiFCo0WOzxgTSNGalbz7rTyPDGQH9qMhuU0sxaqRl-l3yuLw6LRU4QKfwwhHl0PGrCIGRz72iiKQ',
    colorways: [
      { name: 'Terracotta Rust', hex: '#B85D36' },
      { name: 'Mustard Ochre', hex: '#D4A043' },
      { name: 'Slate Blue', hex: '#587284' }
    ],
    rating: 4.9,
    reviewCount: 91,
    edition: 'Essentials Knitwear'
  },
  {
    id: 'provence-cooling-mesh-tank',
    title: 'Provence Cooling Mesh Tank',
    category: 'summer',
    categoryLabel: 'Summer Linen & Mesh',
    tag: 'Cool-Core Tech',
    tagBadge: 'Under S$30',
    material: 'Evaporative Weave',
    price: 28,
    originalPrice: 35,
    girth: 38,
    description: 'Dip in cold water to activate four-hour evaporative heat dispersion during humid Singapore strolls.',
    longDescription: 'Engineered specifically for warm tropical climates, the Provence tank features a microscopic honeycombed mesh weave that stores cool moisture and gradually disperses heat through airflow.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6rxRBBJ5WMWClVlBskSlgaMlpb08U41k9wKUDI11J2C0TnuPXg0zjkVVlHWncL9A5247pm-SorOcYWb7tokN2rS3Gyr7204fHTgeJTgx-DitdpGFG5K4mqb1n83-kj2i6d0GbuItdGTzEIDv86EpjUqVxcGEWm_K1ay-Mc3Fk4ELQuapjn5jo_HmpdYX_Ji8-1wKe6yFCGJP9OqZ_qmE-k1Y5YntpNvi88iSpCfzIQIYaMqXNSSosAQ',
    colorways: [
      { name: 'Sage & Oat', hex: '#9AA089' },
      { name: 'Sky Azure', hex: '#87B0C5' },
      { name: 'Pure Chalk', hex: '#F0EEE9' }
    ],
    rating: 4.8,
    reviewCount: 112,
    edition: 'Tropics Edition'
  },
  {
    id: 'coastal-breton-nautical-tee',
    title: 'Coastal Breton Nautical Tee',
    category: 'summer',
    categoryLabel: 'Summer Linen & Mesh',
    tag: 'Everyday Essential',
    material: 'Organic Cotton Jersey',
    price: 32,
    originalPrice: 40,
    girth: 24,
    description: 'Timeless French sailor stripe knitted from Aegean combed yarn with expandable rib neckline.',
    longDescription: 'Crafted from combed organic long-staple cotton, this Breton tee is soft enough for everyday naps and durable enough for beach outings. Ribbed leg openings ensure clean mobility.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2No3lNAzWAMdlwCv9jUhyE-BBsFxW9S_War-LXW8mbXumr6PaKdXJL41hC6DbUHdqP3io6xyAYpq22VkBP_mRjE4PQj3h2MSWftn1rmRO7USb7dhrDeRS4FDy6KLYmLFhM2HDL8nhBrLN2BHtfOtTJruCyO-BVfGALtV82m4y4bO_Kz_c5OJc9R0McXGJO7AzWXIFV-Xb7ZDTZzrZqH3AsRCLvmeTtBhLvwtEnAEa0NpIphaYm0XlIA',
    colorways: [
      { name: 'Navy & Cream Stripe', hex: '#1C2E42' },
      { name: 'Olive & Oatmeal', hex: '#586146' }
    ],
    rating: 4.9,
    reviewCount: 78,
    edition: 'Nautical Series'
  },
  {
    id: 'mist-grey-sherpa-anorak',
    title: 'Mist Grey Sherpa Anorak',
    category: 'winter',
    categoryLabel: 'Winter Wool & Knits',
    tag: 'Weather Shield',
    material: 'Double-Faced Fleece',
    price: 52,
    originalPrice: 65,
    girth: 58,
    description: 'Windproof ripstop exterior lined with recycled sherpa fleece, featuring harness zipper port.',
    longDescription: 'A technical jacket tailored with architectural lines. Features water-repellent Japanese micro-ripstop backed with ultra-dense plush fleece. Top waterproof dual-zipper port fits any harness D-ring.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfWXIPkVNBWgYiSAlIqYU3bU9IJ80ojbK0RdoesK1byhSosYXWZ9pyg5JeiubUhBCcWiNpAeRjPWgxsXeVA9XokXhag7VpLuQXiuDUl0eoA54iZSnfd1iLC3afPl0Srj2uKAfsSgAoI4XC-kJS5nox-uC4oeHxdBVbk9AxTfE1MWlAJcMVo9ayid-bxzwDR_sgsFIWrw8Wzt6Yqv1XGdnU2M5MdudIHwtsKRV7K3q8_iuXe8-o8ha78g',
    colorways: [
      { name: 'Mist Grey', hex: '#878B88' },
      { name: 'Earthy Clay', hex: '#9E6A52' }
    ],
    rating: 4.7,
    reviewCount: 39,
    edition: 'Alpine Shield'
  },
  {
    id: 'nordic-cable-knit-crewneck',
    title: 'Nordic Cable-Knit Crewneck',
    category: 'winter',
    categoryLabel: 'Winter Wool & Knits',
    tag: 'Artisanal Cable',
    material: 'Alpaca & Wool Blend',
    price: 44,
    originalPrice: 55,
    girth: 38,
    description: 'Traditional honeycomb cabling re-engineered with elastic underbelly stitching for easy stepping.',
    longDescription: 'Hand-linked Peruvian baby alpaca and organic highland wool knit into heritage honeycomb patterns. Ergonomically shaped to hug canine ribs while keeping underbelly hygiene pristine.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBguqHuCyE6dJOQ_KJX8ULSX7CTkjA323A484vjszu0PDqaUwk8IkGLAgmru4sdAVuYxy4WbOIWkvXlpYvjPg0WTP-1U6I1tRXqLjJL2vlQP5BvqFlPQzuG3UgWRUyDi2vXgC-sU-HoZT-9YZ76JrWU5PtiYMSrEHQWPGuMYb8p8Tyjl4-IMrj8fMWOIbqUgRyVCP7iIt7sptOpGLRdClV7P9ajgznPnyhAqNbq5Z9KGM5ROOI5G9rEGQ',
    colorways: [
      { name: 'Artisanal Cream', hex: '#EBE6DC' },
      { name: 'Heather Moss', hex: '#636A55' }
    ],
    rating: 4.9,
    reviewCount: 53,
    edition: 'Nordic Knitwear'
  },
  {
    id: 'highland-waterproof-trench',
    title: 'Highland Waterproof Trench',
    category: 'winter',
    categoryLabel: 'Winter Wool & Knits',
    tag: 'Storm Proof',
    material: 'Hydrophobic Twill',
    price: 48,
    originalPrice: 62,
    girth: 46,
    description: 'Refined heritage mac styling with rear storm flap, detachable hood, and reflective piping.',
    longDescription: 'Traditional British tailoring interpreted for dogs. Densely woven cotton gabardine treated with PFC-free hydrophobic sealant. Features buttoned shoulder tabs and magnetic belly strap.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQMTl2dB8X7RugNncRUpUTIeR6egGxN2dBVV-zRZyeAEABp2zTATuF-GHagBnsCXq4HOLJxWs8YYcFmIURGOMsSGMCrMx5uxoPpM73RSx0sJnfoKLrV2-JvpVg3mXfmetmwGQIkNxKPO25laKwXqVWKv-BTzUWzbbiOKU9GSIJCW54PIxmQ5gvdVSllBC_hnu3X-lZRE-Tu3jPcPW3lmmdwluStkEbl0sVEokUeNw2MGiIamhVVg_SRg',
    colorways: [
      { name: 'Highland Olive', hex: '#525942' },
      { name: 'Classic Khaki Mac', hex: '#B8A488' }
    ],
    rating: 4.8,
    reviewCount: 44,
    edition: 'Heritage Weatherwear'
  },
  {
    id: 'opera-velvet-gala-blazer',
    title: 'Opera Velvet Gala Blazer',
    category: 'occasion',
    categoryLabel: 'Occasion & Gala',
    tag: 'Evening Capsule',
    material: 'Silk-Touch Velvet',
    price: 59,
    originalPrice: 78,
    girth: 38,
    description: 'Deep emerald velvet jacket featuring hand-finished piped edges and non-pinch magnetic chest closures.',
    longDescription: 'Lined in smooth breathable cupro that protects delicate coats from friction and static. Tailored with an open notch lapel and custom antiqued brass fasteners.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFWBPbPeEu7pNPTqJxLIqogObcT_rUFecvptN8P8l-gq_fj9bkIu8zh_OWp8_RpFNuYJIA6CnP2FHY9tPfkkhVzCZV_bARroxiUUpmRisL4NJY0i37iGNyQSw001M5L2dE2e1HUg1cBUum_eg4K5gwfdaMo9eIDalET6V3Vbq4i5as0RMj7S9RkvHgyxswhFpbzouLlZU0lc2T_TGis-2CswZqX05qT5206L39iL7AUSMNTMuZqpRqEA',
    colorways: [
      { name: 'Opera Emerald', hex: '#1B3B2B' },
      { name: 'Burgundy Grand', hex: '#4A1521' }
    ],
    rating: 5.0,
    reviewCount: 38,
    edition: 'Evening Gala'
  },
  {
    id: 'heirloom-celebration-gown',
    title: 'Heirloom Celebration Gown',
    category: 'occasion',
    categoryLabel: 'Occasion & Gala',
    tag: 'Milestone Attire',
    material: 'Tiered Champagne Tulle',
    price: 56,
    originalPrice: 72,
    girth: 24,
    description: 'Lightweight tiered soft tulle cape designed for wedding parties and milestone birthdays with zero drag.',
    longDescription: 'Ultra-light bridal tulle tiered over a soft silk foundation. Non-slip neck closure with detachable satin bow detail. Allows dogs to sit, run, and greet guests without snagging.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGf_L0KGq_3GxAcOJ_PVs8ZEiiTAjJAWUNTlrvdrjWxQtRfgBdcnhALdeljlYBSY3ZOUCWpWLFDJeSphKZKKK2lhnUgeGQDQJwfBUU7WQ66Vy0NeVRIjHlbjZZyVC8P9Mx7XWS7xTEqHTc-ri93XfPQM77u8mhXjC80VrhIIpirVdYrsBuPLgI2D8HyP_oRYqozztAccDTuaStzbdwDzXQYoZAqwqx9t_6u-l4m4ddzFABPDxKpJGOkA',
    colorways: [
      { name: 'Champagne Ivory', hex: '#F7F2E7' },
      { name: 'Rosewater Blush', hex: '#E8D2CB' }
    ],
    rating: 4.9,
    reviewCount: 61,
    edition: 'Ceremony Series'
  },
  {
    id: 'solstice-uv-protection-poncho',
    title: 'Solstice UV-Protection Poncho',
    category: 'summer',
    categoryLabel: 'Summer Linen & Mesh',
    tag: 'UPF 50+ Sun Guard',
    material: 'Solar-Blocking Poplin',
    price: 34,
    originalPrice: 42,
    girth: 38,
    description: 'Shields sensitive canine coats from tropical sun UV rays with ultra-light featherweight airflow fabric.',
    longDescription: 'Clinically rated UPF 50+ blocking 98% of harmful UV rays. Perfect for light-colored or shaved dogs susceptible to sun sensitivity during outdoor cafe afternoons.',
    recommendedCuts: '4 Cuts: Petite · Standard · Long-Body · Broad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfObDSx4mg4fGaFfDK8MCcMZQ18Re5GHLjhQLh2VxCS7A1bXY1zu9SvWQBFsPUkalETMnciVdwS-m25iq1ni45PCW4c2gTZF35p7yFCAiiq3LJsomohNDG4efCAVjbf87LBmritGqGVX6v2XZY1_iBGyeZ98pWaCYhf2Bm1QNvlAxEGW5DcaFHhC469Xoqg5ivnCjgFS2WZNxaCX1U-Lgs8yvD7EVe5G-WpyoBybB02TxXcpWX-kkP6w',
    colorways: [
      { name: 'Solar Sand', hex: '#DECBB5' },
      { name: 'Crisp White', hex: '#FDFBF7' }
    ],
    rating: 4.7,
    reviewCount: 42,
    edition: 'Summer Resort'
  },
  {
    id: 'ergonomic-trail-walking-booties',
    title: 'Trail Grip Walking Shoes',
    category: 'shoes',
    categoryLabel: 'Shoes',
    tag: 'Paw Protection',
    tagBadge: 'Protective Fit',
    material: 'Vibram-Style Grip Sole',
    price: 36,
    originalPrice: 46,
    girth: 38,
    description: 'Flexible non-slip rubber soles protecting paws from hot pavement, gravel, and rough outdoor terrain.',
    longDescription: 'Designed with anatomical paw curvature and dual reflective straps. High-abrasion thermal rubber shields sensitive pads against hot pavement, sand, and city streets.',
    recommendedCuts: '4 Paw Sizes: Petite · Standard · Wide · XL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNkmy-ZtYQtOqxlAe33pQ4ZnEqsiSj99q5mjWPrxyfRp4S7dBblZg08av7qSX1tQsXKM0UQsmtcb9_iGUBzMv5elm5xnmZVaYnMApe6hVM5XMs4FCbxW6DDl85wL5TGKnzPTR9lK33Yrx6akzVBOpIsAk7aHULqjk3Twiv94hwgpGEqjbvYXp40YSMhTmQqjPh6pHPdh7X8clHmzEOBPsd-2gMy3yB8oV_fip89_s6lBUyWN2Lf1bqg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNkmy-ZtYQtOqxlAe33pQ4ZnEqsiSj99q5mjWPrxyfRp4S7dBblZg08av7qSX1tQsXKM0UQsmtcb9_iGUBzMv5elm5xnmZVaYnMApe6hVM5XMs4FCbxW6DDl85wL5TGKnzPTR9lK33Yrx6akzVBOpIsAk7aHULqjk3Twiv94hwgpGEqjbvYXp40YSMhTmQqjPh6pHPdh7X8clHmzEOBPsd-2gMy3yB8oV_fip89_s6lBUyWN2Lf1bqg'
    ],
    colorways: [
      { name: 'Moss & Desert Tan', hex: '#877B66' },
      { name: 'Obsidian Black', hex: '#222324' }
    ],
    rating: 4.8,
    reviewCount: 95,
    edition: 'Footwear Collection'
  },
  {
    id: 'strand-outdoor-paw-sneakers',
    title: 'Strand Outdoor Dog Sneakers',
    category: 'shoes',
    categoryLabel: 'Shoes',
    tag: 'City Footwear',
    material: 'Breathable Canvas',
    price: 32,
    originalPrice: 40,
    girth: 24,
    description: 'Shields claws and delicate digital pads from midday concrete heat with vented cotton canvas construction.',
    longDescription: 'Casual dog sneakers with soft leather pull tabs and breathable cotton duck canvas. Features an easy-entry front zipper for fast on and off.',
    recommendedCuts: '4 Paw Sizes: Petite · Standard · Wide · XL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zIv1IkpxM6G5GJ5Bx1L-E1NB19tkRJ5-hprMt2LTb4bkcEHhz4dJMEBvP0wHIkww1LFwxY5cU313YApLHqBV5kbQINg-bEGyMKZQlrgNDlLflK03veUJV6pSP0cu_fcejHHF9hegJo6t5aJrtH6pxi32Wi0UKJo7HZb3rDgbiXfgjZEscC9tnswTofCYPjG6WHyD6-av_A6wUNrQ728A3XNTWFY4idH0JkvkOp3eDn_XHaKKm6qiLA',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zIv1IkpxM6G5GJ5Bx1L-E1NB19tkRJ5-hprMt2LTb4bkcEHhz4dJMEBvP0wHIkww1LFwxY5cU313YApLHqBV5kbQINg-bEGyMKZQlrgNDlLflK03veUJV6pSP0cu_fcejHHF9hegJo6t5aJrtH6pxi32Wi0UKJo7HZb3rDgbiXfgjZEscC9tnswTofCYPjG6WHyD6-av_A6wUNrQ728A3XNTWFY4idH0JkvkOp3eDn_XHaKKm6qiLA'
    ],
    colorways: [
      { name: 'Ecru Canvas', hex: '#EBE5D8' },
      { name: 'Midnight Navy', hex: '#1E2530' }
    ],
    rating: 4.7,
    reviewCount: 52,
    edition: 'Footwear Collection'
  },
  {
    id: 'lagoon-neoprene-beach-sandals',
    title: 'Lagoon Neoprene Water Shoes',
    category: 'shoes',
    categoryLabel: 'Shoes',
    tag: 'Water Friendly',
    tagBadge: 'Under S$30',
    material: 'Hydrophobic Neoprene',
    price: 26,
    originalPrice: 34,
    girth: 38,
    description: 'Fast-drying water shoes with drainage mesh, ideal for beach runs, hot docks, and slippery boat decks.',
    longDescription: 'Soft marine neoprene paired with laser-cut water drainage channels. Grips slick wet rocks, paddleboards, and searing marina boardwalks with ease.',
    recommendedCuts: '4 Paw Sizes: Petite · Standard · Wide · XL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCvnvEJ2uJ7PV_v7hB-fjtN6xa5DT_onXBcrc70fomYtgTPqFFsnWWeCQFXMn9QARc_NO6E82Gw93LEOZqPE0Kn1xrEGPEUZQhzKGcb6yPI0Pkue52cwrXNT1IwiG18tx2XXxMDI03VylwJltjqfOPGOogimzNJsShsM0LdpUOR0cKCv7Xz3q7gmckCoxwMbuPar7S1eoIjaHcgGv1_ToB9NezMhK4BuMtjp3mSjEDQcqR-eTdvHNcmA',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCvnvEJ2uJ7PV_v7hB-fjtN6xa5DT_onXBcrc70fomYtgTPqFFsnWWeCQFXMn9QARc_NO6E82Gw93LEOZqPE0Kn1xrEGPEUZQhzKGcb6yPI0Pkue52cwrXNT1IwiG18tx2XXxMDI03VylwJltjqfOPGOogimzNJsShsM0LdpUOR0cKCv7Xz3q7gmckCoxwMbuPar7S1eoIjaHcgGv1_ToB9NezMhK4BuMtjp3mSjEDQcqR-eTdvHNcmA'
    ],
    colorways: [
      { name: 'Lagoon Sage', hex: '#778873' },
      { name: 'Ocean Coral', hex: '#C27560' }
    ],
    rating: 4.9,
    reviewCount: 68,
    edition: 'Aqua Collection'
  },
  {
    id: 'wild-salmon-cranberry-crunch',
    title: 'Wild Salmon & Cranberry Crunch',
    category: 'treats',
    categoryLabel: 'Artisanal Treats',
    tag: 'Organic Pantry',
    tagBadge: 'Under S$20',
    material: 'Omega-Rich Superfood',
    price: 18,
    originalPrice: 24,
    girth: 38,
    description: 'Slow oven-baked biscuits formulated to promote coat gloss and urinary tract health. Zero grain fillers.',
    longDescription: 'Wild Alaskan sockeye salmon combined with whole organic cranberries and flaxseed meal. Baked in small micro-batches at low temperatures to preserve essential fatty acids.',
    recommendedCuts: '150g Glass Jar · Human-Grade Ingredients',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOHmKtZjSvyfS2Xtov0KukHIkS1JAK04g60YzgKTjDppQqDu_nEGI7AjiIQD2ky7LwhfZoxQshcq8f3cUmN2CH0vYB31ezBeCIszOFonT_EyeaiTbiSlyV3XNapnSdZ2xivkXAr9lfO_hcDRmSEObgur9nweJIYnYsGzyW4_XQnW-R7I3bYTuC74It0R5FSJloccmBLh0JPoIyKbhAso4mcKBA-OnTsYZJ_2zUa_rHhe3PolzAymLAng',
    rating: 4.9,
    reviewCount: 142,
    edition: 'Organic Pantry'
  },
  {
    id: 'pasture-beef-rosemary-jerky',
    title: 'Pasture Beef & Rosemary Jerky',
    category: 'treats',
    categoryLabel: 'Artisanal Treats',
    tag: 'Single Protein',
    tagBadge: 'Under S$30',
    material: 'Grass-Fed Australian Beef',
    price: 22,
    originalPrice: 28,
    girth: 38,
    description: 'Gently cold-dehydrated lean sirloin with antioxidant rosemary. Hand-cut into snap-ready training portions.',
    longDescription: '100% pasture-raised Australian sirloin infused with garden-fresh culinary rosemary. No nitrates, no glycerin, and no synthetic preservatives.',
    recommendedCuts: 'Single Ingredient · No Preservatives',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvKZrOUhSKXOI1rDejMyR-GIqTEd0KpBnRNPBkRdeFatsI53wCdlkbLZmXgvj4Ai1LdVds8F2UxaM5BAGuPiwJ_cdYKsqhKqPsZJB_wEp7PtZGbEwqmTuuuOuxGqx8g7y2r9TCVDh5uckAHlnyV737rS7ZTD1WOSqNPxFvH9uCHeNxNgnk9QSe1pLsSP-VTaW9ZTcsRaCTOsWtxxP35ueoe8rKVljnUjlVnFkxNDbvGLUAojcsCiG2Dw',
    rating: 5.0,
    reviewCount: 188,
    edition: 'Organic Pantry'
  },
  {
    id: 'chamomile-honey-calm-chews',
    title: 'Chamomile & Honey Calm Chews',
    category: 'treats',
    categoryLabel: 'Artisanal Treats',
    tag: 'Botanical Care',
    tagBadge: 'Under S$20',
    material: 'Herbal Relaxation',
    price: 16,
    originalPrice: 22,
    girth: 38,
    description: 'Holistic digestive chews featuring German chamomile, passionflower, and organic raw wildflower honey.',
    longDescription: 'Gently calms anxious canine nerves before thunderstorms, fireworks, and vet visits. Made with soothing L-theanine, organic passionflower, and prebiotic raw honey.',
    recommendedCuts: '60 Soft Bites · Vet Formulated',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBurZE3QjLltfpfHFSIoc-Mr7YRoVjXC_UUM2YPv1TNolqJzUT13AHuWiNDsYvZrT1b2-LmbBd6NbPZN2QovHHa1etsjq_UZb5Xvw1IbYMl69DPIPCRUXwQvZBOFPCz9ERQV0raHGg0QceFvWCFuAaJVAquoCZ5i9vdzdXHQakB8pHJxQ0CghI2eYuBOk5SNrNINQYcXkwiJqGgdpfoJEZZ8eC0sKHfzYXYbiWWs4YH6MseJKhzyfFqcQ',
    rating: 4.8,
    reviewCount: 76,
    edition: 'Botanical Care'
  }
];

export const SIZING_ARCHETYPE_DATA = [
  {
    id: 'petite',
    cutName: '01. Petite Cut',
    breeds: 'Chihuahuas · Toy Poodles · Yorkies',
    description: 'Designed for compact skeletal structures with narrow collar widths and micro-snap closures that never weigh down fragile chests.',
    range: '20 – 32 cm',
    icon: 'pets',
    backLength: '18 – 23 cm',
    exampleWeights: '1.5 – 4 kg'
  },
  {
    id: 'standard',
    cutName: '02. Standard Cut',
    breeds: 'Beagles · Schnauzers · Terriers',
    description: 'Balanced proportions calibrated for medium-density chest-to-back ratios. Incorporates generous shoulder freedom for active sprinting.',
    range: '33 – 50 cm',
    icon: 'balance',
    backLength: '24 – 31 cm',
    exampleWeights: '5 – 14 kg'
  },
  {
    id: 'long-body',
    cutName: '03. Long-Body Cut',
    breeds: 'Dachshunds · Corgis · Bassets',
    description: 'Extended spine coverage (+35% torso reach) paired with shortened armhole drops to completely eliminate fabric dragging or tripping.',
    range: '40 – 55 cm (Extra Length)',
    icon: 'straighten',
    backLength: '32 – 40 cm',
    exampleWeights: '6 – 16 kg'
  },
  {
    id: 'broad-chest',
    cutName: '04. Broad-Chest Cut',
    breeds: 'Bulldogs · Frenchies · Staffies',
    description: 'Architecturally expanded ribcages with wide front bibs and elastic neck collars that sit comfortably below thick scruff and muscle.',
    range: '52 – 75+ cm',
    icon: 'shield',
    backLength: '41 – 50 cm',
    exampleWeights: '12 – 30+ kg'
  }
];

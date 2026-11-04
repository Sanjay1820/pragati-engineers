/**
 * PRAGATI ENGINEERS - Product Detail Page JavaScript
 * Handles dynamic product loading from URL slug,
 * gallery thumbnail image switching underneath main image,
 * technical specs rendering, applications/industries rendering,
 * WhatsApp pre-filled chat, and RFQ form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Product Database covering all client catalog categories
  const productDatabase = {
    // ==================== 1. LOOMS CLOTH ROLLS ====================
    'tsudakoma': {
      title: 'Tsudakoma Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Engineered for Japanese Tsudakoma Airjet & Waterjet Looms',
      mainImg: 'assets/images/products/tsudakoma.webp',
      relatedImgs: [
        { src: 'assets/images/products/tsudakoma.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/tsudakoma_gear.webp', title: 'Gear End' },
        { src: 'assets/images/products/gallery/tsudakoma_surface.webp', title: 'Fluted Barrel' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Pragati Engineers manufactures heavy-duty, high-precision cloth take-up rolls specifically designed for Japanese Tsudakoma airjet looms (ZA205i, ZA209i, ZAX, ZAX-N, ZAX9100, ZAX9200) and waterjet looms (ZW408, ZW8100). Engineered with pure grade aluminium alloy / seamless MS barrels, metal moulded cast bushes, pulsing welding technology, and EN-8 grade gears with controlled hardness for maximum wear resistance and zero deflection at speeds exceeding 1000 RPM.',
      applications: 'Japanese Tsudakoma airjet & waterjet looms, continuous denim, bottom-weight, shirting, filament fabrics, high-speed textile mills.',
      specs: [
        { label: 'Loom Width Range', val: '170 cm to 390 cm (Customizable up to 400 cm)' },
        { label: 'Barrel Material', val: 'Pure Grade High-Tensile Aluminium Alloy / Seamless MS' },
        { label: 'Bush Construction', val: 'Metal Moulded Cast Bushes for tight fitment & strength' },
        { label: 'Welding Technology', val: 'Dual-Sided Pulsing Welding for improved structural integrity' },
        { label: 'Drive Mechanism', val: 'EN-8 Grade Gears with Controlled Hardness & Precision Keyways' },
        { label: 'Dynamic Balancing', val: 'Tested to ISO 1940 Grade G2.5 (< 0.01 mm Runout)' },
        { label: 'Surface Profile', val: 'Longitudinal Fluted / Diamond Knurled / Non-Slip Grip' },
        { label: 'Compatible Models', val: 'Tsudakoma ZA205i, ZA209i, ZAX, ZAX9100/9200, ZW Series' }
      ]
    },
    'toyota': {
      title: 'Toyota Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Precision Take-up Rollers for Toyota JAT710, JAT810 & JAT910 Looms',
      mainImg: 'assets/images/products/toyota.webp',
      relatedImgs: [
        { src: 'assets/images/products/toyota.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/toyota_gear.webp', title: 'Shaft End' },
        { src: 'assets/images/products/gallery/toyota_surface.webp', title: 'Tension Surface' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Custom-manufactured cloth rolls for Toyota high-speed airjet weaving looms. Designed for maximum torsional stiffness and zero deflection across wide reed widths up to 390 cm. Features pure-grade aluminium alloy tube body, metal moulded cast bushes welded with pulsing welding technology, and induction-hardened EN-8 gears for uniform fabric take-up without slippage.',
      applications: 'Toyota JAT airjet looms, premium cotton spinning, denim, suiting, bed-sheeting, and industrial textile weaving.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 390 cm' },
        { label: 'Material Grade', val: 'Pure Grade Seamless Aluminium / Carbon Steel Core' },
        { label: 'Bush Technology', val: 'Controlled Metal Moulding Process for consistent dimensions' },
        { label: 'Joint Welding', val: 'Pulsing Welding Technology on both sides' },
        { label: 'Drive Gears', val: 'EN-8 Grade Material with Controlled Wear Resistance' },
        { label: 'Concentricity', val: '< 0.012 mm Total Indicator Reading (TIR)' },
        { label: 'Loom Series', val: 'Toyota JAT610, JAT710, JAT810, JAT910' }
      ]
    },
    'picanol': {
      title: 'Picanol Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'European Standard Cloth Take-up Rollers for OmniPlus & OptiMax Looms',
      mainImg: 'assets/images/products/picanol.webp',
      relatedImgs: [
        { src: 'assets/images/products/picanol.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/picanol_gear.webp', title: 'Spiral Journal' },
        { src: 'assets/images/products/gallery/picanol_surface.webp', title: 'Barrel Profile' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Built to meet stringent European standards for Picanol airjet and rapier weaving machines including OmniPlus 800, OmniPlus Summum, OptiMax-i, and TerryPlus. High-rigidity steel and aluminium construction with pulsing-welded bushes ensures uniform fabric tension control and long life in 24/7 continuous mill operations.',
      applications: 'Picanol OmniPlus airjet & OptiMax rapier looms, terry towel, high-end shirting, technical fabrics, and heavy apparel.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 380 cm (Customizable up to 400 cm)' },
        { label: 'Material', val: 'Pure Grade Aluminium Alloy / Precision Drawn Seamless Steel' },
        { label: 'Bush Construction', val: 'Precision Metal Moulded Cast Bushes' },
        { label: 'Welding', val: 'Automated Pulsing Welding Technology on both ends' },
        { label: 'Gears', val: 'Heat-Treated EN-8 Grade Steel with Controlled Hardness' },
        { label: 'Runout Tolerance', val: '< 0.015 mm Maximum Runout' },
        { label: 'Machine Models', val: 'OmniPlus 800, OmniPlus Summum, OptiMax, TerryPlus' }
      ]
    },
    'itema': {
      title: 'Itema Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'High-Torque Cloth Rollers for Itema R9500 & A9500 Weaving Looms',
      mainImg: 'assets/images/products/itema.webp',
      relatedImgs: [
        { src: 'assets/images/products/itema.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/itema_gear.webp', title: 'Journal End' },
        { src: 'assets/images/products/gallery/itema_surface.webp', title: 'Surface Profile' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Engineered specifically for Itema R9500 rapier and A9500 airjet looms. Manufactured with tight journal concentricity, metal moulded cast bushes, pulsing welded joints, and hardened EN-8 gears to withstand high torque pick insertion and eliminate cloth tension variations.',
      applications: 'Itema rapier & airjet looms, complex jacquard weaving, technical textiles, heavy canvas, and high-fashion upholstery.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 380 cm' },
        { label: 'Body Material', val: 'Pure Grade Aluminium Core / Precision Steel' },
        { label: 'Cast Bushes', val: 'Metal Moulded Process for accurate fitment and structural strength' },
        { label: 'Welding Process', val: 'Pulsing Welding Technology for reliable joints' },
        { label: 'Gear Grade', val: 'EN-8 Grade with Controlled Hardness' },
        { label: 'Shaft Concentricity', val: '< 0.015 mm' },
        { label: 'Compatible Looms', val: 'Itema R9500, R9500-2, A9500, Silver 501' }
      ]
    },
    'waterjet': {
      title: 'Waterjet Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Corrosion-Resistant Synthetic & Filament Weaving Cloth Take-up Rolls',
      mainImg: 'assets/images/products/waterjet.webp',
      relatedImgs: [
        { src: 'assets/images/products/waterjet.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/waterjet_gear.webp', title: 'Sealed Shaft' },
        { src: 'assets/images/products/gallery/waterjet_surface.webp', title: 'Corrosion Body' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Designed for high-speed waterjet looms weaving synthetic, polyester, and nylon filament fabrics in moist operating conditions. Built with pure grade aluminium with corrosion barrier or stainless steel cladded tube, metal moulded cast bushes, pulsing welding, and sealed hardened journals.',
      applications: 'Waterjet weaving looms, synthetic filament fabrics, polyester, nylon, umbrella cloth, rainwear, and outdoor technical textiles.',
      specs: [
        { label: 'Loom Width', val: '150 cm to 360 cm (up to 400 cm)' },
        { label: 'Corrosion Protection', val: 'Pure Grade Anodized Aluminium / Stainless Cladding' },
        { label: 'Bush & Joint', val: 'Metal Moulded Cast Bushes + Pulsing Welding on both sides' },
        { label: 'Gears', val: 'Hardened EN-8 Grade Steel Gears' },
        { label: 'Water Sealing', val: 'Double Lip Moisture Seals on Bearing Journals' },
        { label: 'Balancing Standard', val: 'Dynamically Balanced at 1200 RPM' }
      ]
    },
    'sulzer': {
      title: 'Sulzer Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Heavy-Duty Projectile & Rapier Loom Cloth Rollers for Sulzer G6200 / G6300 / P7100',
      mainImg: 'assets/images/products/sulzar.webp',
      relatedImgs: [
        { src: 'assets/images/products/sulzar.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/sulzer_gear.webp', title: 'Heavy Shaft' },
        { src: 'assets/images/products/gallery/sulzer_surface.webp', title: 'High-Grip Surface' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Heavy-duty take-up cloth rollers manufactured for Sulzer projectile (P7100, P7200, P7300, PU) and rapier (G6200, G6300) weaving machines. Engineered to withstand heavy fabric roll weight and continuous high warp tension without bowing.',
      applications: 'Wide projectile looms, heavy denim, canvas, geotextiles, industrial tarpaulins, and dense technical weaves.',
      specs: [
        { label: 'Loom Width', val: 'Up to 430 cm (170" to 213" Sulzer Looms)' },
        { label: 'Construction', val: 'Heavy-Wall Seamless Steel / Pure Grade Aluminium Tube' },
        { label: 'Bushes & Welding', val: 'Metal Moulded Cast Bushes with Pulsing Welding Technology' },
        { label: 'Gear Specification', val: 'Induction Hardened EN-8 Grade Heavy Gear' },
        { label: 'Dynamic Balance', val: 'ISO 1940 Grade G2.5 Tested' },
        { label: 'Machine Models', val: 'Sulzer P7100, P7150, P7200, P7300, G6200, G6300' }
      ]
    },
    'somet': {
      title: 'Somet Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'High-Precision Cloth Rollers for Somet Thema 11, Super Excel & Alpha Looms',
      mainImg: 'assets/images/products/somet.webp',
      relatedImgs: [
        { src: 'assets/images/products/somet.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/somet_gear.webp', title: 'Keyed End' },
        { src: 'assets/images/products/gallery/somet_surface.webp', title: 'Machined Barrel' },
        { src: 'assets/images/products/all_cloth_roll_range.webp', title: 'Complete Cloth Roll Range' }
      ],
      desc: 'Manufactured to OEM tolerances for Italian Somet rapier looms including Thema 11E, Thema Super Excel, and Alpha. Features precision ground shaft journals, pure grade aluminium tube, metal moulded cast bushes, pulsing welding, and EN-8 grade gears.',
      applications: 'Somet rapier looms, premium shirting, suiting, furnishing fabrics, and jacquard weaving.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 380 cm' },
        { label: 'Barrel Material', val: 'Pure Grade Aluminium Alloy / Precision Carbon Steel' },
        { label: 'Bush Technology', val: 'Metal Moulded High-Strength Cast Bushes' },
        { label: 'Welding', val: 'Controlled Pulsing Welding on both sides' },
        { label: 'Drive End', val: 'Hardened EN-8 Gears with Precision Keyway' },
        { label: 'Runout Tolerance', val: '< 0.015 mm across full width' },
        { label: 'Loom Models', val: 'Somet Thema 11, Thema 11E, Super Excel, Alpha' }
      ]
    },

    // ==================== 2. CHROME PLATED ROLLERS ====================
    'standard-chrome-roller': {
      title: 'Standard Chrome Plated Roller',
      category: 'Chrome Plated Rollers',
      categorySlug: 'chrome',
      subtitle: 'Precision Ground Hard Chrome Plated Industrial Roller (up to 7500 mm)',
      mainImg: 'assets/images/products/standard_chrome_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Full Chrome Roller' },
        { src: 'assets/images/products/mirror_chrome_roller.webp', title: 'Mirror Finish' },
        { src: 'assets/images/products/matt_chrome_roller.webp', title: 'Matt Finish' },
        { src: 'assets/images/products/nip_roller.webp', title: 'Nip Roller Assembly' }
      ],
      desc: 'Precision engineered industrial roller manufactured from high-grade MS, EN8, EN19 or SS pipe and solid shaft. Surface is precision turned, cylindrical ground, and hard chrome plated with 40 to 80 microns thickness (customizable up to 200 microns). Hardness achieved 60±2 HRC / 800-1000 HV with excellent wear, corrosion, and chemical resistance. Grinding accuracy within 0.02 mm and dynamically balanced for high-speed operation up to 600 m/min.',
      applications: 'Printing, lamination, textile wet & dry processing, paper mills, plastic film extrusion, flexible packaging, converting machinery.',
      specs: [
        { label: 'Maximum Roller Length', val: 'Up to 7500 mm' },
        { label: 'Maximum Roller Diameter', val: 'Up to 800 mm' },
        { label: 'Chrome Plating Thickness', val: '40 to 80 µm (Customizable up to 200 µm)' },
        { label: 'Surface Hardness', val: '60±2 HRC / 800 - 1000 HV' },
        { label: 'Grinding Accuracy', val: 'Within 0.02 mm Total Indicator Reading (TIR)' },
        { label: 'Dynamic Balancing', val: 'Dynamically balanced for line speeds up to 600 m/min' },
        { label: 'Core Material', val: 'High-grade MS, EN8, EN19, or Stainless Steel Pipe' }
      ]
    },
    'mirror-chrome-roller': {
      title: 'Mirror Finished Chrome Plated Roller',
      category: 'Chrome Plated Rollers',
      categorySlug: 'chrome',
      subtitle: 'Super Mirror Finish (Ra 0.05 - 0.1 µm) Optical Release Roller',
      mainImg: 'assets/images/products/mirror_chrome_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/mirror_chrome_roller.webp', title: 'Mirror Surface View' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Standard Chrome' },
        { src: 'assets/images/products/matt_chrome_roller.webp', title: 'Matt Finish' },
        { src: 'assets/images/products/gallery/chrome_mirror_detail.webp', title: 'Mirror Reflection Detail' }
      ],
      desc: 'High-precision super mirror finished roller with ultra-smooth surface finish Ra 0.05 to 0.1 micron. Hard chrome plating thickness 80-120 microns (up to 200 microns) with hardness 850-1000 HV, diamond buffed to high-gloss optical mirror for excellent release properties. 100% concentricity and computerized dynamic balancing ensures vibration-free, scratch-free web handling. Provides non-stick, easy-clean, and anti-marking performance.',
      applications: 'BOPP, CPP, PET optical film casting, extrusion lamination, corona treatment, super-calender, release film, solar backsheet, touchscreen film lines.',
      specs: [
        { label: 'Maximum Roller Length', val: 'Up to 5000 mm' },
        { label: 'Maximum Roller Diameter', val: 'Up to 800 mm' },
        { label: 'Surface Roughness (Ra)', val: 'Ra 0.05 to 0.1 µm (Super Mirror Finish)' },
        { label: 'Chrome Plating Thickness', val: '80 to 120 µm (Up to 200 µm as required)' },
        { label: 'Plating Hardness', val: '850 to 1000 HV' },
        { label: 'Concentricity & Balancing', val: '100% Dynamic Balanced (< 0.01 mm Runout)' },
        { label: 'Surface Performance', val: 'Non-stick, scratch-free, high-gloss mirror buffed' }
      ]
    },
    'matt-chrome-roller': {
      title: 'Matt Finished Chrome Plated Roller',
      category: 'Chrome Plated Rollers',
      categorySlug: 'chrome',
      subtitle: 'Controlled Uniform Dull / Matt Textured (Ra 0.4 - 1.2 µm) Anti-Slip Roller',
      mainImg: 'assets/images/products/matt_chrome_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/matt_chrome_roller.webp', title: 'Matt Chrome Surface' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Standard Chrome' },
        { src: 'assets/images/products/mirror_chrome_roller.webp', title: 'Mirror Finish' },
        { src: 'assets/images/products/anti_deflection_roller.webp', title: 'Anti Deflection Profile' }
      ],
      desc: 'Specially developed matt / dull chrome roller with controlled uniform matt micro-texture surface Ra 0.4 to 1.2 micron. Hard chrome plating 25-50 microns thick with hardness 65±2 HRC for better grip, controlled web traction, and anti-slip web transport. The matt texture provides anti-glare, scratch-hiding, and excellent ink/adhesive anchoring. Precision ground and etched to maintain consistent mattness across full face length.',
      applications: 'Lamination, embossing, gravure printing, rubber and polymer processing, textile finishing for uniform web feeding and controlled friction.',
      specs: [
        { label: 'Maximum Roller Length', val: 'Up to 5000 mm' },
        { label: 'Maximum Roller Diameter', val: 'Up to 800 mm' },
        { label: 'Surface Roughness (Ra)', val: 'Ra 0.4 to 1.2 µm (Controlled uniform matt/dull)' },
        { label: 'Chrome Plating Thickness', val: '25 to 50 µm (Customizable up to 200 µm)' },
        { label: 'Surface Hardness', val: '65±2 HRC' },
        { label: 'Web Traction Benefit', val: 'Controlled friction, anti-slip web transport & anti-glare' },
        { label: 'Etching Accuracy', val: 'Uniform texture maintained across 100% of face length' }
      ]
    },

    // ==================== 3. COOLING AND HEATING ROLLERS ====================
    'ms-cooling-roller': {
      title: 'MS Cooling Roller',
      category: 'Cooling & Heating Rollers',
      categorySlug: 'cooling-heating',
      subtitle: 'Heavy-Duty Internal Spiral Baffle Chill Roller (up to 5000 mm)',
      mainImg: 'assets/images/products/ss_steam_heating_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_steam_heating_roller.webp', title: 'Cooling Shell View' },
        { src: 'assets/images/products/anti_deflection_roller.webp', title: 'Journal End' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Chrome Ground Barrel' },
        { src: 'assets/images/products/nip_roller.webp', title: 'Internal Chamber Setup' }
      ],
      desc: 'Heavy-duty Mild Steel (MS) shell construction with an optimized inner jacket or spiral baffled design for uniform coolant flow and efficient heat transfer. Precision ground and hard chrome plated with a high mirror finish (Ra 0.2 µm or better, Ra 0.5 µm standard) to prevent material sticking and corrosion. Premium hard chrome layer offering exceptional wear resistance under continuous thermal load. Dynamically balanced at high operating speeds for smooth, vibration-free rotation.',
      applications: 'Plastic film extrusion, sheet extrusion, extrusion lamination, flexo/gravure printing cooling, coating lines, packaging film chill stands.',
      specs: [
        { label: 'Maximum Roller Length', val: 'Up to 5000 mm' },
        { label: 'Maximum Roller Diameter', val: 'Up to 800 mm' },
        { label: 'Internal Chamber', val: 'Double Shell with Internal Spiral Flow Baffle' },
        { label: 'Surface Roughness (Ra)', val: 'Ra 0.2 to 0.5 µm (Mirror Ground)' },
        { label: 'Chrome Plating Layer', val: 'Up to 200 µm Hard Chrome Plating' },
        { label: 'Thermal Performance', val: 'High-speed uniform coolant circulation & heat transfer' },
        { label: 'Balancing Standard', val: 'Computerized dynamic balancing at high line speeds' }
      ]
    },
    'steam-heating-roller': {
      title: 'Steam or Heating Roller',
      category: 'Cooling & Heating Rollers',
      categorySlug: 'cooling-heating',
      subtitle: 'Uniform Temperature Heat Transfer Industrial Heated Roller',
      mainImg: 'assets/images/products/ss_steam_heating_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_steam_heating_roller.webp', title: 'Steam Heated Roller' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Chrome Finished Body' },
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'Stainless Clad Body' },
        { src: 'assets/images/products/nip_roller.webp', title: 'High Temp Flanges' }
      ],
      desc: 'Steam / Heating Rollers are designed to provide uniform and efficient heat transfer for various industrial processing applications. Manufactured with precision heavy-duty pressure-tested steel shells and internal distribution chambers, these rollers ensure consistent temperature distribution across the roller surface for optimal processing results. Robust construction guarantees durability, thermal efficiency, and reliable performance under non-stop operating conditions.',
      applications: 'Controlled heating, drying, laminating, calendering, thermal bonding, non-woven fabrics, textile stentering, paper finishing, plastic sheet processing.',
      specs: [
        { label: 'Heating Medium', val: 'Steam, Hot Water, or Thermic Fluid (Hot Oil)' },
        { label: 'Construction', val: 'Heavy-Wall Boiler Quality / Carbon Steel Shell' },
        { label: 'Temperature Uniformity', val: 'Strict isothermal heat distribution across full face' },
        { label: 'Surface Finish', val: 'Hard Chrome Plated / Mirror Buffed or Ground' },
        { label: 'Shaft Journals', val: 'Hollow journals designed for standard rotary joint fitment' },
        { label: 'Pressure Rating', val: 'Hydrostatically tested for high pressure steam operation' }
      ]
    },
    'jacketed-cooling-roller': {
      title: 'Jacketed Cooling Roller',
      category: 'Cooling & Heating Rollers',
      categorySlug: 'cooling-heating',
      subtitle: 'Precision Dual-Wall Jacketed Heat Exchanger Roller',
      mainImg: 'assets/images/products/nip_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/nip_roller.webp', title: 'Jacketed Roller' },
        { src: 'assets/images/products/anti_deflection_roller.webp', title: 'Coolant Journal' },
        { src: 'assets/images/products/ss_steam_heating_roller.webp', title: 'Double Shell' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Hard Chrome Barrel' }
      ],
      desc: 'Jacketed Cooling Rollers are specially designed for efficient and uniform cooling in various high-speed industrial applications. Featuring a jacketed dual-wall construction, these rollers allow cooling media (chilled water or glycol) to circulate through the internal chamber, ensuring effective heat transfer and rock-solid consistent surface temperature. Manufactured with precision, they offer cooling efficiency, durability, and reliable performance under continuous production.',
      applications: 'Continuous high-speed film cooling, polymer sheet casting, coating lines, rubber calenders, hot melt lamination, converting lines.',
      specs: [
        { label: 'Construction', val: 'Precision Dual-Wall Concentric Jacketed Shell' },
        { label: 'Coolant Flow', val: 'High-Velocity Annular Cooling Channel' },
        { label: 'Surface Options', val: 'Mirror Finish Hard Chrome (Ra < 0.2 µm) or Matt Chrome' },
        { label: 'Dynamic Balance', val: 'ISO 1940 Grade G2.5 dynamically balanced' },
        { label: 'Concentricity', val: '< 0.015 mm Total Indicator Reading' },
        { label: 'Journals', val: 'Precision ground journals machined for rotary joints' }
      ]
    },

    // ==================== 4. STAINLESS STEEL ROLLERS ====================
    'ss-guide-roller': {
      title: 'Stainless Steel Guide Roller',
      category: 'Stainless Steel Rollers',
      categorySlug: 'ss-rollers',
      subtitle: 'Corrosion-Resistant Fabric & Film Guiding Roller (SS 304 L / SS 316)',
      mainImg: 'assets/images/products/ss_guide_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'SS Guide Roller' },
        { src: 'assets/images/products/ss_guide_roller_2.webp', title: 'Secondary Guide View' },
        { src: 'assets/images/products/ss_fluted_roller.webp', title: 'Fluted Alternative' },
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'Cladded Body' }
      ],
      desc: 'Stainless Steel Guide Rollers are specially designed for smooth and efficient fabric processing in Stenter Machines and various other textile wet & dry processing machines. Manufactured from high-quality stainless steel (SS304L or SS316), these rollers offer excellent corrosion resistance, durability, and superior surface finish. Their precision-engineered construction ensures smooth fabric movement, consistent performance, and reliable operation at high processing speeds. Ideal for moisture, chemicals, and demanding textile environments.',
      applications: 'Stenter machines, textile dyeing ranges, continuous bleaching, washing ranges, mercerizing, printing, paper and chemical processing lines.',
      specs: [
        { label: 'Maximum Roller Length', val: 'Up to 4000 mm' },
        { label: 'Maximum Roller Diameter', val: 'Up to 400 mm' },
        { label: 'Stainless Steel Grades', val: 'AISI SS 304 L / AISI SS 316' },
        { label: 'Surface Finish', val: 'Precision turned, ground, and high-luster buffed' },
        { label: 'Shaft Types', val: 'Live Shaft or Dead Shaft with internal precision bearings' },
        { label: 'Chemical Resistance', val: '100% resistant to moisture, dyes, caustic chemicals, steam' }
      ]
    },
    'ss-cladded-roller': {
      title: 'SS Cladded Roller',
      category: 'Stainless Steel Rollers',
      categorySlug: 'ss-rollers',
      subtitle: 'High-Strength MS / EN8 Core with SS304 / SS316 Heavy Cladding',
      mainImg: 'assets/images/products/ss_cladded_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'SS Cladded Body' },
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'Polished Finish' },
        { src: 'assets/images/products/ss_guide_roller_2.webp', title: 'Heavy End Shafts' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Turned Journal' }
      ],
      desc: 'Heavy-duty roller with MS / EN8 solid steel core and AISI SS304 / SS316 cladding for high structural rigidity plus complete corrosion resistance. The stainless steel shell is welded and precision ground to achieve perfect concentricity and long life. Provides excellent resistance against water, chemicals, and steam in textile processing. Widely used in dyeing ranges, washing, and bleaching lines as a cost-effective alternative to solid SS rollers.',
      applications: 'Textile dyeing ranges, continuous washing & bleaching lines, acid processing tanks, cost-effective solid stainless steel alternative.',
      specs: [
        { label: 'Core Material', val: 'High-Tensile Heavy-Wall MS / EN8 Solid Core' },
        { label: 'Cladding Material', val: 'AISI SS 304 / AISI SS 316 Stainless Steel Shell' },
        { label: 'Cladding Process', val: 'Full-length welded sleeve with thermal shrink fit' },
        { label: 'Concentricity & Grinding', val: 'Precision ground to < 0.02 mm TIR' },
        { label: 'Corrosion Immunity', val: '100% rust-free against water, caustic soda, steam' },
        { label: 'Cost Advantage', val: 'High rigidity of steel at a fraction of solid SS cost' }
      ]
    },
    'cladded-batching-trolly-roller': {
      title: 'Cladded Batching Trolley Roller',
      category: 'Stainless Steel Rollers',
      categorySlug: 'ss-rollers',
      subtitle: 'Heavy-Duty Fabric Batching & Winding Roller for Textile Processing',
      mainImg: 'assets/images/products/ss_guide_roller_2.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_guide_roller_2.webp', title: 'Batching Trolley Roller' },
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'SS Clad Shell' },
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'Guide Surface' },
        { src: 'assets/images/products/ss_fluted_roller.webp', title: 'Fluted Variant' }
      ],
      desc: 'Purpose-engineered for textile batching trolleys, A-frames, and cloth winders in large process houses. Built with heavy-duty steel core cladded with stainless steel SS304/SS316 to support huge jumbo rolls of wet or dry fabrics without shaft bending. Smooth surface finish prevents fabric snagging and provides 100% chemical and dye resistance.',
      applications: 'Textile processing mills, batching trolleys, A-frame winders, continuous cloth take-up, fabric inspection frames.',
      specs: [
        { label: 'Core & Cladding', val: 'Heavy-Duty MS Pipe Core + SS 304 / SS 316 Outer Clad' },
        { label: 'End Shafts', val: 'Heavy turned steel stub journals with corrosion protection' },
        { label: 'Load Capacity', val: 'Designed for heavy textile jumbo rolls (up to 3+ tons)' },
        { label: 'Surface Finish', val: 'Ultra-smooth turned and polished to prevent fabric damage' },
        { label: 'Compatibility', val: 'Standard dimensions for all Indian & imported batching frames' }
      ]
    },
    'ss-fluted-roller': {
      title: 'SS Fluted Roller',
      category: 'Stainless Steel Rollers',
      categorySlug: 'ss-rollers',
      subtitle: 'Textile Wrinkle-Removal & Fabric Spreading Fluted Roller',
      mainImg: 'assets/images/products/ss_fluted_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_fluted_roller.webp', title: 'SS Fluted Roller' },
        { src: 'assets/images/products/ss_scroll_roller.webp', title: 'Scroll Expander View' },
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'Smooth Guide View' },
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'Cladded Assembly' }
      ],
      desc: 'Special textile fluted roller with flutes available in both SS304 & SS316 options. Flutes are precision cut and bent to provide effective wrinkle removal and fabric spreading across the entire face. Depth and pitch are customized for positive fabric opening and width-wise stretching on stenters and processing machines. Ensures uniform tension and prevents fabric shrinkage. Mainly used in textile stenters, compacting, and finishing ranges.',
      applications: 'Textile stenters, fabric compactors, continuous bleaching, open-width washing ranges, padder machines, finishing ranges.',
      specs: [
        { label: 'Flute Material', val: 'AISI SS 304 / AISI SS 316 Stainless Steel' },
        { label: 'Fabrication', val: 'Precision CNC cut, formed & polished longitudinal flutes' },
        { label: 'Primary Function', val: 'Positive fabric opening, wrinkle removal & width stretching' },
        { label: 'Pitch & Depth', val: 'Customized to fabric density (light, medium, heavy)' },
        { label: 'Uniform Tension', val: 'Eliminates edge curling and fabric shrinkage' },
        { label: 'Shaft Journals', val: 'Live shaft or dead shaft precision ground journals' }
      ]
    },
    'ss-turned-roller': {
      title: 'SS Turned Roller',
      category: 'Stainless Steel Rollers',
      categorySlug: 'ss-rollers',
      subtitle: 'Seamless Stainless Steel Pipe Precision Turned Industrial Roller',
      mainImg: 'assets/images/products/ss_guide_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'SS Turned Surface' },
        { src: 'assets/images/products/ss_guide_roller_2.webp', title: 'Bearing Journal' },
        { src: 'assets/images/products/ss_cladded_roller.webp', title: 'Cladded Alternative' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Turned Comparison' }
      ],
      desc: 'Stainless Steel Turned Rollers are manufactured using premium-quality SS Seamless Pipes to ensure superior strength, durability, and reliability. These rollers undergo specialized precision turning operations to achieve accurate dimensions, concentricity, and a smooth surface finish. Despite the machining challenges of turning stainless steel seamless pipes, our expertise and advanced machining processes ensure excellent dimensional accuracy and finishing quality.',
      applications: 'Textile wet processing, caustic recovery, chemical handling, paper mills, food packaging, pharmaceutical conveyor lines.',
      specs: [
        { label: 'Raw Material', val: 'Heavy-Wall Stainless Steel Seamless Pipe (SS304 / SS316)' },
        { label: 'Machining', val: 'Specialized precision CNC turning & cylindrical grinding' },
        { label: 'Concentricity', val: '< 0.02 mm Total Indicator Reading' },
        { label: 'Surface Finish', val: 'Micro-turned and polished for smooth web glide' },
        { label: 'Corrosion Resistance', val: 'Immune to moisture, harsh chemicals, dyes, and heat' }
      ]
    },

    // ==================== 5. ALUMINIUM ROLLERS ====================
    'aluminium-guide-roller': {
      title: 'Aluminium Guide Roller',
      category: 'Aluminium Rollers',
      categorySlug: 'aluminium',
      subtitle: 'Lightweight Low-Inertia Web Guiding Roller (Speeds Up to 800 m/min)',
      mainImg: 'assets/images/products/aluminium_guide_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/aluminium_guide_roller.webp', title: 'Guide Roller Full' },
        { src: 'assets/images/products/aluminium_anodized_roller.webp', title: 'Hard Anodized' },
        { src: 'assets/images/products/aluminium_scroll_roller.webp', title: 'Scroll Expander' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Turned Comparison' }
      ],
      desc: 'Lightweight, high-strength aluminium guide roller made from 6061-T6 / 6082 grade extruded seamless pipe for inertia-free web handling. Surface precision turned and balanced for vibration-free high-speed operation up to 800 m/min. Hardness and concentricity maintained within 0.03 mm for scratch-free web guiding across high-speed lines.',
      applications: 'High-speed printing presses, flexible packaging, film slitting, extrusion lamination, textile, converting machines.',
      specs: [
        { label: 'Material Grade', val: 'Extruded Seamless Aluminium 6061-T6 / 6082 Alloy' },
        { label: 'Max Line Speed', val: 'Up to 800 m/min vibration-free' },
        { label: 'Concentricity Tolerance', val: 'Maintained strictly within 0.03 mm' },
        { label: 'Rotational Inertia', val: 'Ultra-low inertia for zero web slippage on start/stop' },
        { label: 'Surface Finish', val: 'Precision diamond turned smooth finish' },
        { label: 'Bearing Journals', val: 'High-tensile steel stub shafts with low-friction bearings' }
      ]
    },
    'aluminium-anodized-roller': {
      title: 'Aluminium Anodised Roller',
      category: 'Aluminium Rollers',
      categorySlug: 'aluminium',
      subtitle: 'Hard-Anodized (up to 50 µm) Wear & Scratch Resistant Aluminium Roller',
      mainImg: 'assets/images/products/aluminium_anodized_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/aluminium_anodized_roller.webp', title: 'Anodized Shell View' },
        { src: 'assets/images/products/aluminium_guide_roller.webp', title: 'Guide Variant' },
        { src: 'assets/images/products/aluminium_scroll_roller.webp', title: 'Scroll Expander' },
        { src: 'assets/images/products/mirror_chrome_roller.webp', title: 'Mirror Comparison' }
      ],
      desc: 'Premium aluminium roller with hard anodising up to 50 microns for superior wear and scratch resistance. Surface hardness 400-500 HV, non-marking and electrically insulated for safe fabric and film handling. Precision ground and mirror finished with Ra 0.2 to 0.4 micron for smooth operation. Widely used in textile, paper, BOPP, and packaging industries where lightweight and rust-proof rollers are required.',
      applications: 'Textile processing, paper converting, BOPP film handling, pouch packaging, label printing, cleanroom converting lines.',
      specs: [
        { label: 'Hard Anodizing Layer', val: 'Up to 50 microns (µm) hard anodized layer' },
        { label: 'Surface Hardness', val: '400 to 500 HV' },
        { label: 'Surface Roughness (Ra)', val: 'Ra 0.2 to 0.4 µm (Super Smooth)' },
        { label: 'Performance Features', val: 'Non-marking, electrically insulated, rust-proof' },
        { label: 'Core Tube', val: 'High-Strength 6061-T6 / 6082 Aluminium Pipe' },
        { label: 'Balancing Standard', val: 'Dynamically balanced for high-speed line operations' }
      ]
    },

    // ==================== 6. SCROLL ROLLERS (EXPANDERS / WRINKLE REMOVERS) ====================
    'ss-scroll-roller': {
      title: 'SS Scroll Roller',
      category: 'Scroll Rollers',
      categorySlug: 'scroll',
      subtitle: 'Stainless Steel Fabric Expander & Wrinkle Removal Roller (Wire / T-Type)',
      mainImg: 'assets/images/products/ss_scroll_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/ss_scroll_roller.webp', title: 'SS Scroll Roller' },
        { src: 'assets/images/products/aluminium_scroll_roller.webp', title: 'Aluminium Scroll' },
        { src: 'assets/images/products/ss_fluted_roller.webp', title: 'Fluted Spreader' },
        { src: 'assets/images/products/ss_guide_roller.webp', title: 'Smooth Guide' }
      ],
      desc: 'High-performance SS scroll / expander roller made in SS304 / SS316 for 100% wrinkle-free fabric spreading. Available in both Wire Type - Round Wire and T-Type (Flat) scroll. Scrolls precisely welded and polished to provide outward spreading action from center to both sides. Ensures 100% wrinkle removal and even fabric tension. Available in dead / live shaft type for textile processing lines.',
      applications: 'Fabric expander in textile stenter machines, sizing, fabric inspection machines, continuous dyeing and bleaching lines.',
      specs: [
        { label: 'Scroll Material', val: 'AISI SS 304 / AISI SS 316 Stainless Steel' },
        { label: 'Scroll Types', val: 'Round Wire Type & T-Type (Flat) Scrolls' },
        { label: 'Spreading Action', val: 'Dual outward spreading action from center to both edges' },
        { label: 'Performance', val: '100% wrinkle removal and even fabric tension' },
        { label: 'Shaft Types', val: 'Dead Shaft (internal bearings) or Live Shaft' },
        { label: 'Balancing', val: 'Smooth vibration-free rotation' }
      ]
    },
    'aluminium-scroll-roller': {
      title: 'Aluminium Scroll Roller',
      category: 'Scroll Rollers',
      categorySlug: 'scroll',
      subtitle: 'Lightweight Aluminium Wrinkle-Free Expander Roller (Round Wire & T-Type)',
      mainImg: 'assets/images/products/aluminium_scroll_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/aluminium_scroll_roller.webp', title: 'Aluminium Scroll Roller' },
        { src: 'assets/images/products/ss_scroll_roller.webp', title: 'SS Scroll Roller' },
        { src: 'assets/images/products/aluminium_anodized_roller.webp', title: 'Anodized Shell' },
        { src: 'assets/images/products/aluminium_guide_roller.webp', title: 'Guide Roller' }
      ],
      desc: 'High-performance aluminium expander / scroll roller for wrinkle-free fabric spreading. Manufactured in lightweight aluminium with precision welded scrolls - Round Wire and T-Type both available. Provides excellent outward spreading action from center to both ends, ensuring 100% wrinkle removal. Available in dead and live shaft type, mainly used in textile processing and finishing machines.',
      applications: 'Textile processing, fabric finishing, garment converting, inspection machines, lightweight film spreading.',
      specs: [
        { label: 'Barrel Material', val: 'Lightweight Pure Grade Aluminium Alloy' },
        { label: 'Scroll Variations', val: 'Round Wire Type and T-Type Precision Welded Scrolls' },
        { label: 'Spreading Effect', val: 'Center-to-ends outward continuous wrinkle spreading' },
        { label: 'Shaft Configuration', val: 'Dead Shaft and Live Shaft types available' },
        { label: 'Inertia Level', val: 'Low inertia for instant response without fabric dragging' }
      ]
    },

    // ==================== 7. MILD STEEL & INDUSTRIAL ROLLERS ====================
    'anti-deflection-roller': {
      title: 'Anti Deflection Roller',
      category: 'Mild Steel & Industrial Rollers',
      categorySlug: 'mild-steel',
      subtitle: 'Precision Cambered Anti-Bowing Industrial Roller',
      mainImg: 'assets/images/products/anti_deflection_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/anti_deflection_roller.webp', title: 'Anti Deflection Roller' },
        { src: 'assets/images/products/nip_roller.webp', title: 'Nip Roller' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Chrome Plated' },
        { src: 'assets/images/products/mild_steel_rollers.webp', title: 'MS Rollers Range' }
      ],
      desc: 'Engineered specifically to eliminate center sag and uneven web tension across wide industrial machines under heavy nip pressure. Precision crown / camber grinding maintains uniform contact pressure across the entire machine width, preventing web wrinkles, creasing, and uneven thickness.',
      applications: 'Paper mills, heavy film converting, continuous textile calendering, metal foil rolling, rubber mills, multi-ply lamination.',
      specs: [
        { label: 'Camber / Crown', val: 'Custom calculated profile based on operating load and nip force' },
        { label: 'Core Material', val: 'Heavy-Wall Seamless Carbon Steel / EN8 Shafts' },
        { label: 'Dynamic Balance', val: 'ISO 1940 Grade G2.5 dynamically balanced' },
        { label: 'Surface Finish', val: 'Precision ground or Hard Chrome Plated' },
        { label: 'Concentricity', val: '< 0.015 mm Total Indicator Reading' }
      ]
    },
    'nip-roller': {
      title: 'NIP Roller',
      category: 'Mild Steel & Industrial Rollers',
      categorySlug: 'mild-steel',
      subtitle: 'High-Pressure Pinch & Pull Traction Industrial Roller',
      mainImg: 'assets/images/products/nip_roller.webp',
      relatedImgs: [
        { src: 'assets/images/products/nip_roller.webp', title: 'NIP Roller Body' },
        { src: 'assets/images/products/anti_deflection_roller.webp', title: 'Anti Deflection' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Chrome Plated' },
        { src: 'assets/images/products/coated_rollers.webp', title: 'Elastomer Coated' }
      ],
      desc: 'Heavy-duty NIP (pinch/pull) roller engineered for positive web traction and uniform linear pressure without slippage. Precision turned journals, heavy rigid steel core, and optional elastomer or hard chrome coverings ensure constant nip contact and prevent air entrapment in laminated webs.',
      applications: 'Extrusion lamination, slitter rewinders, flexographic & rotogravure printing, paper coating, converting machines.',
      specs: [
        { label: 'Body Construction', val: 'Heavy-duty rigid MS body with induction-hardened stub shafts' },
        { label: 'Pressure Rating', val: 'Engineered for high pneumatic / hydraulic nip pressures' },
        { label: 'Surface Options', val: 'Ground Hard Chrome, Matt Finish, or Rubber / PU Coated' },
        { label: 'Concentricity', val: '< 0.015 mm Total Indicator Reading' }
      ]
    },
    'coated-rollers': {
      title: 'Coated Industrial Rollers (Rubber, PU, Teflon, Ebonite)',
      category: 'Coated Rollers',
      categorySlug: 'coated',
      subtitle: 'Rubber, Polyurethane, Teflon & Ebonite Covered Rollers',
      mainImg: 'assets/images/products/coated_rollers.webp',
      relatedImgs: [
        { src: 'assets/images/products/coated_rollers.webp', title: 'Coated Rollers Range' },
        { src: 'assets/images/products/nip_roller.webp', title: 'NIP Application' },
        { src: 'assets/images/products/standard_chrome_roller.webp', title: 'Hard Chrome' },
        { src: 'assets/images/products/mild_steel_rollers.webp', title: 'Core Assembly' }
      ],
      desc: 'High-performance coated rollers engineered for specialized industrial environments. Available coatings include Natural Rubber, Synthetic Nitrile/EPDM, Polyurethane (PU), Teflon (PTFE non-stick), and Ebonite Drum coatings. Provides superior chemical, acid, solvent, heat, and abrasion resistance.',
      applications: 'Offset printing, solvent coating, chemical processing tanks, textile dyeing, paper corrugation, laminating.',
      specs: [
        { label: 'Coating Materials', val: 'Natural Rubber, Nitrile, EPDM, Polyurethane (PU), Teflon (PTFE), Ebonite' },
        { label: 'Hardness Range', val: '25 Shore A to 85 Shore D' },
        { label: 'Chemical Immunity', val: 'Resistant to oils, acids, alkalis, solvents, and ozone' },
        { label: 'Core Shell', val: 'Heavy-duty MS / EN8 or SS Core with precision bonding layer' }
      ]
    }
  };

  // Extract ?product= slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  let slug = urlParams.get('product') || 'tsudakoma';
  slug = slug.toLowerCase().trim();

  // Alias map for similar or related IDs
  const slugAliases = {
    'sulzar': 'sulzer',
    'chrome': 'standard-chrome-roller',
    'chrome-roller': 'standard-chrome-roller',
    'standard-chrome': 'standard-chrome-roller',
    'hard-chrome': 'standard-chrome-roller',
    'mirror-chrome': 'mirror-chrome-roller',
    'matt-chrome': 'matt-chrome-roller',
    'cooling': 'ms-cooling-roller',
    'heating': 'steam-heating-roller',
    'steam-roller': 'steam-heating-roller',
    'jacketed': 'jacketed-cooling-roller',
    'ss-guide': 'ss-guide-roller',
    'ss-cladded': 'ss-cladded-roller',
    'ss-fluted': 'ss-fluted-roller',
    'ss-turned': 'ss-turned-roller',
    'ss-scroll': 'ss-scroll-roller',
    'aluminium-scroll': 'aluminium-scroll-roller',
    'aluminium-guide': 'aluminium-guide-roller',
    'aluminium-anodized': 'aluminium-anodized-roller',
    'aluminium-anodised': 'aluminium-anodized-roller',
    'batching': 'cladded-batching-trolly-roller',
    'batching-trolley': 'cladded-batching-trolly-roller',
    'anti-deflection': 'anti-deflection-roller',
    'ms-guide': 'anti-deflection-roller',
    'nip': 'nip-roller'
  };
  if (slugAliases[slug]) {
    slug = slugAliases[slug];
  }

  // If slug has full title or spaces, map to key
  if (!productDatabase[slug]) {
    for (const key in productDatabase) {
      if (slug.includes(key) || productDatabase[key].title.toLowerCase().includes(slug) || key.includes(slug)) {
        slug = key;
        break;
      }
    }
  }

  // Fallback to Tsudakoma if still not found
  const product = productDatabase[slug] || productDatabase['tsudakoma'];

  // 1. Update Page Title & Metadata
  document.title = `${product.title} | Technical Specs & Quote | Pragati Engineers`;

  // 2. Update Breadcrumbs
  const breadCat = document.getElementById('breadCategory');
  const breadProd = document.getElementById('breadProduct');
  if (breadCat) breadCat.innerText = product.category;
  if (breadProd) breadProd.innerText = product.title;

  // 3. Update Gallery Main Image & Badges
  const detailMainImg = document.getElementById('detailMainImg');
  const detailBadge = document.getElementById('detailBadge');
  const detailCatTag = document.getElementById('detailCatTag');
  const detailTitle = document.getElementById('detailTitle');
  const detailSubtitle = document.getElementById('detailSubtitle');
  const detailFullDesc = document.getElementById('detailFullDesc');
  const rfqProductTitle = document.getElementById('rfqProductTitle');
  const rfqHiddenProduct = document.getElementById('rfqHiddenProduct');

  if (detailMainImg) {
    detailMainImg.src = product.mainImg;
    detailMainImg.alt = product.title;
  }
  if (detailBadge) detailBadge.innerText = product.category;
  if (detailCatTag) detailCatTag.innerText = product.category;
  if (detailTitle) detailTitle.innerText = product.title;
  if (detailSubtitle) detailSubtitle.innerText = product.subtitle;
  if (detailFullDesc) detailFullDesc.innerText = product.desc;
  if (rfqProductTitle) rfqProductTitle.innerText = product.title;
  if (rfqHiddenProduct) rfqHiddenProduct.value = product.title;

  // Render Applications / Industries section (Client instruction: "Industry ke Application kari ne ak collum apjo for all rollers")
  const detailAppsBlock = document.getElementById('detailAppsBlock');
  if (detailAppsBlock && product.applications) {
    detailAppsBlock.innerHTML = `
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e3a8a; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-industry" style="color: var(--brand-red);"></i> Target Industries &amp; Applications:
        </h4>
        <p style="font-size: 0.92rem; color: #1e293b; margin: 0; line-height: 1.6;">
          ${product.applications}
        </p>
      </div>
    `;
  }

  // 4. Render Proper Related Thumbnail Images Underneath Main Image
  const thumbsContainer = document.getElementById('detailThumbsRow');
  if (thumbsContainer && product.relatedImgs) {
    thumbsContainer.innerHTML = '';
    product.relatedImgs.forEach((imgObj, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = `detail-thumb-item ${idx === 0 ? 'active' : ''}`;
      thumbBtn.setAttribute('aria-label', imgObj.title || `View ${idx + 1}`);

      thumbBtn.innerHTML = `
        <img src="${imgObj.src}" alt="${imgObj.title || product.title}">
        <span class="thumb-caption">${imgObj.title || `View ${idx + 1}`}</span>
      `;

      // Click to switch main image with smooth transition
      thumbBtn.addEventListener('click', () => {
        const allThumbs = thumbsContainer.querySelectorAll('.detail-thumb-item');
        allThumbs.forEach(t => t.classList.remove('active'));
        thumbBtn.classList.add('active');

        if (detailMainImg) {
          detailMainImg.style.opacity = '0.3';
          detailMainImg.style.transform = 'scale(0.96)';
          setTimeout(() => {
            detailMainImg.src = imgObj.src;
            detailMainImg.style.opacity = '1';
            detailMainImg.style.transform = 'scale(1)';
          }, 150);
        }
      });

      thumbsContainer.appendChild(thumbBtn);
    });
  }

  // 5. Render Technical Specifications Grid
  const specsGrid = document.getElementById('detailSpecsGrid');
  if (specsGrid && product.specs) {
    specsGrid.innerHTML = '';
    product.specs.forEach(s => {
      const row = document.createElement('div');
      row.className = 'spec-card-item';
      row.innerHTML = `
        <span class="spec-prop-label">${s.label}</span>
        <span class="spec-prop-val">${s.val}</span>
      `;
      specsGrid.appendChild(row);
    });
  }

  // Dynamic Checklist Features under description
  const featuresList = document.getElementById('detailFeaturesList');
  if (featuresList) {
    let bullets = [];
    if (product.categorySlug === 'looms') {
      bullets = [
        'Pure Grade Aluminium alloy body for lightweight, inertia-free take-up rotation.',
        'Controlled metal moulded cast bushes for tight fitment and superior strength.',
        'Dual-sided pulsing welding technology ensuring high structural joint integrity.',
        'Induction-hardened EN-8 grade gears with tight keyways matching OEM tolerances.'
      ];
    } else if (product.categorySlug === 'chrome') {
      bullets = [
        'Hard chrome plating up to 200 µm with hardness 60±2 HRC / 850-1000 HV.',
        'Precision cylindrical grinding accuracy within 0.02 mm Total Indicator Reading.',
        'Dynamically balanced for smooth, vibration-free web handling up to 600 m/min.',
        'Super mirror (Ra 0.05-0.1 µm) or uniform matt (Ra 0.4-1.2 µm) surface options.'
      ];
    } else if (product.categorySlug === 'cooling-heating') {
      bullets = [
        'Internal double-shell jacket or spiral baffle for uniform temperature distribution.',
        'High-efficiency heat transfer under continuous thermal operating conditions.',
        'Hydrostatically pressure tested heavy-duty shell for steam/oil safety.',
        'Computerized dynamic balancing ensuring zero web deflection at peak RPM.'
      ];
    } else if (product.categorySlug === 'ss-rollers') {
      bullets = [
        'High-grade AISI SS 304 L and SS 316 stainless steel construction.',
        '100% corrosion and rust resistance against dyes, steam, caustic soda, and acids.',
        'Ultra-smooth turned and polished surface preventing fabric snagging or creases.',
        'Available in live shaft or dead shaft with internal precision ball bearings.'
      ];
    } else if (product.categorySlug === 'aluminium') {
      bullets = [
        'Extruded 6061-T6 / 6082 aircraft-grade seamless aluminium alloy pipe.',
        'Ultra-low rotational inertia for instant acceleration without web dragging.',
        'Hard anodizing up to 50 µm for superior wear, abrasion, and scratch resistance.',
        'Non-marking, rust-proof, and electrically insulated for safe web guiding.'
      ];
    } else if (product.categorySlug === 'scroll') {
      bullets = [
        'Symmetrical outward spreading action from center to both edges for 100% wrinkle removal.',
        'Precision welded and polished Round Wire and T-Type Flat spiral scrolls.',
        'Maintains uniform fabric tension without marking delicate textiles.',
        'Available in live shaft or dead shaft configurations for textile machines.'
      ];
    } else {
      bullets = [
        'Calculated crown/camber profile preventing center sag and tension variations.',
        'Heavy-wall seamless pipe core with induction-hardened stub shaft journals.',
        'High load capacity for continuous high-pressure pneumatic/hydraulic nip.',
        'Dynamically balanced to ISO 1940 Grade G2.5 standard for zero-vibration.'
      ];
    }

    featuresList.innerHTML = bullets.map(b => `<div class="feature-bullet"><i class="fa-solid fa-circle-check"></i> ${b}</div>`).join('');
  }

  // 6. Update WhatsApp Direct Button with pre-filled product query
  const detailWaBtn = document.getElementById('detailWaBtn');
  if (detailWaBtn) {
    const waText = encodeURIComponent(
      `Hello Pragati Engineers, I visited your website and I am interested in ${product.title} (${product.category}). Please share official quotation, technical drawing, and delivery timeline.`
    );
    detailWaBtn.href = `https://api.whatsapp.com/send?phone=917405456380&text=${waText}`;
  }

  // 7. Render 3 Related Products in Spotlight Below
  const relatedGrid = document.getElementById('relatedCardsGrid');
  if (relatedGrid) {
    // Pick other products, prioritizing same category if available
    const sameCatKeys = Object.keys(productDatabase).filter(k => k !== slug && productDatabase[k].categorySlug === product.categorySlug);
    const otherCatKeys = Object.keys(productDatabase).filter(k => k !== slug && productDatabase[k].categorySlug !== product.categorySlug);
    const selectedKeys = [...sameCatKeys, ...otherCatKeys].slice(0, 3);

    relatedGrid.innerHTML = '';
    selectedKeys.forEach(k => {
      const p = productDatabase[k];
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-thumb">
          <span class="product-badge-cat">${p.category}</span>
          <img src="${p.mainImg}" alt="${p.title}">
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.subtitle}</p>
          <div class="product-actions">
            <a href="product-detail.html?product=${k}" class="btn btn-primary">
              <i class="fa-solid fa-eye"></i> View Details
            </a>
            <a href="https://api.whatsapp.com/send?phone=917405456380&text=Hello%20Pragati%20Engineers,%20I%20am%20interested%20in%20${encodeURIComponent(p.title)}" class="btn btn-outline" target="_blank">
              <i class="fa-brands fa-whatsapp"></i> Chat
            </a>
          </div>
        </div>
      `;
      relatedGrid.appendChild(card);
    });
  }

  // 8. Handle RFQ Form Submission
  const rfqForm = document.getElementById('detailRfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfqName')?.value || 'Valued Customer';
      const company = document.getElementById('rfqCompany')?.value || '';
      const phone = document.getElementById('rfqPhone')?.value || '';
      const width = document.getElementById('rfqLoomWidth')?.value || 'Standard';

      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Technical RFQ...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Quotation Request Received!`;
        submitBtn.style.background = '#10b981';

        setTimeout(() => {
          alert(`Thank you, ${name} (${company})!\nYour technical quote request for "${product.title}" has been successfully submitted.\nOur engineering team will review your specifications and contact you at ${phone} with technical drawings & quotation.`);
          rfqForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          submitBtn.style.background = '';
        }, 600);
      }, 1000);
    });
  }
});

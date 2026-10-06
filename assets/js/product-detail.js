/**
 * PRAGATI ENGINEERS - Product Detail Page JavaScript
 * Handles dynamic product loading from URL slug,
 * gallery thumbnail image switching underneath main image,
 * technical specs rendering, WhatsApp pre-filled chat, and RFQ form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Product Database
  const productDatabase = {
    // 1. LOOMS CLOTH ROLLS
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
        { src: 'assets/images/slider/studio_loom_rollers.webp', title: 'Plant Batch' }
      ],
      desc: 'Pragati Engineers manufactures heavy-duty, high-precision cloth take-up rolls specifically designed for Japanese Tsudakoma airjet looms (ZA205i, ZA209i, ZAX, ZAX-N, ZAX9100, ZAX9200) and waterjet looms (ZW408, ZW8100). Engineered with high-strength seamless aluminium alloy barrels and hardened steel journals to eliminate deflection and vibration at speeds exceeding 1000 RPM.',
      specs: [
        { label: 'Loom Width Range', val: '170 cm to 390 cm (Customizable to 400 cm)' },
        { label: 'Barrel Material', val: 'High-Tensile Aluminium Alloy / Seamless MS' },
        { label: 'Dynamic Balancing', val: 'Tested to ISO 1940 Grade G2.5 (< 0.01 mm Runout)' },
        { label: 'Surface Profile', val: 'CNC Longitudinal Fluted / Knurled / Diamond Grip' },
        { label: 'Drive Mechanism', val: 'High-Torque Hardened Key Slot / Splined End' },
        { label: 'Bearing Journals', val: 'Induction Hardened & Ground (Ra < 0.2 µm)' },
        { label: 'Compatible Looms', val: 'Tsudakoma ZA, ZAX, ZAX9100/9200, ZW Series' }
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
        { src: 'assets/images/slider/studio_tsudakoma_toyota.webp', title: 'Loom Series' }
      ],
      desc: 'Custom-manufactured cloth rolls for Toyota high-speed airjet weaving looms. Designed for maximum stiffness and zero deflection across wide reed widths up to 390 cm. Each roller undergoes rigorous dual-plane dynamic balancing to ensure smooth cloth winding without slippage or fabric creases.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 390 cm' },
        { label: 'Material Grade', val: 'High-Grade Seamless Aluminium / Carbon Steel' },
        { label: 'Dynamic Balancing', val: '100% Computerized Dual-Plane Tested' },
        { label: 'Concentricity Tolerance', val: '< 0.012 mm Total Indicator Reading (TIR)' },
        { label: 'Drive Shafts', val: 'Precision CNC Keyway Machining to OEM Specs' },
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
        { src: 'assets/images/slider/studio_picanol_itema.webp', title: 'OmniPlus Series' }
      ],
      desc: 'Built to meet stringent European standards for Picanol airjet and rapier weaving machines including OmniPlus 800, OmniPlus Summum, OptiMax-i, and TerryPlus. High-rigidity steel construction ensures uniform tension control and longevity in 24/7 continuous mill operation.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 380 cm' },
        { label: 'Material', val: 'Precision Drawn Seamless Steel / Aluminium' },
        { label: 'Runout Tolerance', val: '< 0.015 mm Maximum Runout' },
        { label: 'Assembly Method', val: 'Interference Shrink Fit + Precision Pinning' },
        { label: 'Drive Fitting', val: 'Hardened Splined & Keyed Shaft Ends' },
        { label: 'Machine Models', val: 'OmniPlus, OmniPlus Summum, OptiMax, TerryPlus' }
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
        { src: 'assets/images/slider/studio_picanol_itema.webp', title: 'Rapier Batch' }
      ],
      desc: 'Engineered specifically for Itema R9500 rapier and A9500 airjet looms. Manufactured with tight journal concentricity and high dynamic balance to ensure uniform fabric winding tension and long bearing life even at high pick insertion rates.',
      specs: [
        { label: 'Loom Width Range', val: '190 cm to 380 cm' },
        { label: 'Body Material', val: 'Precision Steel / Light Aluminium Core' },
        { label: 'Dynamic Balance', val: 'ISO 1940 Grade G2.5 Tested' },
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
        { src: 'assets/images/products/all.webp', title: 'Complete Line' }
      ],
      desc: 'Designed for high-speed waterjet looms weaving synthetic, polyester, and nylon filament fabrics. Built with corrosion-resistant aluminium or SS cladded tubes and water-sealed end journals to withstand wet environment operations.',
      specs: [
        { label: 'Loom Width', val: '150 cm to 360 cm' },
        { label: 'Corrosion Protection', val: 'Anodized Aluminium / Stainless Cladding' },
        { label: 'Water Sealing', val: 'Double Lip Oil Seals on Bearing Journals' },
        { label: 'Balancing Standard', val: 'Dynamically Balanced at 1200 RPM' }
      ]
    },
    'sulzer': {
      title: 'Sulzer Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Heavy-Duty Projectile & Rapier Loom Take-up Rollers for Sulzer Ruti',
      mainImg: 'assets/images/products/sulzar.webp',
      relatedImgs: [
        { src: 'assets/images/products/sulzar.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/sulzer_gear.webp', title: 'Spline Drive' },
        { src: 'assets/images/products/gallery/sulzer_surface.webp', title: 'Steel Barrel' },
        { src: 'assets/images/slider/studio_loom_rollers.webp', title: 'Heavy Line' }
      ],
      desc: 'Heavy-duty cloth rolls built for Sulzer projectile looms (PU, TW11, P7100, P7200, P7300) and G6200/G6300 rapier machines. Engineered to withstand high warp and fabric tension for heavy denim, industrial fabrics, and technical textiles.',
      specs: [
        { label: 'Loom Width', val: '220 cm to 430 cm (Heavy Widths)' },
        { label: 'Construction', val: 'Heavy Wall Seamless Carbon Steel Tube' },
        { label: 'Deflection Index', val: 'Ultra-low deflection under high cloth tension' },
        { label: 'Drive End', val: 'Sulzer Standard Heavy Spline / Flange Fitting' }
      ]
    },
    'somet': {
      title: 'Somet Cloth Roll',
      category: 'Looms Cloth Rolls',
      categorySlug: 'looms',
      subtitle: 'Precision Take-up Rolls for Somet Thema 11, Thema Super Excel & Mythos',
      mainImg: 'assets/images/products/somet.webp',
      relatedImgs: [
        { src: 'assets/images/products/somet.webp', title: 'Full Roller' },
        { src: 'assets/images/products/gallery/somet_gear.webp', title: 'Bearing Journal' },
        { src: 'assets/images/products/gallery/somet_surface.webp', title: 'Surface Profile' },
        { src: 'assets/images/facility/facility_plant.webp', title: 'Balancing Shop' }
      ],
      desc: 'High-reliability take-up cloth rollers manufactured for Somet rapier and airjet weaving looms. Smooth fabric take-up and precision journal fitting eliminate vibration and preserve uniform cloth density.',
      specs: [
        { label: 'Loom Width', val: '190 cm to 380 cm' },
        { label: 'Core Material', val: 'Seamless Aluminium / Steel Core' },
        { label: 'Concentricity', val: '< 0.015 mm TIR' },
        { label: 'Balancing', val: 'Dynamic Balancing Tested at Operating Speeds' }
      ]
    },

  };

  // Extract ?product= slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  let slug = urlParams.get('product') || 'tsudakoma';
  slug = slug.toLowerCase().trim();

  // Alias map for similar or related IDs
  const slugAliases = {
    'sulzar': 'sulzer'
  };
  if (slugAliases[slug]) {
    slug = slugAliases[slug];
  }

  // If slug has full title or spaces, map to key
  if (!productDatabase[slug]) {
    for (const key in productDatabase) {
      if (slug.includes(key) || productDatabase[key].title.toLowerCase().includes(slug)) {
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
    const otherKeys = Object.keys(productDatabase).filter(k => k !== slug).slice(0, 3);
    relatedGrid.innerHTML = '';
    otherKeys.forEach(k => {
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

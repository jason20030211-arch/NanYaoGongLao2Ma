/**
 * 社團法人台灣南瑤宮老二媽會官方網站 - 核心 JavaScript 互動控制器
 *
 * 包含：
 * 1. 社群媒體連結配置（使用者可在此直接修改網址）
 * 2. 導覽列滾動狀態與行動版選單切換
 * 3. 十大角信仰圈互動資料庫動態渲染與切換
 * 4. 進香/北管傳統文化分頁切換與模擬播放器
 * 5. 會員申請表單驗證與精美 Modal 提示
 * 6. 元素滾動淡入動畫 (Scroll Reveal)
 */

// ==========================================================================
// 1. 社群媒體連結配置 (User Customizable Social Links)
// ==========================================================================
const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/changhua2mazu",
    youtube: "http://www.youtube.com/@%E5%8D%97%E7%91%A4%E5%AE%AE%E8%80%81%E4%BA%8C%E5%AA%BD",
    instagram: "https://www.instagram.com/changhua2mazu",
    threads: "https://www.threads.com/@changhua2mazu"
};

// ==========================================================================
// 2. 十大角資料庫 (Ten Sections Database)
// ==========================================================================
const SECTIONS_DATA = [
    {
        id: "section-taichung",
        name: "臺中角",
        number: "一",
        region: "臺中市",
        leader: "林氏秀才後代與理事",
        size: "500人以上",
        subSections: ["樹子腳小角", "公館小角", "番仔路小角", "邱厝小角", "復興小角"],
        desc: "臺中角在老二媽會的歷史中具有至高無上的「發源地」地位，列為十大角之首。起會傳說是由臺中樹子腳林家（今南區工學里、樹義里一帶）的望族子孫林姓秀才發起，號召其旗下的佃農共同參與。早期的老二媽會總理林金柱、副總理林泉州、林昌、林榮洲等人，皆來自樹子腳林家，對南瑤宮重建與媽祖會管理有卓越貢獻。本角內部的公館、番仔路等小角歷史悠久，部分擁有專屬田產，世襲繼承之會員享有分紅權力，這也是維繫向心力的傳統機制。",
        censerTradition: "每逢壬年農曆八月迎老二媽正駕與聖爐回到台中角內遶境賜福。"
    },
    {
        id: "section-ch-east",
        name: "彰化東角",
        number: "二",
        region: "彰化縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["大竹小角", "番社口小角", "渡船頭小角", "山仔腳本角", "山腳頂角", "牛埔小角", "三庄小角"],
        desc: "彰化東角是由早期的「彰化角」拆分重組而來，服務範圍涵蓋大竹圍、阿夷莊、渡船頭等彰化市東側聚落。作為信仰中心南瑤宮所在的「地主角」之一，東角承載了極為密集的信眾基礎。旗下各個小角編制完整，設有董事負責擔任會員與總會間的訊息橋樑，確保會務在現代化運作下能順利推行。",
        censerTradition: "每逢癸年農曆八月迎老二媽正駕與聖爐回到彰化東角內遶境賜福。"
    },
    {
        id: "section-ch-south",
        name: "彰化南角",
        number: "三",
        region: "彰化縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["開基祖廟小角", "市仔尾小角", "阿夷莊角", "坑仔內角", "黑瑞窩角", "苦苓腳角", "下部角"],
        desc: "彰化南角同樣分立自早期彰化角，旗下包含極具傳奇歷史的「開基祖廟小角」（位於三民市場內）與「市仔尾小角」（古龍山）。開基祖廟小角每年農曆六月初一，會前往南瑤宮、天后宮迎請二媽，稱為「祖廟仔請二媽」。市仔尾小角則在六月初二於古龍山接駕老二媽，並擁有一頂為老二媽正駕量身訂做的專屬鑾轎。在921地震後，迎媽祖活動規模雖有縮減（如改以開車載轎代替步行），但傳統至今仍未中斷。",
        censerTradition: "每逢甲年農曆八月迎老二媽正駕與聖爐回到彰化南角內遶境賜福。"
    },
    {
        id: "section-nt-first",
        name: "南投第一區角",
        number: "四",
        region: "南投縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["半山小角", "新街小角", "牛食水小角", "茄苳腳小角", "牛運崛小角", "名間小角", "松柏嶺小角", "三塊厝小角"],
        desc: "此區角服務南投市中心及其周邊區域。最感人的變遷是「三塊厝小角」的復興。三塊厝小角原屬於已解散的南投第五區角，在1990年代因故解散。2025年，由已故董事後代與地方有志青年發起復角，重新召集會員，在南瑤宮老二媽與松柏嶺受天宮玄天上帝的見證下，重新加入老二媽會南投第一區角體系，將消失數十年的傳統信仰印記成功找回。",
        censerTradition: "每逢己年農曆八月迎老二媽正駕與聖爐回到南投第一區角內遶境賜福。"
    },
    {
        id: "section-nt-third",
        name: "南投第三區角",
        number: "五",
        region: "南投縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["永興小角", "樟普寮小角", "施厝坪小角", "崙尾小角"],
        desc: "涵蓋南投市山區（八卦山脈沿線聚落，如施厝坪、崙尾等地），地方祭祀能量極為活躍。本角會員對老二媽信仰展現高度的忠誠度，每年的迎聖爐遶境皆為山區各庄頭帶來鑼鼓喧天的熱鬧場面。",
        censerTradition: "每逢乙年農曆八月迎老二媽正駕與聖爐回到南投第三區角內遶境賜福。"
    },
    {
        id: "section-longyan",
        name: "龍眼林角",
        number: "六",
        region: "南投縣",
        leader: "謝建鋪 (副總理兼主委)",
        size: "500人以上",
        subSections: ["內城小角", "永和小角", "永芳小角", "清水小角", "龍安小角", "龍岩小角", "烏樹坑小角"],
        desc: "龍眼林角主要對應早期的「南投第四區角」，主要服務中寮鄉一帶。1999年921大地震對中寮鄉造成毀滅性打擊，大量會員退會流失，本角的「過大爐」與「吃會」活動曾面臨廢除危機。2008年起，由現任副總理謝建鋪接下主委職務，致力會務重建與會員重新招募，才成功復興。本角歷史上曾有會員身穿傳統「黃色大襖」與黑色布裙參與吃會的獨特文化特徵。",
        censerTradition: "每逢戊年農曆八月迎老二媽正駕與聖爐回到龍眼林角內遶境賜福。"
    },
    {
        id: "section-tsao-south",
        name: "草屯角",
        number: "七",
        region: "南投縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["復興小角", "山腳小角"],
        desc: "現今的草屯角主要是由早期的「草屯南角」演變而來。在1990年代調查中，草屯曾細分為東、南、北三大角。後隨會員變遷，簡化為草屯東角與草屯角。本角以草屯市區南側、林仔頭、山腳及北投埔一帶為核心，是草屯盆地老二媽信仰的重大支柱。",
        censerTradition: "每逢辛年農曆八月迎老二媽正駕與聖爐回到草屯角內遶境賜福。"
    },
    {
        id: "section-tsao-east",
        name: "草屯東角",
        number: "八",
        region: "南投縣",
        leader: "大角理事與小角董事",
        size: "500人以上",
        subSections: ["坪頂小角", "下城小角", "富寮庄小角", "水尾小角", "北勢湳小角", "坪頂城角"],
        desc: "草屯東角是老二媽會中最具傳奇神蹟的地區。相傳百年前草屯東側乾旱荒蕪，地方仕紳合力開鑿「龍泉圳」歷時兩年多，竣工前工程卻受阻。眾人恭請南瑤宮老二媽至圳頭開水路，二媽鑾轎一到，水路便神奇地順利開通。農田水利署草屯東角土城工作站感念此神蹟，至今每年農曆七月十五中元普度時，仍固定迎請老二媽與頂崁仔永和宮的輔信將軍蒞臨「鑑普」，將地方農業水利與宗教信仰深切融合。",
        censerTradition: "每逢丙年農曆八月迎老二媽正駕與聖爐回到草屯東角內遶境賜福。"
    },
    {
        id: "section-yl-north",
        name: "員林北角",
        number: "九",
        region: "彰化縣",
        leader: "大角理事與各小角董事",
        size: "500人以上",
        subSections: ["南東角", "西東角", "大峰角", "中東角", "東北角", "東南角", "興東山小角", "聖興角"],
        desc: "員林北角主要服務員林市北側及東山地區（中東里、東北里、南東里等），基層編制非常細緻，早期調查包含三塊厝、大崙坑、浮圳等地。目前北角下轄八個基層小角，董事們擔任著會員與大角理事、總會間的訊息橋樑，確保會內政令與招募活動能深入員林基層。",
        censerTradition: "每逢庚年農曆八月迎老二媽正駕與聖爐回到員林北角內遶境賜福。"
    },
    {
        id: "section-yl-south",
        name: "員林南角",
        number: "十",
        region: "彰化縣",
        leader: "大角理事與各小角董事",
        size: "500人以上",
        subSections: ["番子崙角", "出水角", "水源地角", "湖水角", "鳥樹腳角"],
        desc: "員林南角以員林市南側及山腳地帶传统聚落（如番仔崙、湖水坑、柴頭井、林厝、鳥樹腳）為核心。與員林當地的開發歷史與地緣關係深切結合。部分歷史悠久的小角擁有獨立的祭祀田產或公產利息，這些資源產生的利息至今仍是維持地方祭祀運作的重要財務來源。",
        censerTradition: "每逢丁年農曆八月迎老二媽正駕與聖爐回到員林南角內遶境賜福。"
    }
];

// ==========================================================================
// 3. Initialize App and Social Media Links
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initSocialLinks();
    initHeader();
    initMobileNav();
    initBeliefSection();
    initCultureTabs();
    initScrollReveal();
});

// Bind social links dynamically to elements
function initSocialLinks() {
    const fbLinks = document.querySelectorAll("#heroLinkFB, #footerLinkFB");
    const ytLinks = document.querySelectorAll("#heroLinkYT, #footerLinkYT");
    const igLinks = document.querySelectorAll("#heroLinkIG, #footerLinkIG");
    const thLinks = document.querySelectorAll("#heroLinkThreads, #footerLinkThreads");

    fbLinks.forEach(link => link.setAttribute("href", SOCIAL_LINKS.facebook));
    ytLinks.forEach(link => link.setAttribute("href", SOCIAL_LINKS.youtube));
    igLinks.forEach(link => link.setAttribute("href", SOCIAL_LINKS.instagram));
    thLinks.forEach(link => link.setAttribute("href", SOCIAL_LINKS.threads));
}

// ==========================================================================
// 4. Header & Navigation Logic
// ==========================================================================
function initHeader() {
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initMobileNav() {
    const toggle = document.getElementById("mobileNavToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        const icon = toggle.querySelector("i");
        if (menu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close menu when clicking links
    const links = menu.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            toggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}

// ==========================================================================
// 5. Belief Section (Ten Sections Explorer)
// ==========================================================================
function initBeliefSection() {
    const listContainer = document.getElementById("sectionsList");
    const detailCard = document.getElementById("sectionDetailCard");

    if (!listContainer || !detailCard) return;

    // Render list items
    listContainer.innerHTML = "";
    SECTIONS_DATA.forEach((sec, idx) => {
        const item = document.createElement("div");
        item.className = `section-item ${idx === 0 ? 'active' : ''}`;
        item.setAttribute("role", "tab");
        item.setAttribute("aria-selected", idx === 0 ? "true" : "false");
        item.setAttribute("id", `tab-${sec.id}`);
        item.setAttribute("data-sec-id", sec.id);

        item.innerHTML = `
            <div class="section-item-info">
                <span class="section-number">${sec.number}</span>
                <span class="section-name">${sec.name}</span>
            </div>
            <span class="section-region">${sec.region}</span>
        `;

        item.addEventListener("click", () => {
            // Remove active from others
            document.querySelectorAll(".section-item").forEach(el => {
                el.classList.remove("active");
                el.setAttribute("aria-selected", "false");
            });
            // Add active to this
            item.classList.add("active");
            item.setAttribute("aria-selected", "true");

            // Render details
            renderSectionDetails(sec);
        });

        listContainer.appendChild(item);
    });

    // Render initial details (first section - Taichung)
    renderSectionDetails(SECTIONS_DATA[0]);
}

function renderSectionDetails(sec) {
    const detailCard = document.getElementById("sectionDetailCard");
    if (!detailCard) return;

    // Smooth transition effect
    detailCard.style.opacity = "0";
    detailCard.style.transform = "translateY(10px)";

    setTimeout(() => {
        const subTags = sec.subSections.map(sub => `<span class="sub-section-tag">${sub}</span>`).join("");

        detailCard.innerHTML = `
            <div class="detail-header">
                <h3 class="detail-title">${sec.name}</h3>
                <div class="detail-meta">
                    <span><i class="fa-solid fa-map-location-dot"></i> ${sec.region}</span>
                    <span><i class="fa-solid fa-users"></i> ${sec.size}</span>
                </div>
            </div>
            
            <div class="detail-body">
                <h4 class="detail-section-title"><i class="fa-solid fa-diagram-project"></i> 轄下基層子組織 (小角)</h4>
                <div class="detail-sub-sections">
                    ${subTags}
                </div>
                
                <h4 class="detail-section-title"><i class="fa-solid fa-book-open"></i> 歷史背景與變遷</h4>
                <p class="detail-history">${sec.desc}</p>
            </div>
            
            <div class="detail-footer-traditions">
                <div class="tradition-item">
                    <h5 class="tradition-title"><i class="fa-solid fa-fire-burner"></i> 過大爐與遶境</h5>
                    <p class="tradition-desc">${sec.censerTradition}</p>
                </div>
            </div>
        `;

        detailCard.style.opacity = "1";
        detailCard.style.transform = "translateY(0)";
    }, 150);
}

// ==========================================================================
// 6. Culture Tabs (Pilgrimage vs Beiguan)
// ==========================================================================
function initCultureTabs() {
    const tabPilgrim = document.getElementById("tabBtnPilgrimage");
    const tabBeiguan = document.getElementById("tabBtnBeiguan");
    const contentPilgrim = document.getElementById("contentPilgrimage");
    const contentBeiguan = document.getElementById("contentBeiguan");

    if (!tabPilgrim || !tabBeiguan || !contentPilgrim || !contentBeiguan) return;

    tabPilgrim.addEventListener("click", () => {
        tabPilgrim.classList.add("active");
        tabPilgrim.setAttribute("aria-selected", "true");
        tabBeiguan.classList.remove("active");
        tabBeiguan.setAttribute("aria-selected", "false");

        contentPilgrim.classList.add("active");
        contentBeiguan.classList.remove("active");
    });

    tabBeiguan.addEventListener("click", () => {
        tabBeiguan.classList.add("active");
        tabBeiguan.setAttribute("aria-selected", "true");
        tabPilgrim.classList.remove("active");
        tabPilgrim.setAttribute("aria-selected", "false");

        contentBeiguan.classList.add("active");
        contentPilgrim.classList.remove("active");
    });
}




// Modal helper functions
function showModal(title, bodyHTML) {
    const modal = document.getElementById("detailModal");
    const mTitle = document.getElementById("modalTitle");
    const mBody = document.getElementById("modalBody");
    const closeBtn = document.getElementById("modalClose");

    if (!modal || !mTitle || !mBody || !closeBtn) return;

    mTitle.textContent = title;
    mBody.innerHTML = bodyHTML;
    modal.classList.add("active");

    const closeModal = () => {
        modal.classList.remove("active");
    };

    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}

// ==========================================================================
// 8. Scroll Reveal Animation Logic
// ==========================================================================
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150; // Trigger when element is 150px into viewport

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkReveal);
    // Initial check on load
    checkReveal();
}

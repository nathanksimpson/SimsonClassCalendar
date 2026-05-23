// How-to guide — English & Korean (standalone; no dependency on app.js)
(function () {
    const GUIDE = {
        en: {
            title: 'How to Use — Class Calendar Planner',
            intro: 'This app builds a term calendar for your classes: lesson days, holidays, deadlines, syllabus tables, and printouts. Follow the sections below in order when you are new.',
            sections: [
                {
                    heading: '1. Set up your term',
                    where: 'Top of the page — below the header buttons',
                    steps: [
                        'Enter a Calendar Name (e.g. Spring 2026 Term).',
                        'Choose Term Start Month — the first month shown on the calendar.',
                        'Choose Months to display (3–6 months).',
                        'The calendar grid updates automatically when you change these.'
                    ]
                },
                {
                    heading: '2. Add a class',
                    where: 'Header → + Add Class (blue button)',
                    steps: [
                        'Click + Add Class.',
                        'Enter Class name, then choose a Class type (built-in presets such as Debate, RC, GR, Write Right, Early Writers, Hand in Hand, and more). The type fills in typical lesson count and book — you can still edit every field.',
                        'Set Period (1 = first period) if several classes share the same day; lower numbers appear first on the calendar and in print.',
                        'Set level, grade, default book, and optional Books by month.',
                        'Set Start Date, term length (calendar months), and End Date.',
                        'Set Meeting days: check weekdays or use quick presets — MWF, Mon/Wed (월수), Wed/Fri (수금), Mon/Fri (월금), T/T (Tue/Thu), or Clear. Important: use the preset that matches your section (e.g. Wed/Fri for 수금, not MWF).',
                        'Set Total Lessons and optional compression, custom schedule, or syllabus units.',
                        'Click Save Class. Colored lesson bars appear on the calendar.'
                    ]
                },
                {
                    heading: '3. Add events (holidays, deadlines, etc.)',
                    where: 'Header → + Add Event',
                    steps: [
                        'Click + Add Event.',
                        'Pick Event type: Holiday, Evaluation deadline, Homework deadline, Evaluation period, or Other.',
                        'Enter name and date (or date range).',
                        'Choose Applies To: All Classes, or filter by Simson level, school band, grade, or specific class names.',
                        'Click Save Event. Events appear as chips or highlighted days on the calendar.'
                    ]
                },
                {
                    heading: '4. Import Korean public holidays',
                    where: 'Term row — Import Korean public holidays button (appears after term start is set)',
                    steps: [
                        'Set your term start month first.',
                        'Click Import Korean public holidays.',
                        'Confirm — holidays for your term are added from a public calendar (duplicates are skipped).',
                        'Requires an internet connection and works best when the app is opened through a local web server (not only file://).'
                    ]
                },
                {
                    heading: '5. Show or hide items on the calendar',
                    where: 'Show on calendar bar — checkboxes above the calendar grid',
                    steps: [
                        'Toggle Lessons, Holidays, Evaluation deadlines, Homework deadlines, Evaluation periods, or Other events.',
                        'This only changes what you see on screen; it re-draws the calendar.',
                        'Print uses separate options (see Print section below).'
                    ]
                },
                {
                    heading: '6. Filter which classes appear',
                    where: 'Show on calendar bar → Filter lessons…',
                    steps: [
                        'Click Filter lessons… to open the filter panel.',
                        'Check or uncheck classes by name, grade, level, class type, period, or default book. Use the search box to find classes quickly.',
                        'Use Select all, Clear all, or Reset filters as needed.',
                        'When a filter is active, only selected classes show on the calendar and in class-related print sections (class list, lesson schedule, syllabi). The button shows how many classes are visible.',
                        'This does not delete any data — it only hides classes from view and print.'
                    ]
                },
                {
                    heading: '7. View and edit from the calendar',
                    where: 'Main calendar grid',
                    steps: [
                        'Click a lesson bar to edit that class.',
                        'Click a holiday or event chip (or a holiday day) to edit that event.',
                        'Hover over a lesson bar to see a quick popup (level, grade, book, lesson label).'
                    ]
                },
                {
                    heading: '8. Switch language (English ↔ Korean)',
                    where: 'Header → language button (🌐)',
                    steps: [
                        'Click the language button to switch the whole app UI between English and Korean.',
                        'Your choice is remembered in this browser. The How to Use guide updates too if it is open.'
                    ]
                },
                {
                    heading: '9. Save a backup (Export) or load one (Import)',
                    where: 'Header → Export / Import',
                    steps: [
                        'Export downloads a .json file with all classes, events, settings, syllabus tables, and custom class types.',
                        'Import lets you pick a previously exported .json file to restore a calendar.',
                        'Use Export before clearing data or moving to another computer.'
                    ]
                },
                {
                    heading: '10. Syllabus table (pages and homework)',
                    where: 'Edit class → Syllabus table (below curriculum units)',
                    steps: [
                        'Open a class and set your schedule (meeting days, dates, lessons). Save the class first so the calendar is correct.',
                        'Step ① — Click Refresh from calendar. This builds one row per lesson with date, week, class #, and lesson title. Do this before filling page content.',
                        'Step ② — Add content using any of these (order can vary after refresh): Apply preset pages (from the class type PDF template), Fill pages from units (from syllabus units you entered above), or Import homework from paste (open the section, paste debate Day 1… blocks or RC Unit (1/2)… blocks, Preview match, then Apply to table).',
                        'Edit the Pages / detail and Note columns directly in the table. Use Add note row for extra rows without a lesson.',
                        'Click Save Class to store everything.',
                        'Click Print syllabus for this class only, or use Header → Print with Syllabus tables (per class) for all classes.',
                        'Tip: Refresh again after you change meeting days or the term schedule; existing page text is kept when possible.'
                    ]
                },
                {
                    heading: '11. Edit default class types',
                    where: 'Header → Edit defaults, or inside the class form → Edit defaults / New class type',
                    steps: [
                        'Click Edit defaults to change factory settings for built-in and PDF preset class types (lesson count, default book, labels, homework paste mode). Existing saved classes keep their own values; new classes use your edited defaults.',
                        'Use Reset on one type or Reset all to restore factory settings for presets.',
                        'Duplicate a preset to make a copy you can customize.',
                        'In the class form, click New class type to save your own reusable type (name, lesson count, meeting days). Delete type removes a custom type you created (not built-in presets).'
                    ]
                },
                {
                    heading: '12. Print or save as PDF',
                    where: 'Header → Print',
                    steps: [
                        'Click Print to open Print Options.',
                        'Choose whether to print the calendar grid, the summary page, and which summary sections (class list, events, lesson schedule, compression notes, syllabus tables).',
                        'If a lesson filter is active, only filtered classes appear in class-related sections.',
                        'Under “On printed calendar, show:” pick which event types appear on the printed calendar (independent from the on-screen visibility bar).',
                        'Click Print — your browser opens the print dialog. Choose Save as PDF to get a PDF file.',
                        'For syllabi only: uncheck Print Calendar and all summary sections except Syllabus tables (per class).'
                    ]
                },
                {
                    heading: '13. Clear all data',
                    where: 'Header → Clear All Data (red button)',
                    steps: [
                        'Removes all classes and events from this browser.',
                        'Export first if you might need the data later.'
                    ]
                }
            ]
        },
        ko: {
            title: '사용 방법 — Class Calendar Planner',
            intro: '이 앱은 학기 캘린더를 만듭니다. 수업일, 공휴일, 마감일, 강의 계획표, 인쇄까지 한곳에서 관리할 수 있습니다. 처음 사용할 때는 아래 순서대로 따라 하세요.',
            sections: [
                {
                    heading: '1. 학기 설정',
                    where: '페이지 상단 — 헤더 버튼 아래',
                    steps: [
                        '캘린더 이름을 입력하세요 (예: 2026 봄학기).',
                        '학기 시작 월을 선택하세요 — 캘린더에 표시되는 첫 달입니다.',
                        '표시할 개월 수를 선택하세요 (3~6개월).',
                        '값을 바꾸면 캘린더가 자동으로 다시 그려집니다.'
                    ]
                },
                {
                    heading: '2. 수업 추가',
                    where: '헤더 → + Add Class (파란 버튼)',
                    steps: [
                        '+ Add Class를 클릭하세요.',
                        '수업 이름을 입력한 뒤 Class type(수업 유형)을 선택하세요. Debate, RC, GR, Write Right, Early Writers, Hand in Hand 등 내장 프리셋이 일반적인 수업 횟수·교재를 채워 줍니다. 모든 항목은 그대로 수정할 수 있습니다.',
                        '같은 요일에 여러 수업이 있으면 Period(교시)를 설정하세요. 숫자가 작을수록 캘린더·인쇄에서 먼저 나옵니다 (1 = 1교시).',
                        '레벨, 학년, 기본 교재, 선택 사항인 월별 교재를 입력하세요.',
                        '시작일, 학기 개월 수, 종료일을 설정하세요.',
                        'Meeting days(수업 요일): 요일을 직접 선택하거나 빠른 설정 — MWF, 월수, 수금, 월금, 화·목(T/T), 지우기 — 를 사용하세요. 중요: 반 일정에 맞는 버튼을 쓰세요 (수금 반은 MWF가 아니라 수금).',
                        '총 수업 횟수와 선택 사항(압축, 사용자 지정 일정, syllabus 단원)을 설정하세요.',
                        'Save Class를 클릭하면 캘린더에 색상 수업 막대가 표시됩니다.'
                    ]
                },
                {
                    heading: '3. 이벤트 추가 (공휴일, 마감일 등)',
                    where: '헤더 → + Add Event',
                    steps: [
                        '+ Add Event를 클릭하세요.',
                        '이벤트 유형: 공휴일, 평가 마감, 숙제 마감, 평가 기간, 기타 중 선택.',
                        '이름과 날짜(또는 기간)를 입력하세요.',
                        '적용 대상: 전체 수업 또는 심슨 레벨, 학교 구분, 학년, 수업 이름으로 필터.',
                        'Save Event — 캘린더에 칩 또는 강조된 날로 표시됩니다.'
                    ]
                },
                {
                    heading: '4. 한국 공휴일 가져오기',
                    where: '학기 설정 줄 — 한국 공휴일 가져오기 버튼 (학기 시작 월 설정 후 표시)',
                    steps: [
                        '먼저 학기 시작 월을 설정하세요.',
                        '한국 공휴일 가져오기를 클릭하세요.',
                        '확인 — 해당 학기 공휴일이 공개 달력에서 추가됩니다 (중복은 건너뜀).',
                        '인터넷 연결이 필요하며, 로컬 웹 서버로 연 경우(파일만 여는 것보다) 가장 잘 동작합니다.'
                    ]
                },
                {
                    heading: '5. 캘린더에 표시할 항목',
                    where: 'Show on calendar — 캘린더 위 체크박스',
                    steps: [
                        '수업, 공휴일, 평가 마감, 숙제 마감, 평가 기간, 기타 이벤트를 켜거나 끕니다.',
                        '화면에 보이는 것만 바뀝니다. 캘린더가 다시 그려집니다.',
                        '인쇄는 별도 옵션을 사용합니다 (아래 인쇄 항목 참고).'
                    ]
                },
                {
                    heading: '6. 표시할 수업 필터',
                    where: 'Show on calendar 줄 → 수업 필터…',
                    steps: [
                        '수업 필터… 를 클릭해 패널을 엽니다.',
                        '수업 이름, 학년, 레벨, 수업 유형, 교시, 기본 교재별로 체크·해제합니다. 검색창으로 빠르게 찾을 수 있습니다.',
                        '전체 선택, 전체 해제, 필터 초기화를 사용할 수 있습니다.',
                        '필터가 켜져 있으면 선택한 수업만 캘린더와 수업 관련 인쇄(수업 목록, 수업 일정, 강의 계획표)에 나타납니다. 버튼에 표시되는 수업 개수를 확인하세요.',
                        '데이터를 삭제하지 않습니다 — 보기와 인쇄에서만 숨깁니다.'
                    ]
                },
                {
                    heading: '7. 캘린더에서 보기·수정',
                    where: '메인 캘린더',
                    steps: [
                        '수업 막대를 클릭하면 해당 수업을 수정할 수 있습니다.',
                        '공휴일·이벤트 칩(또는 공휴일 날짜)을 클릭하면 이벤트를 수정합니다.',
                        '수업 막대에 마우스를 올리면 레벨, 학년, 교재, 회차 팝업이 나타납니다.'
                    ]
                },
                {
                    heading: '8. 언어 전환 (영어 ↔ 한국어)',
                    where: '헤더 → 🌐 언어 버튼',
                    steps: [
                        '언어 버튼을 클릭하면 앱 전체 UI가 영어와 한국어로 바뀝니다.',
                        '선택한 언어는 이 브라우저에 저장됩니다. 사용 방법 창이 열려 있으면 함께 바뀝니다.'
                    ]
                },
                {
                    heading: '9. 백업 저장(보내기) / 불러오기(가져오기)',
                    where: '헤더 → Export / Import',
                    steps: [
                        'Export는 모든 수업, 이벤트, 설정, 강의 계획표, 사용자 정의 수업 유형이 담긴 .json 파일을 다운로드합니다.',
                        'Import는 이전에 보낸 .json 파일을 선택해 캘린더를 복원합니다.',
                        '데이터 삭제나 다른 PC로 옮기기 전에 Export 하세요.'
                    ]
                },
                {
                    heading: '10. 강의 계획표 (페이지·과제)',
                    where: '수업 편집 → 강의 계획표 (단원 목록 아래)',
                    steps: [
                        '수업을 열고 일정(수업 요일, 날짜, 회차)을 맞춘 뒤 Save Class로 저장하세요.',
                        '① 캘린더에서 새로고침 — 날짜, 주차, 회차, 수업 제목이 있는 행이 만들어집니다. 페이지 내용을 넣기 전에 먼저 하세요.',
                        '② 내용 추가(새로고침 후): 프리셋 페이지 적용(PDF 템플릿), 단원에서 페이지 채우기(위 단원 목록), 또는 과제 붙여넣기 가져오기(접기 섹션 열기 → Debate Day 블록·RC Unit (1/2) 블록 붙여넣기 → 매칭 미리보기 → 표에 적용).',
                        'Pages / detail, Note 열을 직접 수정하세요. 메모 행 추가로 수업 없는 행을 넣을 수 있습니다.',
                        'Save Class로 저장합니다.',
                        '강의 계획표 인쇄(이 수업만) 또는 헤더 Print → 강의 계획표 (수업별)로 전체 인쇄합니다.',
                        '팁: 수업 요일·학기 일정을 바꾼 뒤 다시 새로고침하세요. 가능하면 기존 페이지 내용이 유지됩니다.'
                    ]
                },
                {
                    heading: '11. 기본 수업 유형 편집',
                    where: '헤더 → Edit defaults, 또는 수업 폼 → Edit defaults / New class type',
                    steps: [
                        'Edit defaults로 내장·PDF 프리셋의 기본값(수업 횟수, 교재, 라벨, 과제 붙여넣기 모드)을 바꿉니다. 이미 저장된 수업은 그대로이고, 새로 만드는 수업에 적용됩니다.',
                        '한 유형 또는 전체 초기화로 공장 설정을 되돌릴 수 있습니다.',
                        '복제로 프리셋 사본을 만들어 수정할 수 있습니다.',
                        '수업 폼에서 New class type으로 나만의 유형을 저장(이름, 수업 횟수, 수업 요일). Delete type은 직접 만든 유형만 삭제합니다(내장 프리셋 아님).'
                    ]
                },
                {
                    heading: '12. 인쇄 또는 PDF 저장',
                    where: '헤더 → Print',
                    steps: [
                        'Print를 클릭하면 인쇄 옵션이 열립니다.',
                        '캘린더, 요약 페이지, 요약 항목(수업 목록, 이벤트, 수업 일정, 압축 메모, 강의 계획표)을 선택하세요.',
                        '수업 필터가 켜져 있으면 수업 관련 항목에는 필터된 수업만 포함됩니다.',
                        '“인쇄 캘린더에 표시:”에서 인쇄물에 나올 이벤트 유형을 고릅니다 (화면 표시 설정과 별개).',
                        'Print 클릭 → 브라우저 인쇄 창에서 PDF로 저장을 선택하면 PDF 파일을 만들 수 있습니다.',
                        '강의 계획표만: Print Calendar와 다른 요약 항목을 해제하고 강의 계획표 (수업별)만 선택하세요.'
                    ]
                },
                {
                    heading: '13. 모든 데이터 삭제',
                    where: '헤더 → Clear All Data (빨간 버튼)',
                    steps: [
                        '이 브라우저의 모든 수업과 이벤트를 삭제합니다.',
                        '나중에 필요할 수 있으면 먼저 Export 하세요.'
                    ]
                }
            ]
        }
    };

    const modal = document.getElementById('howToModal');
    const bodyEl = document.getElementById('howToBody');
    const titleEl = document.getElementById('howToTitle');
    const closeBtn = document.getElementById('closeHowToModal');

    if (!modal || !bodyEl || !titleEl) return;

    function renderGuide(lang) {
        const guide = GUIDE[lang] || GUIDE.en;
        titleEl.textContent = guide.title;
        bodyEl.innerHTML = `
            <p class="how-to-intro">${escapeHtml(guide.intro)}</p>
            ${guide.sections.map(section => `
                <section class="how-to-section">
                    <h3>${escapeHtml(section.heading)}</h3>
                    <p class="how-to-where"><span class="how-to-where-label">${lang === 'ko' ? '위치' : 'Where'}:</span> ${escapeHtml(section.where)}</p>
                    <ol class="how-to-steps">
                        ${section.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
                    </ol>
                </section>
            `).join('')}
        `;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function openHowTo(lang) {
        renderGuide(lang);
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        bodyEl.scrollTop = 0;
    }

    function closeHowTo() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    function getAppLanguage() {
        const saved = localStorage.getItem('calendarLanguage');
        return saved === 'ko' ? 'ko' : 'en';
    }

    document.getElementById('howToBtn')?.addEventListener('click', () => openHowTo(getAppLanguage()));

    document.addEventListener('calendarLanguageChanged', (e) => {
        if (modal.classList.contains('active') && e.detail && (e.detail.lang === 'en' || e.detail.lang === 'ko')) {
            renderGuide(e.detail.lang);
        }
    });
    closeBtn?.addEventListener('click', closeHowTo);

    modal.addEventListener('pointerdown', (e) => {
        modal._howToBackdrop = e.target === modal;
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal && modal._howToBackdrop) closeHowTo();
        modal._howToBackdrop = false;
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeHowTo();
        }
    });
})();

# 社團法人台灣南瑤宮老二媽會官方網站

這是 **社團法人台灣南瑤宮老二媽會** 的官方網站專案。本網站專案採用現代網頁設計與流暢的動態互動效果，完整呈現老二媽會兩百年的歷史文化傳承與數位社會服務轉型。

---

## 🌟 網頁功能特色

1. **頂級視覺美感與響應式設計**：
   - 採用黃金比例的色彩搭配（典雅紅、金色與深邃暗調背景），營造出莊嚴且具備現代美感的宮廟信仰網站。
   - 支援手機、平板、電腦等多端響應式版面切換。
2. **中彰投「十大角」信仰圈互動資料庫**：
   - 使用 JavaScript 動態渲染十大角（臺中角、彰化東角、彰化南角、南投第一/三區角、龍眼林角、草屯角、草屯東角、員林北/南角）的歷史沿革、轄下小角與遶境傳統。
3. **文化與儀式專題分頁**：
   - 包含「笨港進香（二媽伍）」與駕前北管曲館「梨芳園」之介紹，點擊即可流暢切換閱讀。
4. **數位轉型與社會關懷展示**：
   - 整合 Facebook、YouTube 與 Threads 官方社群平台之連結。
   - 模擬展示官方社群最新動態與天災警報發布等公共關懷功能。
5. **精美終身會員申請指南**：
   - 詳列老二媽會終身會員的入會福利（如贈送老二媽刺繡三角旗、專屬帽子、吃會權利等），引導年輕一代參與傳承。

---

## 📂 專案檔案結構

```text
老二媽網站/
│
├── index.html         # 網頁結構，包含各個區塊與 SEO 最佳化設定
├── style.css          # 視覺樣式表，包含自訂 CSS 變數、網頁佈局、微動畫與字型設定
├── script.js          # JavaScript 控制器，負責社群連結綁定、十大角資料渲染、分頁切換等
├── .gitignore         # Git 忽略設定檔（排除作業系統與編輯器產生的暫存檔）
│
└── assets/
    └── images/        # 網站靜態影像檔案
        ├── 01.jpg            # 進香遶境現場照片
        ├── 02.jpg            # 駕前曲館黎芳園祝壽照片
        ├── hero_temple.png   # 首頁主視覺大圖
        └── mazu_procession.png # 進香背景大圖
```

---

## 🚀 如何上傳與部署到 GitHub / GitHub Pages

本專案為純前端網頁（HTML / CSS / JavaScript），適合透過免費的 **GitHub Pages** 直接部署上線。

### 方法一：透過 GitHub 網頁版直接上傳（免安裝 Git）

如果您的電腦上尚未安裝 Git 工具，可以直接在瀏覽器上進行：

1. 登入 [GitHub 官網](https://github.com/)，點選右上角的 **New** 按鈕建立新儲存庫（Repository）。
2. 輸入儲存庫名稱（例如：`lao-er-mazu-website`），將權限設為 **Public**（公開），然後點選 **Create repository**。
3. 進入新建的儲存庫頁面，找到並點選 **"uploading an existing file"**（上傳現有檔案）連結。
4. 將本資料夾內的所有檔案與資料夾（包括 `index.html`、`style.css`、`script.js`、`.gitignore`、`README.md` 以及整個 `assets` 資料夾）**拖曳** 到網頁中。
5. 等待檔案上傳完畢後，在下方 Commit message 輸入 `Initial commit`，然後點選 **Commit changes**。
6. **啟用網站部署**：
   - 進入該儲存庫的 **Settings** -> 左側選單選 **Pages**。
   - 在 **Build and deployment** 下的 **Branch** 選擇 `main`（或 `master`），資料夾維持 `/ (root)`，點選 **Save**。
   - 等待約 1 到 2 分鐘後重新整理頁面，頂部會顯示您的專屬網站網址（格式為 `https://<您的帳號>.github.io/lao-er-mazu-website/`）。

---

### 方法二：使用 Git 指令上傳（適合已安裝 Git 的系統）

若您已安裝 Git，可在終端機（PowerShell 或 Git Bash）執行以下指令：

```bash
# 1. 在此專案資料夾下初始化 Git
git init

# 2. 將所有檔案加入暫存區
git add .

# 3. 提交檔案到本地儲存庫
git commit -m "Initial commit"

# 4. 建立並切換至 main 分支
git branch -M main

# 5. 關聯到您的 GitHub 遠端儲存庫（請將 <YOUR_USERNAME> 和 <REPO_NAME> 替換為您的 GitHub 帳號與儲存庫名稱）
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git

# 6. 推送至 GitHub 遠端儲存庫
git push -u origin main
```

推送成功後，同樣前往 GitHub 該儲存庫的 **Settings** -> **Pages**，將 Branch 設定為 `main` 分支並點選 **Save**，即可完成部署。

---

## 🛠️ 開發與維護建議

- **更換社群連結**：
  若要更新 Facebook、YouTube、Instagram 或 Threads 的粉專網址，請直接編輯 `script.js` 頂部的 `SOCIAL_LINKS` 物件常數，網頁會自動同步更新所有位置的連結。
- **更換圖片**：
  直接將新的圖片放入 `assets/images/` 資料夾中，並在 `index.html` 或 `style.css` 中修正對應的檔名。

---

## 📜 版權聲明
© 2026 社團法人台灣南瑤宮老二媽會 版權所有。中華民國立案社團法人登記編號：2010內政部立案。

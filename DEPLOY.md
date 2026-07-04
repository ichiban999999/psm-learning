# PSM I 學習系統部署指南

## 方案一：GitHub Pages（推薦）

### 前置準備
1. 註冊 GitHub 帳號：https://github.com/signup
2. 安裝 Git：https://git-scm.com/download/win

### 部署步驟

#### 步驟 1：建立 GitHub 倉庫
1. 登入 GitHub
2. 點擊右上角 "+" → "New repository"
3. 倉庫名稱：`psm-i-learning`（或其他你想要的名字）
4. 設定為 Public
5. 點擊 "Create repository"

#### 步驟 2：上傳檔案
方法 A - 使用網頁上傳：
1. 點擊 "uploading an existing file"
2. 將 `PSM_I_Learning` 資料夾中的所有檔案拖入
3. 點擊 "Commit changes"

方法 B - 使用 Git 命令：
```bash
# 在桌面開啟命令提示字元
cd C:\Users\88698\Desktop
mkdir psm-i-learning
move PSM_I_Learning\*.html psm-i-learning\
move PSM_I_Learning\*.css psm-i-learning\
move PSM_I_Learning\*.js psm-i-learning\
cd psm-i-learning
git init
git add *.html *.css *.js
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/psm-i-learning.git
git push -u origin main
```

#### 步驟 3：啟用 GitHub Pages
1. 進入倉庫 → "Settings" 標籤
2. 左側選單找到 "Pages"
3. Source 選擇 "main" 分支
4. 點擊 "Save"
5. 等待 1-2 分鐘後，訪問：`https://YOUR_USERNAME.github.io/psm-i-learning/`

---

## 方案二：Netlify（最簡單，拖拉即可）

### 部署步驟

#### 步驟 1：準備檔案
1. 將 `PSM_I_Learning` 資料夾中的所有檔案壓縮成 `.zip` 檔案

#### 步驟 2：註冊 Netlify
1. 訪問：https://www.netlify.com/
2. 點擊 "Sign up" 註冊帳號（可用 GitHub 帳號登入）

#### 步驟 3：上傳部署
1. 登入後進入 Dashboard
2. 點擊 "Add new site" → "Deploy manually"
3. 上傳你剛才壓縮的 `.zip` 檔案
4. 等待幾秒鐘，系統會自動部署
5. 你會獲得一個隨機網域，如：`https://xxx.netlify.app/`
6. （可選）在 "Site settings" → "Change site name" 自訂網域

---

## 方案三：Vercel

### 部署步驟
1. 訪問：https://vercel.com/
2. 用 GitHub 帳號登入
3. 點擊 "New Project"
4. 上傳 `PSM_I_Learning` 資料夾
5. 點擊 "Deploy"
6. 獲得網域：`https://your-project.vercel.app/`

---

## 部署後的學習方式

部署到線上後，你可以在任何裝置上學習：
- 📱 手機瀏覽器
- 💻 電腦瀏覽器
- 📟 平板電腦

只需訪問你的網域即可，所有學習進度會保存在瀏覽器 localStorage 中。

---

## 自訂網域（可選）

如果你想擁有自己的網域（如 `learn.psm-i.com`）：
1. 購買網域（推薦：Namecheap、GoDaddy）
2. 在 Netlify/Vercel 中添加自訂網域
3. 修改 DNS 記錄指向 hosting 平台

---

## 建議

對於初學者，**Netlify 方案最簡單**，只需：
1. 壓縮檔案
2. 註冊 Netlify
3. 拖拉上傳
4. 完成！

整個過程不超過 5 分鐘。
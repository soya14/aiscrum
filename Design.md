# Design System — AI Scrum Team 活動規劃 2026

> 本文件記錄 `index.html` 的完整設計語言，作為後續頁面開發與維護的規範基準。

---

## 一、Color System（色彩系統）

所有顏色以 CSS Custom Properties（`--variable`）定義，統一管理於 `:root`。

### 基底色

| Token | Hex | 用途 |
|-------|-----|------|
| `--white` | `#ffffff` | 卡片背景、純白區塊 |
| `--bg` | `#f7f6f3` | 頁面主背景（米白） |
| `--bg2` | `#eeecea` | 次級背景、hover 狀態、tag 背景 |

### 文字色

| Token | Hex | 用途 |
|-------|-----|------|
| `--ink` | `#1a1a1a` | 主要正文、標題 |
| `--ink-mid` | `#555555` | 次要正文、說明文字 |
| `--ink-light` | `#8a8a8a` | 輔助文字、label、佔位文字 |

### 主色（綠）

| Token | Hex | 用途 |
|-------|-----|------|
| `--accent` | `#00704a` | 主要品牌色、CTA、active 狀態、底線 |
| `--accent-light` | `#e8f5ef` | 主色淺版，用於 hover 背景、badge |

### 輔色（深藍）

| Token | Hex | 用途 |
|-------|-----|------|
| `--accent2` | `#1a3f5c` | 表格標題列、Hero 漸層中段 |
| `--accent2-light` | `#e8f0f6` | 深藍淺版，備用 |

### 警示色（橘）

| Token | Hex | 用途 |
|-------|-----|------|
| `--warn` | `#b85c00` | 警告文字、非工程角色標記 |
| `--warn-light` | `#fdf0e6` | 警示背景 |

### 紫色系

| Token | Hex | 用途 |
|-------|-----|------|
| `--purple` | `#5b3f8c` | 教育訓練區塊、訓練課程序號 |
| `--purple-light` | `#f0ebf8` | 紫色淺版背景 |

### 結構色

| Token | Value | 用途 |
|-------|-------|------|
| `--border` | `rgba(0,0,0,0.08)` | 邊框線、分隔線 |

### Hero 漸層

```css
background: linear-gradient(135deg, #0d2b3e 0%, #1a3f5c 50%, #164d35 100%);
```

疊加兩層 radial-gradient 光暈：
- 右上角綠色光暈：`rgba(0,112,74,0.3)`
- 左下角紫色光暈：`rgba(91,63,140,0.2)`

### Badge / Status 色（Component 層級）

| Class | Background | Text |
|-------|-----------|------|
| `.badge-launch` | `#dcfce7` | `#166534` |
| `.badge-tool` | `#dbeafe` | `#1e40af` |
| `.badge-req` | `#fef9c3` | `#854d0e` |
| `.badge-mile` | `#fce7f3` | `#831843` |
| `.badge-train` | `var(--purple-light)` | `var(--purple)` |

### RACI 色

| Class | Background | Text |
|-------|-----------|------|
| `.raci-R` | `#dcfce7` | `#166534` |
| `.raci-A` | `#fee2e2` | `#991b1b` |
| `.raci-C` | `#dbeafe` | `#1e40af` |
| `.raci-I` | `#f3f4f6` | `#6b7280` |
| `.raci-RA` | `linear-gradient(90deg,#dcfce7,#fee2e2)` | `#374151` |

---

## 二、Typography（字體系統）

### 字族

| 字族 | 用途 | Weights |
|------|------|---------|
| `Noto Sans TC` | 主要 body 字型（繁中） | 300, 400, 500, 700 |
| `DM Serif Display` | 大標題、Section Title | 400 (italic 支援) |
| `Space Mono` | 數字、label、badge、monospace 區塊 | 400, 700 |

載入方式：Google Fonts（`preconnect` 優化）

### 字階

| 層級 | 元素 | 字型 | 大小 | Weight |
|------|------|------|------|--------|
| Display | `.hero h1` | DM Serif Display | `clamp(36px, 6vw, 72px)` | 400 |
| Hero Sub | `.hero-sub` | Noto Sans TC | `clamp(14px, 2vw, 18px)` | 400 |
| Hero Stat | `.num` | Space Mono | `28px` | 700 |
| Section Title | `.section-title` | DM Serif Display | `32px` | 400 |
| Card Title | `.card-type` / `.train-title` | Noto Sans TC | `13–15px` | 700 |
| Body | `body` | Noto Sans TC | 瀏覽器預設（約 16px） | 400 |
| Small / Label | `.ms-month`, `.info-block h4` | Space Mono | `10–12px` | 400–700 |
| Caption | `.check-text`, `.train-desc` | Noto Sans TC | `13–14px` | 400 |

### 特殊排版規則

- Hero h1 斜體強調色：`color: #86efac`（亮綠）
- 小型全大寫 label：`text-transform: uppercase; letter-spacing: 0.08–0.1em`
- 行高：body `1.6–1.7`，標題 `1.1`

---

## 三、Spacing & Layout（間距與版型）

### 圓角

| Token | Value | 用途 |
|-------|-------|------|
| `--radius` | `16px` | 卡片、主要容器 |
| `--radius-sm` | `8px` | 小元件、訓練卡片、icon box |

其他出現值：`4px`（小 badge）、`6px`（check-item）、`12px`（train-num）、`100px`（pill/全圓）

### 陰影

| Token | Value | 用途 |
|-------|-------|------|
| `--shadow` | `0 4px 24px rgba(0,0,0,0.06)` | 卡片預設狀態 |
| `--shadow-hover` | `0 8px 40px rgba(0,0,0,0.12)` | hover 浮起效果 |

### 最大寬度

```css
max-width: 1100px;
margin: 0 auto;
```

全站內容統一限寬 1100px，左右邊距 `5vw`。

### 主要間距

| 區域 | 值 |
|------|----|
| Hero padding | `80px 5vw 60px` |
| Main padding | `48px 5vw 80px` |
| Section 下方間距 | `36–48px` |
| 卡片內 padding | `20–28px` |
| Grid gap（月份卡片） | `20px` |
| Grid gap（訓練卡片） | `16px` |
| Timeline gap | `2px`（緊密排列） |

---

## 四、Components（元件規格）

### 4.1 Hero

- 深色漸層背景 + 網格紋路疊層（`rgba(255,255,255,0.04)`，40px grid）
- Badge：全圓角、半透明白底、小點 pulse 動畫（`#4ade80`）
- Stats 統計列：`Space Mono` 數字，細分隔線 `rgba(255,255,255,0.15)`

### 4.2 Sticky Nav

- `position: sticky; top: 0; z-index: 100`
- `backdrop-filter: blur(12px)` + 半透明 `--bg`（`0.92` 透明度）
- Active tab：`color: var(--accent)` + `border-bottom: 2px solid var(--accent)`

### 4.3 Milestone Timeline

- CSS Grid：`repeat(auto-fit, minmax(140px, 1fr))`
- 格線縫 `2px`，overflow hidden 達到無縫外框
- Active / hover：底部 3px accent 色條（`transform: scaleX`動畫）

### 4.4 Activity Card（accordion）

- 預設 `box-shadow: var(--shadow)`，hover 升級 `--shadow-hover`
- Card header `cursor: pointer`，展開後 chevron 旋轉 180°
- Info grid：2 欄 `1fr 1fr`，手機版降為 1 欄（`max-width: 600px`）
- Role pill：圓角 100px、`--accent-light` 背景

### 4.5 Checklist

- 進度條：高 6px，`--accent` 填色，`transition: width 0.4s`
- Checkbox：20×20px，`border-radius: 4px`，勾選後 `--accent` 填滿
- 已勾選文字：`text-decoration: line-through; color: var(--ink-light)`

### 4.6 RACI Table

- 表頭：`--accent2` 背景，第一欄 `#0d2b3e`（更深）
- Cell：置中對齊，hover row 變 `--bg`
- RACI pill：`Space Mono`，各角色有對應色（詳見 Color System）

### 4.7 Training Card

- 2 欄 grid：`48px 1fr`（序號 icon + 內容）
- 序號 box：48×48px，`border-radius: 12px`，`--purple-light` 背景
- Who tag：`border-radius: 100px`，`--bg2` 背景

### 4.8 Footer

- `Space Mono`，12px，`--ink-light`
- 上方 `border-top: 1px solid var(--border)`

---

## 五、Animation（動畫）

### Keyframes

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
```

### Stagger 延遲

| Class | delay |
|-------|-------|
| `.stagger-1` | 0.05s |
| `.stagger-2` | 0.12s |
| `.stagger-3` | 0.19s |
| `.stagger-4` | 0.26s |
| `.stagger-5` | 0.33s |
| `.stagger-6` | 0.40s |

### Transition 規則

| 元件 | 屬性 | 時長 |
|------|------|------|
| Activity Card hover | `box-shadow` | `0.25s` |
| Milestone card 底線 | `transform: scaleX` | `0.3s` |
| Tab hover / active | `all` | `0.2s` |
| Chevron rotate | `transform` | `0.25s` |
| Checkbox fill | `all` | `0.2s` |
| Progress bar | `width` | `0.4s` |

---

## 六、Responsive（響應式）

| Breakpoint | 規則 |
|-----------|------|
| `max-width: 768px` | Hero padding 縮減；Timeline 改固定 4 欄 140px，啟用橫向捲動 |
| `max-width: 600px` | Activity Card info-grid 改單欄 |

Tab bar 與 Milestone Timeline 均設定 `overflow-x: auto; scrollbar-width: none` 支援手機橫滑。

---

## 七、Design Tokens 快速參考

```css
:root {
  /* Color */
  --white:         #ffffff;
  --bg:            #f7f6f3;
  --bg2:           #eeecea;
  --ink:           #1a1a1a;
  --ink-mid:       #555555;
  --ink-light:     #8a8a8a;
  --accent:        #00704a;
  --accent-light:  #e8f5ef;
  --accent2:       #1a3f5c;
  --accent2-light: #e8f0f6;
  --warn:          #b85c00;
  --warn-light:    #fdf0e6;
  --purple:        #5b3f8c;
  --purple-light:  #f0ebf8;
  --border:        rgba(0,0,0,0.08);

  /* Shadow */
  --shadow:        0 4px 24px rgba(0,0,0,0.06);
  --shadow-hover:  0 8px 40px rgba(0,0,0,0.12);

  /* Radius */
  --radius:    16px;
  --radius-sm: 8px;
}
```

---

*Design.md v1.0 — 由 index.html 樣式反向萃取 | AI Scrum Team | 2026/05/10*

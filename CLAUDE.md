# AI Scrum Team — Project Instructions

## Design System

**所有 UI、前端、樣式相關的工作，必須以 `Design.md` 作為唯一設計規範來源。**

在進行任何以下操作之前，先讀取 `Design.md`：
- 新增或修改 HTML / CSS
- 選用顏色、字型、間距、圓角、陰影
- 設計新元件或修改現有元件
- 撰寫 inline style 或 CSS 變數

### 設計規範摘要（來自 Design.md）

| 項目 | 規範 |
|------|------|
| 設計系統 | Visitors — Analytical canvas vibrant spectrum |
| 主題 | light |
| 唯一字族 | OpenRunde（fallback: system-ui, sans-serif） |
| 主品牌色 | `#918df6` Radiant Violet |
| 主文字色 | `#181925` Slate Ink |
| 頁面背景 | `#ffffff` Canvas White |
| 邊框色 | `#e8e8e8` Light Gray |
| 最小圓角 | 8px（禁止直角） |
| 按鈕圓角 | 9999px（pill） |
| 卡片圓角 | 16px |
| 間距基底 | 4px |
| Section gap | 64px |

### 禁止事項

- 不引入 Design.md 未定義的新字族
- 不在大面積背景使用飽和色
- 不使用濃重不透明陰影（只用 `--shadow-subtle` 系列）
- 大字級不使用預設 `letter-spacing: normal`，必須套用 Design.md 指定的負值
- 不使用直角（0px border-radius）於任何互動元件或卡片

## 專案概覽

**AI Scrum Team 活動規劃 2026** — 單頁靜態網站，記錄 2026 年 4–10 月的六個月 AI Scrum 協作路徑圖。

### 檔案結構

```
/
├── index.html     # 主頁面（含所有 CSS 與 JS）
├── aimember.md    # O大 AI 成員提案說明（v3.1）
├── Design.md      # 設計系統規範（Visitors reference）
└── CLAUDE.md      # 本檔案
```

### 技術規格

- 純靜態 HTML/CSS/JS，無框架依賴
- 所有樣式以 CSS Custom Properties（`:root` 變數）管理
- 響應式：768px（平板）、600px（手機）兩個斷點
- 字型透過 Google Fonts 載入

### 開發原則

- 不引入 npm 套件或 build 工具
- 直接編輯 `index.html`，保持單一檔案
- 新增樣式優先使用 Design.md 的 token，不自行定義新顏色

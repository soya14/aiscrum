# Design System — AI Scrum Team 活動規劃 2026

> **Reference:** Visitors — Analytical canvas vibrant spectrum (`e7876363-181a-44a9-9e5c-2255cf98aea5`)
> **Theme:** light

本系統採用清晰、分析感的美學，搭配活潑的漸層紫色作為主品牌色，以豐富的次要強調色點綴。大量留白與消色背景搭配鮮明的互動元件，圓角設計貫穿全站，呈現輕盈而精準的視覺語言。

---

## 一、Color System（色彩系統）

### 完整色彩 Token

| Name | Value | Token | 用途 |
|------|-------|-------|------|
| Canvas White | `#ffffff` | `--color-canvas-white` | 頁面背景、卡片表面、Ghost Button 背景 |
| Slate Ink | `#181925` | `--color-slate-ink` | 主要文字、顯眼標題、強邊框 |
| Medium Gray | `#666666` | `--color-medium-gray` | 內文、次要標題、預設 icon 色 |
| Muted Gray | `#999999` | `--color-muted-gray` | 輔助文字、helper text、未啟用導覽、分隔線 |
| Light Gray | `#e8e8e8` | `--color-light-gray` | 細邊框、表格分隔、Ghost Button 邊框 |
| Whisper Purple | `#dad9fc` | `--color-whisper-purple` | 細微高亮、裝飾性邊框、背景強調 |
| Radiant Violet | `#918df6` | `--color-radiant-violet` | **主要行動按鈕背景**、互動指示器、品牌 icon 強調色 |
| Electric Blue | `linear-gradient(to right in oklab, rgb(44,120,252) 0%, rgb(145,141,246) 100%)` | `--color-electric-blue` | 輪廓行動邊框、連結 label、裝飾背景漸層 |
| Success Green | `#33c758` | `--color-success-green` | 標籤輪廓、分隔線裝飾（非狀態色） |
| Warning Yellow | `#ffa600` | `--color-warning-yellow` | icon 裝飾、小型圖形細節（非狀態色） |
| Accent Pink | `#d6409f` | `--color-accent-pink` | 裝飾性 icon、次要品牌強調 |
| Pale Mint | `#def6e4` | `--color-pale-mint` | 柔和區塊背景、替代表面、靜態卡片填色 |
| Deep Purple | `#9580ff` | `--color-deep-purple` | 強調按鈕、互動元素（品牌紫較深版） |
| Vivid Orange | `#ff3e00` | `--color-vivid-orange` | 裝飾 SVG 填色、次要點綴 |

### 快速對照

```
text:           #181925
background:     #ffffff
border:         #e8e8e8
accent:         #918df6
primary action: #918df6 (filled)
```

---

## 二、Surfaces（表面層級）

| Level | Name | Value | 用途 |
|-------|------|-------|------|
| 0 | Canvas White | `#ffffff` | 基礎頁面背景 |
| 1 | Subtle Accent | `#fafafa` | 略帶灰白的區塊、卡片背景 |
| 2 | Light Card | `rgba(0,0,0,0.03)` | 視覺重量極低的卡片背景 |
| 3 | Pale Mint Overlay | `#def6e4` | 特定內容區塊的成功/高亮背景 |

---

## 三、Typography（字體系統）

### 字族

**OpenRunde** — 唯一字族，用於所有 UI 元素、標題與內文。精緻的字距搭配緊湊度量，強化分析感又現代的介面氣質。

```css
--font-openrunde: 'OpenRunde', ui-sans-serif, system-ui, -apple-system,
                  BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

- **Substitute:** `system-ui, sans-serif`
- **Weights:** 400, 500, 600, 700

### 字階

| Role | Token | Size | Line Height | Letter Spacing |
|------|-------|------|-------------|----------------|
| caption | `--text-caption` | 12px | 1.56 | -0.05px |
| body | `--text-body` | 14px | 1.43 | -0.025px |
| heading-sm | `--text-heading-sm` | 18px | 1.33 | -0.02px |
| heading | `--text-heading` | 20px | 1.22 | -0.018px |
| heading-lg | `--text-heading-lg` | 24px | 1.17 | -0.017px |
| display | `--text-display` | 48px | 1.13 | -0.013px |

> 大字級必須套用負值 letter-spacing；顯示級別（48px）使用 `-0.013px`，caption（12px）使用 `-0.05px`。

---

## 四、Spacing & Layout（間距與版型）

### Spacing Scale（基底單位：4px）

| Token | Value |
|-------|-------|
| `--spacing-4` | 4px |
| `--spacing-8` | 8px |
| `--spacing-12` | 12px |
| `--spacing-16` | 16px |
| `--spacing-20` | 20px |
| `--spacing-24` | 24px |
| `--spacing-32` | 32px |
| `--spacing-48` | 48px |
| `--spacing-64` | 64px |

### Layout

| 屬性 | 值 |
|------|----|
| 最大寬度 | ~1200px，水平置中 |
| Section gap | 64px |
| Card padding | 16px |
| Element gap | 16px |

---

## 五、Border Radius（圓角）

| 名稱 | Token | Value | 用途 |
|------|-------|-------|------|
| default | `--radius-default` | 8px | 基礎元件最小圓角 |
| cards | `--radius-cards` | 16px | 卡片容器 |
| large | `--radius-large` | 24px | 大型卡片 |
| pill | `--radius-pill` | 9999px | 標籤、pill tag |
| buttons | `--radius-buttons` | 9999px（1.67772e+07px） | 所有按鈕全圓 |

> 所有互動元件與內容容器的最小圓角為 8px，禁止使用直角。

---

## 六、Shadows（陰影）

| Token | Value | 用途 |
|-------|-------|------|
| `--shadow-subtle` | `rgba(0,0,0,0.08) 0px 1px 1px 1px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px` | Primary Button 輕微立體感 |
| `--shadow-subtle-2` | `rgba(0,0,0,0.08) 0px 1px 1px 0px, rgba(0,0,0,0.05) 0px 0px 0px 1px` | 卡片邊緣定義 |
| `--shadow-subtle-3` | `rgba(0,0,0,0.06) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 8px 16px 0px, rgba(0,0,0,0.02) 0px 0px 0px 1px` | 較明顯的浮層感 |

> 禁止使用濃重不透明陰影，深度層次應依靠背景色變化或上述細膩陰影。

---

## 七、Components（元件規格）

### Navigation Link
**角色：** 選單項目、純文字連結

- 字型：OpenRunde 16px / weight 400 / `#181925`
- 無背景、無邊框、無 padding
- Hover：顏色變化或底線

### Ghost Button
**角色：** 次要行動、三級導覽

- Background: `transparent`
- Text: `#181925`
- 無邊框
- Padding: 0px vertical / 12px horizontal
- Radius: 0px
- 字型：OpenRunde 16px / weight 400

### Pill Ghost Button
**角色：** 細微篩選、小型次要行動

- Background: `transparent`
- Text: `#666666`
- 無邊框
- Radius: 9999px
- 字型：OpenRunde 14px / weight 400

### Primary Action Button
**角色：** 主要 CTA

- Background: `#918df6`
- Text: `#ffffff`
- Radius: 8px ~ 9999px（pill 形）
- Padding: 6px vertical / 10–12px horizontal
- 字型：OpenRunde 16px / weight 500
- Shadow: `--shadow-subtle`

### Accent Pill Button
**角色：** 緊湊但顯眼的行動（如 Register）

- Background: `#9580ff`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px vertical / 6px horizontal
- 字型：OpenRunde 16px / weight 400

### Subtle Text Button
**角色：** 小型資訊 label，通常帶 icon

- Background: `#ffffff`
- Text: `#181925`
- Radius: 9999px
- Padding: 0px vertical / 6–10px horizontal
- 字型：OpenRunde 12px / weight 400

### Feature Card
**角色：** 顯示功能或內容區塊

- Background: `rgba(0,0,0,0.03)` 或 `#fafafa`
- Radius: 16px
- 無陰影
- 內部 padding 通常 20–24px

### Elevated Content Card
**角色：** 重要資訊展示，較大內容量

- Background: `#ffffff` 或 `#fafafa`
- Radius: 24px
- Padding: 64px vertical / 32px horizontal

### Navigation Bar
- Background: `#ffffff`
- 左側 Logo；右側 Ghost Button 導覽項 + Accent Pill Button（Register）
- 底部分隔線：`#e8e8e8`

### Dashboard Tab Bar
- 透明背景
- Active tab：`border-bottom: 2px solid #918df6`，text `#181925` weight 500
- Inactive tab：`border-bottom: 1px solid #e8e8e8`，text `#666666`

---

## 八、Do's and Don'ts

### ✅ Do

- 使用 **Radiant Violet (`#918df6`)** 作為主要行動按鈕背景；避免用於純裝飾用途
- OpenRunde 大字級使用負值 letter-spacing：48px → `-0.013em`；12px → `-0.05em`
- 以 4px 為基底單位維持視覺節奏；常用 `elementGap: 16px`、`cardPadding: 16px`
- 所有 pill 形按鈕與 tag 使用 `9999px` border-radius
- 謹慎使用 `--shadow-subtle` 於互動按鈕
- 主結構文字使用 **Slate Ink (`#181925`)**，確保在淺色背景上的可讀性
- Section 之間以 **64px** 垂直間距區隔

### ❌ Don't

- 不在大面積背景或長文字使用飽和色；留給強調與可操作元件
- 不使用直角；所有互動元件最小圓角為 8px
- 不引入其他字族；OpenRunde 是唯一文字字族
- 不使用濃重不透明陰影；使用指定的 subtle shadow 或背景色變化
- 不讓版面過度擁擠；以留白與清晰層次為優先
- 不在大字級套用預設 `letter-spacing: normal`；必須使用指定的負值追蹤
- 不在同一畫面使用多種紫色做主要行動按鈕；Radiant Violet 是唯一填色按鈕選擇

---

## 九、Imagery（圖像風格）

- **產品截圖**：乾淨直接，不過度風格化
- **抽象圖形**：平滑有機漸層，主色藍紫，提供裝飾氛圍
- **Icon**：極簡線條，單色或輕微著色（`#33c758` 綠、`#ffa600` 黃、`#d6409f` 粉），中等線條粗細
- 圖像服務於打散文字段落或突出數據，而非視覺主角

---

## 十、CSS Custom Properties 快速參考

```css
:root {
  /* Colors */
  --color-canvas-white: #ffffff;
  --color-slate-ink: #181925;
  --color-medium-gray: #666666;
  --color-muted-gray: #999999;
  --color-light-gray: #e8e8e8;
  --color-whisper-purple: #dad9fc;
  --color-radiant-violet: #918df6;
  --color-electric-blue: #2c78fc;
  --gradient-electric-blue: linear-gradient(to right in oklab, rgb(44,120,252) 0%, rgb(145,141,246) 100%);
  --color-success-green: #33c758;
  --color-warning-yellow: #ffa600;
  --color-accent-pink: #d6409f;
  --color-pale-mint: #def6e4;
  --color-deep-purple: #9580ff;
  --color-vivid-orange: #ff3e00;

  /* Typography */
  --font-openrunde: 'OpenRunde', ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --text-caption: 12px;    --leading-caption: 1.56;  --tracking-caption: -0.05px;
  --text-body: 14px;       --leading-body: 1.43;     --tracking-body: -0.025px;
  --text-heading-sm: 18px; --leading-heading-sm: 1.33; --tracking-heading-sm: -0.02px;
  --text-heading: 20px;    --leading-heading: 1.22;  --tracking-heading: -0.018px;
  --text-heading-lg: 24px; --leading-heading-lg: 1.17; --tracking-heading-lg: -0.017px;
  --text-display: 48px;    --leading-display: 1.13;  --tracking-display: -0.013px;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;   --spacing-8: 8px;   --spacing-12: 12px;
  --spacing-16: 16px; --spacing-20: 20px; --spacing-24: 24px;
  --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;

  /* Layout */
  --section-gap: 64px;
  --card-padding: 16px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-default: 8px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-cards: 16px;
  --radius-large: 24px;
  --radius-pill: 9999px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-subtle:   rgba(0,0,0,0.08) 0px 1px 1px 1px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px;
  --shadow-subtle-2: rgba(0,0,0,0.08) 0px 1px 1px 0px, rgba(0,0,0,0.05) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0,0,0,0.06) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 8px 16px 0px,
                     rgba(0,0,0,0.02) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-canvas-white: #ffffff;
  --surface-subtle-accent: #fafafa;
  --surface-light-card: rgba(0,0,0,0.03);
  --surface-pale-mint-overlay: #def6e4;
}
```

---

## 十一、Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-slate-ink: #181925;
  --color-medium-gray: #666666;
  --color-muted-gray: #999999;
  --color-light-gray: #e8e8e8;
  --color-whisper-purple: #dad9fc;
  --color-radiant-violet: #918df6;
  --color-electric-blue: #2c78fc;
  --color-success-green: #33c758;
  --color-warning-yellow: #ffa600;
  --color-accent-pink: #d6409f;
  --color-pale-mint: #def6e4;
  --color-deep-purple: #9580ff;
  --color-vivid-orange: #ff3e00;

  --font-openrunde: 'OpenRunde', ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --text-caption: 12px;    --leading-caption: 1.56;  --tracking-caption: -0.05px;
  --text-body: 14px;       --leading-body: 1.43;     --tracking-body: -0.025px;
  --text-heading-sm: 18px; --leading-heading-sm: 1.33; --tracking-heading-sm: -0.02px;
  --text-heading: 20px;    --leading-heading: 1.22;  --tracking-heading: -0.018px;
  --text-heading-lg: 24px; --leading-heading-lg: 1.17; --tracking-heading-lg: -0.017px;
  --text-display: 48px;    --leading-display: 1.13;  --tracking-display: -0.013px;

  --spacing-4: 4px;   --spacing-8: 8px;   --spacing-12: 12px;
  --spacing-16: 16px; --spacing-20: 20px; --spacing-24: 24px;
  --spacing-32: 32px; --spacing-48: 48px; --spacing-64: 64px;

  --radius-lg: 8px;   --radius-xl: 12px;  --radius-2xl: 16px;
  --radius-3xl: 24px; --radius-3xl-2: 32px;

  --shadow-subtle:   rgba(0,0,0,0.08) 0px 1px 1px 1px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px;
  --shadow-subtle-2: rgba(0,0,0,0.08) 0px 1px 1px 0px, rgba(0,0,0,0.05) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0,0,0,0.06) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 8px 16px 0px,
                     rgba(0,0,0,0.02) 0px 0px 0px 1px;
}
```

---

*Design.md v2.0 — 依 Visitors Style Reference (e7876363) 更新 | AI Scrum Team | 2026/05/10*

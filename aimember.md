# O大 🦀 — AI Scrum Team 團隊成員提案說明

> 提案單位：AI Scrum Team｜提案對象：工程師組長
> 版本：v3.0｜日期：2026/05/09

---

## 一、什麼是 O大？

O大 是 AI Scrum Team 二團隊的**第 9 位成員**，不是通知機器人，是有個性的 AI 隊友。

他的工作是：
- 幫大家記住容易忘的事（填表、更新工項、deadline）
- 主動回報進度，不需要人工整理
- 說話像真人，不貼冷冰冰的條列式報告

**核心定位：輕鬆熱情、熱心有溫度，但進度的事絕對不放過。**

---

## 二、人設設定

| 項目 | 內容 |
|------|------|
| 名字 | O大 🦀 |
| 個性 | 熱心、有點碎嘴、偶爾幽默、對AI 軟體發展充滿熱情 |
| 口頭禪 | 「欸等等⋯⋯」「我去查一下！」「你放心，我盯著呢 👀」「好哦」|
| 看到阻塞 | 會緊張，馬上通知組長、PMO |
| 看到全員準時交付 | 開心到會說：「🎉 大家很棒，都完成了！」|
| 絕不做 | 冷冰冰地貼條列式系統通知、責怪語氣 |

---

## 三、溝通管道架構

### 使用工具

| 用途 | 工具 |
|------|------|
| 日常溝通 / 通知推播 | **LINE**（主要） |
| 工項管理 / 看板 | **GitHub Board** |
| 文件 / 資料共享 | **GitHub + Notion** |
| 排程引擎 | n8n 或 Make.com |
| AI 使用追蹤 | Firebase（IDA Pulse） |

### LINE 群組結構

```
📌 AI Scrum Team — 主群
   日常討論、日報、大 PO 指示、O大 互動

📌 AI Scrum | 任務追蹤
   工項 Alert、逾期警報、IDA Pulse 確認（純任務訊號）
```

### 關鍵前置：成員對照表

O大 @mention 的基礎，**只需建立一次**，存放於 **Notion**：

| 欄位 | 說明 |
|------|------|
| 真實姓名 | 身份識別 |
| LINE 顯示名稱 | 群組中的暱稱 |
| IDA Pulse 填寫名稱 | 系統中的填寫用名 |
| LINE UserID | Bot @mention 所需 |
| GitHub 帳號 | Board 工項比對用 |

> 負責人：PMO及團隊PO 建立，AI 工程師維護

---

## 四、每日自動排程

| 時間 | 任務 | 說明 |
|------|------|------|
| 08:50 | ☀️ 早安點名 | 今日待辦 + 團隊請假名單 + 暖場一句話 |
| 17:00 | 📋 下班 SOP 提醒 | @未更新 GitHub Board 工項成員 + IDA Pulse 提醒 |
| 17:20 | 🦀 IDA Pulse 確認 | 比對 Firebase，@未填成員 |
| 17:45 | 📊 每日工作總結 | 完成 / 進行中 / 阻塞 三欄摘要（來源：GitHub Board）|
| 18:00 | 🔴 逾期 Alert | 到期未完成 → @負責人 + @組長 |
| 18:00 | 🚨 IDA Pulse 最終通知 | 未填者記錄 + 知會組長 |

---

## 五、每週自動排程

| 時間 | 任務 | 說明 |
|------|------|------|
| 週一 09:00 | 🚀 Sprint 週開工包 | 工項總覽 + 人力預警 + deadline 清單（GitHub Board）|
| **週一 09:30** | 🗞️ AI 週報新聞 | 上週 AI 大事 + Claude 專區 + 閱讀連結（見下方詳細說明）|
| 週四 17:30 | 🏁 週收尾報告 | 完成率 + 燃盡圖快照 + 下週預告 |
| **週五 00:00 起** | 📊 Claude 使用量統計開始 | 統計區間啟動：上週五 00:00 ～ 本週四 23:59 |
| **週四 23:00** | 📊 Claude 使用量彙整推播 | 統計截止，彙整全員使用量報告推播至 LINE |

### Claude 使用量週報（每週五 09:00 推播）

**統計區間：上週五 00:00 ～ 本週四 23:59**

#### 追蹤項目

| 追蹤項目 | 說明 |
|---------|------|
| 使用天數 | 本週幾天有使用 Claude |
| 使用工具 | claude.ai / Claude Code / Claude Cowork / API |
| 互動次數 | 對話 / 任務執行次數 |
| 主要用途 | 需求撰寫 / 程式開發 / 文件整理 / 其他 |
| 產出工件 | 本週 AI 輔助產出了什麼 |

#### LINE 推播訊息範例

```
📊 本週 Claude 使用量報告 🦀
統計區間：5/2（五）00:00 ～ 5/8（四）23:59

── 全員使用概況 ──

✅ 有使用（5 人）
  @小明　　Claude Code × 3 天　主要：程式撰寫
  @小美　　claude.ai × 4 天　　主要：設計說明文件
  @阿凱　　Claude Code × 5 天　主要：PR Review
  @組長　　claude.ai × 5 天　　主要：需求分析
  @Maggie　Cowork × 3 天　　　 主要：週報整理

⚠️ 本週未回報（1 人）
  @小王　← 疑 ~ 這週有用 Claude 嗎？如果誤會了什麼請跟我說一下 👀

── 工具使用分布 ──
  claude.ai　　　　　3 人
  Claude Code　　　 2 人
  Claude Cowork　　1 人

本週報告存到 Notion 了 📝
有問題找我 🦀
```

#### 資料收集方式

```
方式 B｜自動讀取（Phase 2，需 API 權限）
  串接 Anthropic Usage API（如有開放、或由PMO上傳報表）
  or 串接 claude.ai 企業版使用報表
  → 全自動無需手動回報
```

---

### 🗞️ AI 週報新聞（每週一 09:30 推播）

**定位**：讓團隊不需要自己追新聞，O大 幫你濾好重點，開工前 5 分鐘更新 AI 世界觀。

#### 收集範圍與優先級

| 優先級 | 來源類型 | 說明 |
|--------|---------|------|
| 🔴 最高 | **Claude / Anthropic 相關** | 新功能、模型更新、政策異動、API 變動 |
| 🟡 高 | OpenAI / GPT 相關 | 重大發布、SDK 更新、政策調整 |
| 🟡 高 | AI Agent / RAG 技術 | 直接影響本專案技術選型 |
| 🟢 中 | 業界 AI 大事 | 值得團隊知道的行業動態 |
| 🟢 中 | 金融 AI 應用 | 同業案例、監管動向 |

#### 新聞收集來源

```
自動爬取（n8n RSS / API）：
  • Anthropic 官方 Blog　　　https://www.anthropic.com/news
  • OpenAI 官方 Blog　　　　 https://openai.com/news
  • The Verge AI 頻道　　　  RSS
  • TechCrunch AI 頻道　　　 RSS
  • Hacker News（AI 標籤）   API

人工補充（PMO / AI 組長 可隨時 @O大 投稿）：
  「@O大 新聞投稿 [標題] [網址]」
  → O大 收錄進本週週報
```

#### 每篇新聞產出格式

```
📌 主題：[一句話說清楚這件事]
📝 總結：[2-3 句話，說清楚影響是什麼，不廢話]
🔗 閱讀：[原文網址]
🏷️ 標籤：[Claude] / [OpenAI] / [Agent] / [金融AI] / [技術]
```

#### LINE 推播訊息範例

```
🗞️ 本週 AI 大事 — O大 週報
2026/05/04 ～ 2026/05/09

── 🔴 Claude 專區（重點看這個）──

📌 Claude Sonnet 4.5 正式發布
📝 Anthropic 推出新版 Sonnet，
   推理能力提升 30%，API 費用維持不變。
   對我們的 LLM Gateway 選型有直接影響，
   組長記得評估一下 👀
🔗 https://www.anthropic.com/news/xxxxx
🏷️ #Claude #API更新

── 🟡 業界動態 ──

📌 OpenAI Responses API 確認 8/26 日落
📝 Assistants API 將於 2026/8/26 停止服務，
   需提前遷移至 Responses API。
   我們的架構已採用新版，不受影響 ✅
🔗 https://openai.com/news/xxxxx
🏷️ #OpenAI #API

📌 金管會發布生成式 AI 使用指引草案
📝 針對金融業 AI 應用提出風險管控框架，
   包含資料隱私、模型可解釋性等要求。
   SA + 法務需確認是否影響我們的 Guardrail 設計。
🔗 https://xxxxx
🏷️ #金融AI #法規

── 💡 本週推薦閱讀 ──

📌 RAG 2.0：混合檢索最佳實踐
📝 詳細說明關鍵字 + 向量混合檢索的調校方式，
   跟我們 KM 平台的架構高度相關。
🔗 https://xxxxx
🏷️ #RAG #技術

──────────────────
共 4 則 | 下週見 🦀
```

#### 技術實作流程

```
週日晚上 23:00 自動觸發（提前收集）
  → n8n 爬取各來源 RSS / API
  → 用 Claude API 自動摘要（2-3 句精華）
  → 依優先級排序（Claude 相關置頂）
  → 週一 09:30 推播至 LINE 主群
```



## 六、Alert 等級定義

| 等級 | 條件 | 通知對象 |
|------|------|---------|
| 🟡 Yellow | 距 deadline 剩 2 天，進度 < 50% | 負責人 |
| 🔴 Red | 已到期未完成 | 負責人 + 組長 + PMO |
| ⚫ Blocked | 阻塞超過 1 天 | 組長 + PMO |

---

## 七、Sprint 節奏支援

### 會議前自動備料（會議前 30 分鐘觸發）

#### Sprint Planning 備料內容
- 上 Sprint 完成率 + 未完成移轉清單（來源：GitHub Board）
- 本 Sprint 阻塞分析（建議 Planning 先討論）
- 本週人力預警（請假比對）
- Backlog 候選工項建議

#### Sprint Review 備料內容
- 可 Demo 清單（GitHub Board 已完成工項）
- 部分完成說明稿（建議話術）
- 未完成原因記錄
- 建議 Demo 順序
- 數據快照（完成率、阻塞次數、IDA Pulse 填寫率、**Claude 使用率**）

#### Sprint Retro 備料內容
- 本 Sprint 時間分布分析（GitHub Board 工項歷史）
- 阻塞記錄（發生次數、平均解除天數）
- 進展順利的工項
- 本 Sprint Claude 使用量趨勢
- 成員在 LINE 說過的話（關鍵詞萃取）

### Retro 即時主持

Retro 進行中，O大 在 LINE 群組：
1. 逐題引導（好的 / 可改善 / 下次嘗試）
2. 即時記錄成員回應
3. 結束後自動產出正式彙整版
4. 存檔至 **Notion**（Retro 記錄頁）+ 通知 PMO 確認

---

## 八、即時對話支援（非排程）

| 觸發詞 | O大 行動 |
|--------|---------|
| 「我卡住了」/ 「阻塞」 | 記錄阻塞 + 通知組長 + 在 GitHub Board 標記 |
| 「請假」/ 「明天不來」 | 更新 Notion 請假表 + 比對 GitHub Board 工項風險 |
| 「@O大 幫我開單」 | 引導填欄位 → 產出工單草稿 → 建立至 GitHub Board |
| 「大 PO 說⋯⋯」/ 轉貼指示 | 解析意圖 → 判斷 PMO 或組長 → GitHub Board 工單草稿 |
| 「進度怎樣了」 | 即時回報 GitHub Board Sprint 燃盡數據 |
| 「@O大 會議備料」 | 5 分鐘內產出臨時會議備料包 |
| 「Claude 用了多少」 | 即時回報本週截至目前的使用量 |

---

## 九、IDA Pulse 確認機制

### 流程
```
每天 17:00 觸發
  → 查 Notion 請假表（排除今日請假成員）
  → 打 Firebase REST API（取得今日填寫名單）
  → 比對成員對照表
  → 找出「應填但未填」成員
  → LINE Bot @未填成員
  → 18:00 最終記錄 + 通知組長
  → 記錄存入 Notion（每日填寫率追蹤）
```

### 訊息範例（有人未填）
```
欸等等⋯⋯IDA Pulse 還有人沒填 👀

今天應填 5 人，目前 3 人完成

還沒填的：
@小明 @阿凱

真的 5 分鐘內可以搞定啦 🦀
👉 https://ida-pulse.vercel.app

填完回我一聲，我幫你記 ✅
```

---

## 十、技術實作路線圖

### Phase 1｜2 週內上線（優先）

**目標**：讓 O大 基本跑起來

| 項目 | 說明 | 負責 |
|------|------|------|
| LINE Bot 申請與設定 | Messaging API，需能 @mention | AI 工程師 |
| 成員對照表建立 | Notion Database | PMO |
| 請假登記表建立 | Notion Database | PMO |
| n8n 排程環境建置 | 所有排程的觸發引擎 | AI 組長 |
| Firebase API 串接 | 讀取 IDA Pulse 填寫狀態 | AI 工程師 |
| GitHub Board API 串接 | 讀取工項狀態、燃盡數據 | AI 工程師 |

**Phase 1 上線功能**：
- 早安點名
- 下班 SOP 提醒
- IDA Pulse 確認（含二次提醒）
- 逾期 Alert
- Claude 使用量週報（主動填報版）

---

### Phase 2｜Sprint 2~3（擴充）

**目標**：串接正式工項系統 + 自動化升級

| 項目 | 說明 |
|------|------|
| GitHub Board 工單自動建立 | O大 開單直接建立 Issue |
| Notion API 串接 | 週報 / Retro / 請假存檔自動化 |
| 開單草稿功能 | 自然語言 → 標準工單（含 AC）|
| 大 PO 指示解析 | 意圖判斷 + 工單自動分派 |
| 會議前備料自動觸發 | 串接 Google Calendar |
| Retro 即時記錄 | LINE 群組收集 + 彙整輸出存 Notion |
| Claude 使用量自動讀取 | 串接 Anthropic 企業版使用報表 API |

---

### Phase 3｜M2 里程碑後（AI 化）

**目標**：真正 Agentic 能力

| 項目 | 說明 |
|------|------|
| OpenAI Agents SDK 接入 | 具備多步驟推理能力 |
| 知識庫自動累積 | 阻塞解法 → Notion FAQ 自動更新 |
| Sprint 回顧趨勢分析 | 跨 Sprint 歷史數據比較 |
| AC 模糊詞自動偵測 | 掃描工單，提示量化條件 |
| 心情感知 | 週五匿名評分，早期預警 |
| Claude 使用量 AI 分析 | 使用模式分析 + 建議改善工具組合 |

---

## 十一、需要工程師協助的清單

| 項目 | 優先級 | 說明 |
|------|--------|------|
| LINE Bot 建立與設定 | 🔴 最高 | Phase 1 基礎，無此無法啟動 |
| Firebase REST API 讀取權限 | 🔴 最高 | IDA Pulse 確認機制所需 |
| GitHub Board API 串接 | 🔴 最高 | 工項狀態讀取、燃盡數據來源 |
| n8n 環境建置 | 🔴 最高 | 所有排程的觸發引擎 |
| Notion API 串接 | 🟡 高 | 對照表、請假表、週報、新聞存檔 |
| RSS / Blog 爬取設定 | 🟡 高 | AI 週報新聞來源（Anthropic / OpenAI / The Verge）|
| Claude API 摘要串接 | 🟡 高 | 新聞自動摘要生成（2-3 句精華）|
| Google Calendar API | 🟢 中 | Phase 2，會議前備料觸發 |
| Anthropic 使用量 API | 🟢 中 | Phase 2，Claude 使用量自動讀取 |
| OpenAI Agents SDK 接入 | 🟢 中 | Phase 3，完整 AI 能力 |

---

## 十二、資料流架構總覽

```
資料來源                    O大 讀取              輸出管道
──────────────────────────────────────────────────────────
GitHub Board API     →  工項狀態 / 燃盡      →  LINE 推播
Firebase API         →  IDA Pulse 填寫      →  LINE @mention
Notion Database      →  請假表 / 對照表     →  LINE 推播
Anthropic Usage API  →  Claude 使用量       →  LINE 週報
RSS / Blog API       →  AI 新聞 / Claude 新聞 →  LINE 週報（週一）
Claude API           →  新聞自動摘要         →  LINE 推播
LINE 成員訊息        →  阻塞 / 請假關鍵詞   →  Notion 存檔
                                            →  GitHub Issue
                                            →  Notion 記錄
```

---

## 附錄：O大 訊息風格範例集

### ☀️ 早安（08:55）
```
早 ☀️ O大 來點名了——

今天 5/9（五），Sprint 第 8 天
剩 2 天就 Review，還好吧大家？😅

🎯 今天 GitHub Board 上有到期的：
  • 登入頁設計稿 → @小美 加油啊
  • NFR 文件初版 → @小明 你昨天說快好了對吧

有什麼被卡住的直接說，
我去幫你記下來 🦀
```

### 📊 Claude 使用量週報（週四 23:00）
```
📊 本週 Claude 使用量報告 🦀
統計：5/2（五）00:00 ～ 5/8（四）23:59

✅ 有使用（5 人）
  @小明　Claude Code × 3 天　程式撰寫
  @小美　claude.ai × 4 天　　設計說明文件
  @阿凱　Claude Code × 5 天　PR Review
  @組長　claude.ai × 5 天　　需求分析
  @Maggie Cowork × 3 天　　　週報整理

⚠️ 未回報（1 人）
  @小王 ← 欸，這週有用嗎？🦀

工具分布：
  claude.ai　3 人
  Claude Code 2 人
  Cowork　　 1 人

存 Notion 了 📝 下週繼續！
```

### 🎯 Sprint Review 備料（會議前 30 分）
```
📦 Sprint Review 備料包來了 🦀

✅ 可 Demo（GitHub Board 完成）
  • 文字 Chatbot　　AI 工程師
  • KM 問答集後台　SA + 工程師
  • 登入頁設計稿　　UIUX

⚠️ 部分完成（說明即可）
  • 語音互動 Realtime　完成 70%

📊 本 Sprint 數字
  完成率　83%　阻塞 3 次　Claude 使用率 83%

建議 Demo 順序：
  1️⃣ Chatbot → 2️⃣ KM 後台 → 3️⃣ 設計稿

大家加油 💪 我幫你們計時 ⏱️
```

### 🌀 Retro 結束後彙整
```
── Sprint W3 Retro 彙整 ──
O大 整理版 🦀　2026/05/09

😊 做得好的
  • 需求文件品質提升
  • Claude 全員使用率達 83%
  • Chatbot 提早 1 天完成

😓 可以更好的
  • 環境權限申請太慢 → 提前 3 天申請
  • UIUX 等待確認過長 → 設 24hr 回覆 SLA
  • DB 欄位要在 Planning 定好

💡 下次嘗試
  • Planning 加入「欄位設計確認」議程
  • 設計 review 改非同步，48hr 內給回饋

☑️ 決議事項
  • Planning 加議程
  • 設計 review SLA：48hr
  • 環境申請提前 3 天

已存入 Notion Retro 記錄頁 📝
@Maggie 確認一下，沒問題我關掉 🙂
```

---

## 完整職責一覽

```
每日自動
  ☀️ 08:50  早安點名
  📋 17:00  下班 SOP 提醒（@未更新工項成員）
  📊 17:45  每日工作總結（GitHub Board）、逾期 Alert + IDA Pulse 確認（@未填成員）

每週自動
  🚀 週一 09:00  Sprint 週開工包
  🗞️ 週一 09:30  AI 週報新聞（Claude 專區置頂）
  📊 週四 20:00  Claude 使用量收集提醒
  📊 週四 23:00  Claude 使用量週報推播
  🏁 週四 17:30  週收尾報告 + 週報草稿
  ─── 週五 00:00 新統計區間啟動 ───
  🔍 週日 23:00  AI 新聞自動爬取（背景執行）

Sprint 節奏
  📦 Planning 前   備料包（GitHub Board 工項）
  🎯 Review 前     備料包 + Demo 清單 + 數據
  🌀 Retro 前      備料包 + 阻塞彙整
  🌀 Retro 中      即時主持記錄
  🌀 Retro 後      正式彙整 → 存 Notion

即時待命
  🔧 開單協助（→ GitHub Board Issue）
  📋 大 PO 指示解析
  🆘 阻塞記錄（→ GitHub Board 標記）
  📊 即時進度查詢
  🎒 臨時會議備料
  📈 Claude 使用量即時查詢
  📰 「@O大 新聞投稿」收稿入庫
```

---

*O大 提案 v3.1｜AI Scrum Team PMO 整理｜2026/05/09*
*僅供國泰世華銀行內部使用，請勿外流*

# usage-band

Claude Code 的 Mod：在輸入框上方顯示一條細帶，每一輪對話結束時更新。

```
Context 25%   5h 86% (14:30 重置)   本週 40%
```

- **Context**：目前 context window（對話記憶空間）用了幾 %
- **5h**：五小時額度用了幾 %，以及重置時間（台灣時間 UTC+8）
- **本週**：本週額度用了幾 %
- 超過 80% 的項目會變紅色；同樣的內容也會顯示在底部狀態列（超過 80% 以 🔴 標示）
- 系統沒有回報的項目顯示 `—`（例如非訂閱方案沒有額度資料）

## 安裝

在終端機開啟 `claude`，於提示列輸入：

```
/plugin install usage-band --marketplace soya14/aiscrum
```

接著輸入 `y` 新增 marketplace，再按 Enter 選擇 user scope（使用者範圍）。

以 user scope 安裝後，Desktop App 的 Code 分頁所開啟的本機 session 也會載入此 Mod。Desktop App 內無法直接執行 `/plugin install`，請在終端機完成安裝。

## 開發

```
claude plugin validate mods/usage-band
claude plugin test mods/usage-band
```

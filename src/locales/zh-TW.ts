export default {
  common: {
    add: '新增',
    addSuccess: '新增成功',
    edit: '編輯',
    editSuccess: '編輯成功',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    save: '儲存',
    sync: '儲存並同步所有人',
    test: '测试',
    saveSuccess: '儲存成功',
    reset: '重置',
    action: '操作',
    export: '匯出',
    exportSuccess: '匯出成功',
    import: '匯入',
    importSuccess: '匯入成功',
    clear: '清除',
    clearSuccess: '清除成功',
    yes: '是',
    no: '否',
    confirm: '確認',
    download: '下載',
    noData: '目前無資料',
    wrong: '發生錯誤，請稍後再試。',
    success: '操作成功',
    failed: '操作失敗',
    register: '註冊',
    login: '登錄',
    notLoggedIn: '登錄 / 註冊',
    logOut: '退出登錄',
    unauthorizedTips: '未經授權，請先進行驗證。',
    email: '電子郵件',
    password: '密碼',
    passwordConfirm: '確認密碼',
    resetPassword: '重置密码',
    resetPasswordMail: '發送重置密碼郵件',
    auditTip: '敏感詞對管理員不生效',
    twoFA: '两步验证',
  },
  chat: {
    newChatButton: '新建對話',
    placeholder: '來說點什麼...（Shift + Enter = 換行，"/" 觸發提示詞）',
    placeholderMobile: '來說點什麼...',
    copy: '複製',
    copied: '複製成功',
    copyCode: '複製代碼',
    clearChat: '清除對話',
    clearChatConfirm: '是否清空對話?',
    exportImage: '儲存對話為圖片',
    exportImageConfirm: '是否將對話儲存為圖片?',
    exportSuccess: '儲存成功',
    exportFailed: '儲存失敗',
    usingContext: '上下文模式',
    turnOnContext: '啟用上下文模式，在此模式下，發送訊息會包含之前的聊天記錄。',
    turnOffContext: '關閉上下文模式，在此模式下，發送訊息不會包含之前的聊天記錄。',
    deleteMessage: '刪除訊息',
    deleteMessageConfirm: '是否刪除此訊息?',
    deleteHistoryConfirm: '確定刪除此紀錄?',
    clearHistoryConfirm: '確定清除紀錄?',
    preview: '預覽',
    showRawText: '顯示原文',
    usageEstimate: '預估',
    usagePrompt: '提問',
    usageResponse: '回復',
    usageTotal: '總消耗 token',
    deleteUser: '刪除用戶',
    editUser: '編輯用戶',
    deleteUserConfirm: '你確定要刪除這個用戶嗎? 刪除後這個郵箱永遠無法註冊登錄',
    verifiedUser: '通过验证',
    deleteKey: '刪除 Key',
    editKeyButton: '編輯 Key',
    deleteKeyConfirm: '你確定要刪除這個 key 嗎?',
    disable2FA: '禁用 2FA',
    disable2FAConfirm: '您确定要为此用户禁用两步验证吗？?',
  },
  setting: {
    setting: '設定',
    general: '總覽',
    advanced: '高級',
    statistics: '統計',
    config: '基本設定',
    siteConfig: '网站配置',
    mailConfig: '邮箱配置',
    auditConfig: '敏感词审核',
    avatarLink: '頭貼連結',
    name: '名稱',
    description: '描述',
    role: '角色設定',
    temperature: '思维发散程度',
    top_p: 'Top_p',
    saveUserInfo: '保存用户資訊',
    chatHistory: '紀錄',
    theme: '主題',
    language: '語言',
    api: 'API',
    reverseProxy: '反向代理',
    timeout: '逾時(ms)',
    socks: 'Socks',
    socksAuth: 'Socks 授权',
    httpsProxy: 'HTTPS Proxy',
    balance: 'API余額',
    statisticsPeriod: '統計時間段',
    statisticsPeriodLastMonth: '上月',
    statisticsPeriodCurrentMonth: '本月',
    statisticsPeriodLast30Days: '最近30天',
    statisticsPrompt: '提問',
    statisticsCompletion: '回答',
    statisticsTotal: '總計',
    smtpHost: 'Host',
    smtpPort: 'Port',
    smtpTsl: 'Tsl',
    smtpUserName: '账号',
    smtpPassword: '密码/专用密码',
    siteTitle: '网站标题',
    siteDomain: '域名 不含/',
    registerEnabled: '新用户',
    registerReview: '新用户审核',
    registerMails: '后缀',
    registerReviewTip: '仅允许这些邮箱的后缀注册本网站',
    apiBaseUrl: '接口地址',
    apiModel: '接口类型',
    accessToken: 'Access Token',
    loginEnabled: '注册登录',
    loginSalt: '登录混淆盐',
    loginSaltTip: '變更會導致已有登錄失效',
    monthlyUsage: '本月使用量',
    auditEnabled: '第三方',
    auditProvider: '提供商',
    auditApiKey: 'Api Key',
    auditApiSecret: 'Api Secret',
    auditTest: '測試文本',
    auditBaiduLabel: '二級分類',
    auditBaiduLabelTip: '英文逗號分割, 如果空, 仅政治',
    auditBaiduLabelLink: '查看細分類型',
    auditCustomizeEnabled: '自定義',
    auditCustomizeWords: '敏感詞',
    accessTokenExpiredTime: '過期時間',
    userConfig: '用戶管理',
    keysConfig: 'Keys 管理',
    userRoles: '用戶權限',
    status: '狀態',
    chatModels: '對話模型',
    defaultChatModel: '預設對話模型',
    remark: '備註',
    email: '電子郵箱',
    password: '密碼',
    passwordConfig: '密码',
    oldPassword: '旧密码',
    newPassword: '新密码',
    confirmNewPassword: '确认密码',
    twoFAConfig: '两步验证',
    disable2FA: '禁用 2FA',
    enable2FA: '开启 2FA',
    info2FA: '两步验证是一个额外的验证步骤，可让您的登录体验更加安全。开启两步验证后，每次您要登录到您的帐户时，系统均提示您输入动态验证码。',
    status2FA: '当前状态',
    status2FAClosed: '关闭',
    status2FAOpened: '已开启',
    info2FAStep1: '安装身份验证器App',
    info2FAStep1Desc: '安装身份验证器App，例如Google Authenticator、Microsoft Authenticator、Authy等',
    info2FAStep2: '配置生成验证码',
    info2FAStep2Desc: '打开身份验证器 App，点击「扫描二维码」扫描二维码。',
    info2FAStep2Tip: '注意： 身份验证器不能扫描验证码？ 手动添加以下账户',
    info2FAStep2TipAccount: '账户',
    info2FAStep2TipSecret: '密钥',
    info2FAStep3: '验证并开启',
    info2FAStep3Desc: '请输入身份验证器 App 生成的 6 位动态验证码，开启两步验证。',
    info2FAStep3Tip1: '注意：如何关闭两步验证？',
    info2FAStep3Tip2: '1. 登录后，在 两步验证 页面使用两步验证码关闭。',
    info2FAStep3Tip3: '2. 联系管理员来关闭两步验证。',
    maxContextCount: '最大上下文数量',
  },
  store: {
    siderButton: '提示詞商店',
    local: '本機',
    online: '線上',
    title: '標題',
    description: '描述',
    clearStoreConfirm: '是否清除資料？',
    importPlaceholder: '請將 JSON 資料貼在此處',
    addRepeatTitleTips: '標題重複，請重新輸入',
    addRepeatContentTips: '內容重複：{msg}，請重新輸入',
    editRepeatTitleTips: '標題衝突，請重新修改',
    editRepeatContentTips: '內容衝突{msg} ，請重新修改',
    importError: '鍵值不符合',
    importRepeatTitle: '因標題重複跳過：{msg}',
    importRepeatContent: '因內容重複跳過：{msg}',
    onlineImportWarning: '注意：請檢查 JSON 檔案來源！',
    downloadError: '請檢查網路狀態與 JSON 檔案有效性',
  },
}

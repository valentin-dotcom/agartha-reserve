const SUPABASE_URL = "https://qsjcwauaaxkdpbqdsurl.supabase.co";

// Pegá aquí SOLO tu Publishable Key.
// NUNCA uses sb_secret_... ni service_role.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_aAeK8ysVyWiKgmjg9b62mA_4Wl0yZer";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
const RESERVATION_PRICE_USD = 500;
/* =========================================================
   ELEMENTS
========================================================= */

const form = document.getElementById("register-form");
const button = document.getElementById("register-button");
const message = document.getElementById("message");

const languageSelect = document.getElementById("language-select");

const reservationPanel =
  document.getElementById("reservation-panel");

const cryptoSelect =
  document.getElementById("crypto-select");

const paymentDetails =
  document.getElementById("payment-details");

const paymentAsset =
  document.getElementById("payment-asset");

const paymentNetwork =
  document.getElementById("payment-network");

const paymentPrice =
  document.getElementById("payment-price");

const paymentAmount =
  document.getElementById("payment-amount");

const paymentQr =
  document.getElementById("payment-qr");

const paymentAddress =
  document.getElementById("payment-address");

const paymentAddressLabel =
  document.getElementById("payment-address-label");

const paymentWarning =
  document.getElementById("payment-warning");

const transactionHashInput =
  document.getElementById("transaction-hash");

const verifyPaymentButton =
  document.getElementById("verify-payment-button");

const paymentStatus =
  document.getElementById("payment-status");

const reservationTitle =
  document.getElementById("reservation-title");

const reservationIntro =
  document.getElementById("reservation-intro");


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  en: {
    language: "Language",
    title: "RESERVE MY SPOT",
    subtitle:
      "Create your Agartha account and begin your journey into a medieval-futuristic world.",
    accountTitle: "Create Your Agartha Account",
    accountIntro:
      "Register your account to begin the reservation process.",
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    country: "Country of Residence",
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    terms:
      "I agree to the Agartha Terms of Use and Privacy Policy.",
    createAccount: "CREATE ACCOUNT",
    reservationTitle: "Complete Your Reservation",
    reservationIntro:
      "Select the cryptocurrency and network you want to use for your reservation.",
    cryptoLabel: "Cryptocurrency / Network",
    selectPayment: "Select a payment method",
    paymentAddress: "Payment address",
    paymentWarning:
      "Always verify the cryptocurrency and network before sending funds.",
    scan: "Scan to contribute",
    accountCreated:
      "Account created successfully. Please check your email and confirm your address to continue.",
    errorPasswords:
      "Passwords do not match.",
    errorPasswordLength:
      "Password must contain at least 8 characters.",
    errorUsername:
      "Username must contain at least 3 characters.",
    genericError:
      "Something went wrong. Please try again."
  },

  es: {
    language: "Idioma",
    title: "RESERVA TU LUGAR",
    subtitle:
      "Creá tu cuenta de Agartha y comenzá tu viaje hacia un mundo medieval futurista.",
    accountTitle: "Crea Tu Cuenta de Agartha",
    accountIntro:
      "Registrá tu cuenta para comenzar el proceso de reserva.",
    firstName: "Nombre",
    lastName: "Apellido",
    username: "Nombre de usuario",
    country: "País de residencia",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    terms:
      "Acepto los Términos de Uso y la Política de Privacidad de Agartha.",
    createAccount: "CREAR CUENTA",
    reservationTitle: "Completa Tu Reserva",
    reservationIntro:
      "Seleccioná la criptomoneda y la red que querés utilizar para tu reserva.",
    cryptoLabel: "Criptomoneda / Red",
    selectPayment: "Seleccioná un método de pago",
    paymentAddress: "Dirección de pago",
    paymentWarning:
      "Verificá siempre la criptomoneda y la red antes de enviar fondos.",
    scan: "Escaneá para contribuir",
    accountCreated:
      "La cuenta fue creada correctamente. Revisá tu correo y confirmá tu dirección para continuar.",
    errorPasswords:
      "Las contraseñas no coinciden.",
    errorPasswordLength:
      "La contraseña debe tener al menos 8 caracteres.",
    errorUsername:
      "El nombre de usuario debe tener al menos 3 caracteres.",
    genericError:
      "Algo salió mal. Intentá nuevamente."
  },

  pt: {
    language: "Idioma",
    title: "RESERVE SEU LUGAR",
    subtitle:
      "Crie sua conta Agartha e comece sua jornada em um mundo medieval futurista.",
    accountTitle: "Crie Sua Conta Agartha",
    accountIntro:
      "Registre sua conta para iniciar o processo de reserva.",
    firstName: "Nome",
    lastName: "Sobrenome",
    username: "Nome de usuário",
    country: "País de residência",
    email: "Endereço de e-mail",
    password: "Senha",
    confirmPassword: "Confirmar senha",
    terms:
      "Aceito os Termos de Uso e a Política de Privacidade da Agartha.",
    createAccount: "CRIAR CONTA",
    reservationTitle: "Complete Sua Reserva",
    reservationIntro:
      "Selecione a criptomoeda e a rede que deseja usar para sua reserva.",
    cryptoLabel: "Criptomoeda / Rede",
    selectPayment: "Selecione um método de pagamento",
    paymentAddress: "Endereço de pagamento",
    paymentWarning:
      "Verifique sempre a criptomoeda e a rede antes de enviar fundos.",
    scan: "Escaneie para contribuir",
    accountCreated:
      "Conta criada com sucesso. Verifique seu e-mail e confirme seu endereço para continuar.",
    errorPasswords:
      "As senhas não coincidem.",
    errorPasswordLength:
      "A senha deve ter pelo menos 8 caracteres.",
    errorUsername:
      "O nome de usuário deve ter pelo menos 3 caracteres.",
    genericError:
      "Algo deu errado. Tente novamente."
  },

  fr: {
    language: "Langue",
    title: "RÉSERVEZ VOTRE PLACE",
    subtitle:
      "Créez votre compte Agartha et commencez votre voyage dans un monde médiéval futuriste.",
    accountTitle: "Créez Votre Compte Agartha",
    accountIntro:
      "Créez votre compte pour commencer le processus de réservation.",
    firstName: "Prénom",
    lastName: "Nom",
    username: "Nom d'utilisateur",
    country: "Pays de résidence",
    email: "Adresse e-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    terms:
      "J'accepte les Conditions d'utilisation et la Politique de confidentialité d'Agartha.",
    createAccount: "CRÉER LE COMPTE",
    reservationTitle: "Complétez Votre Réservation",
    reservationIntro:
      "Sélectionnez la cryptomonnaie et le réseau que vous souhaitez utiliser.",
    cryptoLabel: "Cryptomonnaie / Réseau",
    selectPayment: "Sélectionnez un moyen de paiement",
    paymentAddress: "Adresse de paiement",
    paymentWarning:
      "Vérifiez toujours la cryptomonnaie et le réseau avant d'envoyer des fonds.",
    scan: "Scannez pour contribuer",
    accountCreated:
      "Compte créé avec succès. Vérifiez votre e-mail et confirmez votre adresse pour continuer.",
    errorPasswords:
      "Les mots de passe ne correspondent pas.",
    errorPasswordLength:
      "Le mot de passe doit contenir au moins 8 caractères.",
    errorUsername:
      "Le nom d'utilisateur doit contenir au moins 3 caractères.",
    genericError:
      "Une erreur s'est produite. Veuillez réessayer."
  },

  de: {
    language: "Sprache",
    title: "RESERVIERE DEINEN PLATZ",
    subtitle:
      "Erstelle dein Agartha-Konto und beginne deine Reise in eine mittelalterlich-futuristische Welt.",
    accountTitle: "Erstelle Dein Agartha-Konto",
    accountIntro:
      "Registriere dein Konto, um den Reservierungsprozess zu beginnen.",
    firstName: "Vorname",
    lastName: "Nachname",
    username: "Benutzername",
    country: "Wohnsitzland",
    email: "E-Mail-Adresse",
    password: "Passwort",
    confirmPassword: "Passwort bestätigen",
    terms:
      "Ich akzeptiere die Nutzungsbedingungen und Datenschutzrichtlinie von Agartha.",
    createAccount: "KONTO ERSTELLEN",
    reservationTitle: "Reservierung Abschließen",
    reservationIntro:
      "Wähle die Kryptowährung und das Netzwerk für deine Reservierung.",
    cryptoLabel: "Kryptowährung / Netzwerk",
    selectPayment: "Zahlungsmethode auswählen",
    paymentAddress: "Zahlungsadresse",
    paymentWarning:
      "Überprüfe immer Kryptowährung und Netzwerk, bevor du Geld sendest.",
    scan: "Zum Beitragen scannen",
    accountCreated:
      "Konto erfolgreich erstellt. Bitte überprüfe deine E-Mail-Adresse und bestätige sie.",
    errorPasswords:
      "Die Passwörter stimmen nicht überein.",
    errorPasswordLength:
      "Das Passwort muss mindestens 8 Zeichen enthalten.",
    errorUsername:
      "Der Benutzername muss mindestens 3 Zeichen enthalten.",
    genericError:
      "Etwas ist schiefgelaufen. Bitte versuche es erneut."
  },

  it: {
    language: "Lingua",
    title: "PRENOTA IL TUO POSTO",
    subtitle:
      "Crea il tuo account Agartha e inizia il tuo viaggio in un mondo medievale futuristico.",
    accountTitle: "Crea il Tuo Account Agartha",
    accountIntro:
      "Registrati per iniziare il processo di prenotazione.",
    firstName: "Nome",
    lastName: "Cognome",
    username: "Nome utente",
    country: "Paese di residenza",
    email: "Indirizzo e-mail",
    password: "Password",
    confirmPassword: "Conferma password",
    terms:
      "Accetto i Termini di utilizzo e l'Informativa sulla privacy di Agartha.",
    createAccount: "CREA ACCOUNT",
    reservationTitle: "Completa la Tua Prenotazione",
    reservationIntro:
      "Seleziona la criptovaluta e la rete che desideri utilizzare.",
    cryptoLabel: "Criptovaluta / Rete",
    selectPayment: "Seleziona un metodo di pagamento",
    paymentAddress: "Indirizzo di pagamento",
    paymentWarning:
      "Verifica sempre la criptovaluta e la rete prima di inviare fondi.",
    scan: "Scansiona per contribuire",
    accountCreated:
      "Account creato con successo. Controlla la tua e-mail e conferma il tuo indirizzo.",
    errorPasswords:
      "Le password non coincidono.",
    errorPasswordLength:
      "La password deve contenere almeno 8 caratteri.",
    errorUsername:
      "Il nome utente deve contenere almeno 3 caratteri.",
    genericError:
      "Qualcosa è andato storto. Riprova."
  },

  zh: {
    language: "语言",
    title: "预订您的席位",
    subtitle:
      "创建您的 Agartha 账户，开始进入中世纪未来世界的旅程。",
    accountTitle: "创建您的 Agartha 账户",
    accountIntro:
      "注册账户以开始预订流程。",
    firstName: "名字",
    lastName: "姓氏",
    username: "用户名",
    country: "居住国家",
    email: "电子邮箱",
    password: "密码",
    confirmPassword: "确认密码",
    terms:
      "我同意 Agartha 的使用条款和隐私政策。",
    createAccount: "创建账户",
    reservationTitle: "完成您的预订",
    reservationIntro:
      "选择您希望用于预订的加密货币和网络。",
    cryptoLabel: "加密货币 / 网络",
    selectPayment: "选择付款方式",
    paymentAddress: "付款地址",
    paymentWarning:
      "发送资金前，请务必确认加密货币和网络。",
    scan: "扫描二维码进行贡献",
    accountCreated:
      "账户创建成功。请检查您的电子邮件并确认地址以继续。",
    errorPasswords:
      "两次输入的密码不一致。",
    errorPasswordLength:
      "密码至少需要 8 个字符。",
    errorUsername:
      "用户名至少需要 3 个字符。",
    genericError:
      "发生错误，请重试。"
  },

  ja: {
    language: "言語",
    title: "あなたの場所を予約する",
    subtitle:
      "Agarthaアカウントを作成し、中世と未来が融合した世界への旅を始めましょう。",
    accountTitle: "Agarthaアカウントを作成",
    accountIntro:
      "予約手続きを開始するためにアカウントを登録してください。",
    firstName: "名",
    lastName: "姓",
    username: "ユーザー名",
    country: "居住国",
    email: "メールアドレス",
    password: "パスワード",
    confirmPassword: "パスワードを確認",
    terms:
      "Agarthaの利用規約とプライバシーポリシーに同意します。",
    createAccount: "アカウントを作成",
    reservationTitle: "予約を完了",
    reservationIntro:
      "予約に使用する暗号資産とネットワークを選択してください。",
    cryptoLabel: "暗号資産 / ネットワーク",
    selectPayment: "支払い方法を選択",
    paymentAddress: "支払いアドレス",
    paymentWarning:
      "送金する前に、暗号資産とネットワークを必ず確認してください。",
    scan: "スキャンして支援",
    accountCreated:
      "アカウントが正常に作成されました。メールを確認してアドレスを認証してください。",
    errorPasswords:
      "パスワードが一致しません。",
    errorPasswordLength:
      "パスワードは8文字以上必要です。",
    errorUsername:
      "ユーザー名は3文字以上必要です。",
    genericError:
      "エラーが発生しました。もう一度お試しください。"
  },

  ko: {
    language: "언어",
    title: "자리 예약하기",
    subtitle:
      "Agartha 계정을 만들고 중세와 미래가 공존하는 세계로의 여정을 시작하세요.",
    accountTitle: "Agartha 계정 만들기",
    accountIntro:
      "예약 절차를 시작하려면 계정을 등록하세요.",
    firstName: "이름",
    lastName: "성",
    username: "사용자 이름",
    country: "거주 국가",
    email: "이메일 주소",
    password: "비밀번호",
    confirmPassword: "비밀번호 확인",
    terms:
      "Agartha 이용 약관 및 개인정보 처리방침에 동의합니다.",
    createAccount: "계정 만들기",
    reservationTitle: "예약 완료",
    reservationIntro:
      "예약에 사용할 암호화폐와 네트워크를 선택하세요.",
    cryptoLabel: "암호화폐 / 네트워크",
    selectPayment: "결제 방법 선택",
    paymentAddress: "결제 주소",
    paymentWarning:
      "자금을 보내기 전에 암호화폐와 네트워크를 반드시 확인하세요.",
    scan: "스캔하여 기여하기",
    accountCreated:
      "계정이 성공적으로 생성되었습니다. 이메일을 확인하고 주소를 인증하세요.",
    errorPasswords:
      "비밀번호가 일치하지 않습니다.",
    errorPasswordLength:
      "비밀번호는 최소 8자 이상이어야 합니다.",
    errorUsername:
      "사용자 이름은 최소 3자 이상이어야 합니다.",
    genericError:
      "문제가 발생했습니다. 다시 시도하세요."
  },

  ar: {
    language: "اللغة",
    title: "احجز مكانك",
    subtitle:
      "أنشئ حسابك في Agartha وابدأ رحلتك إلى عالم مستقبلي بطابع العصور الوسطى.",
    accountTitle: "أنشئ حساب Agartha",
    accountIntro:
      "سجّل حسابك لبدء عملية الحجز.",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    username: "اسم المستخدم",
    country: "بلد الإقامة",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    terms:
      "أوافق على شروط استخدام Agartha وسياسة الخصوصية.",
    createAccount: "إنشاء الحساب",
    reservationTitle: "أكمل حجزك",
    reservationIntro:
      "اختر العملة الرقمية والشبكة التي تريد استخدامها للحجز.",
    cryptoLabel: "العملة الرقمية / الشبكة",
    selectPayment: "اختر طريقة الدفع",
    paymentAddress: "عنوان الدفع",
    paymentWarning:
      "تحقق دائمًا من العملة الرقمية والشبكة قبل إرسال الأموال.",
    scan: "امسح للمساهمة",
    accountCreated:
      "تم إنشاء الحساب بنجاح. تحقق من بريدك الإلكتروني وأكّد عنوانك للمتابعة.",
    errorPasswords:
      "كلمتا المرور غير متطابقتين.",
    errorPasswordLength:
      "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    errorUsername:
      "يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل.",
    genericError:
      "حدث خطأ. يرجى المحاولة مرة أخرى."
  },

  ru: {
    language: "Язык",
    title: "ЗАБРОНИРУЙТЕ СВОЁ МЕСТО",
    subtitle:
      "Создайте аккаунт Agartha и начните путешествие в средневековый футуристический мир.",
    accountTitle: "Создайте аккаунт Agartha",
    accountIntro:
      "Зарегистрируйте аккаунт, чтобы начать процесс бронирования.",
    firstName: "Имя",
    lastName: "Фамилия",
    username: "Имя пользователя",
    country: "Страна проживания",
    email: "Электронная почта",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    terms:
      "Я принимаю Условия использования и Политику конфиденциальности Agartha.",
    createAccount: "СОЗДАТЬ АККАУНТ",
    reservationTitle: "Завершите бронирование",
    reservationIntro:
      "Выберите криптовалюту и сеть для оплаты бронирования.",
    cryptoLabel: "Криптовалюта / Сеть",
    selectPayment: "Выберите способ оплаты",
    paymentAddress: "Платёжный адрес",
    paymentWarning:
      "Всегда проверяйте криптовалюту и сеть перед отправкой средств.",
    scan: "Отсканируйте для поддержки",
    accountCreated:
      "Аккаунт успешно создан. Проверьте электронную почту и подтвердите адрес.",
    errorPasswords:
      "Пароли не совпадают.",
    errorPasswordLength:
      "Пароль должен содержать не менее 8 символов.",
    errorUsername:
      "Имя пользователя должно содержать не менее 3 символов.",
    genericError:
      "Произошла ошибка. Попробуйте ещё раз."
  }
};


/* =========================================================
   PAYMENT METHODS
   QR paths and public payment addresses
========================================================= */

const paymentMethods = {

  "eth-ethereum": {
    asset: "ETH",
    network: "Ethereum Mainnet",
    priceId: "ethereum",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Ethereum.gif"
  },

  "sol-solana": {
    asset: "SOL",
    network: "Solana",
    priceId: "solana",
    address: "5uREoLWabTasKsHS1TYHsR57nKgKCgw8LSNbf3KZrZSJ",
    qr: "Solana.gif"
  },

  "eth-linea": {
    asset: "ETH",
    network: "Linea Mainnet",
    priceId: "ethereum",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Linea.gif"
  },

  "eth-base": {
    asset: "ETH",
    network: "Base",
    priceId: "ethereum",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Base.gif"
  },

  "eth-arbitrum": {
    asset: "ETH",
    network: "Arbitrum One",
    priceId: "ethereum",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Arbitrum.gif"
  },

  "bnb-bsc": {
    asset: "BNB",
    network: "BNB Smart Chain",
    priceId: "binancecoin",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "BNB Chain.gif"
  },

  "eth-op": {
    asset: "ETH",
    network: "OP Mainnet",
    priceId: "ethereum",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "OP.gif"
  },

  "pol-polygon": {
    asset: "POL",
    network: "Polygon PoS",
    priceId: "polygon-ecosystem-token",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Polygon.gif"
  },

  "mon-monad": {
    asset: "MON",
    network: "Monad Mainnet",
    priceId: "monad",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Monad.gif"
  },

  "usdc-arc": {
    asset: "USDC",
    network: "Arc",
    priceId: "usd-coin",
    address: "0x97F507eCBEa0eFBb36f0DeA1FB8D16A72a86f5b1",
    qr: "Arc.gif"
  }
};


/* =========================================================
   LANGUAGE
========================================================= */

function detectLanguage() {

  const browserLanguage =
    (navigator.language || "en")
      .toLowerCase()
      .split("-")[0];

  return translations[browserLanguage]
    ? browserLanguage
    : "en";
}


function translatePage(language) {

  const t = translations[language] || translations.en;

  document.documentElement.lang = language;

  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  document.getElementById("language-label").textContent =
    t.language;

  document.querySelector(".hero h1").textContent =
    t.title;

  document.querySelector(".subtitle").textContent =
    t.subtitle;

  document.querySelector(".card h2").textContent =
    t.accountTitle;

  document.querySelector(".card .intro").textContent =
    t.accountIntro;

  const labels =
    document.querySelectorAll(".form-grid .field label");

  if (labels[0]) labels[0].textContent = t.firstName;
  if (labels[1]) labels[1].textContent = t.lastName;
  if (labels[2]) labels[2].textContent = t.username;
  if (labels[3]) labels[3].textContent = t.country;
  if (labels[4]) labels[4].textContent = t.email;
  if (labels[5]) labels[5].textContent = t.password;
  if (labels[6]) labels[6].textContent = t.confirmPassword;

  document.querySelector(".checkbox-row span").textContent =
    t.terms;

  button.textContent =
    t.createAccount;

  reservationTitle.textContent =
    t.reservationTitle;

  reservationIntro.textContent =
    t.reservationIntro;

  const cryptoLabelElement =
    document.querySelector('label[for="crypto-select"]');

  if (cryptoLabelElement) {
    cryptoLabelElement.textContent =
      t.cryptoLabel;
  }

  const firstOption =
    cryptoSelect.querySelector('option[value=""]');

  if (firstOption) {
    firstOption.textContent =
      t.selectPayment;
  }
  paymentAddressLabel.textContent =
    t.paymentAddress;

  paymentWarning.textContent =
    t.paymentWarning;
}


/* =========================================================
   PAYMENT SELECTOR
========================================================= */

async function updatePaymentDetails() {

  const selected =
    cryptoSelect.value;

  if (!selected || !paymentMethods[selected]) {

    paymentDetails.hidden = true;
    currentPaymentQuote = null;
    return;
  }

  if (!currentReservation) {

    paymentDetails.hidden = true;

    console.error(
      "No active reservation found."
    );

    return;
  }

  const method =
    paymentMethods[selected];

  paymentAsset.textContent =
    method.asset;

  paymentNetwork.textContent =
    method.network;

  paymentPrice.textContent =
    `Reservation price: US$${RESERVATION_PRICE_USD} USD`;

  paymentAmount.textContent =
    `Amount to pay: Calculating...`;

  paymentQr.src =
    `https://valentin-dotcom.github.io/agartha-reserve/${encodeURIComponent(method.qr)}`;

  paymentQr.alt =
    `${method.asset} payment QR code`;

  paymentAddress.textContent =
    method.address;

  paymentDetails.hidden = false;

  try {

    const { data, error } =
      await supabaseClient.functions.invoke(
        "create-payment-quote",
        {
          body: {
            reservation_code:
              currentReservation.reservation_code,

            method_id:
              selected
          }
        }
      );

    if (error) {
      throw error;
    }

    const quote =
      data?.quote;

    if (!quote) {
      throw new Error(
        "No payment quote was returned."
      );
    }

    const cryptoAmount =
      Number(
        quote.crypto_amount
      );

    if (
      !Number.isFinite(cryptoAmount) ||
      cryptoAmount <= 0
    ) {
      throw new Error(
        "Invalid payment amount."
      );
    }

    currentPaymentQuote =
      quote;

    paymentAmount.textContent =
      `Amount to pay: ${cryptoAmount.toFixed(8)} ${method.asset}`;

  } catch (error) {

    console.error(
      "Payment quote error:",
      error
    );

    currentPaymentQuote = null;

    paymentAmount.textContent =
      "Amount to pay: Unable to calculate";

  }
}


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

const savedLanguage =
  localStorage.getItem("agartha-language");

const initialLanguage =
  savedLanguage === "auto" || !savedLanguage
    ? detectLanguage()
    : (
        translations[savedLanguage]
          ? savedLanguage
          : detectLanguage()
      );

languageSelect.value =
  (
    savedLanguage === "auto" ||
    translations[savedLanguage]
  )
    ? savedLanguage
    : "auto";

translatePage(initialLanguage);

languageSelect.addEventListener(
  "change",
  () => {

    const selected =
      languageSelect.value;

    const language =
      selected === "auto"
        ? detectLanguage()
        : selected;

    translatePage(language);

    localStorage.setItem(
      "agartha-language",
      selected
    );

    translateLogin();

    if (!reservationPanel.hidden) {

      const tLogin =
        loginTranslations[language]
        || loginTranslations.en;

      reservationIntro.textContent =
        tLogin.reservationReady;
    }
  }
);


/* =========================================================
   PAYMENT CHANGE
========================================================= */

cryptoSelect.addEventListener(
  "change",
  updatePaymentDetails
);

/* =========================================================
   VERIFY PAYMENT
========================================================= */

async function verifyPayment() {

  if (!currentReservation) {

    paymentStatus.textContent =
      "No active reservation found.";

    return;
  }

  if (!currentPaymentQuote) {

    paymentStatus.textContent =
      "Please select a payment method again to create a valid payment quote.";

    return;
  }

  const txid =
    transactionHashInput.value.trim();

  if (!txid) {

    paymentStatus.textContent =
      "Please enter your transaction ID (TXID).";

    transactionHashInput.focus();

    return;
  }

  verifyPaymentButton.disabled = true;

  paymentStatus.textContent =
    "Verifying your payment on the blockchain...";

  try {

    const { data, error } =
      await supabaseClient.functions.invoke(
        "verify-payment",
        {
          body: {
            reservation_code:
              currentReservation.reservation_code,

            quote_id:
              currentPaymentQuote.id,

            txid:
              txid
          }
        }
      );

    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error(
        "No verification response was received."
      );
    }

    if (data.verified) {

      paymentStatus.textContent =
        "Payment verified successfully.";

      verifyPaymentButton.disabled = true;

      return;
    }

    paymentStatus.textContent =
      data.message ||
      "Payment could not be verified.";

  } catch (error) {

    console.error(
      "Payment verification error:",
      error
    );

    paymentStatus.textContent =
      error?.message ||
      "Unable to verify the payment.";

  } finally {

    if (
      !paymentStatus.textContent
        .toLowerCase()
        .includes("successfully")
    ) {
      verifyPaymentButton.disabled = false;
    }

  }
}

/* =========================================================
   REGISTRATION
========================================================= */

form.addEventListener("submit", async (event) => {

  event.preventDefault();

  message.textContent = "";
  button.disabled = true;

  const language =
    document.documentElement.lang;

  const t =
    translations[language] || translations.en;

  try {

    const firstName =
      document.getElementById("first_name").value.trim();

    const lastName =
      document.getElementById("last_name").value.trim();

    const username =
      document.getElementById("username").value.trim();

    const country =
      document.getElementById("country").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirm_password").value;


    if (password !== confirmPassword) {
      throw new Error(t.errorPasswords);
    }

    if (password.length < 8) {
      throw new Error(t.errorPasswordLength);
    }

    if (username.length < 3) {
      throw new Error(t.errorUsername);
    }


    const { data, error } =
      await supabaseClient.auth.signUp({

        email,
        password,

        options: {

          emailRedirectTo:
            "https://valentin-dotcom.github.io/agartha-reserve/",

          data: {

            first_name: firstName,
            last_name: lastName,
            username,
            country_of_residence: country

          }

        }

      });


    if (error) {
      throw error;
    }


    if (data.user) {

      message.textContent =
        t.accountCreated;

      form.reset();

    }

  } catch (error) {

    console.error(error);

    message.textContent =
      error?.message || t.genericError;

  } finally {

    button.disabled = false;

  }

});

/* =========================================================
   LOGIN + SESSION MANAGEMENT
========================================================= */

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
const loginPanel = document.getElementById("login-panel");

const registerTitle = document.querySelector(".card > h2");
const registerIntro = document.querySelector(".card > .intro");

let handledUserId = null;
let signOutButton = null;
let currentReservation = null;
let currentPaymentQuote = null;


/* =========================================================
   LOGIN TRANSLATIONS
========================================================= */

const loginTranslations = {

  en: {
    loginTitle: "Already Have an Agartha Account?",
    loginIntro: "Sign in to continue to your reservation.",
    email: "Email Address",
    password: "Password",
    signIn: "SIGN IN",
    signedIn: "Signed in successfully.",
    reservationReady: "Your Agartha reservation area is ready.",
    signOut: "SIGN OUT",
    loginError: "Unable to sign in. Please check your credentials.",
    emailNotConfirmed:
      "Please confirm your email address before signing in."
  },

  es: {
    loginTitle: "¿Ya Tenés una Cuenta de Agartha?",
    loginIntro: "Iniciá sesión para continuar con tu reserva.",
    email: "Correo electrónico",
    password: "Contraseña",
    signIn: "INICIAR SESIÓN",
    signedIn: "Sesión iniciada correctamente.",
    reservationReady: "Tu área de reserva de Agartha está lista.",
    signOut: "CERRAR SESIÓN",
    loginError:
      "No se pudo iniciar sesión. Verificá tus credenciales.",
    emailNotConfirmed:
      "Confirmá tu correo electrónico antes de iniciar sesión."
  },

  pt: {
    loginTitle: "Já Possui uma Conta Agartha?",
    loginIntro: "Entre para continuar com sua reserva.",
    email: "Endereço de e-mail",
    password: "Senha",
    signIn: "ENTRAR",
    signedIn: "Login realizado com sucesso.",
    reservationReady: "Sua área de reserva da Agartha está pronta.",
    signOut: "SAIR",
    loginError:
      "Não foi possível entrar. Verifique suas credenciais.",
    emailNotConfirmed:
      "Confirme seu e-mail antes de entrar."
  },

  fr: {
    loginTitle: "Vous Avez Déjà un Compte Agartha ?",
    loginIntro:
      "Connectez-vous pour continuer votre réservation.",
    email: "Adresse e-mail",
    password: "Mot de passe",
    signIn: "SE CONNECTER",
    signedIn: "Connexion réussie.",
    reservationReady:
      "Votre espace de réservation Agartha est prêt.",
    signOut: "SE DÉCONNECTER",
    loginError:
      "Impossible de se connecter. Vérifiez vos identifiants.",
    emailNotConfirmed:
      "Veuillez confirmer votre adresse e-mail avant de vous connecter."
  },

  de: {
    loginTitle: "Du hast bereits ein Agartha-Konto?",
    loginIntro:
      "Melde dich an, um mit deiner Reservierung fortzufahren.",
    email: "E-Mail-Adresse",
    password: "Passwort",
    signIn: "ANMELDEN",
    signedIn: "Erfolgreich angemeldet.",
    reservationReady:
      "Dein Agartha-Reservierungsbereich ist bereit.",
    signOut: "ABMELDEN",
    loginError:
      "Anmeldung nicht möglich. Bitte überprüfe deine Daten.",
    emailNotConfirmed:
      "Bitte bestätige zuerst deine E-Mail-Adresse."
  },

  it: {
    loginTitle: "Hai Già un Account Agartha?",
    loginIntro:
      "Accedi per continuare con la tua prenotazione.",
    email: "Indirizzo e-mail",
    password: "Password",
    signIn: "ACCEDI",
    signedIn: "Accesso effettuato con successo.",
    reservationReady:
      "La tua area di prenotazione Agartha è pronta.",
    signOut: "ESCI",
    loginError:
      "Impossibile accedere. Verifica le credenziali.",
    emailNotConfirmed:
      "Conferma il tuo indirizzo e-mail prima di accedere."
  },

  zh: {
    loginTitle: "已经拥有 Agartha 账户？",
    loginIntro: "登录以继续您的预订。",
    email: "电子邮箱",
    password: "密码",
    signIn: "登录",
    signedIn: "登录成功。",
    reservationReady: "您的 Agartha 预订区域已准备就绪。",
    signOut: "退出登录",
    loginError: "无法登录。请检查您的登录信息。",
    emailNotConfirmed: "请先确认您的电子邮箱地址。"
  },

  ja: {
    loginTitle: "すでにAgarthaアカウントをお持ちですか？",
    loginIntro: "ログインして予約を続行してください。",
    email: "メールアドレス",
    password: "パスワード",
    signIn: "ログイン",
    signedIn: "ログインしました。",
    reservationReady:
      "Agarthaの予約エリアをご利用いただけます。",
    signOut: "ログアウト",
    loginError:
      "ログインできません。認証情報を確認してください。",
    emailNotConfirmed:
      "ログインする前にメールアドレスを確認してください。"
  },

  ko: {
    loginTitle: "이미 Agartha 계정이 있으신가요?",
    loginIntro: "로그인하여 예약을 계속하세요.",
    email: "이메일 주소",
    password: "비밀번호",
    signIn: "로그인",
    signedIn: "로그인되었습니다.",
    reservationReady:
      "Agartha 예약 영역을 사용할 수 있습니다.",
    signOut: "로그아웃",
    loginError:
      "로그인할 수 없습니다. 자격 증명을 확인하세요.",
    emailNotConfirmed:
      "로그인하기 전에 이메일 주소를 확인하세요."
  },

  ar: {
    loginTitle: "هل لديك حساب Agartha بالفعل؟",
    loginIntro: "سجّل الدخول للمتابعة إلى الحجز.",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    signIn: "تسجيل الدخول",
    signedIn: "تم تسجيل الدخول بنجاح.",
    reservationReady:
      "منطقة حجز Agartha الخاصة بك جاهزة.",
    signOut: "تسجيل الخروج",
    loginError:
      "تعذر تسجيل الدخول. تحقق من بياناتك.",
    emailNotConfirmed:
      "يرجى تأكيد بريدك الإلكتروني قبل تسجيل الدخول."
  },

  ru: {
    loginTitle: "Уже есть аккаунт Agartha?",
    loginIntro: "Войдите, чтобы продолжить бронирование.",
    email: "Электронная почта",
    password: "Пароль",
    signIn: "ВОЙТИ",
    signedIn: "Вход выполнен успешно.",
    reservationReady:
      "Раздел бронирования Agartha готов.",
    signOut: "ВЫЙТИ",
    loginError:
      "Не удалось войти. Проверьте свои данные.",
    emailNotConfirmed:
      "Подтвердите электронную почту перед входом."
  }
};


/* =========================================================
   LOGIN LANGUAGE
========================================================= */

function getCurrentLanguage() {

  const current =
    document.documentElement.lang || "en";

  return loginTranslations[current]
    ? current
    : "en";
}


function translateLogin() {

  const language = getCurrentLanguage();
  const t = loginTranslations[language];

  if (!t) {
    return;
  }

  const title =
    document.getElementById("login-title");

  const intro =
    document.getElementById("login-intro");

  const labels =
    loginForm?.querySelectorAll("label");

  if (title) {
    title.textContent = t.loginTitle;
  }

  if (intro) {
    intro.textContent = t.loginIntro;
  }

  if (labels?.[0]) {
    labels[0].textContent = t.email;
  }

  if (labels?.[1]) {
    labels[1].textContent = t.password;
  }

  if (loginButton) {
    loginButton.textContent = t.signIn;
  }

  if (signOutButton) {
    signOutButton.textContent = t.signOut;
  }
}


/* =========================================================
   SIGN OUT BUTTON
========================================================= */

function createSignOutButton() {

  if (signOutButton) {
    return;
  }

  signOutButton =
    document.createElement("button");

  signOutButton.id =
    "signout-button";

  signOutButton.type =
    "button";

  signOutButton.textContent =
    "SIGN OUT";

  signOutButton.addEventListener(
    "click",
    async () => {

      const { error } =
        await supabaseClient.auth.signOut();

      if (error) {
        console.error(error);
      }
    }
  );

  reservationPanel.appendChild(
    signOutButton
  );

  translateLogin();
}


/* =========================================================
   CREATE / LOAD RESERVATION
========================================================= */

async function loadOrCreateReservation(user) {

  if (!user) {
    return null;
  }

  const activeStatuses = [
    "pending",
    "payment_submitted",
    "payment_verified",
    "confirmed"
  ];

  const { data: existingReservation, error: findError } =
    await supabaseClient
      .from("reservations")
      .select(`
        id,
        reservation_code,
        status,
        amount_usd,
        crypto_asset,
        network,
        payment_address,
        transaction_hash,
        created_at
      `)
      .eq("user_id", user.id)
      .in("status", activeStatuses)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

  if (findError) {
    throw findError;
  }

  if (existingReservation) {
    return existingReservation;
  }

  const { data: newReservation, error: insertError } =
    await supabaseClient
      .from("reservations")
      .insert({
        user_id: user.id,
        amount_usd: RESERVATION_PRICE_USD
      })
      .select(`
        id,
        reservation_code,
        status,
        amount_usd,
        crypto_asset,
        network,
        payment_address,
        transaction_hash,
        created_at
      `)
      .single();

  if (insertError) {
    throw insertError;
  }

  return newReservation;
}


/* =========================================================
   RESERVATION DISPLAY
========================================================= */

function showReservationCode(reservation) {

  if (!reservation) {
    return;
  }

  let codeElement =
    document.getElementById(
      "reservation-code-display"
    );

  if (!codeElement) {

    codeElement =
      document.createElement("p");

    codeElement.id =
      "reservation-code-display";

    codeElement.className =
      "message";

    reservationTitle.insertAdjacentElement(
      "afterend",
      codeElement
    );
  }

  const language =
    getCurrentLanguage();

  const labels = {

    en: "Reservation ID",
    es: "ID de reserva",
    pt: "ID da reserva",
    fr: "ID de réservation",
    de: "Reservierungs-ID",
    it: "ID prenotazione",
    zh: "预订编号",
    ja: "予約ID",
    ko: "예약 ID",
    ar: "معرّف الحجز",
    ru: "ID бронирования"
  };

  codeElement.textContent =
    `${labels[language] || labels.en}: ${reservation.reservation_code}`;
}


/* =========================================================
   AUTHENTICATED UI
========================================================= */

async function showAuthenticatedState(session) {

  if (!session?.user) {
    return;
  }

  if (handledUserId === session.user.id) {
    return;
  }

  handledUserId = session.user.id;

  try {

    const reservation =
      await loadOrCreateReservation(
        session.user
      );

    currentReservation = reservation;
    currentPaymentQuote = null;
    
    if (form) {
      form.hidden = true;
    }

    if (registerTitle) {
      registerTitle.hidden = true;
    }

    if (registerIntro) {
      registerIntro.hidden = true;
    }

    if (loginPanel) {
      loginPanel.hidden = true;
    }

    reservationPanel.hidden = false;

    showReservationCode(
      reservation
    );

    createSignOutButton();

    const language =
      getCurrentLanguage();

    const t =
      loginTranslations[language]
      || loginTranslations.en;

    reservationIntro.textContent =
      t.reservationReady;

    translateLogin();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {

    console.error(error);

    handledUserId = null;

    if (loginMessage) {
      loginMessage.textContent =
        error?.message ||
        "Unable to prepare your reservation.";
    }
  }
}


/* =========================================================
   SIGNED OUT UI
========================================================= */

function showSignedOutState() {

  handledUserId = null;
  currentReservation = null;
  currentPaymentQuote = null;

  if (form) {
    form.hidden = false;
  }

  if (registerTitle) {
    registerTitle.hidden = false;
  }

  if (registerIntro) {
    registerIntro.hidden = false;
  }

  if (loginPanel) {
    loginPanel.hidden = false;
  }

  reservationPanel.hidden = true;

  if (loginMessage) {
    loginMessage.textContent = "";
  }

  if (signOutButton) {
    signOutButton.remove();
    signOutButton = null;
  }

  translateLogin();
}


/* =========================================================
   LOGIN SUBMIT
========================================================= */

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      loginMessage.textContent = "";
      loginButton.disabled = true;

      const email =
        document
          .getElementById("login-email")
          .value
          .trim();

      const password =
        document
          .getElementById("login-password")
          .value;

      try {

        const { data, error } =
          await supabaseClient.auth.signInWithPassword({
            email,
            password
          });

        if (error) {
          throw error;
        }

        const user =
          data?.user;

        if (!user) {
          throw new Error(
            "No authenticated user was returned."
          );
        }

        const session =
          data?.session;

        if (session) {
          await showAuthenticatedState(
            session
          );
        }

      } catch (error) {

        console.error(error);

        const language =
          getCurrentLanguage();

        const t =
          loginTranslations[language]
          || loginTranslations.en;

        if (
          error?.message
            ?.toLowerCase()
            .includes("email not confirmed")
        ) {

          loginMessage.textContent =
            t.emailNotConfirmed;

        } else {

          loginMessage.textContent =
            t.loginError;
        }

      } finally {

        loginButton.disabled = false;

      }
    }
  );
}


/* =========================================================
   AUTH STATE LISTENER
========================================================= */

supabaseClient.auth.onAuthStateChange(
  (event, session) => {

    window.setTimeout(
      () => {

        if (session) {

          showAuthenticatedState(
            session
          );

        } else {

          showSignedOutState();

        }

      },
      0
    );

  }
);


/* =========================================================
   INITIAL LOGIN LANGUAGE
========================================================= */

translateLogin();

/* =========================================================
   VERIFY PAYMENT BUTTON
========================================================= */

if (verifyPaymentButton) {

  verifyPaymentButton.addEventListener(
    "click",
    verifyPayment
  );

}

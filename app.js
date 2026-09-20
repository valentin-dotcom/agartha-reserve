const SUPABASE_URL = "https://qsjcwauaaxkdpbqdsurl.supabase.co";

// Pegá aquí SOLO tu Publishable Key.
// NUNCA uses sb_secret_... ni service_role.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_aAeK8ysVyWiKgmjg9b62mA_4Wl0yZer";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

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

const paymentQr =
  document.getElementById("payment-qr");

const paymentAddress =
  document.getElementById("payment-address");

const paymentAddressLabel =
  document.getElementById("payment-address-label");

const paymentWarning =
  document.getElementById("payment-warning");

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
   QR paths are ready, but real addresses are added later.
========================================================= */

const paymentMethods = {

  "eth-ethereum": {
    asset: "ETH",
    network: "Ethereum Mainnet",
    address: "ADD_ETHEREUM_ADDRESS",
    qr: "qr/eth-ethereum.png"
  },

  "sol-solana": {
    asset: "SOL",
    network: "Solana",
    address: "ADD_SOLANA_ADDRESS",
    qr: "qr/sol-solana.png"
  },

  "eth-linea": {
    asset: "ETH",
    network: "Linea Mainnet",
    address: "ADD_LINEA_ADDRESS",
    qr: "qr/eth-linea.png"
  },

  "eth-base": {
    asset: "ETH",
    network: "Base",
    address: "ADD_BASE_ADDRESS",
    qr: "qr/eth-base.png"
  },

  "eth-arbitrum": {
    asset: "ETH",
    network: "Arbitrum One",
    address: "ADD_ARBITRUM_ADDRESS",
    qr: "qr/eth-arbitrum.png"
  },

  "bnb-bsc": {
    asset: "BNB",
    network: "BNB Smart Chain",
    address: "ADD_BNB_ADDRESS",
    qr: "qr/bnb-bsc.png"
  },

  "eth-op": {
    asset: "ETH",
    network: "OP Mainnet",
    address: "ADD_OP_ADDRESS",
    qr: "qr/eth-op.png"
  },

  "pol-polygon": {
    asset: "POL",
    network: "Polygon PoS",
    address: "ADD_POLYGON_ADDRESS",
    qr: "qr/pol-polygon.png"
  },

  "mon-monad": {
    asset: "MON",
    network: "Monad Mainnet",
    address: "ADD_MONAD_ADDRESS",
    qr: "qr/mon-monad.png"
  },

  "usdc-arc": {
    asset: "USDC",
    network: "Arc",
    address: "ADD_ARC_USDC_ADDRESS",
    qr: "qr/usdc-arc.png"
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

  localStorage.setItem(
    "agartha-language",
    language
  );
}


/* =========================================================
   PAYMENT SELECTOR
========================================================= */

function updatePaymentDetails() {

  const selected =
    cryptoSelect.value;

  if (!selected || !paymentMethods[selected]) {

    paymentDetails.hidden = true;
    return;
  }

  const method =
    paymentMethods[selected];

  paymentAsset.textContent =
    method.asset;

  paymentNetwork.textContent =
    method.network;

  paymentQr.src =
    method.qr;

  paymentQr.alt =
    `${method.asset} payment QR code`;

  paymentAddress.textContent =
    method.address;

  paymentDetails.hidden = false;
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
  savedLanguage || "auto";

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

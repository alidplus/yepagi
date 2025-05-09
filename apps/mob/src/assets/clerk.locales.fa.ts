import type { LocalizationResource } from '@clerk/types'

export const faIR: LocalizationResource = {
  locale: 'fa-IR',
  backButton: 'بازگشت',
  badge__activePlan: 'فعال',
  badge__canceledEndsAt: "لغو شده • پایان در {{ date | shortDate('en-US') }}",
  badge__currentPlan: 'طرح فعلی',
  badge__default: 'پیش‌فرض',
  badge__endsAt: "پایان در {{ date | shortDate('en-US') }}",
  badge__expired: 'منقضی شده',
  badge__otherImpersonatorDevice: 'دستگاه دیگر شبیه‌ساز',
  badge__primary: 'اصلی',
  badge__renewsAt: "تمدید در {{ date | shortDate('en-US') }}",
  badge__requiresAction: 'نیازمند اقدام',
  badge__startsAt: "شروع در {{ date | shortDate('en-US') }}",
  badge__thisDevice: 'این دستگاه',
  badge__unverified: 'تأیید نشده',
  badge__upcomingPlan: 'طرح آینده',
  badge__userDevice: 'دستگاه کاربر',
  badge__you: 'شما',
  commerce: {
    alwaysFree: 'همیشه رایگان',
    availableFeatures: 'امکانات موجود',
    billedAnnually: 'سالانه صورتحساب می‌شود',
    billedMonthlyOnly: 'فقط ماهانه صورتحساب می‌شود',
    cancelSubscription: 'لغو اشتراک',
    checkout: {
      description__paymentSuccessful: 'اشتراک جدید شما فعال شد.',
      description__subscriptionSuccessful: 'اشتراک جدید شما فعال شد.',
      downgradeNotice:
        'شما تا پایان دوره صورتحساب فعلی از اشتراک فعلی خود استفاده می‌کنید و سپس به این اشتراک منتقل می‌شوید.',
      emailForm: {
        subtitle:
          'قبل از تکمیل خرید باید یک ایمیل وارد کنید تا رسیدها به آن ارسال شود.',
        title: 'افزودن ایمیل',
      },
      lineItems: {
        title__statementId: 'شناسه صورتحساب',
        title__paymentMethod: 'روش پرداخت',
        title__subscriptionBegins: 'شروع اشتراک',
        title__totalPaid: 'مجموع پرداختی',
      },
      perMonth: 'در ماه',
      title__paymentSuccessful: 'پرداخت موفق بود!',
      title__subscriptionSuccessful: 'موفقیت‌آمیز!',
    },
    defaultFreePlanActive: 'شما در حال حاضر روی طرح رایگان هستید',
    free: 'رایگان',
    getStarted: 'شروع کنید',
    keepSubscription: 'حفظ اشتراک',
    manage: 'مدیریت',
    manageSubscription: 'مدیریت اشتراک',
    month: 'ماه',
    reSubscribe: 'دوباره اشتراک بگیرید',
    seeAllFeatures: 'مشاهده همه امکانات',
    subscribe: 'اشتراک',
    switchPlan: 'تغییر به این طرح',
    switchToMonthly: 'تغییر به ماهانه',
    switchToAnnual: 'تغییر به سالانه',
    viewFeatures: 'مشاهده امکانات',
    year: 'سال',
  },
  createOrganization: {
    formButtonSubmit: 'ایجاد سازمان',
    invitePage: {
      formButtonReset: 'رد کردن',
    },
    title: 'ایجاد سازمان',
  },
  dates: {
    lastDay: "دیروز ساعت {{ date | timeString('en-US') }}",
    next6Days:
      "{{ date | weekday('en-US','long') }} ساعت {{ date | timeString('en-US') }}",
    nextDay: "فردا ساعت {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}",
    previous6Days:
      "{{ date | weekday('en-US','long') }} گذشته ساعت {{ date | timeString('en-US') }}",
    sameDay: "امروز ساعت {{ date | timeString('en-US') }}",
  },
  dividerText: 'یا',
  footerActionLink__useAnotherMethod: 'استفاده از روش دیگر',
  footerPageLink__help: 'راهنما',
  footerPageLink__privacy: 'حریم خصوصی',
  footerPageLink__terms: 'شرایط',
  formButtonPrimary: 'ادامه',
  formButtonPrimary__verify: 'تأیید',
  formFieldAction__forgotPassword: 'رمز عبور را فراموش کرده‌اید؟',
  formFieldError__matchingPasswords: 'رمزهای عبور مطابقت دارند.',
  formFieldError__notMatchingPasswords: 'رمزهای عبور مطابقت ندارند.',
  formFieldError__verificationLinkExpired:
    'لینک تأیید منقضی شده است. لطفاً لینک جدید درخواست دهید.',
  formFieldHintText__optional: 'اختیاری',
  formFieldHintText__slug:
    'اسلاگ یک شناسه قابل خواندن برای انسان است که باید یکتا باشد و معمولاً در URL استفاده می‌شود.',
  formFieldInputPlaceholder__backupCode: 'کد پشتیبان را وارد کنید',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'حذف حساب',
  formFieldInputPlaceholder__emailAddress: 'ایمیل خود را وارد کنید',
  formFieldInputPlaceholder__emailAddress_username:
    'ایمیل یا نام کاربری را وارد کنید',
  formFieldInputPlaceholder__emailAddresses:
    'example@email.com, example2@email.com',
  formFieldInputPlaceholder__firstName: 'نام',
  formFieldInputPlaceholder__lastName: 'نام خانوادگی',
  formFieldInputPlaceholder__organizationDomain: 'example.com',
  formFieldInputPlaceholder__organizationDomainEmailAddress: 'you@example.com',
  formFieldInputPlaceholder__organizationName: 'نام سازمان',
  formFieldInputPlaceholder__organizationSlug: 'my-org',
  formFieldInputPlaceholder__password: 'رمز عبور خود را وارد کنید',
  formFieldInputPlaceholder__phoneNumber: 'شماره تلفن خود را وارد کنید',
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations: 'دعوت خودکار برای این دامنه فعال شود',
  formFieldLabel__backupCode: 'کد پشتیبان',
  formFieldLabel__confirmDeletion: 'تأیید',
  formFieldLabel__confirmPassword: 'تأیید رمز عبور',
  formFieldLabel__currentPassword: 'رمز عبور فعلی',
  formFieldLabel__emailAddress: 'ایمیل',
  formFieldLabel__emailAddress_username: 'ایمیل یا نام کاربری',
  formFieldLabel__emailAddresses: 'ایمیل‌ها',
  formFieldLabel__firstName: 'نام',
  formFieldLabel__lastName: 'نام خانوادگی',
  formFieldLabel__newPassword: 'رمز عبور جدید',
  formFieldLabel__organizationDomain: 'دامنه',
  formFieldLabel__organizationDomainDeletePending:
    'حذف دعوت‌ها و پیشنهادهای در انتظار',
  formFieldLabel__organizationDomainEmailAddress: 'ایمیل تأیید دامنه',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'یک ایمیل از این دامنه وارد کنید تا کد تأیید دریافت کنید.',
  formFieldLabel__organizationName: 'نام',
  formFieldLabel__organizationSlug: 'اسلاگ',
  formFieldLabel__passkeyName: 'نام کلید عبور',
  formFieldLabel__password: 'رمز عبور',
  formFieldLabel__phoneNumber: 'شماره تلفن',
  formFieldLabel__role: 'نقش',
  formFieldLabel__signOutOfOtherSessions: 'خروج از همه دستگاه‌های دیگر',
  formFieldLabel__username: 'نام کاربری',
  impersonationFab: {
    action__signOut: 'خروج',
    title: 'ورود با {{identifier}}',
  },
  maintenanceMode:
    'در حال حاضر در حال نگهداری هستیم، اما نگران نباشید، این کار بیش از چند دقیقه طول نمی‌کشد.',
  membershipRole__admin: 'مدیر',
  membershipRole__basicMember: 'عضو',
  membershipRole__guestMember: 'مهمان',
  organizationList: {
    action__createOrganization: 'ایجاد سازمان',
    action__invitationAccept: 'پیوستن',
    action__suggestionsAccept: 'درخواست پیوستن',
    createOrganization: 'ایجاد سازمان',
    invitationAcceptedLabel: 'پیوست',
    subtitle: 'برای ادامه به {{applicationName}}',
    suggestionsAcceptedLabel: 'در انتظار تأیید',
    title: 'انتخاب حساب',
    titleWithoutPersonal: 'انتخاب سازمان',
  },
  organizationProfile: {
    badge__automaticInvitation: 'دعوت خودکار',
    badge__automaticSuggestion: 'پیشنهاد خودکار',
    badge__manualInvitation: 'بدون ثبت‌نام خودکار',
    badge__unverified: 'تأیید نشده',
    billingPage: {
      alerts: {
        noPermissionsToManageBilling:
          'شما اجازه مدیریت صورتحساب برای این حساب را ندارید.',
      },
      paymentSourcesSection: {
        actionLabel__default: 'تنظیم به عنوان پیش‌فرض',
        actionLabel__remove: 'حذف',
        add: 'افزودن روش پرداخت جدید',
        addSubtitle: 'یک روش پرداخت جدید به حساب خود اضافه کنید.',
        cancelButton: 'لغو',
        formButtonPrimary__add: 'افزودن روش پرداخت',
        formButtonPrimary__pay: 'پرداخت {{amount}}',
        payWithTestCardButton: 'پرداخت با کارت تست',
        removeResource: {
          messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
          messageLine2:
            'شما دیگر نمی‌توانید از این منبع پرداخت استفاده کنید و هر اشتراک مکرر وابسته به آن دیگر کار نخواهد کرد.',
          successMessage: '{{paymentSource}} از حساب شما حذف شده است.',
          title: 'حذف روش پرداخت',
        },
        title: 'روش‌های پرداخت',
      },
      start: {
        headerTitle__statements: 'صورتحساب‌ها',
        headerTitle__plans: 'طرح‌ها',
        headerTitle__subscriptions: 'اشتراک‌ها',
      },
      subscriptionsListSection: {
        actionLabel__switchPlan: 'تغییر طرح‌ها',
        title: 'اشتراک',
      },
      switchPlansSection: {
        title: 'تغییر طرح‌ها',
      },
      subscriptionsSection: {
        actionLabel__default: 'مدیریت',
      },
      title: 'صورتحساب',
    },
    createDomainPage: {
      subtitle:
        'دامنه را برای تأیید اضافه کنید. کاربران با آدرس‌های ایمیل در این دامنه می‌توانند به صورت خودکار به سازمان بپیوندند یا درخواست پیوستن دهند.',
      title: 'افزودن دامنه',
    },
    invitePage: {
      detailsTitle__inviteFailed:
        'دعوت‌ها ارسال نشدند. دعوت‌های در انتظار برای آدرس‌های ایمیل زیر وجود دارد: {{email_addresses}}.',
      formButtonPrimary__continue: 'ارسال دعوت‌ها',
      selectDropdown__role: 'انتخاب نقش',
      subtitle:
        'یک یا چند آدرس ایمیل وارد یا کپی کنید، جدا شده با فاصله یا کاما.',
      successMessage: 'دعوت‌ها با موفقیت ارسال شدند',
      title: 'دعوت اعضای جدید',
    },
    membersPage: {
      action__invite: 'دعوت',
      action__search: 'جستجو',
      activeMembersTab: {
        menuAction__remove: 'حذف عضو',
        tableHeader__actions: 'اقدامات',
        tableHeader__joined: 'پیوست',
        tableHeader__role: 'نقش',
        tableHeader__user: 'کاربر',
      },
      detailsTitle__emptyRow: 'هیچ عضوی برای نمایش وجود ندارد',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'کاربران را با اتصال یک دامنه ایمیل به سازمان خود دعوت کنید. هر کسی که با یک دامنه ایمیل مطابقت داشته باشد می‌تواند در هر زمان به سازمان بپیوندد.',
          headerTitle: 'دعوت‌های خودکار',
          primaryButton: 'مدیریت دامنه‌های تأیید شده',
        },
        table__emptyRow: 'هیچ دعوتی برای نمایش وجود ندارد',
      },
      invitedMembersTab: {
        menuAction__revoke: 'لغو دعوت',
        tableHeader__invited: 'دعوت شده',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'کاربرانی که با یک دامنه ایمیل مطابقت داشته باشند، می‌توانند پیشنهاد درخواست پیوستن به سازمان شما را مشاهده کنند.',
          headerTitle: 'پیشنهادهای خودکار',
          primaryButton: 'مدیریت دامنه‌های تأیید شده',
        },
        menuAction__approve: 'تأیید',
        menuAction__reject: 'رد',
        tableHeader__requested: 'درخواست دسترسی',
        table__emptyRow: 'هیچ درخواستی برای نمایش وجود ندارد',
      },
      start: {
        headerTitle__invitations: 'دعوت‌ها',
        headerTitle__members: 'اعضا',
        headerTitle__requests: 'درخواست‌ها',
      },
    },
    navbar: {
      billing: 'صورتحساب',
      description: 'مدیریت سازمان خود.',
      general: 'عمومی',
      members: 'اعضا',
      title: 'سازمان',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'عبارت "{{organizationName}}" را در زیر وارد کنید.',
          messageLine1: 'آیا مطمئن هستید که می‌خواهید این سازمان را حذف کنید؟',
          messageLine2: 'این اقدام دائمی و غیرقابل بازگشت است.',
          successMessage: 'شما سازمان را حذف کرده‌اید.',
          title: 'حذف سازمان',
        },
        leaveOrganization: {
          actionDescription:
            'عبارت "{{organizationName}}" را در زیر وارد کنید.',
          messageLine1:
            'آیا مطمئن هستید که می‌خواهید این سازمان را ترک کنید؟ شما دسترسی به این سازمان و برنامه‌های آن را از دست خواهید داد.',
          messageLine2: 'این اقدام دائمی و غیرقابل بازگشت است.',
          successMessage: 'شما سازمان را ترک کرده‌اید.',
          title: 'ترک سازمان',
        },
        title: 'خطر',
      },
      domainSection: {
        menuAction__manage: 'مدیریت',
        menuAction__remove: 'حذف',
        menuAction__verify: 'تأیید',
        primaryButton: 'افزودن دامنه',
        subtitle:
          'اجازه دهید کاربران به صورت خودکار به سازمان بپیوندند یا بر اساس یک دامنه ایمیل تأیید شده درخواست پیوستن دهند.',
        title: 'دامنه‌های تأیید شده',
      },
      successMessage: 'سازمان به‌روزرسانی شد.',
      title: 'به‌روزرسانی پروفایل',
    },
    removeDomainPage: {
      messageLine1: 'دامنه ایمیل {{domain}} حذف خواهد شد.',
      messageLine2:
        'کاربران نمی‌توانند به صورت خودکار به سازمان بپیوندند پس از این.',
      successMessage: '{{domain}} حذف شد.',
      title: 'حذف دامنه',
    },
    start: {
      headerTitle__general: 'عمومی',
      headerTitle__members: 'اعضا',
      profileSection: {
        primaryButton: 'به‌روزرسانی پروفایل',
        title: 'پروفایل سازمان',
        uploadAction__title: 'لوگو',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          'حذف این دامنه بر کاربران دعوت شده تأثیر خواهد گذاشت.',
        removeDomainActionLabel__remove: 'حذف دامنه',
        removeDomainSubtitle:
          'این دامنه را از دامنه‌های تأیید شده خود حذف کنید',
        removeDomainTitle: 'حذف دامنه',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'کاربران به صورت خودکار دعوت می‌شوند تا به سازمان بپیوندند و می‌توانند در هر زمان بپیوندند.',
        automaticInvitationOption__label: 'دعوت‌های خودکار',
        automaticSuggestionOption__description:
          'کاربران پیشنهاد درخواست پیوستن دریافت می‌کنند، اما باید توسط مدیر تأیید شوند قبل از اینکه بتوانند به سازمان بپیوندند.',
        automaticSuggestionOption__label: 'پیشنهادهای خودکار',
        calloutInfoLabel:
          'تغییر حالت ثبت‌نام فقط بر کاربران جدید تأثیر خواهد گذاشت.',
        calloutInvitationCountLabel:
          'دعوت‌های در انتظار ارسال شده به کاربران: {{count}}',
        calloutSuggestionCountLabel:
          'پیشنهادهای در انتظار ارسال شده به کاربران: {{count}}',
        manualInvitationOption__description:
          'کاربران فقط می‌توانند به صورت دستی به سازمان دعوت شوند.',
        manualInvitationOption__label: 'بدون ثبت‌نام خودکار',
        subtitle:
          'انتخاب کنید که کاربران از این دامنه چگونه می‌توانند به سازمان بپیوندند.',
      },
      start: {
        headerTitle__danger: 'خطر',
        headerTitle__enrollment: 'گزینه‌های ثبت‌نام',
      },
      subtitle:
        'دامنه {{domain}} اکنون تأیید شده است. ادامه دهید با انتخاب حالت ثبت‌نام.',
      title: 'به‌روزرسانی {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'کد تأیید ارسال شده به آدرس ایمیل خود را وارد کنید',
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'دامنه {{domainName}} باید از طریق ایمیل تأیید شود.',
      subtitleVerificationCodeScreen:
        'یک کد تأیید به {{emailAddress}} ارسال شد. کد را وارد کنید تا ادامه دهید.',
      title: 'تأیید دامنه',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'ایجاد سازمان',
    action__invitationAccept: 'پیوستن',
    action__manageOrganization: 'مدیریت',
    action__suggestionsAccept: 'درخواست پیوستن',
    notSelected: 'هیچ سازمانی انتخاب نشده است',
    personalWorkspace: 'حساب شخصی',
    suggestionsAcceptedLabel: 'در انتظار تأیید',
  },
  paginationButton__next: 'بعدی',
  paginationButton__previous: 'قبلی',
  paginationRowText__displaying: 'نمایش',
  paginationRowText__of: 'از',
  reverification: {
    alternativeMethods: {
      actionLink: 'دریافت کمک',
      actionText: 'هیچ‌کدام از این‌ها را ندارید؟',
      blockButton__backupCode: 'استفاده از کد پشتیبان',
      blockButton__emailCode: 'ارسال کد به ایمیل {{identifier}}',
      blockButton__passkey: 'استفاده از کلید عبور',
      blockButton__password: 'ادامه با رمز عبور',
      blockButton__phoneCode: 'ارسال کد به تلفن {{identifier}}',
      blockButton__totp: 'استفاده از برنامه احراز هویت',
      getHelp: {
        blockButton__emailSupport: 'ایمیل به پشتیبانی',
        content:
          'اگر در تأیید حساب خود مشکل دارید، به ما ایمیل بزنید و ما با شما همکاری خواهیم کرد تا دسترسی را به زودی بازگردانیم.',
        title: 'دریافت کمک',
      },
      subtitle:
        'مشکلی دارید؟ می‌توانید از هر یک از این روش‌ها برای تأیید استفاده کنید.',
      title: 'استفاده از روش دیگر',
    },
    backupCodeMfa: {
      subtitle:
        'کد پشتیبانی که هنگام تنظیم احراز هویت دو مرحله‌ای دریافت کرده‌اید را وارد کنید',
      title: 'وارد کردن کد پشتیبان',
    },
    emailCode: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'کد ارسال شده به ایمیل خود را وارد کنید تا ادامه دهید',
      title: 'تأیید مورد نیاز',
    },
    noAvailableMethods: {
      message:
        'نمی‌توان با تأیید ادامه داد. هیچ عامل احراز هویت مناسب تنظیم نشده است',
      subtitle: 'خطایی رخ داد',
      title: 'نمی‌توان حساب شما را تأیید کرد',
    },
    passkey: {
      blockButton__passkey: 'استفاده از کلید عبور',
      subtitle:
        'استفاده از کلید عبور هویت شما را تأیید می‌کند. دستگاه شما ممکن است اثر انگشت، چهره یا قفل صفحه را درخواست کند.',
      title: 'استفاده از کلید عبور',
    },
    password: {
      actionLink: 'استفاده از روش دیگر',
      subtitle: 'رمز عبور فعلی خود را وارد کنید تا ادامه دهید',
      title: 'تأیید مورد نیاز',
    },
    phoneCode: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'کد ارسال شده به تلفن خود را وارد کنید تا ادامه دهید',
      title: 'تأیید مورد نیاز',
    },
    phoneCodeMfa: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'کد ارسال شده به تلفن خود را وارد کنید تا ادامه دهید',
      title: 'تأیید مورد نیاز',
    },
    totpMfa: {
      formTitle: 'کد تأیید',
      subtitle:
        'کد تولید شده توسط برنامه احراز هویت خود را وارد کنید تا ادامه دهید',
      title: 'تأیید دو مرحله‌ای',
    },
  },
  signIn: {
    accountSwitcher: {
      action__addAccount: 'افزودن حساب',
      action__signOutAll: 'خروج از همه حساب‌ها',
      subtitle: 'حسابی را که می‌خواهید با آن ادامه دهید انتخاب کنید.',
      title: 'انتخاب حساب',
    },
    alternativeMethods: {
      actionLink: 'دریافت کمک',
      actionText: 'هیچ‌کدام از این‌ها را ندارید؟',
      blockButton__backupCode: 'استفاده از کد پشتیبان',
      blockButton__emailCode: 'ارسال کد به ایمیل {{identifier}}',
      blockButton__emailLink: 'ارسال لینک به ایمیل {{identifier}}',
      blockButton__passkey: 'ورود با کلید عبور',
      blockButton__password: 'ورود با رمز عبور',
      blockButton__phoneCode: 'ارسال کد به تلفن {{identifier}}',
      blockButton__totp: 'استفاده از برنامه احراز هویت',
      getHelp: {
        blockButton__emailSupport: 'ایمیل به پشتیبانی',
        content:
          'اگر در ورود به حساب خود مشکل دارید، به ما ایمیل بزنید و ما با شما همکاری خواهیم کرد تا دسترسی را به زودی بازگردانیم.',
        title: 'دریافت کمک',
      },
      subtitle:
        'مشکلی دارید؟ می‌توانید از هر یک از این روش‌ها برای ورود استفاده کنید.',
      title: 'استفاده از روش دیگر',
    },
    backupCodeMfa: {
      subtitle:
        'کد پشتیبانی شما همان کدی است که هنگام تنظیم احراز هویت دو مرحله‌ای دریافت کرده‌اید.',
      title: 'وارد کردن کد پشتیبان',
    },
    emailCode: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای ادامه به {{applicationName}}',
      title: 'ایمیل خود را بررسی کنید',
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          'برای ادامه، لینک تأیید را در دستگاه و مرورگری که ورود را آغاز کرده‌اید باز کنید',
        title: 'لینک تأیید برای این دستگاه نامعتبر است',
      },
      expired: {
        subtitle: 'به تب اصلی بازگردید تا ادامه دهید.',
        title: 'این لینک تأیید منقضی شده است',
      },
      failed: {
        subtitle: 'به تب اصلی بازگردید تا ادامه دهید.',
        title: 'این لینک تأیید نامعتبر است',
      },
      formSubtitle: 'از لینک تأیید ارسال شده به ایمیل خود استفاده کنید',
      formTitle: 'لینک تأیید',
      loading: {
        subtitle: 'به زودی هدایت خواهید شد',
        title: 'در حال ورود...',
      },
      resendButton: 'لینک دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای ادامه به {{applicationName}}',
      title: 'ایمیل خود را بررسی کنید',
      unusedTab: {
        title: 'می‌توانید این تب را ببندید',
      },
      verified: {
        subtitle: 'به زودی هدایت خواهید شد',
        title: 'ورود موفقیت‌آمیز',
      },
      verifiedSwitchTab: {
        subtitle: 'به تب اصلی بازگردید تا ادامه دهید',
        subtitleNewTab: 'به تب جدید بازگردید تا ادامه دهید',
        titleNewTab: 'ورود در تب دیگر انجام شد',
      },
    },
    forgotPassword: {
      formTitle: 'کد تنظیم مجدد رمز عبور',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای تنظیم مجدد رمز عبور خود',
      subtitle_email: 'ابتدا کد ارسال شده به آدرس ایمیل خود را وارد کنید',
      subtitle_phone: 'ابتدا کد ارسال شده به تلفن خود را وارد کنید',
      title: 'تنظیم مجدد رمز عبور',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'تنظیم مجدد رمز عبور',
      label__alternativeMethods: 'یا، با روش دیگری وارد شوید',
      title: 'رمز عبور خود را فراموش کرده‌اید؟',
    },
    noAvailableMethods: {
      message: 'نمی‌توان با ورود ادامه داد. هیچ عامل احراز هویت موجود نیست.',
      subtitle: 'خطایی رخ داد',
      title: 'نمی‌توان وارد شد',
    },
    passkey: {
      subtitle:
        'استفاده از کلید عبور تأیید می‌کند که شما هستید. دستگاه شما ممکن است اثر انگشت، چهره یا قفل صفحه را درخواست کند.',
      title: 'استفاده از کلید عبور',
    },
    password: {
      actionLink: 'استفاده از روش دیگر',
      subtitle: 'رمز عبور مرتبط با حساب خود را وارد کنید',
      title: 'رمز عبور خود را وارد کنید',
    },
    passwordPwned: {
      title: 'رمز عبور به خطر افتاده',
    },
    phoneCode: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای ادامه به {{applicationName}}',
      title: 'تلفن خود را بررسی کنید',
    },
    phoneCodeMfa: {
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای ادامه، لطفاً کد تأیید ارسال شده به تلفن خود را وارد کنید',
      title: 'تلفن خود را بررسی کنید',
    },
    resetPassword: {
      formButtonPrimary: 'تنظیم مجدد رمز عبور',
      requiredMessage:
        'به دلایل امنیتی، لازم است رمز عبور خود را تنظیم مجدد کنید.',
      successMessage:
        'رمز عبور شما با موفقیت تغییر کرد. لطفاً لحظه‌ای صبر کنید تا وارد شوید.',
      title: 'تنظیم رمز عبور جدید',
    },
    resetPasswordMfa: {
      detailsLabel:
        'ما باید هویت شما را قبل از تنظیم مجدد رمز عبور تأیید کنیم.',
    },
    start: {
      actionLink: 'ثبت‌نام',
      actionLink__join_waitlist: 'پیوستن به لیست انتظار',
      actionLink__use_email: 'استفاده از ایمیل',
      actionLink__use_email_username: 'استفاده از ایمیل یا نام کاربری',
      actionLink__use_passkey: 'استفاده از کلید عبور به جای آن',
      actionLink__use_phone: 'استفاده از تلفن',
      actionLink__use_username: 'استفاده از نام کاربری',
      actionText: 'حساب ندارید؟',
      actionText__join_waitlist: 'دسترسی زودهنگام می‌خواهید؟',
      subtitle: 'خوش آمدید! لطفاً برای ادامه وارد شوید',
      subtitleCombined: undefined,
      title: 'ورود به {{applicationName}}',
      titleCombined: 'ادامه به {{applicationName}}',
    },
    totpMfa: {
      formTitle: 'کد تأیید',
      subtitle:
        'برای ادامه، لطفاً کد تأیید تولید شده توسط برنامه احراز هویت خود را وارد کنید',
      title: 'تأیید دو مرحله‌ای',
    },
  },
  signInEnterPasswordTitle: 'رمز عبور خود را وارد کنید',
  signUp: {
    continue: {
      actionLink: 'ورود',
      actionText: 'قبلاً حساب دارید؟',
      subtitle: 'لطفاً جزئیات باقی‌مانده را برای ادامه پر کنید.',
      title: 'پر کردن فیلدهای ناقص',
    },
    emailCode: {
      formSubtitle: 'کد تأیید ارسال شده به آدرس ایمیل خود را وارد کنید',
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'کد تأیید ارسال شده به ایمیل خود را وارد کنید',
      title: 'ایمیل خود را تأیید کنید',
    },
    emailLink: {
      clientMismatch: {
        subtitle:
          'برای ادامه، لینک تأیید را در دستگاه و مرورگری که ثبت‌نام را آغاز کرده‌اید باز کنید',
        title: 'لینک تأیید برای این دستگاه نامعتبر است',
      },
      formSubtitle: 'از لینک تأیید ارسال شده به آدرس ایمیل خود استفاده کنید',
      formTitle: 'لینک تأیید',
      loading: {
        title: 'در حال ثبت‌نام...',
      },
      resendButton: 'لینک دریافت نکردید؟ ارسال مجدد',
      subtitle: 'برای ادامه به {{applicationName}}',
      title: 'ایمیل خود را تأیید کنید',
      verified: {
        title: 'ثبت‌نام موفقیت‌آمیز',
      },
      verifiedSwitchTab: {
        subtitle: 'به تب جدید بازگردید تا ادامه دهید',
        subtitleNewTab: 'به تب قبلی بازگردید تا ادامه دهید',
        title: 'ایمیل با موفقیت تأیید شد',
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy:
          'من موافقم با {{ privacyPolicyLink || link("سیاست حفظ حریم خصوصی") }}',
        label__onlyTermsOfService:
          'من موافقم با {{ termsOfServiceLink || link("شرایط استفاده") }}',
        label__termsOfServiceAndPrivacyPolicy:
          'من موافقم با {{ termsOfServiceLink || link("شرایط استفاده") }} و {{ privacyPolicyLink || link("سیاست حفظ حریم خصوصی") }}',
      },
      continue: {
        subtitle: 'لطفاً شرایط را بخوانید و قبول کنید تا ادامه دهید',
        title: 'رضایت قانونی',
      },
    },
    phoneCode: {
      formSubtitle: 'کد تأیید ارسال شده به شماره تلفن خود را وارد کنید',
      formTitle: 'کد تأیید',
      resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
      subtitle: 'کد تأیید ارسال شده به تلفن خود را وارد کنید',
      title: 'تلفن خود را تأیید کنید',
    },
    restrictedAccess: {
      actionLink: 'ورود',
      actionText: 'قبلاً حساب دارید؟',
      blockButton__emailSupport: 'ایمیل به پشتیبانی',
      blockButton__joinWaitlist: 'پیوستن به لیست انتظار',
      subtitle:
        'ثبت‌نام‌ها در حال حاضر غیرفعال هستند. اگر فکر می‌کنید باید دسترسی داشته باشید، لطفاً با پشتیبانی تماس بگیرید.',
      subtitleWaitlist:
        'ثبت‌نام‌ها در حال حاضر غیرفعال هستند. برای اولین اطلاع از زمان راه‌اندازی، به لیست انتظار بپیوندید.',
      title: 'دسترسی محدود',
    },
    start: {
      actionLink: 'ورود',
      actionLink__use_email: 'استفاده از ایمیل به جای آن',
      actionLink__use_phone: 'استفاده از تلفن به جای آن',
      actionText: 'قبلاً حساب دارید؟',
      subtitle: 'خوش آمدید! لطفاً جزئیات را برای شروع پر کنید.',
      subtitleCombined: 'خوش آمدید! لطفاً جزئیات را برای شروع پر کنید.',
      title: 'ایجاد حساب کاربری',
      titleCombined: 'ایجاد حساب کاربری',
    },
  },
  socialButtonsBlockButton: 'ادامه با {{provider|titleize}}',
  socialButtonsBlockButtonManyInView: '{{provider|titleize}}',
  unstable__errors: {
    already_a_member_in_organization: '{{email}} قبلاً عضو سازمان است.',
    captcha_invalid: undefined,
    captcha_unavailable:
      'ثبت‌نام ناموفق به دلیل شکست در اعتبارسنجی ربات. لطفاً صفحه را تازه کنید تا دوباره امتحان کنید یا برای کمک بیشتر با پشتیبانی تماس بگیرید.',
    form_code_incorrect: undefined,
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: undefined,
    form_param_format_invalid: undefined,
    form_param_format_invalid__email_address: undefined,
    form_param_format_invalid__phone_number: undefined,
    form_param_max_length_exceeded__first_name: undefined,
    form_param_max_length_exceeded__last_name: undefined,
    form_param_max_length_exceeded__name: undefined,
    form_param_nil: undefined,
    form_param_value_invalid: undefined,
    form_password_incorrect: undefined,
    form_password_length_too_short:
      'رمز عبور شما خیلی کوتاه است. باید حداقل 8 کاراکتر باشد.',
    form_password_not_strong_enough: 'رمز عبور شما به اندازه کافی قوی نیست.',
    form_password_pwned:
      'این رمز عبور به عنوان بخشی از یک نقض یافت شده است و نمی‌توان از آن استفاده کرد، لطفاً رمز عبور دیگری امتحان کنید.',
    form_password_pwned__sign_in:
      'این رمز عبور به عنوان بخشی از یک نقض یافت شده است و نمی‌توان از آن استفاده کرد، لطفاً رمز عبور خود را تنظیم مجدد کنید.',
    form_password_size_in_bytes_exceeded: undefined,
    form_password_validation_failed: undefined,
    form_username_invalid_character: undefined,
    form_username_invalid_length:
      'نام کاربری شما باید بین {{min_length}} و {{max_length}} کاراکتر باشد.',
    identification_deletion_failed: undefined,
    not_allowed_access: undefined,
    organization_domain_blocked: undefined,
    organization_domain_common: undefined,
    organization_domain_exists_for_enterprise_connection: undefined,
    organization_membership_quota_exceeded: undefined,
    organization_minimum_permissions_needed: undefined,
    passkey_already_exists: 'یک کلید عبور قبلاً با این دستگاه ثبت شده است.',
    passkey_not_supported: 'کلیدهای عبور در این دستگاه پشتیبانی نمی‌شوند.',
    passkey_pa_not_supported:
      'ثبت‌نام نیاز به یک احراز هویت پلتفرم دارد اما دستگاه از آن پشتیبانی نمی‌کند.',
    passkey_registration_cancelled:
      'ثبت‌نام کلید عبور لغو شد یا زمان آن به پایان رسید.',
    passkey_retrieval_cancelled:
      'تأیید کلید عبور لغو شد یا زمان آن به پایان رسید.',
    passwordComplexity: {
      maximumLength: 'کمتر از {{length}} کاراکتر',
      minimumLength: '{{length}} یا بیشتر کاراکتر',
      requireLowercase: 'یک حرف کوچک',
      requireNumbers: 'یک عدد',
      requireSpecialCharacter: 'یک کاراکتر خاص',
      requireUppercase: 'یک حرف بزرگ',
      sentencePrefix: 'رمز عبور شما باید شامل باشد',
    },
    phone_number_exists: undefined,
    session_exists: undefined,
    web3_missing_identifier:
      'یک افزونه کیف پول Web3 نمی‌توان یافت. لطفاً یکی را نصب کنید تا ادامه دهید.',
    zxcvbn: {
      couldBeStronger:
        'رمز عبور شما کار می‌کند، اما می‌تواند قوی‌تر باشد. سعی کنید کاراکترهای بیشتری اضافه کنید.',
      goodPassword: 'رمز عبور شما تمام الزامات لازم را برآورده می‌کند.',
      notEnough: 'رمز عبور شما به اندازه کافی قوی نیست.',
      suggestions: {
        allUppercase: 'برخی از حروف را بزرگ کنید، اما نه همه.',
        anotherWord: 'کلمات بیشتری اضافه کنید که کمتر رایج هستند.',
        associatedYears: 'از سال‌هایی که با شما مرتبط هستند اجتناب کنید.',
        capitalization: 'بیش از حرف اول را بزرگ کنید.',
        dates: 'از تاریخ‌ها و سال‌هایی که با شما مرتبط هستند اجتناب کنید.',
        l33t: "از جایگزینی‌های قابل پیش‌بینی حروف مانند '@' برای 'a' اجتناب کنید.",
        longerKeyboardPattern:
          'از الگوهای صفحه کلید طولانی‌تر استفاده کنید و چندین بار جهت تایپ را تغییر دهید.',
        noNeed:
          'شما می‌توانید رمزهای عبور قوی بدون استفاده از نمادها، اعداد یا حروف بزرگ ایجاد کنید.',
        pwned:
          'اگر از این رمز عبور در جای دیگری استفاده می‌کنید، باید آن را تغییر دهید.',
        recentYears: 'از سال‌های اخیر اجتناب کنید.',
        repeated: 'از کلمات و کاراکترهای تکراری اجتناب کنید.',
        reverseWords: 'از املای معکوس کلمات رایج اجتناب کنید.',
        sequences: 'از توالی‌های کاراکتر رایج اجتناب کنید.',
        useWords:
          'از کلمات متعدد استفاده کنید، اما از عبارات رایج اجتناب کنید.',
      },
      warnings: {
        common: 'این یک رمز عبور معمولی است.',
        commonNames: 'نام‌ها و نام‌های خانوادگی رایج حدس زدن آسان هستند.',
        dates: 'تاریخ‌ها حدس زدن آسان هستند.',
        extendedRepeat:
          'الگوهای کاراکتر تکراری مانند "abcabcabc" حدس زدن آسان هستند.',
        keyPattern: 'الگوهای صفحه کلید کوتاه حدس زدن آسان هستند.',
        namesByThemselves:
          'نام‌های تنها یا نام‌های خانوادگی حدس زدن آسان هستند.',
        pwned: 'رمز عبور شما توسط یک نقض داده در اینترنت افشا شده است.',
        recentYears: 'سال‌های اخیر حدس زدن آسان هستند.',
        sequences: 'توالی‌های کاراکتر رایج مانند "abc" حدس زدن آسان هستند.',
        similarToCommon: 'این مشابه یک رمز عبور معمولی است.',
        simpleRepeat: 'کاراکترهای تکراری مانند "aaa" حدس زدن آسان هستند.',
        straightRow:
          'ردیف‌های مستقیم کلیدها در صفحه کلید شما حدس زدن آسان هستند.',
        topHundred: 'این یک رمز عبور پر استفاده است.',
        topTen: 'این یک رمز عبور بسیار پر استفاده است.',
        userInputs: 'نباید هیچ داده شخصی یا مرتبط با صفحه وجود داشته باشد.',
        wordByItself: 'کلمات تنها حدس زدن آسان هستند.',
      },
    },
  },
  userButton: {
    action__addAccount: 'افزودن حساب',
    action__manageAccount: 'مدیریت حساب',
    action__signOut: 'خروج',
    action__signOutAll: 'خروج از همه حساب‌ها',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'کپی شد!',
      actionLabel__copy: 'کپی همه',
      actionLabel__download: 'دانلود .txt',
      actionLabel__print: 'چاپ',
      infoText1: 'کدهای پشتیبان برای این حساب فعال خواهند شد.',
      infoText2:
        'کدهای پشتیبان را مخفی نگه دارید و آن‌ها را به صورت امن ذخیره کنید. اگر مشکوک به افشای آن‌ها هستید، می‌توانید کدهای پشتیبان را دوباره تولید کنید.',
      subtitle__codelist: 'آن‌ها را به صورت امن ذخیره کنید و مخفی نگه دارید.',
      successMessage:
        'کدهای پشتیبان اکنون فعال هستند. شما می‌توانید یکی از این‌ها را برای ورود به حساب خود استفاده کنید، اگر دسترسی به دستگاه احراز هویت خود را از دست بدهید. هر کد فقط یک بار قابل استفاده است.',
      successSubtitle:
        'شما می‌توانید یکی از این‌ها را برای ورود به حساب خود استفاده کنید، اگر دسترسی به دستگاه احراز هویت خود را از دست بدهید.',
      title: 'افزودن تأیید کد پشتیبان',
      title__codelist: 'کدهای پشتیبان',
    },
    billingPage: {
      paymentSourcesSection: {
        actionLabel__default: 'تنظیم به عنوان پیش‌فرض',
        actionLabel__remove: 'حذف',
        add: 'افزودن روش پرداخت جدید',
        addSubtitle: 'یک روش پرداخت جدید به حساب خود اضافه کنید.',
        cancelButton: 'لغو',
        formButtonPrimary__add: 'افزودن روش پرداخت',
        formButtonPrimary__pay: 'پرداخت {{amount}}',
        payWithTestCardButton: 'پرداخت با کارت تست',
        removeResource: {
          messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
          messageLine2:
            'شما دیگر نمی‌توانید از این منبع پرداخت استفاده کنید و هر اشتراک مکرر وابسته به آن دیگر کار نخواهد کرد.',
          successMessage: '{{paymentSource}} از حساب شما حذف شده است.',
          title: 'حذف روش پرداخت',
        },
        title: 'روش‌های پرداخت',
      },
      start: {
        headerTitle__statements: 'صورتحساب‌ها',
        headerTitle__plans: 'طرح‌ها',
        headerTitle__subscriptions: 'اشتراک',
      },
      subscriptionsListSection: {
        actionLabel__switchPlan: 'تغییر طرح‌ها',
        title: 'اشتراک',
      },
      subscriptionsSection: {
        actionLabel__default: 'مدیریت',
      },
      switchPlansSection: {
        title: 'تغییر طرح‌ها',
      },
      title: 'صورتحساب',
    },
    connectedAccountPage: {
      formHint: 'یک ارائه‌دهنده را برای اتصال حساب خود انتخاب کنید.',
      formHint__noAccounts: 'هیچ ارائه‌دهنده حساب خارجی موجود نیست.',
      removeResource: {
        messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
        messageLine2:
          'شما دیگر نمی‌توانید از این حساب متصل استفاده کنید و هر ویژگی وابسته به آن دیگر کار نخواهد کرد.',
        successMessage: '{{connectedAccount}} از حساب شما حذف شده است.',
        title: 'حذف حساب متصل',
      },
      socialButtonsBlockButton: '{{provider|titleize}}',
      successMessage: 'ارائه‌دهنده به حساب شما اضافه شده است',
      title: 'افزودن حساب متصل',
    },
    deletePage: {
      actionDescription: 'عبارت "حذف حساب" را در زیر وارد کنید.',
      confirm: 'حذف حساب',
      messageLine1: 'آیا مطمئن هستید که می‌خواهید حساب خود را حذف کنید؟',
      messageLine2: 'این اقدام دائمی و غیرقابل بازگشت است.',
      title: 'حذف حساب',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'یک ایمیل حاوی کد تأیید به این آدرس ایمیل ارسال خواهد شد.',
        formSubtitle: 'کد تأیید ارسال شده به {{identifier}} را وارد کنید',
        formTitle: 'کد تأیید',
        resendButton: 'کد دریافت نکردید؟ ارسال مجدد',
        successMessage: 'ایمیل {{identifier}} به حساب شما اضافه شده است.',
      },
      emailLink: {
        formHint: 'یک ایمیل حاوی لینک تأیید به این آدرس ایمیل ارسال خواهد شد.',
        formSubtitle:
          'روی لینک تأیید در ایمیل ارسال شده به {{identifier}} کلیک کنید',
        formTitle: 'لینک تأیید',
        resendButton: 'لینک دریافت نکردید؟ ارسال مجدد',
        successMessage: 'ایمیل {{identifier}} به حساب شما اضافه شده است.',
      },
      enterpriseSSOLink: {
        formButton: 'برای ورود کلیک کنید',
        formSubtitle: 'ورود را با {{identifier}} کامل کنید',
      },
      formHint:
        'شما باید این آدرس ایمیل را تأیید کنید قبل از اینکه بتواند به حساب شما اضافه شود.',
      removeResource: {
        messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
        messageLine2:
          'شما دیگر نمی‌توانید با استفاده از این آدرس ایمیل وارد شوید.',
        successMessage: '{{emailAddress}} از حساب شما حذف شده است.',
        title: 'حذف آدرس ایمیل',
      },
      title: 'افزودن آدرس ایمیل',
      verifyTitle: 'تأیید آدرس ایمیل',
    },
    formButtonPrimary__add: 'افزودن',
    formButtonPrimary__continue: 'ادامه',
    formButtonPrimary__finish: 'پایان',
    formButtonPrimary__remove: 'حذف',
    formButtonPrimary__save: 'ذخیره',
    formButtonReset: 'لغو',
    mfaPage: {
      formHint: 'یک روش برای افزودن انتخاب کنید.',
      title: 'افزودن تأیید دو مرحله‌ای',
    },
    mfaPhoneCodePage: {
      backButton: 'استفاده از شماره موجود',
      primaryButton__addPhoneNumber: 'افزودن شماره تلفن',
      removeResource: {
        messageLine1:
          '{{identifier}} دیگر کدهای تأیید را هنگام ورود دریافت نخواهد کرد.',
        messageLine2:
          'حساب شما ممکن است به اندازه کافی امن نباشد. آیا مطمئن هستید که می‌خواهید ادامه دهید؟',
        successMessage:
          'تأیید دو مرحله‌ای کد SMS برای {{mfaPhoneCode}} حذف شده است',
        title: 'حذف تأیید دو مرحله‌ای',
      },
      subtitle__availablePhoneNumbers:
        'یک شماره تلفن موجود را برای ثبت‌نام تأیید دو مرحله‌ای کد SMS انتخاب کنید یا یک شماره جدید اضافه کنید.',
      subtitle__unavailablePhoneNumbers:
        'هیچ شماره تلفن موجود برای ثبت‌نام تأیید دو مرحله‌ای کد SMS وجود ندارد، لطفاً یک شماره جدید اضافه کنید.',
      successMessage1:
        'هنگام ورود، شما باید یک کد تأیید ارسال شده به این شماره تلفن را به عنوان یک مرحله اضافی وارد کنید.',
      successMessage2:
        'این کدهای پشتیبان را ذخیره کنید و آن‌ها را در جایی امن نگه دارید. اگر دسترسی به دستگاه احراز هویت خود را از دست بدهید، می‌توانید از کدهای پشتیبان برای ورود استفاده کنید.',
      successTitle: 'تأیید کد SMS فعال شد',
      title: 'افزودن تأیید کد SMS',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'اسکن کد QR به جای آن',
        buttonUnableToScan__nonPrimary: 'نمی‌توانید کد QR را اسکن کنید؟',
        infoText__ableToScan:
          'یک روش ورود جدید در برنامه احراز هویت خود تنظیم کنید و کد QR زیر را اسکن کنید تا به حساب خود لینک شود.',
        infoText__unableToScan:
          'یک روش ورود جدید در احراز هویت خود تنظیم کنید و کلید ارائه شده زیر را وارد کنید.',
        inputLabel__unableToScan1:
          'اطمینان حاصل کنید که رمزهای مبتنی بر زمان یا یک‌بار فعال هستند، سپس لینک کردن حساب خود را کامل کنید.',
        inputLabel__unableToScan2:
          'به طور جایگزین، اگر احراز هویت شما از URI‌های TOTP پشتیبانی می‌کند، می‌توانید URI کامل را نیز کپی کنید.',
      },
      removeResource: {
        messageLine1:
          'کدهای تأیید از این احراز هویت دیگر هنگام ورود مورد نیاز نخواهند بود.',
        messageLine2:
          'حساب شما ممکن است به اندازه کافی امن نباشد. آیا مطمئن هستید که می‌خواهید ادامه دهید؟',
        successMessage:
          'تأیید دو مرحله‌ای از طریق برنامه احراز هویت حذف شده است.',
        title: 'حذف تأیید دو مرحله‌ای',
      },
      successMessage:
        'تأیید دو مرحله‌ای اکنون فعال است. هنگام ورود، شما باید یک کد تأیید از این احراز هویت را به عنوان یک مرحله اضافی وارد کنید.',
      title: 'افزودن برنامه احراز هویت',
      verifySubtitle: 'کد تأیید تولید شده توسط احراز هویت خود را وارد کنید',
      verifyTitle: 'کد تأیید',
    },
    mobileButton__menu: 'منو',
    navbar: {
      account: 'پروفایل',
      billing: 'صورتحساب',
      description: 'مدیریت اطلاعات حساب خود.',
      security: 'امنیت',
      title: 'حساب',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: '{{name}} از این حساب حذف خواهد شد.',
        title: 'حذف کلید عبور',
      },
      subtitle__rename:
        'می‌توانید نام کلید عبور را تغییر دهید تا پیدا کردن آن آسان‌تر شود.',
      title__rename: 'تغییر نام کلید عبور',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'توصیه می‌شود از همه دستگاه‌های دیگر که ممکن است از رمز عبور قدیمی شما استفاده کرده باشند خارج شوید.',
      readonly:
        'رمز عبور شما در حال حاضر نمی‌تواند ویرایش شود زیرا شما فقط می‌توانید از طریق اتصال سازمانی وارد شوید.',
      successMessage__set: 'رمز عبور شما تنظیم شده است.',
      successMessage__signOutOfOtherSessions:
        'همه دستگاه‌های دیگر خارج شده‌اند.',
      successMessage__update: 'رمز عبور شما به‌روزرسانی شده است.',
      title__set: 'تنظیم رمز عبور',
      title__update: 'به‌روزرسانی رمز عبور',
    },
    phoneNumberPage: {
      infoText:
        'یک پیام متنی حاوی کد تأیید به این شماره تلفن ارسال خواهد شد. هزینه پیام و داده ممکن است اعمال شود.',
      removeResource: {
        messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
        messageLine2:
          'شما دیگر نمی‌توانید با استفاده از این شماره تلفن وارد شوید.',
        successMessage: '{{phoneNumber}} از حساب شما حذف شده است.',
        title: 'حذف شماره تلفن',
      },
      successMessage: '{{identifier}} به حساب شما اضافه شده است.',
      title: 'افزودن شماره تلفن',
      verifySubtitle: 'کد تأیید ارسال شده به {{identifier}} را وارد کنید',
      verifyTitle: 'تأیید شماره تلفن',
    },
    profilePage: {
      fileDropAreaHint: 'اندازه توصیه شده 1:1، تا 10MB.',
      imageFormDestructiveActionSubtitle: 'حذف',
      imageFormSubtitle: 'بارگذاری',
      imageFormTitle: 'تصویر پروفایل',
      readonly:
        'اطلاعات پروفایل شما توسط اتصال سازمانی ارائه شده است و نمی‌تواند ویرایش شود.',
      successMessage: 'پروفایل شما به‌روزرسانی شده است.',
      title: 'به‌روزرسانی پروفایل',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'خروج از دستگاه',
        title: 'دستگاه‌های فعال',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'اتصال مجدد',
        actionLabel__reauthorize: 'اکنون مجوز دهید',
        destructiveActionTitle: 'حذف',
        primaryButton: 'اتصال حساب',
        subtitle__disconnected: 'این حساب قطع شده است.',
        subtitle__reauthorize:
          'محدوده‌های مورد نیاز به‌روزرسانی شده‌اند و ممکن است شما با محدودیت عملکرد مواجه شوید. لطفاً این برنامه را مجدداً مجوز دهید تا از هرگونه مشکل جلوگیری کنید',
        title: 'حساب‌های متصل',
      },
      dangerSection: {
        deleteAccountButton: 'حذف حساب',
        title: 'حذف حساب',
      },
      emailAddressesSection: {
        destructiveAction: 'حذف ایمیل',
        detailsAction__nonPrimary: 'تنظیم به عنوان اصلی',
        detailsAction__primary: 'تکمیل تأیید',
        detailsAction__unverified: 'تأیید',
        primaryButton: 'افزودن آدرس ایمیل',
        title: 'آدرس‌های ایمیل',
      },
      enterpriseAccountsSection: {
        title: 'حساب‌های سازمانی',
      },
      headerTitle__account: 'جزئیات پروفایل',
      headerTitle__security: 'امنیت',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'تولید مجدد',
          headerTitle: 'کدهای پشتیبان',
          subtitle__regenerate:
            'یک مجموعه جدید از کدهای پشتیبان امن دریافت کنید. کدهای پشتیبان قبلی حذف خواهند شد و نمی‌توان از آن‌ها استفاده کرد.',
          title__regenerate: 'تولید مجدد کدهای پشتیبان',
        },
        phoneCode: {
          actionLabel__setDefault: 'تنظیم به عنوان پیش‌فرض',
          destructiveActionLabel: 'حذف',
        },
        primaryButton: 'افزودن تأیید دو مرحله‌ای',
        title: 'تأیید دو مرحله‌ای',
        totp: {
          destructiveActionTitle: 'حذف',
          headerTitle: 'برنامه احراز هویت',
        },
      },
      passkeysSection: {
        menuAction__destructive: 'حذف',
        menuAction__rename: 'تغییر نام',
        primaryButton: 'افزودن کلید عبور',
        title: 'کلیدهای عبور',
      },
      passwordSection: {
        primaryButton__setPassword: 'تنظیم رمز عبور',
        primaryButton__updatePassword: 'به‌روزرسانی رمز عبور',
        title: 'رمز عبور',
      },
      phoneNumbersSection: {
        destructiveAction: 'حذف شماره تلفن',
        detailsAction__nonPrimary: 'تنظیم به عنوان اصلی',
        detailsAction__primary: 'تکمیل تأیید',
        detailsAction__unverified: 'تأیید شماره تلفن',
        primaryButton: 'افزودن شماره تلفن',
        title: 'شماره‌های تلفن',
      },
      profileSection: {
        primaryButton: 'به‌روزرسانی پروفایل',
        title: 'پروفایل',
      },
      usernameSection: {
        primaryButton__setUsername: 'تنظیم نام کاربری',
        primaryButton__updateUsername: 'به‌روزرسانی نام کاربری',
        title: 'نام کاربری',
      },
      web3WalletsSection: {
        destructiveAction: 'حذف کیف پول',
        detailsAction__nonPrimary: 'تنظیم به عنوان اصلی',
        primaryButton: 'اتصال کیف پول',
        title: 'کیف پول‌های Web3',
      },
    },
    usernamePage: {
      successMessage: 'نام کاربری شما به‌روزرسانی شده است.',
      title__set: 'تنظیم نام کاربری',
      title__update: 'به‌روزرسانی نام کاربری',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} از این حساب حذف خواهد شد.',
        messageLine2:
          'شما دیگر نمی‌توانید با استفاده از این کیف پول Web3 وارد شوید.',
        successMessage: '{{web3Wallet}} از حساب شما حذف شده است.',
        title: 'حذف کیف پول Web3',
      },
      subtitle__availableWallets:
        'یک کیف پول Web3 را برای اتصال به حساب خود انتخاب کنید.',
      subtitle__unavailableWallets: 'هیچ کیف پول Web3 موجود نیست.',
      successMessage: 'کیف پول به حساب شما اضافه شده است.',
      title: 'افزودن کیف پول Web3',
      web3WalletButtonsBlockButton: '{{provider|titleize}}',
    },
  },
  waitlist: {
    start: {
      actionLink: 'ورود',
      actionText: 'قبلاً دسترسی دارید؟',
      formButton: 'پیوستن به لیست انتظار',
      subtitle:
        'آدرس ایمیل خود را وارد کنید و ما به شما اطلاع خواهیم داد که جایگاه شما آماده است',
      title: 'پیوستن به لیست انتظار',
    },
    success: {
      message: 'به زودی هدایت خواهید شد...',
      subtitle: 'ما با شما تماس خواهیم گرفت وقتی جایگاه شما آماده باشد',
      title: 'با تشکر از پیوستن به لیست انتظار!',
    },
  },
} as const

<p align="center">
  <img src="icon.svg" width="96" height="96" alt="">
</p>

<h1 align="center">dsh-persian</h1>

<p align="center">
  پشتیبانی کامل فارسی و راست‌به‌چپ برای رابط وب <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness (DSH)</a><br>
  Persian and right-to-left support for the DeepSeek Harness Web UI
</p>

<p align="center">
  <a href="#فارسی">فارسی</a> · <a href="#english">English</a>
</p>

---

<div dir="rtl">

## فارسی

یک پلاگین برای DSH که متن فارسی را کنار انگلیسی درست و خوانا نمایش می‌دهد.

### امکانات

- **فونت وزیرمتن** — حروف فارسی (و عربی و اردو) با فونت متغیر [وزیرمتن](https://github.com/rastikerdar/vazirmatn) و وزن‌های ۱۰۰ تا ۹۰۰ نمایش داده می‌شوند. فونت با `unicode-range` فقط روی حروف فارسی اعمال می‌شود؛ پس انگلیسی و کد همان فونت برنامه را نگه می‌دارند و فونت دلخواهی که در تنظیمات Appearance گذاشته‌اید برای متن لاتین سر جایش می‌ماند. فونت داخل پلاگین جاسازی شده و به اینترنت نیازی ندارد.
- **جهت خودکار هر پاراگراف** — در پیام‌های گفتگو، متن «فکر کردن» مدل، کادر نوشتن پیام، فیلدها و textareaها جهت هر پاراگراف از اولین حرفش تشخیص داده می‌شود: فارسی راست‌به‌چپ و راست‌چین، انگلیسی چپ‌به‌راست؛ علامت‌هایی مثل «!» و «؟» هم سمت درست می‌افتند.
- **مارک‌داون آینه‌ای** — فهرست‌ها، نقل‌قول‌ها، جدول‌ها و چک‌باکس‌های فارسی به سمت راست می‌روند.
- **کد همیشه چپ‌به‌راست** — بلوک کد، کد درون‌خطی، ترمینال و فرمول ریاضی همیشه چپ‌به‌راست و جدا از متن فارسی اطراف نمایش داده می‌شوند.

### نصب

**راه ساده:** در یک گفتگوی DSH این را برای عامل بفرستید:

```text
این باندل DSH را با Plugin Manager نصب کن:
https://github.com/nyxon-tech/dsh-persian/archive/refs/tags/v1.0.0.tar.gz
```

عامل ابزار `plugin_manager` را با `install_bundle` و همین آدرس اجرا می‌کند (نیاز به تأیید شما دارد) و به git نیازی نیست. بعد از نصب، صفحهٔ DSH را یک بار رفرش کنید. برای نسخه‌های بعدی، آدرس آخرین [ریلیز](https://github.com/nyxon-tech/dsh-persian/releases) را بدهید.

**از روی سورس:** مخزن را کلون کنید و از عامل بخواهید پوشه را نصب کند:

```bash
git clone https://github.com/nyxon-tech/dsh-persian.git
```

```text
باندل DSH داخل پوشهٔ <مسیر کامل dsh-persian> را با Plugin Manager نصب کن.
```

نصب از پوشه به‌صورت لینک انجام می‌شود؛ پوشه را جابه‌جا یا پاک نکنید.

**غیرفعال‌سازی یا حذف:** از Settings › Plugins، یا از عامل بخواهید باندل `@nyxon-tech/dsh-persian` را غیرفعال یا حذف کند. با غیرفعال شدن، همهٔ استایل‌ها و ویژگی‌های `dir` که پلاگین اضافه کرده پاک می‌شوند.

### محدودیت‌ها

- خود رابط برنامه (منوها، سایدبار، دکمه‌ها) آینه‌ای و ترجمه نمی‌شود؛ پلاگین روی **محتوا** تمرکز دارد.
- بخشی از قواعد به نام کلاس‌های CSS خود DSH (مثل بخش مارک‌داون و حباب پیام) وابسته است و ممکن است بعد از به‌روزرسانی DSH نیاز به اصلاح داشته باشد. فونت و قواعد کلی جهت متن به این نام‌ها وابسته نیستند.
- با DSH نسخهٔ 0.2.2 ساخته و نصب شده است.

</div>

---

## English

A DeepSeek Harness plugin that makes Persian (and other Arabic-script text) read properly next to English.

### Features

- **Vazirmatn font.** Persian, Arabic and Urdu letters render with the bundled [Vazirmatn](https://github.com/rastikerdar/vazirmatn)
  variable font (weights 100–900). The face is limited by `unicode-range`, so English and code keep the app font, and a
  custom font set in Settings › Appearance still applies to Latin text. The font is embedded; no network access is needed.
- **Direction per paragraph.** Chat messages, reasoning, the composer, text inputs and textareas resolve their direction
  from each paragraph's first letter (`unicode-bidi: plaintext`): a Persian paragraph is right-aligned and right to left,
  an English one stays left to right, and end punctuation lands on the correct side.
- **Markdown mirroring.** Lists, block quotes, task boxes and tables inside Markdown get `dir="auto"`, so a Persian list
  puts its bullets and indentation on the right.
- **Code stays LTR.** Code blocks, inline code, terminals and math are always left to right and isolated from the
  surrounding Persian text.

### Install

**Quick:** send this to the agent in any DSH conversation:

```text
Install this DSH bundle with the Plugin Manager:
https://github.com/nyxon-tech/dsh-persian/archive/refs/tags/v1.0.0.tar.gz
```

The agent calls `plugin_manager` with `install_bundle` and that URL (you approve it); git is not required. Refresh the
DSH page once afterwards. For later versions, use the archive URL of the latest
[release](https://github.com/nyxon-tech/dsh-persian/releases).

**From source:** clone the repository and ask the agent to install the folder:

```bash
git clone https://github.com/nyxon-tech/dsh-persian.git
```

```text
Install the DSH bundle in the folder <absolute path to dsh-persian> with the Plugin Manager.
```

A folder installation is linked, so keep the folder in place.

**Disable or remove:** use Settings › Plugins, or ask the agent to disable or remove the bundle `@nyxon-tech/dsh-persian`.
Disabling it removes its stylesheet and every `dir` attribute it added.

### Limitations

- The app chrome (menus, sidebar, buttons) is neither mirrored nor translated; the plugin focuses on content.
- Some rules target the local names of DSH's CSS-module classes (the Markdown root, message bubbles) and may need an
  update after a DSH release. The font and the general direction rules do not depend on them.
- Built and tested against DSH 0.2.2.

### Development

`client.js` is generated: edit `src/client.js`, then run `node scripts/build.mjs`, which inlines
`assets/Vazirmatn-wght.woff2` as base64 into the single-file browser module that the DSH module loader expects.
`index.js` is an empty Host half; `cordis.patch.yml` inserts the plugin row.

```text
src/client.js        browser half source (stylesheet + Markdown direction observer)
scripts/build.mjs    writes client.js with the font inlined
client.js            generated browser module (committed so installs need no build)
index.js             Host half (no-op)
cordis.patch.yml     bundle patch
locale/*.json        plugin title and description (en, fa, zh)
icon.svg             plugin icon
assets/              Vazirmatn font and its license
```

### License

Plugin code: [MIT](LICENSE). Vazirmatn v33.003 by Saber Rastikerdar, [SIL Open Font License 1.1](assets/Vazirmatn-OFL.txt).

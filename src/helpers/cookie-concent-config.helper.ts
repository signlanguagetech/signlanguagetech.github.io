import type { CookieConsentConfig } from 'vanilla-cookieconsent';
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function cookieConsentConfig(): CookieConsentConfig {
  return {
    guiOptions: {
      consentModal: {
        layout: 'box inline',
        position: 'bottom left',
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    onFirstConsent: (param) => {
      console.log({ param })
    },
    categories: {
      necessary: {
        readOnly: true,
      },
      analytics: {
        services: {
          ga: {
            label:
              '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
            onAccept: () => {
              console.log('ga4 accepted');
              const gtagScript = document.createElement('script')
              gtagScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-MX94SJZ1E8')
              // <script is:inline src='https://www.googletagmanager.com/gtag/js?id=G-MX94SJZ1E8'></script>

              gtagScript.onload = function() {
                window.dataLayer = window.dataLayer || [];
                function gtag(...args: any[]) { 
                  window.dataLayer.push(args) 
                }
              
                gtag('js', new Date());
                gtag('config', 'G-MX94SJZ1E8');
              }
              
            },
            onReject: () => {
              console.log('ga4 rejected');
            },
            cookies: [],
          },
          another: {
            label: 'Another one (dummy)',
          },
        },
      },
    },
    language: {
      default: 'en',
      autoDetect: 'browser',
      translations: {
        en: {
          consentModal: {
            title: "Hello traveller, it's cookie time!",
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage preferences',
            footer:
              '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
          },
          preferencesModal: {
            title: 'Consent Preferences Center',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close modal',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'Cookie Usage',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              },
              {
                title:
                  'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Analytics Cookies',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                linkedCategory: 'analytics',
              },
              {
                title: 'More information',
                description:
                  'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
              },
            ],
          },
        },
      },
    },
  };
}

'use strict';

/**
 * Export validations.
 */

module.exports = {
  configByMemberState: {
    'legal-entity': {
      // Austria
      AT: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // Åland Islands
      AX: {
        replaceCountry: 'FI',
        validateInternally: true
      },
      // Belgium
      BE: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Bulgaria
      BG: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // Cyprus
      CY: {
        formats: [/^\d{8}[A-Z]$/],
        validateInternally: true
      },
      // Czechia
      CZ: {
        formats: [/^\d{9}$/, /^\d{10}$/],
        validateInternally: true
      },
      // Germany
      DE: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Denmark
      DK: {
        formats: [/^\d{8}$/],
        validateInternally: true
      },
      // Estonia
      EE: {
        formats: [/^\d{8}$/],
        validateInternally: true
      },
      // Spain
      ES: {
        formats: [/^[A-Z]\d{8}$/],
        validateInternally: true
      },
      // Finland
      FI: {
        formats: [/^\d{8}$/],
        validateInternally: true
      },
      // France
      FR: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // United Kingdom
      GB: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // French Guiana
      GF: {
        replaceCountry: 'FR',
        validateInternally: true
      },
      // Gibraltar
      GI: {
        replaceCountry: 'GB',
        validateInternally: true
      },
      // Guadeloupe
      GP: {
        replaceCountry: 'FR',
        validateInternally: true
      },
      // Greece
      GR: {
        formats: [/^\d{9}$/],
        renameMemberState: 'EL',
        validateInternally: true
      },
      // Croatia
      HR: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Hungary
      HU: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Ireland
      IE: {
        formats: [/^\d{7}[A-Z]{1,2}$/, /^CHY\d{1,5}$/],
        validateInternally: true
      },
      // Iceland
      IS: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Italy
      IT: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Liechtenstein
      LI: {
        formats: [/^5\d{8}$/],
        validateInternally: true
      },
      // Lithuania
      LT: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // Luxembourg
      LU: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Latvia
      LV: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Saint Martin
      MF: {
        replaceCountry: 'FR',
        validateInternally: true
      },
      // Martinique
      MQ: {
        replaceCountry: 'FR',
        validateInternally: true
      },
      // Malta
      MT: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // Netherlands
      NL: {
        formats: [/^\d{9}$/],
        validateInternally: true
      },
      // Norway
      NO: {
        formats: [/^[89]\d{8}$/],
        validateInternally: true
      },
      // Poland
      PL: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Portugal
      PT: {
        formats: [/^[56789]\d{8}$/],
        validateInternally: true
      },
      // Réunion
      RE: {
        replaceCountry: 'FR',
        validateInternally: true
      },
      // Romania
      RO: {
        formats: [/^\d{13}$/],
        validateInternally: true
      },
      // Sweden
      SE: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Slovenia
      SI: {
        formats: [/^\d{8}$/],
        validateInternally: true
      },
      // Slovakia
      SK: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Mayotte
      YT: {
        replaceCountry: 'FR',
        validateInternally: true
      }
    },
    'natural-person': {
      // Austria
      AT: {
        formats: [/^\d{9}$/]
      },
      // Åland Islands
      AX: {
        replaceCountry: 'FI'
      },
      // Belgium
      BE: {
        formats: [/^\d{11}$/]
      },
      // Bulgaria
      BG: {
        formats: [/^\d{10}$/]
      },
      // Cyprus
      CY: {
        formats: [/^\d{8}[A-Z]$/]
      },
      // Czechia
      CZ: {
        formats: [/^\d{9}$/, /^\d{10}$/]
      },
      // Germany
      DE: {
        formats: [/^\d{11}$/]
      },
      // Denmark
      DK: {
        formats: [/^\d{10}$/]
      },
      // Estonia
      EE: {
        formats: [/^\d{11}$/]
      },
      // Spain
      ES: {
        formats: [/^\d{8}[A-Z]$/, /^[KLMXYZ]\d{7}[A-Z]$/]
      },
      // Finland
      FI: {
        formats: [/^\d{6}[ABCDEFUVWXY+-]\d{3}[A-Z0-9]$/],
        sanitizePattern: /[./\s]/g
      },
      // France
      FR: {
        formats: [/^[0123]\d{12}$/]
      },
      // United Kingdom
      GB: {
        formats: [/^[A-Z]{2}\d{6}[A-D]$/, /^\d{10}$/, /^\d{13}$/],
        validateInternally: true
      },
      // French Guiana
      GF: {
        replaceCountry: 'FR'
      },
      // Gibraltar
      GI: {
        replaceCountry: 'GB'
      },
      // Guadeloupe
      GP: {
        replaceCountry: 'FR'
      },
      // Greece
      GR: {
        formats: [/^\d{9}$/],
        renameMemberState: 'EL'
      },
      // Croatia
      HR: {
        formats: [/^\d{11}$/]
      },
      // Hungary
      HU: {
        formats: [/^\d{10}$/]
      },
      // Ireland
      IE: {
        formats: [/^\d{7}[A-Z]{1,2}$/]
      },
      // Iceland
      IS: {
        formats: [/^\d{10}$/],
        validateInternally: true
      },
      // Italy
      IT: {
        formats: [/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/]
      },
      // Liechtenstein
      LI: {
        formats: [/^\d{4,12}$/],
        sanitizePattern: /[-/\s.A-Z]/g,
        validateInternally: true
      },
      // Lithuania
      LT: {
        formats: [/^\d{11}$/]
      },
      // Luxembourg
      LU: {
        formats: [/^\d{13}$/]
      },
      // Latvia
      LV: {
        formats: [/^\d{11}$/]
      },
      // Saint Martin
      MF: {
        replaceCountry: 'FR'
      },
      // Martinique
      MQ: {
        replaceCountry: 'FR'
      },
      // Malta
      MT: {
        formats: [/^\d{7}[ABGHLMPZ]$/, /^\d{9}$/]
      },
      // Netherlands
      NL: {
        formats: [/^\d{9}$/]
      },
      // Norway
      NO: {
        formats: [/^\d{11}$/],
        validateInternally: true
      },
      // Poland
      PL: {
        formats: [/^\d{10}$/, /^\d{11}$/]
      },
      // Portugal
      PT: {
        formats: [/^\d{9}$/]
      },
      // Réunion
      RE: {
        replaceCountry: 'FR'
      },
      // Romania
      RO: {
        formats: [/^\d{13}$/]
      },
      // Sweden
      SE: {
        formats: [/^\d{10}$/]
      },
      // Slovenia
      SI: {
        formats: [/^\d{8}$/]
      },
      // Slovakia
      SK: {
        formats: [/^\d{9}$/, /^\d{10}$/]
      },
      // Mayotte
      YT: {
        replaceCountry: 'FR'
      }
    }
  }
};

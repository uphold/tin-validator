/**
 * Export legal entity TINs.
 */

module.exports.legalEntityTins = [
  // Austria
  {
    country: 'AT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Åland Islands
  {
    country: 'AX',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // Belgium
  {
    country: 'BE',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Bulgaria
  {
    country: 'BG',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Cyprus
  {
    country: 'CY',
    tin: {
      invalid: ['123456789', 'ABCABCABC', '123456789A'],
      masked: ['XXXXX678A'],
      valid: ['12345678A']
    }
  },
  // Czechia
  {
    country: 'CZ',
    tin: {
      invalid: ['1234', 'ABCABCABC', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXX6789', 'XXXXXX7890'],
      valid: ['123456789', '1234567890']
    }
  },
  // Germany
  {
    country: 'DE',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Denmark
  {
    country: 'DK',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // Estonia
  {
    country: 'EE',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // Spain
  {
    country: 'ES',
    tin: {
      invalid: ['1234', 'ABCABCABC', '123456789'],
      masked: ['XXXXX5678'],
      valid: ['A12345678']
    }
  },
  // Finland
  {
    country: 'FI',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // France
  {
    country: 'FR',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // French Guiana
  {
    country: 'GF',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // United Kingdom
  {
    country: 'GB',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Gibraltar
  {
    country: 'GI',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Guadeloupe
  {
    country: 'GP',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Greece
  {
    country: 'GR',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Croatia
  {
    country: 'HR',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Hungary
  {
    country: 'HU',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Ireland
  {
    country: 'IE',
    tin: {
      invalid: ['ABCABCAB', 'ABCABCABC', '12345678', '123456789', '1234567A0', '1234567AB0'],
      // TODO(vitor.costa): check this short TIN masked.
      masked: ['XXXX567A', 'XXXXX67AB', 'XXXX2345'],
      valid: ['1234567A', '1234567AB', 'CHY12345']
    }
  },
  // Iceland
  {
    country: 'IS',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Italy
  {
    country: 'IT',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Liechtenstein
  {
    country: 'LI',
    tin: {
      invalid: ['123', 'ABCABCABC', '123456789', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['523456789']
    }
  },
  // Lithuania
  {
    country: 'LT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Luxembourg
  {
    country: 'LU',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Latvia
  {
    country: 'LV',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Saint Martin
  {
    country: 'MF',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Martinique
  {
    country: 'MQ',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Malta
  {
    country: 'MT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Netherlands
  {
    country: 'NL',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Norway
  {
    country: 'NO',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['823456789']
    }
  },
  // Poland
  {
    country: 'PL',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Portugal
  {
    country: 'PT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '123456789', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['523456789']
    }
  },
  // Réunion
  {
    country: 'RE',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Romania
  {
    country: 'RO',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Sweden
  {
    country: 'SE',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Slovenia
  {
    country: 'SI',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // Slovakia
  {
    country: 'SK',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Mayotte
  {
    country: 'YT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  }
];

/**
 * Export natural person TINs.
 */

module.exports.naturalPersonTins = [
  // Austria
  {
    country: 'AT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Åland Islands
  {
    country: 'AX',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456A12345', '123456+12345', '123456712345'],
      masked: ['XXXXXXX123A', 'XXXXXXX1230', 'XXXXXX+123A', 'XXXXXX-1230'],
      valid: ['123456A123A', '123456A1230', '123456+123A', '123456-1230']
    }
  },
  // Belgium
  {
    country: 'BE',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Bulgaria
  {
    country: 'BG',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Cyprus
  {
    country: 'CY',
    tin: {
      invalid: ['123456789', 'ABCABCABC', '123456789A'],
      masked: ['XXXXX678A'],
      valid: ['12345678A']
    }
  },
  // Czechia
  {
    country: 'CZ',
    tin: {
      invalid: ['1234', 'ABCABCABC', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXX6789', 'XXXXXX7890'],
      valid: ['123456789', '1234567890']
    }
  },
  // Germany
  {
    country: 'DE',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Denmark
  {
    country: 'DK',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Estonia
  {
    country: 'EE',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Spain
  {
    country: 'ES',
    tin: {
      invalid: ['1234', 'ABCABCABC', 'A1234567', '1234567A', '123456789', 'A1234567A'],
      masked: ['XXXXX678A', 'XXXXX567A'],
      valid: ['12345678A', 'K1234567A']
    }
  },
  // Finland
  {
    country: 'FI',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456A12345', '123456+12345', '123456712345', '123456P1230', '123456*1230'],
      masked: ['XXXXXXX123A', 'XXXXXXX1230', 'XXXXXX+123A', 'XXXXXX-123A'],
      valid: ['123456A123A', '123456A1230', '123456+123A', '123456-123A']
    }
  },
  // France
  {
    country: 'FR',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234', '9234567890123'],
      masked: ['XXXXXXXXX0123', 'XXXXXXXXX0123', 'XXXXXXXXX0123', 'XXXXXXXXX0123'],
      valid: ['0234567890123', '1234567890123', '2234567890123', '3234567890123']
    }
  },
  // United Kingdom
  {
    country: 'GB',
    tin: {
      invalid: ['1234', 'ABCABCABC', '123456789', 'ABCABCABCA', 'A12345678', 'A1234567Z', 'ABCABCABCABCA', 'A123456789012'],
      masked: ['XXXXX456A', 'XXXXXX7890', 'XXXXXXXXX0123'],
      valid: ['AB123456A', '1234567890', '1234567890123']
    }
  },
  // French Guiana
  {
    country: 'GF',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Gibraltar
  {
    country: 'GI',
    tin: {
      invalid: ['1234', 'ABCABCABC', '123456789', 'ABCABCABCA', 'A12345678', 'ABCABCABCABCA', 'A123456789012'],
      masked: ['XXXXX456A', 'XXXXXX7890', 'XXXXXXXXX0123'],
      valid: ['AB123456A', '1234567890', '1234567890123']
    }
  },
  // Guadeloupe
  {
    country: 'GP',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Greece
  {
    country: 'GR',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Croatia
  {
    country: 'HR',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Hungary
  {
    country: 'HU',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Ireland
  {
    country: 'IE',
    tin: {
      invalid: ['1234', 'ABCABCAB', 'ABCABCABC', '12345678', '123456789', '1234567A0', '1234567AB0'],
      masked: ['XXXX567A', 'XXXXX67AB'],
      valid: ['1234567A', '1234567AB']
    }
  },
  // Iceland
  {
    country: 'IS',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890'],
      valid: ['1234567890']
    }
  },
  // Italy
  {
    country: 'IT',
    tin: {
      invalid: ['1234', 'ABCABCABCABCABCA', 'ABCDEF12A12A123AA', '1234567890123456'],
      masked: ['XXXXXXXXXXXX123A'],
      valid: ['ABCDEF12A12A123A']
    }
  },
  // Liechtenstein
  {
    country: 'LI',
    tin: {
      invalid: ['123', 'ABCA', 'ABCABC', 'ABCABCABCABC', '1234567890123'],
      // TODO(vitor.costa): check this short TIN masked and the one with dash and dot.
      masked: ['1234', 'XX3456', 'XXXXXXXX9012', 'XX-XXX.456'],
      valid: ['1234', '123456', '123456789012', 'FL-123.456']
    }
  },
  // Lithuania
  {
    country: 'LT',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Luxembourg
  {
    country: 'LU',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Latvia
  {
    country: 'LV',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Saint Martin
  {
    country: 'MF',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Martinique
  {
    country: 'MQ',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Malta
  {
    country: 'MT',
    tin: {
      invalid: ['1234', 'ABCABCAB', 'ABCABCABC', '12345678', '1234567890', '1234567K'],
      masked: ['XXXX567A', 'XXXXX6789'],
      valid: ['1234567A', '123456789']
    }
  },
  // Netherlands
  {
    country: 'NL',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Norway
  {
    country: 'NO',
    tin: {
      invalid: ['1234', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXXX8901'],
      valid: ['12345678901']
    }
  },
  // Poland
  {
    country: 'PL',
    tin: {
      invalid: ['1234', 'ABCABCABCA', 'ABCABCABCAB', '123456789012'],
      masked: ['XXXXXX7890', 'XXXXXXX8901'],
      valid: ['1234567890', '12345678901']
    }
  },
  // Portugal
  {
    country: 'PT',
    tin: {
      invalid: ['1234', 'ABCABCABC', '1234567890'],
      masked: ['XXXXX6789'],
      valid: ['123456789']
    }
  },
  // Réunion
  {
    country: 'RE',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Romania
  {
    country: 'RO',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  },
  // Sweden
  {
    country: 'SE',
    tin: {
      invalid: ['1234', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXXX7890', 'XXXXXXXX9012'],
      valid: ['1234567890', '123456789012']
    }
  },
  // Slovenia
  {
    country: 'SI',
    tin: {
      invalid: ['1234', 'ABCABCAB', '123456789'],
      masked: ['XXXX5678'],
      valid: ['12345678']
    }
  },
  // Slovakia
  {
    country: 'SK',
    tin: {
      invalid: ['1234', 'ABCABCABC', 'ABCABCABCA', '12345678901'],
      masked: ['XXXXX6789', 'XXXXXX7890'],
      valid: ['123456789', '1234567890']
    }
  },
  // Mayotte
  {
    country: 'YT',
    tin: {
      invalid: ['1234', 'ABCABCABCABCA', '12345678901234'],
      masked: ['XXXXXXXXX0123'],
      valid: ['1234567890123']
    }
  }
];

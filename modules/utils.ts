
import { BigNumber } from '@ijstech/eth-wallet';

const _cardTyps = ["horizontal-list", "vertical-list", "carousel"] as const;
type cardType = typeof _cardTyps[number];

interface ICardTypeOption {
  label: string;
  value: cardType
}

interface IConfig {
  title?: string;
  description?: string;
  type?: cardType;
  itemsToShow?: number;
  contractEntrypoint?: string;
}

const getCardTypeOption = (): ICardTypeOption[] => {
  return _cardTyps.map(type => {
    const label = type.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
    return {
      label,
      value: type
    }
  })
}

const formatNumber = (value: any, decimals?: number) => {
  let val = value;
  const minValue = '0.0000001';
  if (typeof value === 'string') {
    val = new BigNumber(value).toNumber();
  } else if (typeof value === 'object') {
    val = value.toNumber();
  }
  if (val != 0 && new BigNumber(val).lt(minValue)) {
    return `<${minValue}`;
  }
  return formatNumberWithSeparators(val, decimals || 4);
};


const formatNumberWithSeparators = (value: number, precision?: number) => {
  if (!value) value = 0;
  if (precision) {
    let outputStr = '';
    if (value >= 1) {
      outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
    }
    else {
      outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
    }

    if (outputStr.length > 18) {
      outputStr = outputStr.substr(0, 18) + '...'
    }
    return outputStr;
  }
  else {
    return value.toLocaleString('en-US');
  }
}

export {
  cardType,
  ICardTypeOption,
  IConfig,
  formatNumber,
  getCardTypeOption,
}
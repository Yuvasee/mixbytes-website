import React, {Component} from 'react';

class SymbolSelect extends Component {
  render() {
    const currencies = {
      fiat: ['USD', 'EUR', 'RUR', 'GBP'],
      popular: ['BTC', 'LTC', 'DOGE', 'ETH'],
      other: ['007', '1337', '1ST', '2015', '2GIVE', '32BIT', '404', '611', '8BIT', '8BT', '9COIN', 'ABC', 'ABN', 'ACES', 'ACLR', 'ACN', 'ACOIN', 'ACP', 'ADAM', 'ADC', 'ADL', 'ADT', 'ADX', 'ADZ', 'AEB', 'AEO', 'AEON', 'AGRS', 'AGRI', 'AIB', 'AIR', 'AL', 'ALC', 'ALIEN', 'ALT', 'ALTC', 'AM', 'AMB', 'AMBER', 'AMS', 'ANI', 'ANTI', 'APC', 'APW', 'APX', 'ANT', 'ARB', 'ARC', 'ARCO', 'ARD', 'ARDR', 'ARE', 'ARK', 'ARM', 'ARTA', 'ABY', 'ASAFE', 'ADCN', 'ATB', 'ATM', 'ATOM', 'ATU', 'ATX', 'REP', 'AUM', 'AUR', 'AURS', 'AUS', 'AUD', 'AV', 'AVT', 'AXIOM', 'B2', 'B3', 'BA', 'BAB', 'BAC', 'BAN', 'BAS', 'BASH', 'BAT', 'BTA', 'BAY', 'BBH', 'BBP', 'BCM', 'BCU', 'BDC', 'BDL', 'BEE', 'BEEP', 'BEEZ', 'BELA', 'BENJI', 'BERN', 'BEST', 'BET', 'BHC', 'BIGUP', 'BIOS', 'BIT', 'BIT16', 'BITB', 'BITCF', 'BCH', 'XBC', 'BTCD', 'BCY', 'BTM', 'BITOK', 'BITON', 'BTQ', 'BSD', 'BTS', 'SWIFT', 'BIZ', 'BLK', 'BLC', 'BLAZR', 'BLITZ', 'BLOCK', 'BLU', 'BMC', 'BNT', 'BOLI', 'BON', 'BOST', 'BOS', 'BOSS', 'BOT', 'BPOK', 'BQ', 'BQX', 'BRDD', 'BRE', 'BRIT', 'BRK', 'BRONZ', 'BRX', 'BS', 'BSC', 'BSH', 'BST', 'BSTK', 'BTCHC', 'BTCO', 'BTCS', 'BTCU', 'BTD', 'BTLC', 'BTP', 'BTTF', 'BTX', 'BTXC', 'BTZ', 'BUB', 'BUCKS', 'BURST', 'BUS', 'BUZZ', 'BVC', 'BXT', 'GBYTE', 'BYC', 'BCN', 'C0C0', 'CAB', 'CAID', 'CALC', 'CAD', 'CANN', 'CPC', 'CAT', 'CB', 'CBD', 'CCB', 'CCC', 'CCRB', 'CCX', 'CD', 'CDN', 'CDT', 'CF', 'CFC', 'CFI', 'CH', 'CHEMX', 'CHESS', 'CHILL', 'CNY', 'CHIP', 'CHOOF', 'CIRC', 'CJ', 'CJC', 'CLAM', 'CLICK', 'CLOAK', 'CLR', 'CLUB', 'CLUD', 'CME', 'CMT', 'CNB', 'CNC', 'CND', 'CNNC', 'CNT', 'CNX', 'COC', 'COIN', 'C2', 'CV2', 'CONX', 'COS', 'XCP', 'COV', 'COVAL', 'COX', 'CRAB', 'CRAFT', 'CRC', 'CRE', 'CRB', 'CREVA', 'CRM', 'CROC', 'CRPC', 'CRS', 'CRT', 'CRW', 'CRX', 'CESC', 'XCN', 'CS', 'CSMIC', 'CTIC', 'CTIC2', 'CTK', 'CTL', 'CTO', 'CTR', 'CURE', 'CVC', 'CYG', 'CYT', 'DANC', 'DAR', 'DGD', 'DAS', 'DASH', 'DSH', 'DASHS', 'DBG', 'DBIX', 'DBLK', 'DBT', 'DBTC', 'DC', 'DCC', 'DCK', 'DCT', 'DCYP', 'DDC', 'DDF', 'DCR', 'DEEP', 'DEL', 'DEN', 'DESH', 'DETH', 'DEUS', 'DEM', 'DFT', 'DGCS', 'DGMS', 'DGORE', 'DMD', 'DIBC', 'DIC', 'DGB', 'CUBE', 'DGC', 'XDN', 'DP', 'DIME', 'DIRT', 'DKC', 'DLC', 'DLT', 'DMC', 'NOTE', 'DNT', 'DOPE', 'DOTA', 'DOV', 'DP2', 'DPAY', 'DPY', 'DRACO', 'DRM', 'DRM8', 'DROP', 'DRZ', 'DTB', 'DTT', 'DBIC', 'DUO', 'DUR', 'DUS', 'DUST', 'DUX', 'DXO', 'DYN', 'EAGS', 'EAC', 'EBH', 'EBST', 'EBT', 'ECA', 'ECCHI', 'ECLI', 'ECN', 'ECO', 'ECOB', 'EDG', 'EDIT', 'EDR2', 'EDR', 'EET', 'EGO', 'EMC2', 'EKO', 'EL', 'ELE', 'EFL', 'EMB', 'EME', 'EMC', 'EMG', 'EMP', 'EMPC', 'ENRG', 'ENT', 'ENTER', 'EOS', 'EPC', 'EPY', 'EQT', 'EQUAL', 'ERC', 'ERY', 'ESB', 'ESC', 'EST', 'ETC', 'ETHS', 'ETT', 'ETX', 'EUC', 'EVA', 'EGC', 'EVIL', 'EVO', 'EVX', 'EXCL', 'EXIT', 'EXP', 'FCT', 'FAIR', 'FAZZ', 'FCASH', 'FCH', 'FCN', 'FTC', 'TIPS', 'FFC', 'FIDEL', 'FIND', 'FIRST', 'FJC', 'FLO', 'FLVR', 'FLX', 'FLY', 'FNC', 'FLDC', 'FOREX', 'FRK', 'FRDC', 'FRE', 'FRN', 'FRST', 'FRWC', 'FSN', 'FST', 'FU', 'FUE', 'FUN', 'FUNC', 'FUNK', 'FUTC', 'FUZZ', 'FX', 'FYN', 'FYP', 'GAC', 'GAIN', 'GAKH', 'GAM', 'GBT', 'GAME', 'GARY', 'GAS', 'GB', 'GBC', 'GBG', 'GBIT', 'GBRC', 'GCC', 'GE', 'GEO', 'GER', 'GHS', 'GIG', 'GLC', 'GLO', 'BSTY', 'GLTC', 'GML', 'GMX', 'GNO', 'GOAT', 'GCR', 'GLD', 'GNT', 'GOLOS', 'GOON', 'GP', 'GPU', 'GRF', 'GRAM', 'GRAV', 'GRC', 'GRS', 'GRP', 'GSB', 'GSR', 'GSX', 'GSY', 'GT', 'GUC', 'NLG', 'GUP', 'GYC', 'HALLO', 'HBT', 'HCC', 'HEAT', 'HEEL', 'THC', 'HET', 'XHI', 'HIFUN', 'HKG', 'HLB', 'HMQ', 'HNC', 'HODL', 'HOP', 'HOPE', 'HPC', 'HRB', 'HSP', 'HSR', 'HTC', 'HTML5', 'HTS', 'HUC', 'HUS', 'HVCO', 'HVN', 'HZT', 'IBANK', 'IBC', 'IBITS', 'IBT', 'ICO', 'ICOBI', 'ICN', 'IET', 'IFLT', 'IFT', 'IGN', 'ILC', 'IML', 'IMPS', 'INCNT', 'INCP', 'IND', 'IDR', 'INF', 'IFC', 'INFX', 'INGT', 'INPAY', 'INSN', 'INV', 'IOC', 'ION', 'IONX', 'IOP', 'IOT', 'ISE', 'ISL', 'ITI', 'IUS', 'IVZ', 'IXT', 'JPY', 'JIF', 'JIO', 'JNS', 'JOBS', 'JPC', 'JW', 'JWL', 'KARMC', 'KAT', 'KC', 'KGB', 'KGC', 'KGDC', 'KIDS', 'KLC', 'KMD', 'KOBO', 'KORE', 'KPL', 'KRAK', 'KRB', 'KRONE', 'KRS', 'KR', 'KUBO', 'L7S', 'LANA', 'LAZ', 'LBC', 'LBT', 'LC', 'LDC', 'LDCN', 'LEA', 'LEAF', 'LEO', 'LET', 'LGBTQ', 'LGD', 'LINDA', 'LIR', 'LSK', 'LITE', 'LTCR', 'LIV', 'LKC', 'LMC', 'LOYAL', 'LRC', 'LSB', 'LSD', 'LTCU', 'LTD', 'LTH', 'LTS', 'LUCKY', 'LUNA', 'LUN', 'LUNYR', 'LUS', 'LUX', 'LVG', 'M1', 'MAD', 'XMG', 'MAI', 'MAID', 'MALC', 'MAN', 'MAPC', 'MXT', 'MARV', 'OMNI', 'MAY', 'MAZE', 'MBL', 'MCA', 'MCAP', 'MCAR', 'MCO', 'MCR', 'MEC', 'MEME', 'MEN', 'MET', 'MG', 'MGC', 'MGO', 'MHC', 'MND', 'MIS', 'MIU', 'MLN', 'MM', 'MMXVI', 'MNE', 'MNM', 'MOIN', 'MOJO', 'MONA', 'XMR', 'MUE', 'MOON', 'MOOND', 'MOTO', 'MPK', 'MPRO', 'MRV', 'MSCN', 'MSP', 'MST', 'MTL', 'MUSIC', 'MUU', 'MVR', 'MYB', 'MYST', 'N2O', 'NMC', 'NANOX', 'NAT', 'NAUT', 'NAV', 'NBIT', 'NCS', 'NDC', 'XEM', 'NEO', 'NEOS', 'NETC', 'NET', 'NETKO', 'NTRN', 'NEVA', 'NEWB', 'NXS', 'NKA', 'NKC', 'NLC2', 'NMR', 'NO', 'NODES', 'NOO', 'NVC', 'NPC', 'NTCC', 'NTM', 'NTO', 'NBT', 'NXC', 'NXT', 'NZC', 'OAX', 'OBITS', 'OBS', 'OBT', 'OCOW', 'OD', 'ODNT', 'OK', 'OLIT', 'OLYMP', 'OMC', 'OMG', 'OPAL', 'OPES', 'OPNC', 'OPT', 'OS', 'OS76', 'OTC', 'OTX', 'OUS', 'OZC', 'P7C', 'PAC', 'PAK', 'PAL', 'PND', 'PARA', 'PART', 'PARTY', 'PASC', 'PAY', 'XPY', 'PAYP', 'PBK', 'PBT', 'PCS', 'PDC', 'PPC', 'PGUC', 'PHR', 'PHX', 'PIE', 'PIN', 'PING', 'PC', 'PIO', 'PIPL', 'PIVX', 'PIZZA', 'PKB', 'PLAY', 'PLB', 'PLBT', 'PLN', 'PLNC', 'PLR', 'PLU', 'PNC', 'PNK', 'POE', 'POKE', 'POLY', 'PONZ2', 'POPPY', 'PEX', 'POST', 'POSW', 'POT', 'POWER', 'PPY', 'PQT', 'PRC', 'PRE', 'PRES', 'PRG', 'PXI', 'XPM', 'PRIMU', 'PRO', 'PROC', 'PSB', 'PSI', 'PST', 'PTC', 'PTO', 'PTOY', 'PUPA', 'PURE', 'PUT', 'PUTIN', 'PWR', 'PX', 'QAU', 'QBC', 'QCN', 'QRL', 'QRZ', 'QTU', 'QTUM', 'QTZ', 'QRK', 'QWARK', 'RADI', 'RADS', 'RAI', 'RATIO', 'RBIT', 'RCN', 'RDD', 'REE', 'RET', 'RHFC', 'RICE', 'RICHX', 'RID', 'RIC', 'RBT', 'RING', 'RIO', 'XRP', 'RISE', 'RIYA', 'RKC', 'RLC', 'RLT', 'RMS', 'RNC', 'ROBO', 'ROLC', 'RONIN', 'ROO', 'ROYAL', 'RPC', 'RRT', 'RSGP', 'RBIES', 'RUBIT', 'RBY', 'RUC', 'RUP', 'RUPX', 'RUST', 'RVT', 'RYCN', 'SAFEX', 'SAK', 'SAN', 'SBD', 'SBIT', 'SBT', 'SCAN', 'SCB', 'SCITW', 'SCRPT', 'SCRT', 'SCS', 'SDT', 'SED', 'SEL', 'SEQ', 'SET', 'SEV', 'SXC', 'SFE', 'SGC', 'SH', 'SDC', 'SHDW', 'SHELL', 'SHIFT', 'SHREK', 'SC', 'SIB', 'SIGT', 'SIX', 'SKI', 'SLEEP', 'SLS', 'SMBR', 'SMC', 'SMLY', 'SNC', 'SNG', 'SNGLS', 'SNM', 'SNRG', 'SOAR', 'SLR', 'SOLO', 'SOUL', 'SP', 'SPACE', 'SPC', 'SPHR', 'SPM', 'SPORT', 'SPR', 'SPT', 'SQC', 'SRND', 'SSC', 'SSTC', 'STA', 'STAR', 'START', 'SNT', 'STE', 'XST', 'STEEM', 'STR', 'XLM', 'SLG', 'STHR', 'STK', 'STO', 'STONK', 'STORJ', 'SJCX', 'STRAT', 'STRB', 'STS', 'STV', 'STX', 'SUPER', 'SUR', 'SWEET', 'SWING', 'SWT', 'SDP', 'AMP', 'SYNX', 'SYS', 'TAA', 'TAAS', 'TAB', 'TAG', 'TAJ', 'TAKE', 'TAM', 'TAO', 'TAP', 'TB', 'TBT', 'TC', 'TCASH', 'TCOIN', 'TDFB', 'TEAM', 'TEK', 'TELL', 'TERA', 'TERI', 'TRC', 'TESLA', 'TES', 'TET', 'TFL', 'THOM', 'THS', 'TIA', 'TIX', 'TIDE', 'XTC', 'TIM', 'TIME', 'TIT', 'TTC', 'TKN', 'TKS', 'TLE', 'TMC', 'TMRW', 'TNT', 'TOA', 'TODAY', 'TOKEN', 'TOR', 'TOT', 'TPG', 'TRA', 'TX', 'TRIG', 'TROLL', 'TRS', 'TRST', 'TRUMP', 'TRUST', 'TSE', 'TUR', 'TWERK', 'TWO', 'UAE', 'UBIQ', 'UBQ', 'UET', 'UIS', 'UAH', 'UNB', 'UNC', 'UNF', 'UNI', 'UNIT', 'UNO', 'UNRC', 'UNY', 'URO', 'USC', 'USDE', 'UTA', 'UTLE', 'UXC', 'VAK', 'VAL', 'VASH', 'XVC', 'VEC', 'VEC2', 'VEG', 'VENE', 'VER', 'XVG', 'VRC', 'VTC', 'VIA', 'VIP', 'VK', 'VLT', 'VLTC', 'VOX', 'VPN', 'VPRC', 'VRM', 'VRP', 'VRS', 'VSL', 'VSM', 'VSX', 'VTL', 'VTR', 'VTY', 'VUC', 'WA', 'WARP', 'WASH', 'WAV', 'WAVES', 'WCASH', 'WCN', 'WEA', 'WEX', 'WGR', 'XWC', 'WIC', 'WBB', 'WIN', 'WINGS', 'WINK', 'LOG', 'WDC', 'WRT', 'WTT', 'X2', 'XAUR', 'XAU', 'XB', 'XBG', 'XBP', 'XBS', 'XBTS', 'XBY', 'XCXT', 'XDE', 'XEL', 'XET', 'XFC', 'XFCX', 'XGB', 'XGTC', 'MI', 'XID', 'XIN', 'XJO', 'XLC', 'XLTCG', 'XMINE', 'XMS', 'XMT', 'XMY', 'XNC', 'XNX', 'XOC', 'XODUS', 'XOM', 'XOT', 'XPC', 'XPD', 'XPO', 'XPS', 'XQN', 'XRC', 'XRL', 'XSP', 'XSPEC', 'XT', 'XTO', 'XTP', 'XTZ', 'XUP', 'XVP', 'XVS', 'XZA', 'YAY', 'YBC', 'YBT', 'YET', 'YMC', 'YOC', 'YOG', 'YOVI', 'ZAP', 'ZYD', 'ZBCN', 'ZEC', 'ZCL', 'ZCC', 'XZC', 'ZECD', 'ZEIT', 'ZEN', 'ZENI', 'ZET2', 'ZET', 'ZRC', 'ZBC', 'ZLQ', 'ZMC', 'ZNE', 'ZNY', 'ZOOM', 'ZRX', 'ZUR']
    };

    return (
      <select className="custom-select" value={this.props.selected} {...this.props}>
        {Object.keys(currencies).map((key, index) => (
          <optgroup label={key} key={index}>
            {currencies[key].map((el, i) => (
              <option key={i} value={el}>{el}</option>
            ))}
          </optgroup>
        ))}
      </select>
    );
  }
}

export default SymbolSelect;
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = { 
  solidity: "0.8.24",

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_ID,
      }
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    main: {
      url: "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_ID,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    optimism: {
      url: "https://opt-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_ID,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },

  mocha: {
    timeout: 80000
  },

  ignition: {
    strategyConfig: {
      create2: {
        salt: "1111", 
      },
    },
  },

  ////https://search.onaave.com/  
  networkAddressMapping: {
    optimism: {
      daiAddress: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      wmaticAddress: '',
      wethAddress: '0x4200000000000000000000000000000000000006',
      usdcAddress: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      wbtcAddress: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
      
      lendingPoolAddressesProviderAddress: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
      uniswapRouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      wethGatewayAddress: '0xe9E52021f4e11DEAD8661812A0A6c8627abA2a54',
      aaveApeAddress: '0xc21d6197Bef9E34af555Ec6373D5a4F1a25BD730',

      augustusRegistryAddress: '0x6e7bE86000dF697facF4396efD2aE2C322165dC3',
    },
    main: {
      daiAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wmaticAddress: '',
      wethAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      usdcAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      wbtcAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      
      lendingPoolAddressesProviderAddress: '0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e',
      uniswapRouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      wethGatewayAddress: '0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9',
      aaveApeAddress: '0xc21d6197Bef9E34af555Ec6373D5a4F1a25BD730',

      augustusRegistryAddress: '0xa68bEA62Dc4034A689AA0F58A76681433caCa663',
    },
    localhost: {
      daiAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wmaticAddress: '',
      wethAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      usdcAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      wbtcAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      
      lendingPoolAddressesProviderAddress: '0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e',
      uniswapRouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      wethGatewayAddress: '0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9',
      aaveApeAddress: '0xc21d6197Bef9E34af555Ec6373D5a4F1a25BD730',

      augustusRegistryAddress: '0xa68bEA62Dc4034A689AA0F58A76681433caCa663',
    }
  }
};

https://github.com/Dapp-Learning-DAO/Dapp-Learning/tree/main/basic/21-aave-uni-loan


# AAVE-Uniswap

通过与 Uniswap 与 Aave 集成，让您可以上创建和解除杠杆头寸

## example

假设您有一个 apeAsset，您想做多， ape 函数允许用户在一笔交易中执行以下步骤：

根据抵押品计算用户能够在borrowAsset中借入的最大金额（这依赖于getAvailableBorrowInAsset）

代表用户从 Aave V3 借用该数量的borrowAsset

这要求用户将信用委托给 Aave Ape 合约，以便它可以代表用户从 Aave 借款 

批准 BorrowAsset 在 Uniswap 上进行交易

通过Uniswap V3将borrowAsset交换为apeAsset的最大可用数量

代表用户将 apeAsset 存回 Aave
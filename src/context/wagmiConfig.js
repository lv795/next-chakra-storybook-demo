import { http, createConfig } from 'wagmi'
import { arbitrumSepolia, mainnet } from 'wagmi/chains'
import { injected, metaMask, safe } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, arbitrumSepolia],
  connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports: {
    [arbitrumSepolia.id]: http(),
    [mainnet.id]: http(),
  },
})
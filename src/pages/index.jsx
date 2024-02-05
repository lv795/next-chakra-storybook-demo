import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  useColorMode,
  Text,
  Flex,
  chakra,
  Button,
} from "@chakra-ui/react";
// 异步加载组件
import dynamic from "next/dynamic";

const WalletConnect = dynamic(() => import("@/components/WalletConnect"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

const Wrapper = chakra("div", {
  baseStyle: {
    color: "",
  },
});
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={toggleColorMode}>{colorMode}</button>
      <session >
        <WalletConnect />
      </session>
    </main>
  );
}

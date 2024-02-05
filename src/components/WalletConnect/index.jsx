import React, { useEffect } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useConnect, useAccount, useDisconnect, useReconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import WalletProfile from "../WalletProfile";

function WalletConnect() {
  // const { reconnect, status } = useReconnect();
  const { connectAsync } = useConnect();
  const { address, chain, isConnected, isConnecting } = useAccount();
  const { disconnectAsync } = useDisconnect();

  // useEffect(() => {
  //   reconnect();
  // }, []);

  const handlerConnect = async () => {
    try {
      await connectAsync({ connector: injected() });
    } catch (error) {
      console.log("connectAsync error", error);
    }
  };

  const handlerDisconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.log("disconnectAsync error", error);
    }
  };
  return (
    <Box>
      {isConnected ? (
        <Flex gap="28px" >
          <WalletProfile />
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={handlerDisconnect}
          >
            Disconnect
          </Button>
        </Flex>
      ) : (
        <Button colorScheme="green" variant="outline" onClick={handlerConnect}>
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </Box>
  );
}

export default WalletConnect;

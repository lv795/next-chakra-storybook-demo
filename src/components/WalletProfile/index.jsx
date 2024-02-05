import { useAccount, useEnsName, useEnsAvatar } from "wagmi";
import { Box, Text, Flex, Avatar, Skeleton } from "@chakra-ui/react";
import { normalize } from "viem/ens";

function WalletProfile() {
  const { address } = useAccount();
  const {
    data,
    error,
    status,
    isFetched: ensNameIsFetched,
  } = useEnsName({ address });
  const { data: ensAvatar, isFetched: ensAvatarIsFetched } = useEnsAvatar({
    name: normalize(data),
  });

  const displayName = data ? data : address;
  return (
    <Skeleton isLoaded={ensNameIsFetched && ensAvatarIsFetched}>
      <Flex h="100%" align="center" justify="flex-start" gap="16px" fontSize="16px">
        <Avatar name={displayName} src={ensAvatar} size="sm" />
        <Text>{data || '-'}</Text>
      </Flex>
    </Skeleton>
  );
}

export default WalletProfile;

 import React from 'react';
 import { Box, Text, theme } from "../components";
 import { Feather as Icon } from '@expo/vector-icons';

 const Header = ({ title, iconName }: { title: string, iconName?: string }) => {
    return (
      <Box >
        <Box marginHorizontal="m" height={60} flexDirection="row" alignItems="center" justifyContent="space-between" >
          <Text variant="title1">{title}</Text>
          {iconName ?
            <Icon name={iconName} size={26} color={theme.colors.text} />
            : null}
        </Box>
      </Box>
    )
  }

  export default Header;
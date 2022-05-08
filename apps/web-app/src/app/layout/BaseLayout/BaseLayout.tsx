
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { colors } from '@fixed-income-markets/core-ui';

const StyledContent = styled(Box)({
  background: colors.blue100,
  height: '93%',
  display: 'flex',
});

const BaseLayout: React.FC = () => {
  return (
    <StyledContent>
      <Outlet />
    </StyledContent>
  );
};

export default BaseLayout;  
  
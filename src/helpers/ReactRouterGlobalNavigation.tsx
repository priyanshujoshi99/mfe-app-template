import React from 'react';
import { useNavigate } from 'react-router-dom';

let globalNavigation: ReturnType<typeof useNavigate>;

export const ReactRouterGlobalNavigation: React.FC = () => {
  globalNavigation = useNavigate();
  return <></>;
};

export default function getNavigation() {
  if (!globalNavigation) {
    throw new Error(
      'No history Object. You probably forgot to mount ReactRouterglobalNavigation.'
    );
  }

  return globalNavigation;
}

'use client';

import Cal from '@calcom/embed-react';

const CAL_LINK = 'sheriax/30min';

export function CalEmbed() {
  return (
    <Cal
      calLink={CAL_LINK}
      config={{
        layout: 'month_view',
        theme: 'light',
      }}
      style={{ width: '100%', height: '100%', overflow: 'scroll', minHeight: 500 }}
    />
  );
}

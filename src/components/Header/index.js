import React from 'react';

import { useTranslation } from 'react-i18next'


export function HeaderComponent() {
  const [t, i18n] = useTranslation('common');
  return <div>
    <h1>{t('welcome.title', { framework: 'React' })}</h1>
    <button onClick={() => i18n.changeLanguage('en')}>English</button>
    <button onClick={() => i18n.changeLanguage('zhCN')}>中文</button>
  </div>
}


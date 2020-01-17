import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import BlockTitle from 'components/BlockTitle';
import Section from './styles/Section';

import messages from './messages';

const SectionStyle = {
  marginBottom: 50,
};
const LanguageSelector = () => (
  <>
    <BlockTitle title={<FormattedMessage {...messages.changeLanguage} />} />
    <Section style={SectionStyle}>
      <LocaleToggle />
    </Section>
  </>
);

export default LanguageSelector;

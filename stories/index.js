import React from 'react';
import { storiesOf } from '@storybook/react';
import Segment from "../src/components/Segment"

storiesOf('Segment', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('without props', () => <Segment />);
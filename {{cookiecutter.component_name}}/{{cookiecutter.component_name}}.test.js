{%- set component_name = cookiecutter.component_name -%}
import React from 'react';
import { render } from '@testing-library/react';
import {{ component_name }} from './{{ component_name }}';

test('renders without errors', () => {
  const { getByText } = render(<{{ component_name }} />);
});

{%- set component_name = cookiecutter.component_name %}
{%- set component_type = cookiecutter.component_type %}
{%- set style_ext = cookiecutter.style_type %}
{%- set use_proptypes = cookiecutter.use_proptypes == 'y' -%}
import React from 'react';
{% if use_proptypes -%} import PropTypes from 'prop-types'; {%- endif %}
import './{{ component_name }}.{{ style_ext }}';

{% if component_type == 'functional' -%}
{% if use_proptypes -%}
const propTypes = {}
{%- endif %}

const defaultProps = {}

function {{ component_name }}({ }) {
  return (
    <div className="{{ component_name }}">
    </div>
  );
}

{% if use_proptypes -%}
{{ component_name }}.propTypes = propTypes;
{%- endif %}
{{ component_name }}.defaultProps = defaultProps;
{%- endif %}

{%- if component_type == 'class' %}
class {{ component_name }} extends React.Component {
  {% if use_proptypes -%}
  static propTypes = {}
  {%- endif %}
  static defaultProps = {}

  componentDidMount() {}

  render() {
    return (
      <div className="{{ component_name }}"></div>
    );
  }
}
{%- endif %}

export default {{ component_name }};

import React from 'react';
import { Textfield } from 'react-material-design';

const InputExamples = () =>
    <div>
        <h2>Textfield Examples</h2>
        <Textfield labelText="label text" helpText="not persistent" />
        <Textfield value="value" labelText="label text" helpText="not persistent" />
        <Textfield value="enabled, pre-filled, no label, no help text " />
        <br />
        <Textfield helpTextPersistent labelText="label text, not pre-filled" helpText="persistent: okay, how can I help?" />
        <Textfield disabled labelText="disabled, no help text" value="pre-filled" />
    </div>;
export default InputExamples;
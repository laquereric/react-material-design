import React from 'react';
import { Textfield } from 'react-material-design';

const InputExamples = () =>
    <div>
        <h2>Textfield Examples and Right Align</h2>
        <Textfield label="label text" helpText="not persistent" value="I have text" />
        <br /> <Textfield label="label text" helpText="not persistent" />
        <br /> <Textfield alignEnd value="value" label="label text" helpText="not persistent" />
        <br /> <Textfield alignEnd value="enabled, pre-filled, no label, no help text " />
        <br /> <Textfield helpTextPersistent label="label text, not pre-filled" helpText="persistent: okay, how can I help?" />
        <br /> <Textfield alignEnd helpTextPersistent label="label text, not pre-filled" helpText="how can I help?" />
        <br /> <Textfield alignEnd disabled label="disabled, no help text" value="pre-filled" />
    </div>;
export default InputExamples;
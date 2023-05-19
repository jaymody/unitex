import { ActionPanel, Form, Action } from "@raycast/api";
import { useState } from "react";
var unicodeit = require('unicodeit');

export default function Command() {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  let update = (text: string) => {
    setInputText(text);
    setOutputText(unicodeit.replace(text))
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy Text to Clipboard" content={outputText} shortcut={{ modifiers: ["cmd"], key: "enter" }} />
          <Action.CopyToClipboard title="Copy Input Text to Clipboard" content={inputText} shortcut={{ modifiers: ["cmd", "shift"], key: "enter" }} />
        </ActionPanel>
      }
    >
      <Form.TextArea id="inputTextField" value={inputText} onChange={update} />
      <Form.TextArea id="outputTextField" value={outputText} />
    </Form>
  );
}

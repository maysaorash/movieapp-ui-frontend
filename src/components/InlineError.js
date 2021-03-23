import React from "react";
import { Label } from "semantic-ui-react";

function InlineError({message}) {
  return (
    <div>
      <Label basic color='red' pointing>
      {message}
      </Label>
    </div>
  );
}

InlineError.propTypes = {};

export default InlineError;

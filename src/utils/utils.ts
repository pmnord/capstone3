import nanoid from 'nanoid';

const utils = {
  deepCopy: (inObject: Record<string, any>): Record<string, any> => {
    let outObject: Record<string, any>, value: any, key: string;

    if (typeof inObject !== 'object' || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }

    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
      value = inObject[key];

      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = utils.deepCopy(value);
    }

    return outObject;
  },

  copyToClipboard: (node_id: string) => {
    const targetNode: HTMLElement | null = document.getElementById(node_id);
    const selection: Selection | null = window.getSelection();

    if (targetNode && selection) {
      const range = document.createRange();
      range.selectNode(targetNode);

      selection.removeAllRanges();
      selection.addRange(range);

      try {
        // returns true or false depending on success
        document.execCommand('copy');

        window.getSelection()?.removeAllRanges();
      } catch (err) {
        console.log(err);
      }
    }
  },

  uuid: (): string => {
    return nanoid();
  },
};

export default utils;

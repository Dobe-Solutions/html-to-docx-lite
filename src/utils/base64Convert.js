// eslint-disable-next-line import/prefer-default-export
export const decode = (base64String) => Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0));

export const encodeFromURL = (url) =>
  fetch(url)
    .then((body) => body.arrayBuffer())
    .then((arrayBuffer) =>
      btoa(
        Array.from(new Uint8Array(arrayBuffer))
          .map((b) => String.fromCharCode(b))
          .join('')
      )
    );

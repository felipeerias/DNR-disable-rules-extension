# DNR-disable-rules-extension

An extension for testing the functionality for disabling static rules in Declarative Net Request.

See also:

- [Web Extensions API proposal document (Google Docs)](https://docs.google.com/document/d/1NTOTr6iwm0dJbewWjnABmPo6h1QD1mKTpX60s6Klj-8/edit?usp=sharing)
- Discussion at the [Web Extensions WG issue #162](https://github.com/w3c/webextensions/issues/162)

## How to use this 

- Launch Chromium.
- Go to `More tools > Extensions`
- Click on `Load unpacked`
- Select the `extension` folder on this project.
- The output of the extension will be shown as log messages in the extension's `Errors` section.
- Different kinds of tests can be performed by changing `manifest.json` so `background.service_worker` points at another of the `background*.js` files.


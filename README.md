# Declarative Net Request: disable individual static rules (test extension)

An extension for testing the functionality for disabling static rules in [Declarative Net Request](https://developer.chrome.com/extensions/declarativeNetRequest).

There are two kinds of filter lists included with this extension:

- `easylist_dnr_*.json` are realistic filter lists, each containing have around 9,700 rules; they come from joining [EasyList blocklists](https://github.com/easylist/easylist/tree/master/easylist) and converting them to the DNR structure using [kzar/abp2dnr](https://github.com/kzar/abp2dnr);
- `fat_easylist_dnr_*.json` are build from the previous kind, duplicating rules so each file contains 33,000 entries; this means that enabling all ten of these filter lists will reach the [maximum number of static rules that may be enabled at the same time](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#global-static-rule-limit).

See also:

- [Web Extensions API proposal document (Google Docs)](https://docs.google.com/document/d/1NTOTr6iwm0dJbewWjnABmPo6h1QD1mKTpX60s6Klj-8/edit?usp=sharing)
- Discussion at the [Web Extensions WG issue #162](https://github.com/w3c/webextensions/issues/162)

## How to use this extension

- Launch Chromium.
- Go to `More tools > Extensions`
- Click on `Load unpacked`
- Select the `extension` folder on this project.
- The output of the extension will be shown as log messages in the extension's `Errors` section.
- Different kinds of tests can be performed by changing `manifest.json` so the entry `background.service_worker` points at one or another of the `background*.js` files.


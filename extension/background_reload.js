/*
Loads one ruleset while disabling a few rules. This tests that relaunching and reloading do not trigger a recompile.

Doesn't work as expected, doesn't seem to check which rules have been disabled.

First run:
  SetDNRStaticRulesetChecksum 11 : 1180831798

Second run:
  RulesMonitorService::OnExtensionLoaded
  RulesMonitorService::UpdateEnabledStaticRulesetsInternal
    has expected_ruleset_checksum 1180831798
    prev_disabled_rule_ids:
    disabled_rule_ids:        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
    NO set_expected_checksum
  SetDNRStaticRulesetChecksum 11 : 1180831798

It seems that it doesn't store the disabled rule IDs.


*/

chrome.declarativeNetRequest.getAvailableStaticRuleCount(
  (count) => {
    let initial_count = count;
    console.error("Available static rules: " + count);

    console.error("Enabling rulesets, disable rules 1-20");
    let t0 = Date.now();

    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [],
      enableRulesetIds: [
        "fat_easylist_dnr_0"
      ],
      disableRules: [
        { rulesetId: "fat_easylist_dnr_0", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
      ]
    }, () => {
      let t1 = Date.now();

      chrome.declarativeNetRequest.getAvailableStaticRuleCount(
        (count) => {
          let simple_count = (initial_count - count);
          console.error("Enabled " + simple_count + " static rules in " + (t1 - t0) + " msecs, " + count + "rules available");
        });
    });
  });

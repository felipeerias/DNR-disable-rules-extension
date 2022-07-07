/*
Loads 9 rulesets, then disables 3300 rules (1% of the total), then loads them again without disabling any.

This measures the time difference (if any) between parsing with and without disabling rules.
*/

chrome.declarativeNetRequest.getAvailableStaticRuleCount(
  (count) => {
    let initial_count = count;
    console.error("Initially available static rules: " + count);

    let onePercentRules = Array.from({ length: 330 }, (x, i) => i + 1);
    let tenPercentRules = Array.from({ length: 3300 }, (x, i) => i + 1);

    let t0 = Date.now();

    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [],
      enableRulesetIds: [
        "fat_easylist_dnr_0",
        "fat_easylist_dnr_1",
        "fat_easylist_dnr_2",
        "fat_easylist_dnr_3",
        "fat_easylist_dnr_4",
        "fat_easylist_dnr_5",
        "fat_easylist_dnr_6",
        "fat_easylist_dnr_7",
        "fat_easylist_dnr_8",
        "fat_easylist_dnr_9"
      ],
      disableRules: [
        { rulesetId: "fat_easylist_dnr_0", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_1", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_2", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_3", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_4", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_5", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_6", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_7", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_8", disableRulesIds: onePercentRules },
        { rulesetId: "fat_easylist_dnr_9", disableRulesIds: onePercentRules },
      ]
    }, () => {
      let t1 = Date.now();

      chrome.declarativeNetRequest.getAvailableStaticRuleCount(
        (count) => {
          let simple_count = (initial_count - count);
          console.error("Enabled " + simple_count + " static rules in " + (t1 - t0) + " msecs, " + count + "rules available");

          let t2 = Date.now();

          chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: [],
            enableRulesetIds: [
              "fat_easylist_dnr_0",
              "fat_easylist_dnr_1",
              "fat_easylist_dnr_2",
              "fat_easylist_dnr_3",
              "fat_easylist_dnr_4",
              "fat_easylist_dnr_5",
              "fat_easylist_dnr_6",
              "fat_easylist_dnr_7",
              "fat_easylist_dnr_8",
              "fat_easylist_dnr_9"
            ],
            disableRules: []
          }, () => {
            let t3 = Date.now();

            chrome.declarativeNetRequest.getAvailableStaticRuleCount(
              (count) => {
                let simple_count = (initial_count - count);
                console.error("Enabled " + simple_count + " static rules in " + (t3 - t2) + " msecs, " + count + "rules available");

                let t4 = Date.now();

                chrome.declarativeNetRequest.updateEnabledRulesets({
                  disableRulesetIds: [],
                  enableRulesetIds: [
                    "fat_easylist_dnr_0",
                    "fat_easylist_dnr_1",
                    "fat_easylist_dnr_2",
                    "fat_easylist_dnr_3",
                    "fat_easylist_dnr_4",
                    "fat_easylist_dnr_5",
                    "fat_easylist_dnr_6",
                    "fat_easylist_dnr_7",
                    "fat_easylist_dnr_8",
                    "fat_easylist_dnr_9"
                  ],
                  disableRules: [
                    { rulesetId: "fat_easylist_dnr_0", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_1", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_2", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_3", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_4", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_5", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_6", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_7", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_8", disableRulesIds: tenPercentRules },
                    { rulesetId: "fat_easylist_dnr_9", disableRulesIds: tenPercentRules },
                  ]
                }, () => {
                  let t5 = Date.now();

                  chrome.declarativeNetRequest.getAvailableStaticRuleCount(
                    (count) => {
                      let simple_count = (initial_count - count);
                      console.error("Enabled " + simple_count + " static rules in " + (t5 - t4) + " msecs, " + count + "rules available");

                      let t2 = Date.now();
                    });
                });
              });
          });
        });
    });
  });

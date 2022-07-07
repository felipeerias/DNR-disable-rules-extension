/*
var manifest = chrome.runtime.getManifest();
var ruleResources = {};
for (resource of manifest.declarative_net_request.rule_resources) {
  ruleResources[resource.id] = resource;
}

chrome.declarativeNetRequest.getEnabledRulesets().then(
  enabledRulesets => {
    for (rulesetId of enabledRulesets) {
      let ruleset = ruleResources[ rulesetId ];
      const rulesetUrl = chrome.runtime.getURL(ruleset.path);
      fetch(rulesetUrl).then(
        response => response.json().then(
          json => {
            for (rule of json)
              console.log( rulesetid + ' : ' + JSON.stringify(rule) );
          }
        )
      ).bind(null, rulesetId);
    }
  }
);
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
        { rulesetId: "fat_easylist_dnr_0", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_1", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_2", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_3", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_4", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_5", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_6", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_7", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_8", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
        { rulesetId: "fat_easylist_dnr_9", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
      ]
    }, () => {
      let t1 = Date.now();

      chrome.declarativeNetRequest.getAvailableStaticRuleCount(
        (count) => {
          let simple_count = (initial_count - count);
          console.error("Enabled " + simple_count + " static rules in " + (t1 - t0) + " msecs, " + count + "rules available");

          chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: [
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
            enableRulesetIds: [
            ]
          }, () => {
            chrome.declarativeNetRequest.getAvailableStaticRuleCount(
              (count) => {
                let second_count = count;
                console.error("Disabled rulesets, now there are " + count + "rules available");

                console.error("Enabling rulesets, disable rules 1-20 again");

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
                  disableRules: [
                    { rulesetId: "fat_easylist_dnr_0", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_1", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_2", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_3", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_4", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_5", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_6", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_7", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_8", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                    { rulesetId: "fat_easylist_dnr_9", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                  ]
                }, () => {
                  let t3 = Date.now();

                  chrome.declarativeNetRequest.getAvailableStaticRuleCount(
                    (count) => {
                      let fat_count = (second_count - count);
                      console.error("Enabled " + fat_count + " static rules in " + (t3 - t2) + " msecs, " + count + " rules available");

                      console.error("Enabling rulesets, now disable rules 21-40");

                      let t4 = Date.now();

                      chrome.declarativeNetRequest.updateEnabledRulesets({
                        disableRulesetIds: [],
                        enableRulesetIds: [
                          // "fat_easylist_dnr_0",
                          // "fat_easylist_dnr_1",
                          // "fat_easylist_dnr_2",
                          // "fat_easylist_dnr_3",
                          // "fat_easylist_dnr_4",
                          // "fat_easylist_dnr_5",
                          // "fat_easylist_dnr_6",
                          // "fat_easylist_dnr_7",
                          // "fat_easylist_dnr_8",
                          "fat_easylist_dnr_9"
                        ],
                        disableRules: [
                          { rulesetId: "fat_easylist_dnr_0", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_1", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_2", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_3", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_4", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_5", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_6", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_7", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_8", disableRulesIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
                          { rulesetId: "fat_easylist_dnr_9", disableRulesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                        ]
                      }, () => {
                        let t5 = Date.now();

                        chrome.declarativeNetRequest.getAvailableStaticRuleCount(
                          (count) => {
                            console.error("Disabled static rules in " + (t5 - t4) + " msecs, " + count + " rules available");
                          });
                      });
                    });
                });
              });
          });
        });
    });
  });

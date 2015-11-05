module.exports = {
  'Demo test Google': function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nodejs')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]').pause(1000)
      .assert.attributeContains("body", "class", "srp")
      .end();
  }
};
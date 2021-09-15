describe('Teste E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a title', async () => {
    await expect(element(by.id('text:todo'))).toBeVisible();
  });

  it('check register a new skill', async () => {
    const inputNewSkill = await element(by.id('input:newSkill'));
    const buttonAdd = await element(by.id('button:add'));
    const outside = await element(by.id('text:todo'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');
    await buttonAdd.tap();
    await outside.tap();

    await expect(element(by.id('flatlist:skills'))).toBeVisible();
  });

  it('check if the theme color is changed with a click', async () => {
    const inputNewSkill = await element(by.id('input:newSkill'));
    const buttonAdd = await element(by.id('button:add'));
    const buttonSwap = await element(by.id('button:swap'));
    const outside = await element(by.id('text:todo'));
    
    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');
    await buttonAdd.tap();
    await outside.tap();
    await buttonSwap.tap();
    await outside.tap();

    await inputNewSkill.tap();
    await inputNewSkill.typeText('Typescript');
    await buttonAdd.tap();
    await outside.tap();

    await inputNewSkill.tap();
    await inputNewSkill.typeText('Teste E2E');
    await buttonAdd.tap();
    await outside.tap();
    await buttonSwap.tap();

    await inputNewSkill.tap();
    await inputNewSkill.typeText('Detox');
    await buttonAdd.tap();
    await outside.tap();
    
  });

});

const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  // await page.goto('https://www.google.com/');
  // await page.type('input.gLFyf.gsfi', 'Dev1 URL ');
  // await percySnapshot('Dev1');

  // await page.goto('https://www.google.com/');
  // await page.type('input.gLFyf.gsfi', 'Dev2 URL');
  // await percySnapshot('Dev2');


  // await page.goto('https://www.google.com/');
  // await page.type('input.gLFyf.gsfi', 'Dev3 URL5 ');
  // await percySnapshot('Dev3');

  // await page.goto('https://www.google.com/');
  // await page.type('input.gLFyf.gsfi', 'Dev4 URL6');
  // await percySnapshot('Dev4');  




  // await page.goto('http://b2b.spplus.com.au/');
  // await percySnapshot('SPP');


// UAT with UAT with BTOB
//   // await page.goto('http://uat.spplus.com.au/lyt/');
//   // await percySnapshot('SPPuat');
// await page.goto('http://b2b.spplus.com.au/');
//   await percySnapshot('SPPuat');

//DEVUAT
// await page.goto('http://dev1.spplus.com.au/');
// await percySnapshot('DevUAT');
// await page.goto('http://uat.spplus.com.au/lyt/');
//   await percySnapshot('DevUAT');



  //didax DEVQA

  // await page.goto('https://m2dev.didax.com/default/');
  // await percySnapshot('DevQA');
  // await page.goto('https://m2qa.didax.com/default/');
  // await percySnapshot('DevQA');

  // await page.goto('https://m2dev.didax.com/default/kathy-richardson.html');
  // await percySnapshot('DevQA1');
  // await page.goto('https://m2qa.didax.com/default/kathy-richardson.html');
  // await percySnapshot('DevQA1');

  //MyEvaluations
//  await page.goto('http://v3dev.myevaluations.com/');
//   await percySnapshot('V2V3');
  // await page.goto('http://dev.myevaluations.com/');
  // await percySnapshot('V2V3');


  ///Attken
await page.goto('C:\Mahesh\AttkenHome.pdf');
 await percySnapshot('ATTken');
// await page.goto('http://dev.myevaluations.com/');
// await percySnapshot('V2V3');






  // await page.goto('https://www.digitalocean.com/community/tutorials/getting-started-with-visual-testing-in-5-minutes#step-2-%E2%80%94-running-visual-tests');
  // //await page.type('input.gLFyf.gsfi', 'A really important todo');
  // await percySnapshot('Base1');
});



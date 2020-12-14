$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/CucumberBackgroundFeature/src/main/java/Features/orders2.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon order page",
  "description": "",
  "id": "amazon-order-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "check previous order details",
  "description": "",
  "id": "amazon-order-page;check-previous-order-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user navigates to orders page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderSteps.user_is_on_Amazon_login_page()"
});
formatter.result({
  "duration": 216246842032,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.user_enters_username()"
});
formatter.result({
  "duration": 39098275678,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.user_enters_password()"
});
formatter.result({
  "duration": 874796645,
  "status": "passed"
});
formatter.match({
  "location": "OrderSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 301154802960,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RIYAZ\u0027, ip: \u0027192.168.43.50\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\AM\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:51256}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6e6129819a2bea12161aec69f8e876cd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefinitions.OrderSteps.user_clicks_on_login_button(OrderSteps.java:37)\r\n\tat ✽.And user clicks on login button(D:/Automation/CucumberBackgroundFeature/src/main/java/Features/orders2.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrderSteps.user_navigates_to_orders_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSteps.closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});
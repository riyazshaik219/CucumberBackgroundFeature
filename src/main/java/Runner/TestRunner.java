package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Automation\\CucumberBackgroundFeature\\src\\main\\java\\Features\\orders2.feature"
		,glue= {"StepDefinitions"},
		format={"html:target/cucumber-html-report","json:target/cucumber-reports/cucumber.json","junit:target/cucumber-reports/cucumber.xml"},
		monochrome=true,
		dryRun=false,
		strict=true
		)
public class TestRunner {

}

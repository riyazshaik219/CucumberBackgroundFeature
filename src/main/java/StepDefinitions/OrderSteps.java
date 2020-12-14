package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderSteps {
WebDriver driver;
	

	@Given("^user is on Amazon login page$")
	public void user_is_on_Amazon_login_page() throws InterruptedException  {
		driver = new ChromeDriver();
	driver.get("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	System.out.println(driver.getTitle());
	Thread.sleep(5000);
	
	}

	@When("^user enters username$")
	public void user_enters_username()  {
	    driver.findElement(By.name("email")).sendKeys("riyazu.shaik@gmail.com");
	    driver.findElement(By.id("continue")).click();
	}

	@When("^user enters password$")
	public void user_enters_password() {
	    driver.findElement(By.name("password")).sendKeys("Testing@123");
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	    driver.findElement(By.cssSelector("#signInSubmit")).click();
	}

	@Then("^user navigates to orders page$")
	public void user_navigates_to_orders_page() throws InterruptedException  {
		Thread.sleep(30000);
		driver.findElement(By.xpath("//*[@id='nav-link-accountList']/span[2]/span")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("\r\n" + 
				"//*[@id='nav_prefetch_yourorders']/span\r\n" + 
				"")).click();
	    
	}
	@Then("^closes the browser$")
	public void closes_the_browser()  {
		driver.quit();
	   
	}

	/*@When("^user clicks on  previous orders link$")
	public void user_clicks_on_previous_orders_link()  {
	   
	}

	@Then("^user checks previous order details$")
	public void user_checks_previous_order_details()  {
	    
	}

	@When("^user clicks on open orders link$")
	public void user_clicks_on_open_orders_link() {
	  
	}

	@Then("^user checks open order details$")
	public void user_checks_open_order_details()  {
	    
	}

	@When("^user clicks on cancelled order link$")
	public void user_clicks_on_cancelled_order_link() {
	    
	}

	@Then("^user checks cancelled order details$")
	public void user_checks_cancelled_order_details()  {
	   
	}
*/

}

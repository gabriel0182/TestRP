///  <reference types="cypress"/>

class multiple {
  HomePage() {
    cy.visit("http://automationpractice.com/index.php");
    return this;
  }

  WoMens() {
    const wom = cy.xpath("//a[@class='sf-with-ul'][contains(text(),'Women')]");
    wom.click();
    return this;
  }

  ToPs() {
    const Top = cy.xpath(
      "//div[@id='subcategories']//li[1]//div[1]//a[1]//img[1]"
    );
    Top.click();
    return this;
  }

  Blouses() {
    const blou = cy.xpath(
      "//div[@id='subcategories']//li[2]//div[1]//a[1]//img[1]"
    );
    blou.click();
    blou.wait(2000)
    return this;
  }

  Cart() {
    const add = cy.xpath(
      "//a[@class='product_img_link']//img[@class='replace-2x img-responsive']"
    );
    add.trigger('mousedown', {which: 0}).xpath("//span[contains(text(),'Add to cart')]").click({timeout: 4000});
    return this;
  }

  Alert() {
   const pop = cy.xpath("//div[@id='layer_cart']//div[@class='clearfix']")
    pop.xpath("/html[1]/body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[2]/div[4]/span[1]/span[1]")
    pop.click();
    return this;
 }
}

export default multiple;

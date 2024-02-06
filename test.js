function waitForElement(xpath, callback, maxAttempts = 10, currentAttempt = 0) {
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (element) {
        callback(element);
    } else if (currentAttempt < maxAttempts) {
        setTimeout(function() {
            waitForElement(xpath, callback, maxAttempts, currentAttempt + 1);
        }, 100);
    } else {
        console.log("Element not found after " + maxAttempts + " attempts.");
    }
}


function changeInnerHTML(xpath, new_value) {
    waitForElement(xpath, function(element) {
        element.innerHTML = new_value
    });
}


function removeElement(xpath) {
    waitForElement(xpath, function(element) {
        element.remove()
    });
}

document.addEventListener("DOMContentLoaded", function() {

    changeInnerHTML("//th[contains(text(),'Declarative: Agent Setup')]", "Test environment setup")
    changeInnerHTML("//th[contains(text(),'Checkout')]", "Prepare setup")
    changeInnerHTML("//th[contains(text(),'Initial test stage')]", "Test validation")
    changeInnerHTML("//th[contains(text(),'Declarative: Post Actions')]", "Clean up")
    changeInnerHTML('//*[@id="pipeline-box"]/h2', "Run a pipeline")
    changeInnerHTML('//*[@id="breadcrumbBar"]', '<ol class="jenkins-breadcrumbs__list" id="breadcrumbs"><li class="jenkins-breadcrumbs__list-item">R-PHY Test Suite</li></ol>')
    changeInnerHTML('//*[@id="pipeline-box"]/div/div/table/tbody[1]/tr/td[1]/div', 'Change the nam')
    changeInnerHTML('//*[@id="tasks"]/div[3]/span/a/span[2]', 'Run the test')

    removeElement('//*[@id="tasks"]/div[2]')
    removeElement('//*[@id="tasks"]/div[3]')
    removeElement('//*[@id="tasks"]/div[3]')
    removeElement('//*[@id="tasks"]/div[4]')
    removeElement('//*[@id="buildHistory"]/div[1]')
    removeElement('//*[@id="buildHistory"]/div[2]')

});

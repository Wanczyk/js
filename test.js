function waitForElementByXpath(xpath, callback, maxAttempts = 10, currentAttempt = 0) {
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (element) {
        callback(element);
    } else if (currentAttempt < maxAttempts) {
        setTimeout(function() {
            waitForElementByXpath(xpath, callback, maxAttempts, currentAttempt + 1);
        }, 100);
    } else {
        console.log("Element not found after " + maxAttempts + " attempts.");
    }
}

function waitForElementById(id, callback, maxAttempts = 10, currentAttempt = 0) {
    var element = document.getElementById(id);

    if (element) {
        callback(element);
    } else if (currentAttempt < maxAttempts) {
        setTimeout(function() {
            waitForElementById(xpath, callback, maxAttempts, currentAttempt + 1);
        }, 100);
    } else {
        console.log("Element not found after " + maxAttempts + " attempts.");
    }
}


function changeInnerHTMLbyXpath(xpath, new_value) {
    waitForElementByXpath(xpath, function(element) {
        element.innerHTML = new_value
    });
}


function changeInnerHTMLbyId(id, new_value) {
    waitForElementById(id, function(element) {
        element.innerHTML = new_value
    });
}


function removeElement(xpath) {
    waitForElementByXpath(xpath, function(element) {
        element.remove()
    });
}

document.addEventListener("DOMContentLoaded", function() {
    
    changeInnerHTMLbyXpath("//th[contains(text(),'Declarative: Agent Setup')]", "Test environment setup")
    changeInnerHTMLbyXpath("//th[contains(text(),'Checkout')]", "Prepare setup")
    changeInnerHTMLbyXpath("//th[contains(text(),'Initial test stage')]", "Test validation")
    changeInnerHTMLbyXpath("//th[contains(text(),'Declarative: Post Actions')]", "Clean up")
    changeInnerHTMLbyId("breadcrumbBar", '<ol class="jenkins-breadcrumbs__list" id="breadcrumbs"><li class="jenkins-breadcrumbs__list-item"><a href="/job/RTS/job/main/">R-PHY Test Suite</a></li></ol>')

    changeInnerHTMLbyXpath('//*[@id="pipeline-box"]/h2[contains(text(), "Stage View")]', "Run a pipeline")
    changeInnerHTMLbyXpath('//*[@id="pipeline-box"]/div/div/table/tbody[1]/tr/td[1]/div[contains(text(), "Average stage times:")]', 'Change the name')
    changeInnerHTMLbyXpath("//div[contains(@class, 'task') and contains(.//span, 'Build with Parameters')]//span[@class='task-link-text']", 'Run the test')
    changeInnerHTMLbyXpath("//div[contains(@class, 'task') and contains(.//span, 'Gitea')]//span[@class='task-link-text']", 'Config repo')

    removeElement("//div[contains(@class, 'task') and contains(.//span, 'Changes')]")
    removeElement("//div[contains(@class, 'task') and contains(.//span, 'View Configuration')]")
    removeElement("//div[contains(@class, 'task') and contains(.//span, 'Full Stage View')]")
    removeElement("//div[contains(@class, 'task') and contains(.//span, 'Pipeline Syntax')]")
    removeElement("//div[contains(@class, 'row') and contains(.//span, 'Build History')]")
    removeElement("//div[contains(@class, 'row') and contains(.//span, 'Atom feed for all')]")
    
    removeElement("//h1[contains(@class, 'job-index-headline page-headline') and contains(text(), 'Pipeline main')]")
    removeElement("//div[@id='main-panel']/text()")

    removeElement("//div[@id='main-panel']//table[contains(.//text(), 'Last Successful Artifacts')]")

});

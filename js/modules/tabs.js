function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, classActiv) {
    /*Tabs*/
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {

        tabsContent.forEach(item => {
            item.classList.add(`hide`);
            item.classList.remove(`show`, `fade`);
        });

        tabs.forEach(item => {
            item.classList.remove(classActiv);
        });

    }
    hideTabsContent();

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add(`show`, `fade`);
        tabsContent[i].classList.remove(`hide`);
        tabs[i].classList.add(`tabheader__item_active`);
    }
    showTabsContent();

    tabsParent.addEventListener(`click`, (e) => {
        const target = e.target;
        
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(index);
                }
            });
        }
    });

    hideTabsContent();
    showTabsContent();
}

export default tabs;
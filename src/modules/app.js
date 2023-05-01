import {
    fetchData,
    url
} from "./api";
import * as module from "./module";

const app = () => {
    const addEventOnElements = function (elements, eventType, callback) {
        for (const element of elements) element.addEventListener(eventType, callback);

    }

    const searchView = document.querySelector("[data-search-view]");
    const searchTogglers = document.querySelectorAll("[data-search-toggler]");

    const toggleSearch = () => searchView.classList.toggle("active");
    addEventOnElements(searchTogglers, "click", toggleSearch);

};

export default app;
import fetch from 'node-fetch';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export const getLatestStories = async () => {
    const response = await fetch('https://time.com');
    const html = await response.text();

    /* I attempted to use regular expressions for parsing, but unfortunately, it did not yield the desired results. */
    const dom = new JSDOM(html);

    /* dom.window.document, contains

        <li class="tout__list-item">
          <a class="tout__list-item-link" href="/6302562/stella-mccartney-sustainability-interview-lvmh/">
            <h3 class="tout__list-item-title">Stella McCartney's Sustainability Interview with LVMH</h3>
          </a>
        </li>
    */
    const stories = Array.from(dom.window.document.querySelectorAll('li.tout__list-item'));

    const validStories = stories.filter((story) => story.querySelector('h3.tout__list-item-title'));
    return validStories.slice(0, 6).map((story) => {
        const title = story.querySelector('h3.tout__list-item-title').textContent;
        const link = story.querySelector('a.tout__list-item-link').getAttribute('href');
        return {
            title,
            link: `https://time.com${link}`,
        };
    });
};
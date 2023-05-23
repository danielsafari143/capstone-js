/**
 * @jest-environment jsdom
 */
import counterItem from './modules/counterItems.js';
import fakeData from './modules/fakeData.js';

beforeEach(() => {
  document.body.innerHTML = `<header>
                                <div class="logo">Logo</div>
                                <nav>
                                    <ul>
                                        <li class="menu-item active">Tv Shows <p id="counterItem">(59)</p></li>
                                        <li class="menu-item">Schedule</li>
                                        <li class="menu-item">Episodes</li>
                                        <li class="menu-item">People</li>
                                    </ul>
                                </nav>
                            </header>
                            <main class="tv-show-list">
                                <div class="ListItems">
                                    <ul class="items" id="items"></ul>
                                </div>
                                <p class="comment">
                                    <!-- Comments -->
                                </p>
                            </main>
                            <footer class="foot">
                                <p>Made by safari Hamuli and tamoor saeed under MIT lincence</p>
                            </footer>`;
});

describe('Add tests for items counter', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(fakeData),
  }));

  it('passes if items are 10  ', async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    const responseFromApi = await response.json();
    const counterElement = document.getElementById('counterItem');

    const data = await counterItem(responseFromApi, counterElement);
    console.log(counterElement);

    expect(data.length).toEqual(10);
  });

  it('Updates the html counter element  ', async () => {
    const counterElement = document.getElementById('counterItem');
    expect(counterElement.innerHTML).toEqual('(10)');
  });

  it('fails if not an array', async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    const responseFromApi = await response;
    const counterElement = document.getElementById('counterItem');

    const data = await counterItem(responseFromApi, counterElement);
    console.log(counterElement);

    await expect(data).toBe(0);
  });
});